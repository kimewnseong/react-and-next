import { useNavigate } from 'react-router-dom';
import style from './Layout.module.css';

function Layout({ children }) {
  const navigate = useNavigate();

  const onClickHeader = () => {
    navigate('/');
  };

  return (
    <div>
      <header className={style.header}>
        <div className={style.headerIcon} onClick={onClickHeader}>
          🌏 NARAS
        </div>
      </header>
      <main className={style.main}>{children}</main>
    </div>
  );
}

export default Layout;
