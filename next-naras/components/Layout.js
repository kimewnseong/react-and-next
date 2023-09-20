import style from './Layout.module.css';

function Layout({ children }) {
  return (
    <div>
      <header className={style.header}>
        <div className={style.headerIcon}>NARAS 🌏</div>
      </header>
      <main className={style.main}>{children}</main>
    </div>
  );
}

export default Layout;
