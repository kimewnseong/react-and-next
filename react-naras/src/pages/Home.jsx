import { useEffect, useState } from 'react';
import { getAllCountries } from '../api';

function Home() {
  const [countries, setCountries] = useState([]);

  const setInitData = async () => {
    const data = await getAllCountries();
    setCountries(data);
  };
  useEffect(() => {
    setInitData();
  }, []);

  return <h1>Home</h1>;
}

export default Home;
