import {getApiUrl} from "./Api";

class Endpoints
{
     static base_url = '/api/'

    static get_thumbnail = (file_id) => (`${this.base_url}/file/${file_id}/thumbnail`);

}

export default Endpoints;