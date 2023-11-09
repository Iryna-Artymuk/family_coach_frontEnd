import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="app">
      <header> header</header>
      <main>
        <Outlet />
      </main>
      <footer>
        <div>
          <span>&#169; 2023 Жанна Барищук - всі права захищено </span>
        </div>
      </footer>
    </div>
  );
};
export default Layout;
