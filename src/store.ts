import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { CryptoCurrency } from './interfaces/interface';
import { apiCryptos } from './service/CryptoService';

interface CryptoStore {
  cryptocurrencies: CryptoCurrency[];
  fetchCryptos: () => Promise<void>;
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
  }))
);
