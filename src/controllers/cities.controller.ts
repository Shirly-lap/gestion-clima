import { ICity } from "../models/ICity";

export class CitiesController {
    url: string;

    constructor(url: string) {
        this.url = url
    }

    async getCities(endPoint: string): Promise<ICity[]> {
        const response = await fetch(`${this.url}${endPoint}`);
        const data = await response.json();
        console.log(response.status);
        console.log(data);


        return data
    }

    async createCity(data: ICity, endPoint: string) {
        const request = await fetch(`${this.url}${endPoint}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)

        })

        const response = request.json();

        return response

    }


}

