import React, { useState, useEffect } from 'react';
import './Quote.css';

const Quote = () => {
  const [quote, setQuote] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  const apiKey = 'P8YyGrNxXSFlHrt+HGp0Ng==miFTtktFniG3yjaR';
  const category = 'future';

  useEffect(() => {
    fetch(`https://api.api-ninjas.com/v1/quotes?category=${category}`, {
      method: 'GET',
      headers: {
        'X-Api-Key': apiKey,
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.length > 0) {
          setQuote(data[0]);
          setLoading(false);
        } else {
          setError('No quotes found for the specified category.');
          setLoading(false);
        }
      })
      .catch((error) => {
        setError(`An error occurred while fetching the quote.\n${error}`);
        setLoading(false);
      });
  }, [category]);

  return (
    <div className="quote-section">
      <h2>Quote of the Day</h2>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {
        !loading && !error
        && (
          <>
            <p>{quote.quote}</p>
            <p className="f-e">{`By: ${quote.author}`}</p>
          </>
        )
      }
    </div>
  );
};

export default Quote;
