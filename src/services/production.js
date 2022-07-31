import { ReactTemplateApi } from "./api";

const productionListApi = (page, size) => {
  return ReactTemplateApi.get(
    `/api/production/lists?page=${page}&paramMap=%7B%7D&size=${size}`
  );
};

export { productionListApi };
