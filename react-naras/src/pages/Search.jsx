import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getSearchCountries } from '../api';

function Search() {
  const [countries, setCountries] = useState([]);
  const [searchParams] = useSearchParams();
  const query = searchParams.get('search');

  const setInitData = async () => {
    const data = await getSearchCountries(query);
    setCountries(data);
  };

  useEffect(() => {
    setInitData();
  }, [query]);

  return <h1>Search {searchParams.get('item')}</h1>;
}

export default Search;
