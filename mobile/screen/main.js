import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';

import Layout from '../components/layout';
import ListArtikel from '../components/listArtikel';

export default (props) => {
  const [page, setPage] = React.useState(1);

  const artikel = useSelector((state) => state.artikel.data);
  const loading = useSelector((state) => state.artikel.loading);
  const title = useSelector((state) => state.display.title);

  useEffect(() => {
    props.getArtikel(page);
  }, [page]);

  const endHandler = () => {
    setPage(page + 1);
    console.log('end handlert');
  };
  return (
    <Layout title={title}>
      <ListArtikel data={artikel} onEndReached={endHandler} loading={loading} />
    </Layout>
  );
};
