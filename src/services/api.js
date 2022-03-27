/* eslint-disable no-param-reassign */
import Axios from 'axios';

import { getApiEndPoint } from 'routers/env';
import {
  requestInterceptor,
  responseInterceptor,
  rejectInterceptor,
} from './interceptors';

const ReactTemplateApi = Axios.create({ baseURL: getApiEndPoint() });

ReactTemplateApi.interceptors.request.use(requestInterceptor);

ReactTemplateApi.interceptors.response.use(responseInterceptor, rejectInterceptor);

function mainVisualApi() {
  return Axios.get(`http://localhost:28080/api/model/lists/main`);
}

export { ReactTemplateApi,mainVisualApi };
