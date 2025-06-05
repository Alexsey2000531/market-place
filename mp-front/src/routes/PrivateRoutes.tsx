import { lazy, type FC } from 'react'
import { Route, Navigate, Routes, useLocation } from 'react-router-dom'

import { checkPathMatch, paths } from './helpers'

const AccountSettingsPage = lazy(() => import('../pages/AccountSettingsPage'))

const PrivateRoutes: FC = () => {
  const location = useLocation()

  const isMatch = checkPathMatch(location.pathname, paths)

  return (
    <Routes>
      <Route path={paths.accountSettings} element={<AccountSettingsPage />} />
      <Route path={'*'} element={!isMatch && <Navigate to={paths.home} />} />
    </Routes>
  )
}

export default PrivateRoutes
