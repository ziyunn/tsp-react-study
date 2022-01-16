const getAppEnv = () => {
  return process.env.REACT_APP_ENV;
};

const getApiEndPoint = () => {
  switch (getAppEnv()) {
    case 'production':
      return 'https://jsonplaceholder.typicode.com/';
    case 'development':
    default:
      return 'https://jsonplaceholder.typicode.com/';
  }
};

export { getAppEnv, getApiEndPoint };