import { ChangeEvent, useState } from 'react';
import { currencies } from '../data/data';
import { useCryptoStore } from '../store';
import { Pair } from '../interfaces/interface';

const CryptoSearchForm = () => {
  const cryptocurrencies = useCryptoStore((state) => state.cryptocurrencies);
  const [pair, setPair] = useState<Pair>({
    currency: '',
    cryptocurrency: '',
  });

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setPair({ ...pair, [e.target.name]: e.target.value });
  };

  return (
    <form className="form">
      <div className="field">
        <label htmlFor="currency">Currency</label>
        <select name="currency" id="currency" onChange={handleChange}>
          <option value="">-- Select -- </option>
          {currencies.map((currency) => (
            <option value={currency.code} key={currency.code}>
              {currency.name}
            </option>
          ))}
        </select>
      </div>

      <div className="field">
        <label htmlFor="cryptocurrency">Cryptocurrency</label>
        <select
          name="cryptocurrency"
          id="cryptocurrency"
          onChange={handleChange}
        >
          <option value="">-- Select -- </option>
          {cryptocurrencies.map((crypto) => (
            <option key={crypto.CoinInfo.Name} value={crypto.CoinInfo.Name}>
              {crypto.CoinInfo.FullName}
            </option>
          ))}
        </select>
      </div>

      <input type="submit" value="quote" />
    </form>
  );
};

export default CryptoSearchForm;
