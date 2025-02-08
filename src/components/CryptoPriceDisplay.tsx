import { useCryptoStore } from '../store';

const CryptoPriceDisplay = () => {
  const result = useCryptoStore((state) => state.result);
  const hasResult = Object.keys(result).length > 0;

  return (
    <div>
      {hasResult && (
        <>
          <h2>Quotation</h2>
          <div className="result">
            <div>
              <img
                src={`https://cryptocompare.com/${result.IMAGEURL}`}
                alt="Crypto Image"
              />
              <p>
                The price is: <span>{result.PRICE}</span>
              </p>
              <p>
                The price is: <span>{result.HIGHDAY}</span>
              </p>
              <p>
                The price is: <span>{result.LOWDAY}</span>
              </p>
              <p>
                The price is: <span>{result.CHANGEPCT24HOUR}</span>
              </p>
              <p>
                The price is: <span>{result.LASTUPDATE}</span>
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CryptoPriceDisplay;
