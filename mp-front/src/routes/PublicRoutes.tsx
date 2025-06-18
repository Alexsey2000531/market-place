import { lazy, type FC } from 'react'
import { Route, Navigate, Routes, useLocation } from 'react-router-dom'

import { checkPathMatch, paths } from './helpers'

const HomePage = lazy(() => import('../pages/HomePage'))
const LoginPage = lazy(() => import('../pages/LoginPage'))
const RegisterPage = lazy(() => import('../pages/RegisterPage'))
const ErrorPage = lazy(() => import('../pages/ErrorPage'))

const PublicRoutes: FC = () => {
  const location = useLocation()

  const isMatch = checkPathMatch(location.pathname, paths)

  return (
    <Routes>
      <Route path={paths.home} element={<HomePage />} />
      <Route path={paths.login} element={<LoginPage />} />
      <Route path={paths.register} element={<RegisterPage />} />
      <Route path={paths.error} element={<ErrorPage />} />
      <Route path={'*'} element={!isMatch && <Navigate to={paths.home} />} />
    </Routes>
  )
}

export default PublicRoutes
