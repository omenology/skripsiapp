import {useEffect, useState} from 'react';

import {axios} from './conection';

export default (url) => {
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = () => {
      axios
        .get(url)
        .then((response) => {
          setData(response.data.data);
        })
        .finally(() => {
          setLoading(false);
        })
        .catch((err) => {
          setLoading(false);
          console.log(err, 'kkk');
          setError('somethings error');
        });
    };
    fetchData();
  }, [url]);

  return [data, loading, error];
};
