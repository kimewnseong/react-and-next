import { getSearchCountries } from '@/api';
import SubLayout from '@/components/SubLayout';

function Search({ countries }) {
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

export const getServerSideProps = async (context) => {
  // 쿼리
  const { search } = context.query;
  let countries = [];

  if (search) {
    countries = await getSearchCountries(search);
  }

  return {
    props: {
      countries,
    },
  };
};
