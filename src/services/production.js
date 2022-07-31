import { ReactTemplateApi } from "./api";

const productionListApi = (page, size) => {
  return ReactTemplateApi.get(
    `/api/production/lists?page=${page}&paramMap=%7B%7D&size=${size}`
  );
};

const productionSearchApi = (category, text) => {
  return ReactTemplateApi.get(
    `/api/production/lists?page=1&paramMap=%7B%7D&size=4&searchType=${category}&searchKeyword=${text}`
  );
};

export { productionListApi, productionSearchApi };
