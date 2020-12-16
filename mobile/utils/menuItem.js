import {useEffect, useState} from 'react';

import {axios} from './conection';

export default (url) => {
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get('/info/menu-item')
      .then((response) => {
        setData(response.data.data);
      })
      .catch((err) => {
        console.log(err, 'kkk');
        setError('somethings error');
      });
  });

  return [data, error];
};
