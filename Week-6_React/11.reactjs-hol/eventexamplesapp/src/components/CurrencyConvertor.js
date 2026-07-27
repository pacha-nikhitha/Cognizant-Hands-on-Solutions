import React, { useState } from 'react';

const CurrencyConvertor = () => {
  const [inrAmount, setInrAmount] = useState('');
  const [euroAmount, setEuroAmount] = useState('');
  const [conversionResult, setConversionResult] = useState(null);
  const [mode, setMode] = useState('inrToEur'); // 'inrToEur' or 'eurToInr'

  // Exchange rate: 1 Euro = 90 Indian Rupees (approx)
  const EXCHANGE_RATE = 90;

  // Event handler for form submission & button click
  const handleSubmit = (e) => {
    e.preventDefault(); // Synthetic event method to prevent form reload

    if (mode === 'inrToEur') {
      const rupees = parseFloat(inrAmount);
      if (isNaN(rupees) || rupees <= 0) {
        setConversionResult({ error: 'Please enter a valid positive number for Indian Rupees.' });
        return;
      }
      const euros = (rupees / EXCHANGE_RATE).toFixed(2);
      setConversionResult({
        from: `₹${rupees} INR`,
        to: `€${euros} EUR`,
        rate: `1 EUR = ₹${EXCHANGE_RATE} INR`,
        type: 'INR ➡️ EUR'
      });
    } else {
      const euros = parseFloat(euroAmount);
      if (isNaN(euros) || euros <= 0) {
        setConversionResult({ error: 'Please enter a valid positive number for Euros.' });
        return;
      }
      const rupees = (euros * EXCHANGE_RATE).toFixed(2);
      setConversionResult({
        from: `€${euros} EUR`,
        to: `₹${rupees} INR`,
        rate: `1 EUR = ₹${EXCHANGE_RATE} INR`,
        type: 'EUR ➡️ INR'
      });
    }
  };

  return (
    <div className="card event-card full-width-card">
      <div className="card-header">
        <span className="badge">Form &amp; Click Event Handling</span>
        <h2>4. Currency Convertor Component</h2>
      </div>
      <p className="card-description">
        Handles the <code>onClick</code> and <code>onSubmit</code> event (via <code>handleSubmit</code>) to convert currency dynamically.
      </p>

      <div className="mode-toggle">
        <button 
          className={`toggle-btn ${mode === 'inrToEur' ? 'active' : ''}`}
          onClick={() => { setMode('inrToEur'); setConversionResult(null); }}
          type="button"
        >
          🇮🇳 INR to EUR (€)
        </button>
        <button 
          className={`toggle-btn ${mode === 'eurToInr' ? 'active' : ''}`}
          onClick={() => { setMode('eurToInr'); setConversionResult(null); }}
          type="button"
        >
          🇪🇺 EUR to INR (₹)
        </button>
      </div>

      <form onSubmit={handleSubmit} className="currency-form">
        {mode === 'inrToEur' ? (
          <div className="input-group">
            <label htmlFor="inr-input">Enter Amount in Indian Rupees (INR ₹):</label>
            <input 
              type="number"
              id="inr-input"
              className="form-control"
              placeholder="e.g., 900"
              value={inrAmount}
              onChange={(e) => setInrAmount(e.target.value)}
              step="any"
              required
            />
          </div>
        ) : (
          <div className="input-group">
            <label htmlFor="euro-input">Enter Amount in Euros (EUR €):</label>
            <input 
              type="number"
              id="euro-input"
              className="form-control"
              placeholder="e.g., 10"
              value={euroAmount}
              onChange={(e) => setEuroAmount(e.target.value)}
              step="any"
              required
            />
          </div>
        )}

        <button 
          type="submit" 
          className="btn btn-convert"
          id="convert-currency-btn"
        >
          🔀 Convert Currency
        </button>
      </form>

      {conversionResult && (
        <div className="result-container">
          {conversionResult.error ? (
            <div className="alert-box danger-alert">
              <p>{conversionResult.error}</p>
            </div>
          ) : (
            <div className="conversion-card">
              <div className="conversion-main">
                <span className="conversion-from">{conversionResult.from}</span>
                <span className="conversion-arrow">➜</span>
                <span className="conversion-to">{conversionResult.to}</span>
              </div>
              <p className="exchange-rate-info">Exchange Rate: {conversionResult.rate}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default CurrencyConvertor;
