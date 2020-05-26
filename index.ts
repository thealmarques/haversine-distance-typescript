import { Coordinates } from "./interfaces/coordinates";

/**
 * Calculates the distance (in kms) between point A and B using earth's radius as the spherical surface
 * @param pointA Coordinates from Point A
 * @param pointB Coordinates from Point B
 * Based on https://www.movable-type.co.uk/scripts/latlong.html
 */
function haversineDistance(pointA: Coordinates, pointB: Coordinates): number {
    var radius = 6371; // km     

    //convert latitude and longitude to radians
    const deltaLatitude = (pointB.latitude - pointA.latitude) * Math.PI / 180;
    const deltaLongitude = (pointB.longitude - pointA.longitude) * Math.PI / 180;

    const halfChordLength = Math.cos(
        pointA.latitude * Math.PI / 180) * Math.cos(pointB.latitude * Math.PI / 180) 
        * Math.sin(deltaLongitude/2) * Math.sin(deltaLongitude/2)
        + Math.sin(deltaLatitude/2) * Math.sin(deltaLatitude/2);

    const angularDistance = 2 * Math.atan2(Math.sqrt(halfChordLength), Math.sqrt(1 - halfChordLength));

    return radius * angularDistance;
}

const distance = haversineDistance({
    latitude: 39.352629,
    longitude: -7.514824
},
{
    latitude: 38.744263,
    longitude: -8.084076
})
console.log(distance);