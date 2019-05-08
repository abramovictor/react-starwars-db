import { join as joinUrl } from 'path';

const API_URL = 'https://swapi.co/api';

const extractID = (planet = Object.prototype) => {
    console.log(planet);
    const idRegExp = /\/([0-9]*)\/$/;
    return planet.url.match(idRegExp)[1];
};

const transformPlanetAPI = (planet = Object.prototype) => {
    const id = extractID(planet);

    return {
        id,
        name: planet.name,
        population: planet.population,
        rotationPeriod: planet.rotation_period,
        diameter: planet.diameter
    };
};

const transformStarshipAPI = (starship = Object.prototype) => {
    const id = extractID(starship);

    return {
        id,
        name: starship.name,
        model: starship.model,
        manufacturer: starship.manufacturer,
        costInCredits: starship.costInCredits,
        length: starship.length,
        crew: starship.crew,
        passengers: starship.passengers,
        cargoCapacity: starship.cargoCapacity
    };
};

const transformPersonAPI = (person = Object.prototype) => {
    const id = extractID(person);

    return {
        id,
        name: person.name,
        gendet: person.gender,
        birthYear: person.birsthYear,
        eyeColor: person.eyeColor
    };
};

const getResource = async (url = String.prototype, props = Object.prototype) => {
    const response = await fetch(
        joinUrl(API_URL, url),
        props
    );
    if (!response.ok) throw new Error(`Could not fetch data ${url}, received ${response.status}`);
    return await response.json();
};

export const getAllPeople = async () => {
    const response = await getResource('people');
    return response.results;
};

export const getPerson = async (id = String.prototype) => {
    return getResource(
        joinUrl('people', `${id}`)
    );
}

export const getAllPlanets = async () => {
    const response = await getResource('planets');
    return response.results.map((planet) => transformPlanetAPI(planet));
};

export const getPlanet = async (id = String.prototype) => {
    const planet = getResource(
        joinUrl('planets', `${id}`)
    );

    return transformPlanetAPI(planet);
};

export const getAllStraships = async () => {
    const response = await getResource('starships');
    return response.results;
};

export const getStraship = (id = String.prototype) => {
    return getResource(
        joinUrl('starships', `${id}`)
    );
};

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