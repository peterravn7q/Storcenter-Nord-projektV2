"use strict";

const overlay = document.getElementById("startOverlay");
const INACTIVITY_TIME = 60 * 1000; // 60 sekunder

let lastActivity = Date.now();
let isStarted = false;

function showStartBox() {
    overlay.classList.remove("hidden");
    isStarted = true;
};

function startSceen() {
    overlay.classList.add("hidden");
    isStarted = true;
    lastActivity = Date.now();
}

overlay.addEventListener("click", startSceen);

overlay.addEventListener("keydown", function (event) {
    if (event.key === "Enter" || event.key === "") {
        event.preventDefault();
        startSceen();
    }
});
function registerActivity() {
    lastActivity = Date.now();
};

["pointerdown", "pointermove", "keydown", "wheel"].forEach(function(eventName) {
    document.addEventListener(eventName, function() {
        if (isStarted) {
            registerActivity();
        }
    }, { passive: true });
}, 500);

const fish = [
    {
        id: "Elmer",
        spicies: "Elektrisk ål",
        color: "Sort og brun",
        size: "1,5 m",
        ability: "Kan lave elektriske stød",
        food: "fisk, smådyr, fugle, frøer, pattedyr, nedfaldne frugter",
        levested: "Sydamerika - Amazonasfloden",
    },
    {
        id: "John",
        spicies: "Havtaske",
        color: "Grå/blå",
        size: "1,5 m",
        ability: "kan lyse i mørket",
        food: "fisk, krebsdyr, blæksprutter",
        levested: "Havbunden i dybhavet",
    },
    {
        id: "Nemo",
        spicies: "Klovnfisk",
        color: "Orange med hvide striber",
        size: "10 cm",
        ability: "Kan skifte køn",
        food: "planteplankton, smådyr, alger",
        levested: "Indo-Stillehavet",
    },
    {
        id: "Martin",
        spicies: "gulfinnet tun",
        color: "sølvfarvet med blå ryg og gule finner",
        size: "2,5 m",
        ability: "Kan svømme op til 80 km/t",
        food: "fisk, blæksprutter, krebsdyr",
        levested: "Atlanterhavet, Stillehavet og Det Indiske Ocean",
    },
    {
        id: "Allan",
        spicies: "kirurgfisk",
        color: "lilla, blå og gul",
        size: "15 til 40 cm",
        ability: "Kan skære med sin hale",
        food: "alger, plankton, smådyr",
        levested: "Indo-Stillehavet koraller, rev og klipper",
    },
    {
        id: "Hilmer",
        spicies: "Gul kirurgfisk",
        color: "gul med orange striber",
        size: "20 til 30 cm",
        ability: "Kan skære med sin hale",
        food: "alger, plankton, smådyr",
        levested: "Indo-Stillehavet koraller, rev og klipper",
    },
    {
        id: "Stella",
        spicies: "søstjerne",
        color: "lyseblå",
        size: "10 til 40 cm",
        ability: "Kan regenerere arme",
        food: "planteplankton, smådyr, alger",
        levested: "havbunden i lavt vand",
    },
    {
        id: "Gloria",
        spicies: "sild",
        color: "pink",
        size: "20 til 30 cm",
        ability: "Kan svømme i store stimer",
        food: "planteplankton, smådyr, alger",
        levested: "vandmasser i havet og kystnære områder",
    },
    {
        id: "Knud",
        spicies: "sandspisergobi",
        color: "sølv",
        size: "5 til 14 cm",
        ability: "Kan grave sig ned i sandet",
        food: "planteplankton, smådyr, alger",
        levested: "havbunden i lavt vand",
    },
    {
        id: "Lars-Hjortshaj",
        spicies: "tigerhaj",
        color: "grå med mørke striber",
        size: "3 til 4 m",
        ability: "Kan svømme hurtigt og jage bytte og spise stort set alt",
        food: "fisk, skildpadder, sæler, fugle, krabber, blæksprutter, mennesker, bildæk, affald",
        levested: "havene i tropiske og subtropiske områder",
    },
    {
        id: "Rasmus",
        spicies: "Rævefjæs",
        color: "gul, sort og blå",
        size: "20 til 24 cm",
        ability: "Kan have giftige finnestråler, der stikker, hvis den føler sig trådt over tæerne eller truet.",
        food: "tang",
        levested: "koralrev"
    }
];
console.log(fish);
console.log(fish[0].spicies);



var modal = document.getElementById("modalElmer");
var btn = document.getElementById("Elmerbtn");
var span = document.getElementsByClassName("closebtn")[0];

var modal = document.getElementById("modalHilmer");
var btn = document.getElementById("Hilmerbtn");

btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display ="none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}