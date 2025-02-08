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
              <p>
                The price is: <span>{result.PRICE}</span>
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CryptoPriceDisplay;
