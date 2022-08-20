import { ReactTemplateApi } from "./api";

const modelViewApi = (categoryCd, idx) => {
  return ReactTemplateApi.get(`/api/model/${categoryCd}/${idx}`)
    .then((response) => {
      if (response.status === 200) {
        if (response.code === "NOT_FOUND_MODEL") {
          alert(response.message);
        }
      } else {
        return response;
      }
    })
    .catch((error) => {
      console.log(error);
      alert("네트워크 에러입니다.");
    });
};

const modelListApi = (categoryCd, page, size) => {
  return ReactTemplateApi.get(
    `/api/model/lists/${categoryCd}?page=${page}&paramMap=%7B%7D&size=${size}`
  );
};

export { modelViewApi, modelListApi };
