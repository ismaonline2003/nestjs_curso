import axios from "axios";

export class PokeApiAdapter {

    private readonly axios = axios;

    async get(url: string) {
        const data = await this.axios.get(url);
        return data;
    }

    async patch(url: string, data: any) {
        return;
    }

    async post(url: string, data: any) {
        return;
    }

    async delete(url: string, data: any) {
        return;
    }
}