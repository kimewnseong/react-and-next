import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getSearchCountries } from '../api';
import SearchBar from '../components/SearchBar';
import CountryList from '../components/CountryList';
import style from './Search.module.css';

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

  return (
    <div className={style.container}>
      <SearchBar item={query} />
      <div>
        <b>{query} 검색결과</b>
      </div>
      <CountryList countries={countries} />
    </div>
  );
}

export default Search;
