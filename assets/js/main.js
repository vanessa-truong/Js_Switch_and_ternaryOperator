console.log("läuft");

// Switch Bundesländer
// let bundeslandInfo = document.getElementById('bundeslandInfo').value;
// let bundeslandInfoErgebnis = document.getElementById('bundeslandInfoErgebnis');


function check() {

    let bundeslandInfo = document.getElementById('bundeslandInfo').value;
    let text

    switch (bundeslandInfo) {
        case "Baden-Württemberg":
            text = "Baden-Württemberg hat 10,880 Mio Einwohner und Stuttgart ist die Hauptstadt";
            break;
        case "Bayern":
            text = "Bayern hat 12,844 Mio Einwohner und München ist die Hauptstadt";
            break;
        case "Berlin":
            text = "Berlin hat 3,520 Mio Einwohner und Berlin ist die Hauptstadt";
            break;
        case "Brandenburg":
            text = "Brandenburg hat 2,485 Mio Einwohner und Potsdam ist die Hauptstadt";
            break;
        case "Bremen":
            text = "Bremen hat 0,671 Mio Einwohner und Bremen ist die Hauptstadt";
            break;
        case "Hamburg":
            text = "Hamburg hat 1,787 Mio Einwohner und Hamburg ist die Hauptstadt";
            break;
        case "Hessen":
            text = "Hessen hat 6,176 Mio Einwohner und Wiesbaden ist die Hauptstadt";
            break;
        case "Mecklenburg-Vorpommern":
            text = "Mecklenburg-Vorpommern hat 1,612 Mio Einwohner und Schwerin ist die Hauptstadt";
            break;
        case "Niedersachsen":
            text = "Niedersachsen hat 7,927 Mio Einwohner und Hannover ist die Hauptstadt"
            break;
        case "Nordrhein-Westfahlen":
            text = "Nordrhein-Westfalen hat 17,865 Mio Einwohner und Düsseldorf ist die Hauptstadt";
            break;
        case "Rheinland-Pfalz":
            text = "Rheinland-Pfalz hat 4,053 Mio Einwohner und Mainz ist die Hauptstadt";
            break;
        case "Saarland":
            text = "Saarland hat 0,996 Mio Einwohner und Saarbrücken ist die Hauptstadt";
            break;
        case "Sachsen":
            text = "Sachsen hat 4,085 Mio Einwohner und Dresden ist die Hauptstadt"
            break;
        case "Sachsen-Anhalt":
            text = "Sachsen-Anhalt hat 2,245 Mio Einwohner und Magdeburg ist die Hauptstadt";
            break;
        case "Schleswig-Holstein":
            text = "Schleswig-Holstein hat 2,859 Mio Einwohner und Kiel ist die Hauptstadt";
            break;
        case "Thüringen":
            text = "Thüringen hat 2,171 Mio Einwohner und Erfurt ist die Hauptstadt"
            break;
        default:
            text = "Ein solches Bundesland gibt es in Deutschland nicht.";
            break;



    }
    document.getElementById("bundeslandInfoErgebnis").innerHTML = text;
}



// Level 2_7 Switch Break DHL

function showtxt() {

    const wahl = document.getElementById('mylist').value;
    let ergebnis = document.getElementById('masse');

    switch (wahl) {

        case "0":
            ergebnis.innerHTML = `<b>Brief und Postkarte</b> <br>
            L: 10 - 23,5 cm
            B: 7 - 12,5 cm
            H: bis 1 cm`
            break;
        case "1":
            ergebnis.innerHTML = `<b>DHL Paket 2 kg</b> <br>
            bis 60 x 30 x 15 cm`
            break;
        case "2":
            ergebnis.innerHTML = `
            <b>DHL Paket 5 kg</b> <br>
            bis 120 x 60 x 60 cm`
            break;
        case "3":
            ergebnis.innerHTML = `
            <b>DHL Paket 10 kg</b> <br>
            bis 120 x 60 x 60 cm`
            break;
        default:
            ergebnis.innerHTML = `"<b>Extra große Größe</b>`
    }

}


// Ternary Operator - AGE Aufgabe

function check() {
    let result = document.querySelector('#result');
    let age = document.getElementById('inputAge').value < "18" == true;

    age ? result.innerHTML = "minderjährig" : result.innerHTML = "volljährig"
}



//Ternary Operator - Passwort Aufgabe

function passCheck() {

    let eingabe = document.getElementById('password').value.length > 8 == true;
    let antwort = document.getElementById('ergebnis');

    eingabe ? antwort.innerHTML = "<span style='color:green'>Welcome to your Account</span >" : antwort.innerHTML = "Your Password is to short";
}