import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getSearchCountries } from '@/api';
import SubLayout from '@/components/SubLayout';
import SearchBar from '@/components/SearchBar';
import CountryList from '@/components/CountryList';

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
    <>
      <SearchBar item={search} />
      <CountryList countries={countries} />
    </>
  );
}

export default Search;

Search.Layout = SubLayout;
