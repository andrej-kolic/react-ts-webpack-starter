export type EnvironmentVariables = {
  API_URL: string;
};

// TODO: local version for each environment (except test)
// see https://github.com/facebook/create-react-app/blob/4562ab6fd80c3e18858b3a9a3828810944c35e36/packages/react-scripts/config/env.js#L25-L49
// and https://github.com/motdotla/dotenv/issues/272
const environmentVariables: EnvironmentVariables = {
  API_URL: process.env.API_URL as string,
};

export function getEnvironmentVariables() {
  return environmentVariables;
}
