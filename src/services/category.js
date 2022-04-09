import {ReactTemplateApi} from "./api";


const modelViewApi = (categoryCd, idx) => {
    return ReactTemplateApi.get(`/api/model/${categoryCd}/${idx}`);
};

export { modelViewApi }
