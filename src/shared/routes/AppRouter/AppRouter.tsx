import { Route } from 'react-router-dom'

//Home
import Home from '../../../pages/Home'

import NotFound from '../../../pages/NotFound'
import ErrorPage from '../../../pages/ErrorPage'

import AppSwitch from '../AppSwitch'

import paths from '../paths'
import Login from '../../../pages/Login'
import Singup from '../../../pages/Singup'

const AppRouter = () => {
  return (
    <AppSwitch>
      <Route path={paths.root} element={<Home />} />
      <Route path={paths.error} element={<ErrorPage />} />
      <Route path={paths.general.notFound} element={<NotFound />} />

      <Route path={paths.auth.signin} element={<Login />}/>
      <Route path={paths.auth.signup} element={<Singup />}/>

      <Route path="*" element={<NotFound />} />
    </AppSwitch>
  )
}

export default AppRouter
