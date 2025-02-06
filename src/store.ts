import axios from 'axios';
import { create } from 'zustand';
import { CryptoCurrencyResponseSchema } from './schema/crypto-schema';

const apiCryptos = async () => {
  const url =
    'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';
  const {
    data: { Data },
  } = await axios(url);
  console.log(Data);
  const result = CryptoCurrencyResponseSchema.safeParse(Data);
  console.log(result);
};

export const useCryptoStore = create(() => ({
  fetchCryptos: () => {
    apiCryptos();
  },
}));
