import './App.css';
import Card from '../components/Card/Card';
import Footer from '../components/Footer/Footer';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

function App() {

  const client = new QueryClient();

  return (
    <main className="App">
      <QueryClientProvider client={client}>
        <Card></Card>
      </QueryClientProvider>
    <Footer></Footer>
    </main>
  );
}

export default App;
