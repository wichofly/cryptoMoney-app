import { useForm } from 'react-hook-form';
import { currencies } from '../data/data';
import { useCryptoStore } from '../store';
import { Pair } from '../interfaces/interface';
import ErrorMessage from './ErrorMessage';

const CryptoSearchForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Pair>();

  const cryptocurrencies = useCryptoStore((state) => state.cryptocurrencies);
  const fetchData = useCryptoStore((state) => state.fetchData);

  const onSubmit = (data: Pair) => {
    fetchData(data);
  };

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      {errors.currency && (
        <ErrorMessage>{errors.currency.message}</ErrorMessage>
      )}

      {errors.cryptocurrency && (
        <ErrorMessage>{errors.cryptocurrency.message}</ErrorMessage>
      )}

      <div className="field">
        <label htmlFor="currency">Currency</label>
        <select
          id="currency"
          {...register('currency', { required: 'Currency is required' })}
        >
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
          id="cryptocurrency"
          {...register('cryptocurrency', {
            required: 'Cryptocurrency is required',
          })}
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
