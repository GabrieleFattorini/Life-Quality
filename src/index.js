const apiKey = process.env.API_KEY;

let lifeQuality = {
    fetchLifeQuality: function (city) {
        fetch(
            apiKey + city + "/scores/"
            ).then((response) => response.json())
            .then((data) => this.displayLifeQuality(data));
    },
    displayLifeQuality: function(data) {
        const { teleport_city_score, summary } = data;
        const { score_out_of_10 : cat1 } = data.categories[0];
        const { score_out_of_10 : cat2 } = data.categories[1];
        const { score_out_of_10 : cat3 } = data.categories[2];
        const { score_out_of_10 : cat4 } = data.categories[3];
        const { score_out_of_10 : cat5 } = data.categories[4];
        const { score_out_of_10 : cat6 } = data.categories[5];
        const { score_out_of_10 : cat7 } = data.categories[6];
        const { score_out_of_10 : cat8 } = data.categories[7];
        const { score_out_of_10 : cat9 } = data.categories[8];
        const { score_out_of_10 : cat10 } = data.categories[9];
        const { score_out_of_10 : cat11 } = data.categories[10];
        const { score_out_of_10 : cat12 } = data.categories[11];
        const { score_out_of_10 : cat13 } = data.categories[12];
        const { score_out_of_10 : cat14 } = data.categories[13];
        
        document.querySelector(".score span").innerText = `${document.querySelector('.search-bar').value} ${parseInt(teleport_city_score)}`;
        document.querySelector(".summary").innerText = summary;
        document.querySelector(".housing span").innerText = `${parseInt(cat1)} / 10`;
        document.querySelector(".living span").innerText = `${parseInt(cat2)} / 10`;
        document.querySelector(".startups span").innerText = `${parseInt(cat3)} / 10`;
        document.querySelector(".capital span").innerText = `${parseInt(cat4)} / 10`;
        document.querySelector(".connectivity span").innerText = `${parseInt(cat5)} / 10`;
        document.querySelector(".commute span").innerText = `${parseInt(cat6)} / 10`;
        document.querySelector(".business span").innerText = `${parseInt(cat7)} / 10`;
        document.querySelector(".safety span").innerText = `${parseInt(cat8)} / 10`;
        document.querySelector(".healthcare span").innerText = `${parseInt(cat9)} / 10`;
        document.querySelector(".education span").innerText = `${parseInt(cat10)} / 10`;
        document.querySelector(".quality span").innerText = `${parseInt(cat11)} / 10`;
        document.querySelector(".economy span").innerText = `${parseInt(cat12)} / 10`;
        document.querySelector(".taxation span").innerText = `${parseInt(cat13)} / 10`;
        document.querySelector(".internet span").innerText = `${parseInt(cat14)} / 10`;
    },  
    search: function() {
        this.fetchLifeQuality(document.querySelector('.search-bar').value);
    },
};

document.querySelector('.search button').addEventListener('click', function() {
    lifeQuality.search();
});

document.querySelector('.search-bar').addEventListener('keyup', function(event) {
    if (event.key == "Enter") {
        lifeQuality.search();
    };
});
