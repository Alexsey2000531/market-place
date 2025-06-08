import { lazy, type FC } from 'react'
import { Route, Navigate, Routes, useLocation } from 'react-router-dom'

import { checkPathMatch, paths } from './helpers'

const HomePage = lazy(() => import('../pages/HomePage/HomePage.tsx'))
const FavoritesPage = lazy(() => import('../pages/FavoritesPage'))
const ProductDetailPage = lazy(() => import('../pages/ProductDetailPage/ProductDetailPage.tsx'))

const PublicRoutes: FC = () => {
  const location = useLocation()

  const isMatch = checkPathMatch(location.pathname, paths)

  return (
    <Routes>
      <Route path={paths.home} element={<HomePage />} />
      <Route path={paths.productDetail} element={<ProductDetailPage />} />
      <Route path={paths.favorites} element={<FavoritesPage />} />
      <Route path={'*'} element={!isMatch && <Navigate to={paths.home} />} />
    </Routes>
  )
}

export default PublicRoutes
