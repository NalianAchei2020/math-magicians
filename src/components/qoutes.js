/* eslint-disable import/no-extraneous-dependencies */
import axios from 'axios';
import React, { useEffect, useState } from 'react';

function Qoutes() {
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchQuotes = async () => {
    const category = 'happiness';
    try {
      const response = await axios({
        url: `https://api.api-ninjas.com/v1/quotes?category=${category}`,
        method: 'GET',
        headers: { 'X-Api-Key': 'JIMZKaMLieUwg8xIF54R1w==C0w5bqNgmdl8Ao0c' },
        contentType: 'application/json',
      });
      const data = response.data[0];
      setQuotes(data);
      setLoading(false);
    } catch (err) {
      setError(err.message);
    }
  };
  useEffect(() => {
    fetchQuotes();
  }, [quotes]);
  return (
    <div>
      {loading ? (
        <>
          <div>loading....</div>
          <div>{error}</div>
        </>
      ) : (
        <div className="qoutes">
          <div>
            <span className="name">Quote:</span>
            &nbsp;
            <span>{quotes.quote}</span>
          </div>
          <br />
          <div>
            <span className="name">Author:</span>
            &nbsp;
            <span>{quotes.author}</span>
          </div>
          <br />
          <div>
            <span className="name">Category:</span>
            &nbsp;
            <span>{quotes.category}</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default Qoutes;
