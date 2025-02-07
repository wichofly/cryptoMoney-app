import axios from 'axios';
import { create } from 'zustand';
import { CryptoCurrencyResponseSchema } from './schema/crypto-schema';
import { CryptoCurrency } from './interfaces/interface';

interface CryptoStore {
  cryptocurrency: CryptoCurrency[];
  fetchCryptos: () => Promise<void>;
}

const apiCryptos = async () => {
  const url =
    'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';
  const {
    data: { Data },
  } = await axios(url);
  console.log(Data);
  const result = CryptoCurrencyResponseSchema.safeParse(Data);

  if (result.success) {
    return result.data;
  }
};

export const useCryptoStore = create<CryptoStore>((set) => ({
  cryptocurrency: [],

  fetchCryptos: async () => {
    const cryptocurrency = await apiCryptos();

    set(() => ({
      cryptocurrency,
    }));
  },
}));
