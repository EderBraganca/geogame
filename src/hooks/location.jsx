import cordinates from "../../locations/cordinates.json"

export const getRandomLocation = () => {
    const CORDINATES = cordinates.cordinates;
    const randomIndex = Math.floor(Math.random() * CORDINATES.length);
    const randomLocation = CORDINATES[randomIndex];

    return randomLocation;
}