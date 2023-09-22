import Head from 'next/head';
import { getAllCountries } from '@/api';
import SearchBar from '@/components/SearchBar';
import CountryList from '@/components/CountryList';

export default function Home({ countries }) {
  return (
    <>
      <Head>
        <title>NARAS</title>
        <meta property="og:image" content="/thumbnail.png" />
        <meta property="og:title" content="NARAS" />
        <meta
          property="og:description"
          content="전 세계 국가들의 정보를 간략하게 보여주는 사이트"
        />
      </Head>
      <SearchBar />
      <CountryList countries={countries} />
    </>
  );
}

export const getServerSideProps = async () => {
  // SSR을 위해서 서버측에서 페이지 컴포넌트에 전달할 데이터를 설정하는 함수 ( 서버에서만 실행됨 => 브라우저 환경에서 사용하는 객체 및 함수 사용 시 에러발생 )
  // 반드시 객체를 반환해야하고, 객체 안에는 props라는 프로퍼티가 필요
  // 이 프로퍼티 값은 무조건 객체여야함
  const countries = await getAllCountries();

  return {
    props: {
      countries,
    },
  };
};
