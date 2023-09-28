/* Creator: Ahmed
 * Date Created: Thu Sep 28 2023
 * Description: Updates the text for the total distance travelled around the sun since I was born.
                Just a cool fun fact to display on the website.
 * Note 0: The speed is calcualted in km / ms, and the page also updates every ms.
 */

const distanceBetweenEarthAndSunInKm = 149597870.7; // 1 Astronomical Unit, radius.
const orbitTimeInDays = 365.2425;

// The Earth's orbit is not perfectly circular, but it's very close.
// I will assume it's circular to make the calculations simpler :)
// Distance Earth travels in 1 year.
const lengthOfEarthsOrbitInKm = 2 * Math.PI * distanceBetweenEarthAndSunInKm;
const earthOrbitSpeedInKmPerMilliSecond = lengthOfEarthsOrbitInKm / orbitTimeInDays / 24 / 3600 / 1000;

const birthDateInUTC = new Date('1998-04-01T06:23:01Z');
let currentTimeInUTC = new Date();
let timeDiffInMilliSecond = currentTimeInUTC - birthDateInUTC.getTime();

let distanceTravelledAroundEarthInKm = timeDiffInMilliSecond * earthOrbitSpeedInKmPerMilliSecond;

function updateDistanceTraveled() {
    // Note: Because the page is being updated every millisecond, we can add the speed in km/ms.
    distanceTravelledAroundEarthInKm += earthOrbitSpeedInKmPerMilliSecond;
    const formattedDistance = distanceTravelledAroundEarthInKm.toLocaleString('en-US', {maximumFractionDigits: 0});
    document.getElementById('distance-travelled').textContent = formattedDistance + " km";
}

let renderTimeInMilliSecond = 1;
setInterval(updateDistanceTraveled, renderTimeInMilliSecond);