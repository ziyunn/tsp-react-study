import { decamelizeKeys } from 'humps';
import qs from 'qs';

import { ReactTemplateApi } from './api';

// TODO
export const getCommnetById = (page) => {
  return ReactTemplateApi.get(`/comments?postId=${page}`);
};
