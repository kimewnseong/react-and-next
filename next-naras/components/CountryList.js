import CountryItem from './CountryItem';
import style from './CountryList.module.css';

function CountryList({ countries }) {
  if (!countries.length) {
    return <div>검색 결과가 없습니다.</div>;
  }

  return (
    <div className={style.container}>
      {countries.map((country) => (
        <CountryItem key={country.code} {...country} />
      ))}
    </div>
  );
}

export default CountryList;

CountryList.defaultProps = {
  countries: [],
};
