import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';
import HomePage from '@/pages/main/HomePage/HomePage';
import BlogPage from '@/pages/main/BlogPage/BlogPage';
import Layout from './components/main/layout/Layout';
import QualificationPage from './pages/main/QualificationPage/QualificationPage';
import PricePage from './pages/main/PricePage/PricePage';
import Article from './pages/main/Article/Article';
import AdminSharedLayout from './pages/admin-pages/AdminSharedLayout/AdminSharedLayout';
import AdminDashboard from '../AdminDashboard/AdminDashboard';
import FeedbackAdmin from './pages/admin-pages/Feedback/FeedbackAdmin';
import EditFeedback from './pages/admin-pages/Feedback/EditFeedback';
import BlogAdmin from './pages/admin-pages/Blog/BlogAdmin';
import AddBlogPost from './pages/admin-pages/Blog/AddBlogPost';
import EditBlogPost from './pages/admin-pages/Blog/EditBlogPost';
import QualificationAdmin from './pages/admin-pages/QualificationAdmin/QualificationAdmin';
import AdultPriceAdmin from './pages/admin-pages/Price/AdultPriceAdmin';
import KidsPriceAdmin from './pages/admin-pages/Price/KidsPriceAdmin';
import LecturePriceAdmin from './pages/admin-pages/Price/LecturePriceAdmin';
import LoginPage from './components/admin/loginPage/LoginPage';
import LoginLayout from './components/admin/LoginLayout/LoginLayout';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

import ChangeAdminInfo from './pages/admin-pages/ChangeAdminInfo/ChangeAdminInfo';

import RegisterNewAdmin from './pages/admin-pages/RegisterNewAdmin/RegisterNewAdmin';
import Page404 from './pages/main/page_404/Page404';

const App = () => {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:articleId" element={<Article />} />
            <Route path="/qualification" element={<QualificationPage />} />
            <Route path="/price" element={<PricePage />} />
          </Route>
          <Route path="*" element={<Page404 />} />
          {/* login */}
          <Route path="/admin/login" element={<LoginLayout />}>
            <Route index element={<LoginPage />} />

            {/* <Route
              path="password-recovery-success"
              element={<SuccessPage />}
            />{' '} */}
          </Route>

          {/* admin */}
          <Route
            path="/admin"
            element={
              <PrivateRoute redirectTo="/admin/login">
                <AdminSharedLayout />
              </PrivateRoute>
            }
          >
            <Route index element={<AdminDashboard />} />
            <Route path="feedback" element={<FeedbackAdmin />} />
            <Route path="feedback/edit/:id" element={<EditFeedback />} />
            <Route path="blog" element={<BlogAdmin />} />
            <Route path="blog/add" element={<AddBlogPost />} />
            <Route path="blog/edit/:id" element={<EditBlogPost />} />
            <Route path="qualification" element={<QualificationAdmin />} />
            <Route path="price/adult" element={<AdultPriceAdmin />} />
            <Route path="price/kids" element={<KidsPriceAdmin />} />
            <Route path="price/lecture" element={<LecturePriceAdmin />} />
            <Route path="user/changeInfo" element={<ChangeAdminInfo />} />

            <Route path="user/newAdmin" element={<RegisterNewAdmin />} />
          </Route>
          <Route path="*" element={<Page404 />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
