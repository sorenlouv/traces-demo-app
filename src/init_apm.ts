import apm from 'elastic-apm-node';
import { getEnvValue } from './get_env_values';

apm.start({
  serviceName: 'traces-demo-app',
  environment: 'production',
  secretToken: getEnvValue('SECRET_TOKEN'),
  serverUrl: getEnvValue('SERVER_URL'),
});
