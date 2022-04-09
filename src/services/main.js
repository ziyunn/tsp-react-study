import {ReactTemplateApi} from "./api";

const mainVisualApi = () => {
    return ReactTemplateApi.get(`/api/model/lists/main`);
};


export {mainVisualApi}
