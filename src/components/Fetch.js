import { useState, useEffect }  from 'react'

const Fetch = (url) => {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState();

  useEffect(() => {
    setLoading(true);
    fetch(url)
    .then(response => response.json())
    .then(setData)
    .catch(setError)
    .finally(() => setLoading(false));

}, [url])
  
    return {data, error, loading};
}

export default Fetch