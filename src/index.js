const apiKey = process.env.API_KEY;

let pollution = {
    fetchPollution: function (city) {
        fetch(
            "http://api.waqi.info/feed/" + city + "/?token=" + apiKey
            ).then((response) => response.json())
            .then((data) => this.displayPollution(data));
    },
    fetchPosition: function () {
        fetch(
            "http://api.waqi.info/feed/here/?token=" + apiKey
            ).then((response) => response.json())
            .then((data) => this.displayPollution(data));
    },
    displayPollution: function({data}) {
        const { idx, aqi } = data;
        const { name } = data.city;
        const { s } = data.time;
        const { avg, day, max, min } = data.forecast.daily.pm25[0];
        
        document.querySelector(".city span").innerText = name;
        document.querySelector(".idx span").innerText = idx;
        document.querySelector(".aqi span").innerText = aqi;
        document.querySelector(".time span").innerText = s;
        document.querySelector(".forecast span").innerText = day + ' ( avg: ' + avg + ', max: ' + max + ', min: ' + min + ' )';
    },  
    search: function() {
        this.fetchPollution(document.querySelector('.search-bar').value);
    },
};

document.querySelector('.search button').addEventListener('click', function() {
    pollution.search();
});

document.querySelector('.search-bar').addEventListener('keyup', function(event) {
    if (event.key == "Enter") {
        pollution.search();
    };
});

window.addEventListener('load', () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        console.log('Geolocation is not allowed');
    }
});

function showPosition() {
    pollution.fetchPosition();
}