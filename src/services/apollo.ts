import { VueApolloClient } from '@/models/apollo';

class ApolloService {
  setClient(client: VueApolloClient) {
    this.apolloClient = client;
  }

  private apolloClient?: VueApolloClient;

  public getApolloClient(): VueApolloClient {
    if (!this.apolloClient) {
      throw new Error('Apollo client not started');
    }

    return this.apolloClient;
  }
}

const instance = new ApolloService();

export default instance;
