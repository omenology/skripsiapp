import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import {getArtikelTerbaru} from '../store/actions';

import Layout from '../components/layout';
import ListArtikel from '../components/listArtikel';

export default () => {
  const [page, setPage] = React.useState(1);

  const artikel = useSelector((state) => state.artikel.data);
  const loading = useSelector((state) => state.artikel.loading);

  const dispatch = useDispatch();
  const getArtikel = (page) => dispatch(getArtikelTerbaru(page));

  useEffect(() => {
    getArtikel(page);
  }, [page]);

  const endHandler = () => {
    setPage(page + 1);
    console.log('end handlert');
  };
  return (
    <Layout title="Terbaru">
      <ListArtikel data={artikel} onEndReached={endHandler} loading={loading} />
    </Layout>
  );
};
