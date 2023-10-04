import 'dotenv/config';

type EnvKey = 'SECRET_TOKEN' | 'SERVER_URL';

export function getEnvValue(key: EnvKey): string {
  const value = process.env[key];
  if (!value) {
    throw new Error(errorMessage(key));
  }

  return value;
}

function errorMessage(key: EnvKey) {
  return `Please create ".env" file containing: \`${key}="very_secret"\``;
}
