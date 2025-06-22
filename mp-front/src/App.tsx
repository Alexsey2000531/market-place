import { HeadProvider } from 'react-head'
import { Suspense, useEffect } from 'react'
import PublicRoutes from './routes/PublicRoutes'
import PrivateRoutes from './routes/PrivateRoutes'
import Header from './features/Header'
import './main.css'
import Footer from './components/Footer/Footer'
import { useDispatch, useSelector } from 'react-redux'
import { selectIsLogged } from './features/reducers/App/selector'
import type { Dispatch } from './store/types'
import { setUserData } from './features/reducers/UserData/reducer'
import { setIsLogged } from './features/reducers/App/reducer'

const App = () => {
  const isLogged = useSelector(selectIsLogged)
  const dispatch = useDispatch<Dispatch>()

  useEffect(() => {
    const storedData = localStorage.getItem('userData')
    if (storedData) {
      dispatch(setUserData(JSON.parse(storedData)))
    }

    const isLoggedUser = sessionStorage.getItem('isLogged') === 'true'
    if (isLoggedUser) {
      dispatch(setIsLogged(true))
    }
  }, [dispatch])

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
