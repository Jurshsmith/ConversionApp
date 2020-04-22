import { environment as defaultEnvironment } from './environment.defaults';

export const environment = {
    ...defaultEnvironment,
    production: true,
    log: false,
    flags: {
      useNewHeader: false
   }
}