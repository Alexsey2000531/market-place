import { HeadProvider } from 'react-head'
import { Suspense } from 'react'
import PublicRoutes from './routes/PublicRoutes'
import PrivateRoutes from './routes/PrivateRoutes'
import Header from './features/Header'
import './main.css'
import Footer from './components/Footer/Footer'
import { useSelector } from 'react-redux'
import { selectIsLogged } from './features/App/selector'

const App = () => {
  const isLogged = useSelector(selectIsLogged)
  return (
    <>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <HeadProvider>{isLogged ? <PrivateRoutes /> : <PublicRoutes />}</HeadProvider>
      </Suspense>
      <Footer />
    </>
  )
}
export default App
