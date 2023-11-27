import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from '@/pages/main/HomePage/HomePage';
import BlogPage from '@/pages/main/BlogPage/BlogPage';
import Layout from './components/layout/Layout';
import QualificationPage from './pages/main/QualificationPage/QualificationPage';
import PricePage from './pages/main/PricePage/PricePage';
import Article from './pages/main/Article/Article';
import AdminLayout from './pages/admin-pages/LoginAdmin/AdminLayout/AdminLayout';
import LoginAdmin from './pages/admin-pages/LoginAdmin/LoginAdmin/LoginAdmin';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:articleId" element={<Article />} />
          <Route path="/qualification" element={<QualificationPage />} />
          <Route path="/price" element={<PricePage />} />
          {/* <Route path="*" element={<Page404 />} />
           */}
        </Route>

        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<LoginAdmin />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
