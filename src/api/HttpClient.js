import axios from "axios";

export class HttpClient{
    baseUrl;
    constructor(url){
        this.baseUrl = url;
    }
    async get(endpoint){
        return await axios.get(`${this.baseUrl}/${endpoint}`);
    }   
    
    async getProductById(endpoint,id){
        return await axios.get(`${this.baseUrl}/${endpoint}/${id}`)
    }
    async post(endpoint,body){
        return await axios.post(`${this.baseUrl}/${endpoint}`,body);
    }
    async delete(endpoint,id){
        return await axios.delete(`${this.baseUrl}/${endpoint}/${id}`);
    }
}