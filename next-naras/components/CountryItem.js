import { useRouter } from 'next/router';
import Image from 'next/image';
import style from './CountryItem.module.css';

function CountryItem({
  code,
  commonName,
  flagEmoji,
  flagImg,
  population,
  region,
  capital,
}) {
  const router = useRouter();

  const onClickItem = () => {
    router.push(`/country/${code}`);
  };

  return (
    <div className={style.container} onClick={onClickItem}>
      <div className={style.flag_img}>
        <Image src={flagImg} fill alt="국기 이미지" />
      </div>
      <div className={style.content}>
        <div className={style.name}>
          {flagEmoji} {commonName}
        </div>
        <div>지역 : {region}</div>
        <div>수도 : {capital.join(', ')}</div>
        <div>인구 : {population.toLocaleString()}</div>
      </div>
    </div>
  );
}

export default CountryItem;
