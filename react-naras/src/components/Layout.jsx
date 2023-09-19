import style from './Layout.module.css';

function Layout({ children }) {
  return (
    <div>
      <header className={style.header}>
        <div>🌏 Naras</div>
      </header>
      <main className={style.main}>{children}</main>
    </div>
  );
}

export default Layout;
