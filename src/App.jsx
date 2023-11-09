import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from '@/pages/main/HomePage/HomePage';
import BlogPage from '@/pages/main/BlogPage/BlogPage';
import Layout from './components/layout/Layout';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/blog" element={<BlogPage />} />
          {/* <Route path="*" element={<Page404 />} />
           */}
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
