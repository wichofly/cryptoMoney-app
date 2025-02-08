import { useCryptoStore } from '../store';

const CryptoPriceDisplay = () => {
  const result = useCryptoStore((state) => state.result);
  const hasResult = Object.keys(result).length > 0;

  return (
    <div className="result-wrapper">
      {hasResult && (
        <>
          <h2>Quotation</h2>
          <div className="result">
            <img
              src={`https://cryptocompare.com/${result.IMAGEURL}`}
              alt="Crypto Image"
            />
            <div>
              <p>
                The price is: <span>{result.PRICE}</span>
              </p>
              <p>
                THighest price of the day: <span>{result.HIGHDAY}</span>
              </p>
              <p>
                Lowest price of the day: <span>{result.LOWDAY}</span>
              </p>
              <p>
                Last 24 hours variation: <span>{result.CHANGEPCT24HOUR}</span>
              </p>
              <p>
                Last update: <span>{result.LASTUPDATE}</span>
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CryptoPriceDisplay;
