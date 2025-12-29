import { lazy, type FC } from 'react'
import { Route, Navigate, Routes, useLocation } from 'react-router-dom'

import { checkPathMatch, paths } from './helpers'

const FavoritesPage = lazy(() => import('../pages/FavoritesPage'))
const ProfilePage = lazy(() => import('../pages/ProfilePage'))
const HomePage = lazy(() => import('../pages/HomePage'))
const CartItemsPage = lazy(() => import('../pages/CartItemsPage'))
const ProductDetail = lazy(() => import('../pages/ProductDetailPage'))

const PrivateRoutes: FC = () => {
  const location = useLocation()

  const isMatch = checkPathMatch(location.pathname, paths)

  return (
    <Routes>
      <Route path={paths.home} element={<HomePage />} />
      <Route path={paths.profile} element={<ProfilePage />} />
      <Route path={paths.productDetail} element={<ProductDetail />} />
      <Route path={'*'} element={!isMatch && <Navigate to={paths.home} />} />
      <Route path={paths.favorites} element={<FavoritesPage />} />
      <Route path={paths.cart} element={<CartItemsPage />} />
    </Routes>
  )
}

export default PrivateRoutes
