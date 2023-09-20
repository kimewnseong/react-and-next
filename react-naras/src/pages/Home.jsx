import { useEffect, useState } from 'react';
import { getAllCountries } from '../api';
import style from './Home.module.css';

import SearchBar from '../components/SearchBar';
import CountryList from '../components/CountryList';

function Home() {
  const [countries, setCountries] = useState([]);

  const setInitData = async () => {
    const data = await getAllCountries();
    setCountries(data);
  };
  useEffect(() => {
    setInitData();
  }, []);

  return (
    <div className={style.container}>
      <SearchBar />
      <CountryList countries={countries} />
    </div>
  );
}

export default Home;
