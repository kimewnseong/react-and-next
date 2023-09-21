import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getSearchCountries } from '@/api';
import SubLayout from '@/components/SubLayout';

function Search() {
  const router = useRouter();
  const { search } = router.query;
  const [countries, setCountries] = useState([]);

  const setData = async () => {
    const data = await getSearchCountries(search);
    setCountries(data);
  };

  useEffect(() => {
    if (search) {
      setData();
    }
  }, [search]);

  return (
    <div>
      {countries.map((country) => (
        <div key={country.code}>{country.commonName}</div>
      ))}
    </div>
  );
}

export default Search;

Search.Layout = SubLayout;
