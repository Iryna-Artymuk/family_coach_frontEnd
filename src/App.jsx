import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from '@/pages/main/HomePage/HomePage';
import BlogPage from '@/pages/main/BlogPage/BlogPage';
import Layout from './components/layout/Layout';
import QualificationPage from './pages/main/QualificationPage/QualificationPage';
import PricePage from './pages/main/PricePage/PricePage';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/blog" element={<BlogPage />} />
          {/* <Route path="/blog:id" element={<Article />} /> */}
          <Route path="/qualification" element={<QualificationPage />} />
          <Route path="/price" element={<PricePage />} />
          {/* <Route path="*" element={<Page404 />} />
           */}
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
