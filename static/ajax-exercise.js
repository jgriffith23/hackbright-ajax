"use strict";


// PART 1: SHOW A FORTUNE

// TODO: get the fortune and show it in the #fortune-text div

// Callback function. Send GET request to the server and call an anonymous
// success function when the response is received.
function showFortune(evt) {
    $.get("/fortune",
          function (fortune) {
                $('#fortune-text').html(fortune);
          }
    );
}

$('#get-fortune-button').on('click', showFortune);





// PART 2: SHOW WEATHER

function showWeather(evt) {
    evt.preventDefault();

    //Changed /weather?zipcode= to /weather.json?zipcode=
    var url = "/weather.json?zipcode=" + $("#zipcode-field").val();

    // TODO: request weather with that URL and show the forecast in #weather-info

    // URL passed as first parameter to .get() must match route name in Flask!
    $.get(url,
          // Anonymous function, a callback that happens when request 
          // is successful.  
          function(results) {
                $('#weather-info').html(results.forecast);
          }
    );
}

$("#weather-form").on('submit', showWeather);




// PART 3: ORDER MELONS

function orderMelons(evt) {
    evt.preventDefault();

    // TODO: show the result message after your form
    // TODO: if the result code is ERROR, make it show up in red (see our CSS!)
}

$("#order-form").on('submit', orderMelons);


