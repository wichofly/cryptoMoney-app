import axios from 'axios';
import { CryptoCurrenciesResponseSchema } from '../schema/crypto-schema';
import { Pair } from '../interfaces/interface';

export const apiCryptos = async () => {
  const url =
    'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';
  const {
    data: { Data },
  } = await axios(url);
  console.log(Data);
  const result = CryptoCurrenciesResponseSchema.safeParse(Data);

  if (result.success) {
    return result.data;
  }
};

export const fetchCurrentCrypto = async (pair: Pair) => {
  const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${pair.cryptocurrency}&tsyms=${pair.currency}`;
  const {
    data: { DISPLAY },
  } = await axios(url);
  console.log(DISPLAY[pair.cryptocurrency][pair.currency]);
};
