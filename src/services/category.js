import {ReactTemplateApi} from "./api";


const modelViewApi = (categoryCd, idx) => {
    return ReactTemplateApi.get(`/api/model/${categoryCd}/${idx}`);
};

const modelListApi = (categoryCd, page, size) => {
		return ReactTemplateApi.get(`/api/model/lists/${categoryCd}?page=${page}&paramMap=%7B%7D&size=${size}`);
};

export { modelViewApi, modelListApi }
