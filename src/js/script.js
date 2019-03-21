document.addEventListener("DOMContentLoaded", () => {
    var lat = 41.9061698;
    var long = 12.494124300000001;
    // Handler when the DOM is fully loaded
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            lat = position.coords.latitude;
            long = position.coords.longitude;
        }, function () {
            console.log('errore geo');
        });
    } else {
        console.log('geo non disponibile');
    }

    /* La Fetch API fornisce un'interfaccia moderna per ottenere risorse */
    const url = 'https://api.apixu.com/v1/current.json?key=';
    const key = '0db36efa0a20473b95a112940191203';
    var latlong = lat + ',' + long
    var requestURL = url + key + '&q=' + latlong;
    /*+'&q='+city*/

    const controller = new AbortController()
    const signal = controller.signal

    // per prima cosa ovviamente chiede l'url del nostro file json
    var getValue = () => fetch(requestURL, {
            signal
        })
        .then(response => response.json()) //qui avviene la risposta al server e viene trasferito in un file json
        .then(res => { //al quale possiamo accedere coi vari metodi da questa seconda parte
            console.log(res);
            loc = (res.location.tz_id);
            slashpos = loc.search("/")+1;
            locmod = loc.slice(slashpos);
            locdef = locmod.replace("_", " ");
            locdefdef = locdef.uppercase();
            document.getElementById('citta').innerHTML = locdefdef;
            document.getElementById('temperatura').innerHTML = res.current.temp_c + ' °';
            document.getElementById('weatherCity').innerHTML = res.current.condition.text;
            document.getElementById('icon').style.backgroundImage = "url(src/img/" + res.current.condition.text.toLowerCase() + ".png)";
            document.getElementById('humidity').innerHTML = res.current.humidity;
            document.getElementById('feelsLike').innerHTML = res.current.feelslike_c;
            /* per ciclare un array esiste il metodo .map (nomeArray.map (function(res){
            ... cosa deve far comparire ..
            })) */
        }).catch(err => { //in caso di errore stampamelo in console
            if (err.name === 'AbortError') {
                console.error('Fetch aborted')
            } else {
                console.error('Another error', err)
            }
        })
    getValue();

});


var day;

switch (new Date().getDay()) {
    case 0:
        day = "Domenica";
        break;
    case 1:
        day = "Lunedì";
        break;
    case 2:
        day = "Martedì";
        break;
    case 3:
        day = "Mercoledì";
        break;
    case 4:
        day = "Giovedì";
        break;
    case 5:
        day = "Venerdì";
        break;
    case 6:
        day = "Sabato";
}

document.getElementById("giorno").innerHTML = day;

var exp = new Date().getHours();
var exp2 = new Date().getMinutes();
var orario = exp + ":" + exp2;

document.getElementById("orario").innerHTML = orario;

switch (exp) {
    case ( 5 < exp < 7):
        orario = "mattino";
        break;
    case ( exp < 18):
        orario = "giorno";
        break;
    case ( exp < 21):
        orario = "sera";
        break;
    case ( exp < 5):
        orario = "notte";
}

document.getElementById("all").style.backgroundImage = "url(src/img/" + orario +".png)";
