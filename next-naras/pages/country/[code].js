import { useRouter } from 'next/router';
import { getCountry } from '@/api';
import SubLayout from '@/components/SubLayout';

function Country({ country }) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  if (!country) {
    return <div>존재하지 않는 국가입니다.</div>;
  }

  return (
    <div>
      {country.commonName} : {country.officialName}
    </div>
  );
}

export default Country;

Country.Layout = SubLayout;

// 동적 경로를 갖는 페이지에 추가
export const getStaticPaths = async () => {
  return {
    paths: [{ params: { code: 'KOR' } }, { params: { code: 'ABW' } }],
    fallback: true,
    // fallback : 위의 경로에 해당하지 않는 옵션이 올 때 처리 할 내용
    // fallback: false => 404 리턴

    // fallback: "blocking" => 존재하지 않는 경로 요청 시, SSR처럼 해당 페이지 실시간 생성 후 서버에 저장.(생성동안은 로딩..)
    // 다음 번에 다시 요청 시, SSG처럼 동작

    // fallback: true => 데이터 없는 페이지 먼저 보여준 후에
    // prop계산을 마치고 데이터가 있는 페이지 보여줌
  };
};

export const getStaticProps = async (context) => {
  const { code } = context.params;
  let country = null;

  if (code) {
    country = await getCountry(code);
  }

  return {
    props: {
      country,
    },
    // ISR 방식을 위한 속성
    revalidate: 3,
  };
};
