import axios from "axios"

class PostService {
    constructor() {
        this.httpClient = axios.create({
          baseURL: 'http://localhost:3000/api',
        });
      }

      async getAll() {
        try {
          const { data } = await this.httpClient.get('posts');
    
          return data;
        } catch (error) {
          console.log(error);
        }
    
        return [];
      }

      async get(id) {
        try {
          const { data } = await this.httpClient.get(`posts/${id}`);
    
          return data;
        } catch (error) {
          console.log(error);
        }
    
        return {};
      }

}

export default new PostService()