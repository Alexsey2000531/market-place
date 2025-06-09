import { lazy, type FC } from 'react'
import { Route, Navigate, Routes, useLocation } from 'react-router-dom'

import { checkPathMatch, paths } from './helpers'

const FavoritesPage = lazy(() => import('../pages/FavoritesPage'))
const AccountSettingsPage = lazy(() => import('../pages/AccountSettingsPage'))
const HomePage = lazy(() => import('../pages/HomePage'))
const ProductDetailPage = lazy(() => import('../pages/ProductDetailPage/ProductDetailPage.tsx'))

const PrivateRoutes: FC = () => {
  const location = useLocation()

  const isMatch = checkPathMatch(location.pathname, paths)

  return (
    <Routes>
      <Route path={paths.home} element={<HomePage />} />
      <Route path={paths.accountSettings} element={<AccountSettingsPage />} />
      <Route path={'*'} element={!isMatch && <Navigate to={paths.home} />} />
      <Route path={paths.productDetail} element={<ProductDetailPage />} />
      <Route path={paths.favorites} element={<FavoritesPage />} />
    </Routes>
  )
}

export default PrivateRoutes
