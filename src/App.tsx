import { useEffect } from 'react';
import CryptoSearchForm from './components/CryptoSearchForm';
import { useCryptoStore } from './store';

function App() {
  const getCryptos = useCryptoStore((state) => state.fetchCryptos);

  useEffect(() => {
    getCryptos();
  }, [getCryptos]);

  return (
    <>
      <div className="container">
        <h1 className="app-title">
          <span>Cryptocurrencies</span> Quoter.
        </h1>
        <div className="content">
          <CryptoSearchForm />
        </div>
      </div>
    </>
  );
}

export default App;
