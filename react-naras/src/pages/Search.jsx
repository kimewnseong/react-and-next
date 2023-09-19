import { useSearchParams } from 'react-router-dom';

function Search() {
  const [searchParams] = useSearchParams();

  return <h1>Search {searchParams.get('item')}</h1>;
}

export default Search;
