class Endpoints {
    static base_url = process.env.NODE_ENV === 'development'
        ? 'http://localhost:5000'
        : 'https://cyber-x-api.vercel.app';

    static get_thumbnail = (file_id) => (`${this.base_url}/file/${file_id}/thumbnail`);

    static get_magazine_entry = (slug) => (`${this.base_url}/magazine/${slug}`);

    static GET_RESOURCES = () => `${this.base_url}/resources`;
}

export default Endpoints;
