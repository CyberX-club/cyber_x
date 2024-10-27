import {getApiUrl} from "./Api";

class Endpoints {
    static base_url = 'https://cyber-x-api.onrender.com'

    static get_thumbnail = (file_id) => (`${this.base_url}/file/${file_id}/thumbnail`);

    static get_magazine_entry = (slug) => (`${this.base_url}/magazine/${slug}`);
}

export default Endpoints;