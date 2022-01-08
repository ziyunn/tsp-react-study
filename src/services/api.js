/* eslint-disable no-param-reassign */
import Axios from 'axios';

import { getApiEndPoint } from 'routers/env';
import {
  requestInterceptor,
  responseInterceptor,
  rejectInterceptor,
} from './interceptors';

const ReactTemplateApi = Axios.create({ baseURL: 'http://localhost:28080/' });

ReactTemplateApi.interceptors.request.use(requestInterceptor);

ReactTemplateApi.interceptors.response.use(responseInterceptor, rejectInterceptor);



export { ReactTemplateApi };
