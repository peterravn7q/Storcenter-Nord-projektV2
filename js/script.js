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


// Find alle links, der åbner en modal
var buttons = [
    { btn: "Elmerbtn", modal: "modalElmer" },
    { btn: "Hilmerbtn", modal: "modalHilmer" },
    { btn: "Stellabtn", modal: "modalStella"},
    { btn: "Gloriabtn", modal: "modalGloria"},
    { btn: "Lars-Hjortshajbtn", modal: "modalLars-Hjortshaj"},
    { btn: "Nemobtn", modal: "modalNemo" },
    { btn: "Johnbtn", modal: "modalJohn" },
    { btn: "Allanbtn", modal: "modalAllan" },
    { btn: "Rasmusbtn", modal: "modalRasmus" },
];

// Åbn den tilhørende modal
buttons.forEach(function(item) {
    var btn = document.getElementById(item.btn);
    var modal = document.getElementById(item.modal);

    btn.onclick = function(event) {
        event.preventDefault();
        modal.style.display = "block";
    };
});

// Luk modal ved klik på krydset
document.querySelectorAll(".closebtn").forEach(function(close) {
    close.onclick = function() {
        close.closest(".modal").style.display = "none";
    };
});

// Luk modal ved klik udenfor infoboksen
window.onclick = function(event) {
    if (event.target.classList.contains("modal")) {
        event.target.style.display = "none";
    }
};