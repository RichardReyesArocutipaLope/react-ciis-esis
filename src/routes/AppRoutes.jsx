import { useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useAuthStore } from '../hooks/useAuthStore';
import { ViewQR } from '../views/code-qr/ViewQR';
import { Dashboard } from '../views/dashboard/Dashboard';
import { Home } from '../views/Home';
import { Login } from '../views/login/Login';
import { Validation } from '../views/validation/Validation';

export const AppRoute = () => {
  const { status, checkAuthToken } = useAuthStore();

  useEffect(() => {
    checkAuthToken();
  }, []);

  if (status === 'checking') {
    return <h3>Cargando...</h3>;
  }

  return (
    <Routes>
      {status === 'not-authenticated' ? (
        <>
          <Route path="/" element={<Home />} />
          <Route path="/validation" element={<Validation />} />
          <Route path="/code-qr" element={<ViewQR />} />
          {/* <Route path='/forgot-password' element= {} />  */}
          <Route path="/login" element={<Login />} />
          <Route path="/*" element={<Navigate to="/" />} />
        </>
      ) : (
        <>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/*" element={<Navigate to="/" />} />
        </>
      )}
    </Routes>
  );
};
