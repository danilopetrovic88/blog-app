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

      async add(post) {
        try {
          const { data } = await this.httpClient.post('posts', post);
    
          return data;
        } catch (error) {
          console.log(error);
        }
    
        return null;
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

      async edit(id, post) {
        try {
          const { data } = await this.httpClient.put(`posts/${id}`, post);
    
          return data;
        } catch (error) {
          console.log(error);
        }
    
        return null;
      }

      async delete(postId) {
        try {
          const { data } = await this.httpClient.delete(`posts/${postId}`);
    
          return data;
        } catch (error) {
          console.log(error);
        }
    
        return {};
      }

}

export default new PostService()