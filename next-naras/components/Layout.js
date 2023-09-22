import { useRouter } from 'next/router';
import style from './Layout.module.css';

function Layout({ children }) {
  const router = useRouter();

  const onClickHeader = () => {
    router.push('/');
  };
  return (
    <div>
      <header className={style.header}>
        <div className={style.headerIcon} onClick={onClickHeader}>
          NARAS 🌏
        </div>
      </header>
      <main className={style.main}>{children}</main>
    </div>
  );
}

export default Layout;
