/* eslint-disable import/no-extraneous-dependencies */
import { ApolloClient } from 'apollo-client';
import { SubscriptionClient } from 'subscriptions-transport-ws';
import { InMemoryCache } from 'apollo-cache-inmemory';

export type VueApolloClient = ApolloClient<InMemoryCache> & {
  wsClient: SubscriptionClient;
};

export interface VueApolloClients {
  [key: string]: VueApolloClient;
}
