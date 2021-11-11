/* eslint-disable */
import Vue from 'vue';
import VueApollo from 'vue-apollo';
import { createApolloClient, restartWebsockets } from 'vue-cli-plugin-apollo/graphql-client';
import apolloSvc from '@/services/apollo';
import { VueApolloClient, VueApolloClients } from '@/models/apollo';

// Install the vue plugin
Vue.use(VueApollo);

// Name of the localStorage item
const AUTH_TOKEN = 'apollo-token';

// Http endpoint
const httpEndpoint = process.env.VUE_APP_GRAPHQL_HTTP || 'https://countries.trevorblades.com/';

// Config
const defaultOptions = {
  // You can use `https` for secure connection (recommended in production)
  httpEndpoint,
  // LocalStorage token
  tokenName: AUTH_TOKEN,
  // Enable Automatic Query persisting with Apollo Engine
  persisting: false,
  // Use websockets for everything (no HTTP)
  // You need to pass a `wsEndpoint` for this to work
  websocketsOnly: false,
  // Is being rendered on the server?
  ssr: false,

  // Override default apollo link
  // note: don't override httpLink here, specify httpLink options in the
  // httpLinkOptions property of defaultOptions.
  // link: myLink

  // Override default cache
  // cache: myCache

  // Override the way the Authorization header is set
  // getAuth: (tokenName) => ...

  // Additional ApolloClient options
  // apollo: { ... }

  // Client local data (see apollo-link-state)
  // clientState: { resolvers: { ... }, defaults: { ... } }
};

// Call this in the Vue app file
export function createProvider(options = {}) {
  // Create apollo client

  const { apolloClient, wsClient } = createApolloClient({
    ...defaultOptions,
    ...options,
  });
  (apolloClient as VueApolloClient).wsClient = wsClient;
  apolloSvc.setClient(apolloClient as VueApolloClient);
  // Create vue apollo provider
  const apolloProvider = new VueApollo({
    defaultClient: apolloClient,
    defaultOptions: {
      $query: {
        // fetchPolicy: 'cache-and-network',
      },
    },
    errorHandler(error: any) {
      // eslint-disable-next-line no-console
      console.log('%cError', 'background: red; color: white; padding: 2px 4px; border-radius: 3px; font-weight: bold;', error.message);
    },
  });

  return apolloProvider;
}

export async function onLogin(clients: VueApolloClients, token: string) {
  if (typeof localStorage !== 'undefined' && token) {
    localStorage.setItem(AUTH_TOKEN, token);
  }
  resetCacheAndSockets(clients);
}

async function resetCacheAndSockets(clients: VueApolloClients) {
  for (const client of Object.keys(clients)) {
    if (clients[client].wsClient) {
      restartWebsockets(clients[client].wsClient);
    }
    try {
      await clients[client].resetStore();
    } catch (e) {
      /* tslint:disable-next-line:no-console */
      console.log(
        '%cError on cache reset (logout)',
        'color: orange;',
        e.message
      );
    }
  }
}

// Manually call this when user log out
export async function onLogout(apolloClient: VueApolloClient) {
  if (typeof localStorage !== 'undefined') {
    localStorage.removeItem(AUTH_TOKEN);
  }
  if (apolloClient.wsClient) restartWebsockets(apolloClient.wsClient);
  try {
    await apolloClient.resetStore();
  } catch (e: any) {
    // eslint-disable-next-line no-console
    console.log('%cError on cache reset (logout)', 'color: orange;', e.message);
  }
}
