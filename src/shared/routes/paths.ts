// eslint-disable-next-line import/no-anonymous-default-export
export default {
  root: '/',
  error: '/error',
  general: {
    validate: "/validate-token",
    notFound: "/not-found",
  },
  app: {
    root: '/app',
    auth: {
      signin: '/app/iniciar-sesion',
      signup: '/app/registrarse',
    },
  },
  dashboard: {
    root: '/dash',
    auth: {
      signin: '/dash/iniciar-sesion',
      signup: '/dash/registrarse',
    },
  },
}
