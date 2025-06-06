import { HeadProvider } from 'react-head'
import { Suspense } from 'react'
import PublicRoutes from './routes/PublicRoutes'
import PrivateRoutes from './routes/PrivateRoutes'
import Header from './features/Header'
import './main.css'
import Footer from './components/Footer/Footer'

const App = () => {
  const isAuth = false
  return (
    <>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <HeadProvider>{isAuth ? <PrivateRoutes /> : <PublicRoutes />}</HeadProvider>
      </Suspense>
      <Footer />
    </>
  )
}
export default App
