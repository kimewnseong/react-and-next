import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import style from './SearchBar.module.css';

function SearchBar({ item = '' }) {
  const router = useRouter();

  const [search, setSearch] = useState(item || '');

  useEffect(() => {
    setSearch(item);
  }, [item]);

  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      onClickSearch();
    }
  };
  const onClickSearch = () => {
    if (search) {
      router.push(`/search?search=${search}`);
    }
  };

  return (
    <div className={style.container}>
      <input
        placeholder="검색어를 입력하세요."
        value={search}
        onChange={onChangeSearch}
        onKeyDown={onKeyDown}
      />
      <button onClick={onClickSearch}>검색</button>
    </div>
  );
}

export default SearchBar;
