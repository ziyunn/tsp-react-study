import {ReactTemplateApi} from "./api";

export const mainVisualApi = () => {
    return ReactTemplateApi.get(`/api/model/lists/main`);
};
