import style from './SubLayout.module.css';

function SubLayout({ children }) {
  return (
    <>
      {children}
      <footer className={style.footer}>Footer</footer>
    </>
  );
}

export default SubLayout;
