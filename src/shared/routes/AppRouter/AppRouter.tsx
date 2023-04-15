import { Route } from 'react-router-dom'

import NotFound from '../../../pages/NotFound'
import ErrorPage from '../../../pages/ErrorPage'

import AppSwitch from '../AppSwitch'
import paths from '../paths'

import App from '../../../pages/App'

//APP
import AppLogin from '../../../pages/App/AppLogin'
import AppSingup from '../../../pages/App/AppSingup'

//DASHBOARD

const AppRouter = () => {
  return (
    <AppSwitch>
      <Route path={paths.error} element={<ErrorPage />} />
      <Route path={paths.general.notFound} element={<NotFound />} />

      <Route path={paths.root} element={<App />} />

      {
        //APP
      }
      <Route path={paths.app.auth.signin} element={<AppLogin />} />
      <Route path={paths.app.auth.signup} element={<AppSingup />} />

      {
        //DASHBOARD
      }
      <Route path={paths.dashboard.auth.signin} element={<div>DASHBOARD LOGIN</div>} />
      <Route path={paths.dashboard.auth.signup} element={<div>DASHBOARD SIGNUP</div>} />

      <Route path="*" element={<NotFound />} />
    </AppSwitch>
  )
}

export default AppRouter
