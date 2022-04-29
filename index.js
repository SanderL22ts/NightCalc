// Author: Sander Lääts

// Imports
import http from 'http';
import {getSunrise, getSunset} from 'sunrise-sunset-js';

/**
 * getNightLength method - find the length of the night since the given date
 * @param lat Latitude of given coordinates
 * @param long Longtitude of given coordinates
 * @param date The date from where the night period begins
 * @returns Dictionary:
 *      NightLengthString: string - Night length as a String: 'X hours, x minutes'
 *      Sunset: Date - The given date of the sunset, with the time of the sunset included
 *      Coordinates: *[] - Coordinates in an array as: [lat, long]
 *      NightLength: (number|number)[] - Night length with hours and minutes, [hours, minutes] - similar to string variable
 *      Sunrise: Date - The date and time of sunrise, one day after given date
 */
function getNightLength(lat, long, date) {

    // Find dates for sunrise and sunset
    const sunset = getSunset(lat, long);
    const nextDay = date;
    nextDay.setDate(nextDay.getDate() + 1);
    const sunrise = getSunrise(lat, long, nextDay);

    // Calculate the length of the night from the day of the sunset to the day of sunrise in minutes
    let nightLength = 1440 - ((sunset.getHours() * 60) + sunset.getMinutes())
        + (sunrise.getHours() * 60) + sunrise.getMinutes();

    // Convert minutes to hours
    let nightLengthFullHour = parseInt((nightLength / 60).toPrecision(2));

    // Find how many hours and how many minutes the night was long - most readable format
    let nightLengthHour = Math.floor(nightLengthFullHour);
    let nightLengthMinute = nightLength - (nightLengthHour * 60);

    // Put hours-minutes into a String
    let nightLengthString = nightLengthHour + " hours, " + nightLengthMinute + " minutes";

    // Return dictionary which consists of data about sunset, sunrise, nights length, etc
    return {
        "NightLength": [nightLengthHour, nightLengthMinute],
        "NightLengthString": nightLengthString,
        "Coordinates": [lat, long],
        "Sunset": sunset,
        "Sunrise": sunrise
    };

} // getNightLength


// Example of a night
const lat = 58.3764935768067;
const long = 26.73077659287342;
const date = new Date();
const nightData = getNightLength(lat, long, date);

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("Night length from " + nightData["Sunset"].getDate() + "/" + (nightData["Sunset"].getMonth() + 1)
        + "/" + nightData["Sunset"].getFullYear() + " " + nightData["Sunset"].getHours() + ":"
        + nightData["Sunset"].getMinutes() + ": " + nightData["NightLengthString"]);
    res.end();
}).listen(8080);