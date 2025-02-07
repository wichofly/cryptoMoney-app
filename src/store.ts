import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { CryptoCurrency, Pair } from './interfaces/interface';
import { apiCryptos, fetchCurrentCrypto } from './service/CryptoService';

interface CryptoStore {
  cryptocurrencies: CryptoCurrency[];
  fetchCryptos: () => Promise<void>;
  fetchData: (pair: Pair) => Promise<void>;
}

export const useCryptoStore = create<CryptoStore>()(
  devtools((set) => ({
    cryptocurrencies: [],

    fetchCryptos: async () => {
      const cryptocurrencies = await apiCryptos();
      set(() => ({
        cryptocurrencies,
      }));
    },

    fetchData: async (pair) => {
      const result = await fetchCurrentCrypto(pair);
      console.log(result);
    },
  }))
);
