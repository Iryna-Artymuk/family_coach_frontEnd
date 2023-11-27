import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

const AdminLayout = () => {
  return (
    <>
      <header />
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
      <footer />
    </>
  );
};
export default AdminLayout;
