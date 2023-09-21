import { useRouter } from 'next/router';
import { getCountry } from '@/api';
import SubLayout from '@/components/SubLayout';

function Country({ country }) {
  const router = useRouter();

  return <div>Country : {country.officialName}</div>;
}

export default Country;

Country.Layout = SubLayout;

export const getServerSideProps = async (context) => {
  const { code } = context.params;
  let country = null;

  if (code) {
    country = await getCountry(code);
  }

  return {
    props: {
      country,
    },
  };
};
