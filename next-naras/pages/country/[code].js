import { useRouter } from 'next/router';
import SubLayout from '@/components/SubLayout';

function Country() {
  const router = useRouter();
  const { code } = router.query;

  return <div>Country : {code}</div>;
}

export default Country;

Country.Layout = SubLayout;
