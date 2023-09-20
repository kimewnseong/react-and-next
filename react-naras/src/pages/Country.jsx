import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCountry } from '../api';

function Country() {
  const { code } = useParams();
  const [country, setCountry] = useState(null);

  const setInitData = async () => {
    const data = await getCountry(code);
    setCountry(data);
  };

  useEffect(() => {
    setInitData();
  }, [code]);

  return <h1>Country</h1>;
}

export default Country;
