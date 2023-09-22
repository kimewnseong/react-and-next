import Head from 'next/head';
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
      <Head>
        <title>NARAS 검색결과</title>
        <meta property="og:image" content="/thumbnail.png" />
        <meta property="og:title" content="NARAS 검색결과" />
        <meta
          property="og:description"
          content="전 세계 국가들의 정보를 간략하게 보여주는 사이트"
        />
      </Head>
      <SearchBar item={search} />
      <CountryList countries={countries} />
    </>
  );
}

export default Search;

Search.Layout = SubLayout;
