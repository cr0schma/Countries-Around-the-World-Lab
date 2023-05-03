class Country {
    constructor(name, lang, greeting, colors) {
        this.name = name;
        this.lang = lang;
        this.greeting = greeting;
        this.colors = colors;
    }
}
let usa = new Country("USA", "Murican", "Why Hello there world! Have some McDonalds", ["red", "white", "blue"]);
let mexico = new Country("Mexico", "Spanish", "Hola mundo!", ["red", "white", "green"]);
let algeria = new Country("Algeria", "Arabic and Berber", "Sup", ["blue", "yellow", "red"])
let germany = new Country("Germany", "German", "Hallo", ["black", "red", "gold"])
let japan = new Country("Japan", "Japanese", "Kon'nichiwa", ["darkred", "white", "white"])

function SwitchCountry(selection) {
    let input = selection;
    let country;

    function CountrySpecific(selection) {
        document.getElementById('CountryName').innerText = selection.name
  
        document.getElementById('OfficialLanguage').innerText = selection.lang

        document.getElementById('HelloWorld').innerText = selection.greeting
    }

    function DisplayColors (selection) {
        document.getElementById('Color1').style.backgroundColor = selection.colors[0]

        document.getElementById('Color2').style.backgroundColor = selection.colors[1]

        document.getElementById('Color3').style.backgroundColor = selection.colors[2]
    }

    function displayImage(src, width, height) {
        var img = document.getElementById("getImage");
        img.src = src;
        img.width = width;
        img.height = height;
        img.style.marginLeft = "auto";
        img.style.marginRight = "auto";
        img.style.display = "block";
    }

    if (input === "USA") {
        //set country to usa 
        country = usa;
        
        CountrySpecific(country)
        DisplayColors(country)
        displayImage(`images/${input}.png`, 400, 200)
        
    }
    else if (input === "Mexico") {
        country = mexico;

        CountrySpecific(country)
        DisplayColors(country)
        displayImage(`images/${input}.png`, 400, 200)
    }
    else if (input === "Algeria") {
        country = algeria;

        CountrySpecific(country)
        DisplayColors(country)
        displayImage(`images/${input}.png`, 400, 200)
    }
    else if (input === "Germany") {
        country = germany;

        CountrySpecific(country)
        DisplayColors(country)
        displayImage(`images/${input}.png`, 400, 200)
    }
    else if (input === "Japan") {
        country = japan;

        CountrySpecific(country)
        DisplayColors(country)
        displayImage(`images/${input}.png`, 400, 200)
    }

}
