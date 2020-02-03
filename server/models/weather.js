const request = require("request-promise");

const API_KEY = "7a20184ad910291a959875e4166777f2";
// const API_KEY = process.env.API_KEY;

class Weather {
  static retrieveByCity(city, callback) {
    request({
      uri: `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${API_KEY}&units=imperial`,
      json: true
    })
      .then(function(res) {
        callback(res);
      })
      .catch(function(err) {
        console.log(err);
        callback({ error: "Could not reach OpenWeatherMap API." });
      });
  }
}

module.exports = Weather;
