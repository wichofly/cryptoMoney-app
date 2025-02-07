import axios from 'axios';
import { CryptoCurrenciesResponseSchema } from '../schema/crypto-schema';

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
