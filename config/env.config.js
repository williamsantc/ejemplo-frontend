// habilitar el acceso a la app por red
import ip from '../util/get-development-ip'

const production = {
  appName: 'Prueba Frontend', // Nombre de la aplicación html - title
  appBaseDir: '/prueba-frontend/', // Directorio de despliegue de la aplicación
  rootUrl: '../../../', // Url del servidor del api
  baseUrl: '../../../transporte-ws/', //Url del apí por default
}

const development = {
  ...production, // spread,
  rootUrl: `http://${ip}:8090/`,
  baseUrl: `http://${ip}:8090/academico-ws/`
}

export default {
  development,
  production
}
