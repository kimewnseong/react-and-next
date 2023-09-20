import style from './SubLayout.module.css';

function SubLayout({ children }) {
  return (
    <div className="SubLayout">
      <div>{children}</div>
      <footer className={style.footer}>Footer</footer>
    </div>
  );
}

export default SubLayout;
