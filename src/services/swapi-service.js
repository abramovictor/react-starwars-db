import { join as joinUrl } from 'path';

const API_URL = 'https://swapi.co/api';

const getResource = async (url = String.prototype, props = Object.prototype) => {
    const response = await fetch(
        joinUrl(API_URL, url),
        props
    );
    if (!response.ok) throw new Error(`Could not fetch data ${url}, received ${response.status}`);
    return await response.json();
}

export const getAllPeople = async () => {
    const response = await getResource('people');
    return response.results;
}

export const getPerson = (id = String.prototype) => {
    return getResource(
        joinUrl('people', `${id}`)
    );
}

export const getAllPlanets = async () => {
    const response = await getResource('planets');
    return response.results;
}

export const getPlanet = (id = String.prototype) => {
    return getResource(
        joinUrl('planets', `${id}`)
    );
}

export const getAllStraships = async () => {
    const response = await getResource('starships');
    return response.results;
}

export const getStraship = (id = String.prototype) => {
    return getResource(
        joinUrl('starships', `${id}`)
    );
}

const SwapiService = {
    getResource,
    getAllPeople,
    getPerson,
    getAllPlanets,
    getPlanet,
    getAllStraships,
    getStraship
};

export default SwapiService;