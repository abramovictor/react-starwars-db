import { join as joinUrl } from 'path';

const API_URL = 'https://swapi.co/api';

const extractID = (data = Object.prototype) => {
    const idRegExp = /\/([0-9]*)\/$/;
    return data.url.match(idRegExp)[1];
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

const transformStarshipAPI = (starship = Promise.prototype) => {
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
    const people = await getResource('people');
    return people.results.map((person) => transformPersonAPI(person));
};

export const getPerson = async (id = String.prototype) => {
    const person = await getResource(
        joinUrl('people', `${id}`)
    );

    return transformPersonAPI(person);
}

export const getAllPlanets = async () => {
    const planets = await getResource('planets');
    return planets.results.map((planet) => transformPlanetAPI(planet));
};

export const getPlanet = async (id = String.prototype) => {
    const planet = await getResource(
        joinUrl('planets', `${id}`)
    );

    return transformPlanetAPI(planet);
};

export const getAllStraships = async () => {
    const starships = await getResource('starships');
    return starships.results.map((starship) => transformStarshipAPI(starship));
};

export const getStraship = (id = String.prototype) => {
    return getResource(
        joinUrl('starships', `${id}`)
    );
};

export default {
    getResource,
    getAllPeople,
    getPerson,
    getAllPlanets,
    getPlanet,
    getAllStraships,
    getStraship
};