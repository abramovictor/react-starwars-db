import { join as joinUrl } from 'path';

export default class SwapiService {
    static API_URL = 'https://swapi.co/api';

    async getResource(url = String.prototype, props = Object.prototype) {
        const response = await fetch(
            joinUrl(SwapiService.API_URL, url),
            props
        );
        if (!response.ok) throw new Error(`Could not fetch data ${url}, received ${response.status}`);
        return await response.json();
    }

    async getAllPeople() {
        const response = await this.getResource('people');
        return response.results;
    }

    getPerson(id = String.prototype) {
        return this.getResource(
            joinUrl('people', `${id}`)
        );
    }

    async getAllPlanets() {
        const response = await this.getResource('planets');
        return response.results;
    }

    getPlanet(id = String.prototype) {
        return this.getResource(
            joinUrl('planets', `${id}`)
        );
    }

    async getAllStraships() {
        const response = await this.getResource('starships');
        return response.results;
    }

    getStraship(id = String.prototype) {
        return this.getResource(
            joinUrl('starships', `${id}`)
        );
    }
}