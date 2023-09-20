import CountryItem from './CountryItem';
import style from './CountryList.module.css';

function CountryList({ countries }) {
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
