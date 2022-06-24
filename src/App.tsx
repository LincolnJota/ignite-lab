import { ApolloProvider } from '@apollo/client';
import { AppRoutes } from './Routes';
import { client } from './lib/apollo';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter />
      <AppRoutes />
    </ApolloProvider>
  );
}

export default App;
