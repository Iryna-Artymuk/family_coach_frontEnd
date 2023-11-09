import { Outlet } from 'react-router-dom';
import Header from '../Icons/Header/Header';
import Footer from '../Footer/Footer';

const Layout = () => {
  return (
    <div className="app">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
export default Layout;
