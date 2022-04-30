
/**
 * Find the time of sunset for given location and date
 * @param {*} lat latitude coordinate
 * @param {*} long longtitude coordinate
 * @param {*} date date of the given day
 * @returns time of sunset
 */
export function getSunset(lat, long, date) {

    // For some reason, this will not output sunset, can't figure it out

    const Sun = require('sunrise-sunset-js');

    let parsedDate = new Date(date);

    const sunset = Sun.getSunset(lat, long, parsedDate);
    
    return sunset.getTime;
}


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
 
export function calculateNightLength(lat, long, date) {
    const Sun = require('sunrise-sunset-js');

    console.log("getNightLength called");
    console.log("method given: lat = " + lat + " long = " + long + " date = " + date);

    date = new Date(date);

    // Find dates for sunrise and sunset
    const sunset = Sun.getSunset(lat, long, date);
    console.log("Sunset = " + sunset);

    const nextDay = date;
    nextDay.setDate(nextDay.getDate() + 1);
    const sunrise = Sun.getSunrise(lat, long, nextDay);
    console.log("Sunrise = " + sunrise);

    // Calculate the length of the night from the day of the sunset to the day of sunrise in minutes
    let nightLength = 1440 - ((sunset.getHours() * 60) + sunset.getMinutes())
        + (sunrise.getHours() * 60) + sunrise.getMinutes();

    console.log("Night length minutes = " + nightLength);

    // Convert minutes to hours
    let nightLengthFullHour = parseInt((nightLength / 60).toPrecision(2));

    // Find how many hours and how many minutes the night was long - most readable format
    let nightLengthHour = Math.floor(nightLengthFullHour);
    let nightLengthMinute = nightLength - (nightLengthHour * 60);

    // Put hours-minutes into a String
    let nightLengthString = nightLengthHour + " hours, " + nightLengthMinute + " minutes";

    console.log("Night length = " + nightLengthString);

    
    // Return dictionary which consists of data about sunset, sunrise, nights length, etc
    return {
        "NightLength": [nightLengthHour, nightLengthMinute],
        "NightLengthString": nightLengthString,
        "Coordinates": [lat, long],
        "Sunset": sunset,
        "Sunrise": sunrise
    };
   

} // getNightLength 

*/