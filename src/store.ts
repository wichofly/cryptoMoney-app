import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { CryptoCurrency, CryptoPrice, Pair } from './interfaces/interface';
import { apiCryptos, fetchCurrentCrypto } from './service/CryptoService';

interface CryptoStore {
  cryptocurrencies: CryptoCurrency[];
  result: CryptoPrice;
  fetchCryptos: () => Promise<void>;
  fetchData: (pair: Pair) => Promise<void>;
}

export const useCryptoStore = create<CryptoStore>()(
  devtools((set) => ({
    cryptocurrencies: [],
    result: {} as CryptoPrice,

    fetchCryptos: async () => {
      const cryptocurrencies = await apiCryptos();
      set(() => ({
        cryptocurrencies,
      }));
    },

    fetchData: async (pair) => {
      const result = await fetchCurrentCrypto(pair);

      set(() => ({
        result,
      }));
    },
  }))
);
