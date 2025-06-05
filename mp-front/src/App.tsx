import { HeadProvider } from 'react-head'
import { Suspense } from 'react'
import PublicRoutes from './routes/PublicRoutes'
import PrivateRoutes from './routes/PrivateRoutes'
const App = () => {
  const isAuth = false
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <HeadProvider>{isAuth ? <PrivateRoutes /> : <PublicRoutes />}</HeadProvider>
      </Suspense>
    </>
  )
}

export default App
