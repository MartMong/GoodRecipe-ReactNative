import { Constants } from 'expo'
const ENV = {
  dev: {
    apiUrl: 'https://www.food2fork.com/api/search',
    api_key:'cf4e43032ee92e13369de7c37750b671'
  }
}

function getEnvVars(env = '') {
  if (env === null || env === undefined || env === '') return ENV.dev
}


export default getEnvVars(Constants.manifest.releaseChannel)