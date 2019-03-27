document.addEventListener("DOMContentLoaded", () => {
    var lat = 41.9061698;
    var long = 12.494124300000001;
    // Handler when the DOM is fully loaded
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            lat = position.coords.latitude;
            long = position.coords.longitude;
        }, function () {
        });
    } else {
        console.log('geo non disponibile');
    }

    /* La Fetch API fornisce un'interfaccia moderna per ottenere risorse */
    const url = 'https://api.apixu.com/v1/forecast.json?key=';
    const key = '87d7c0c10b874d8fbfb91809192202';
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
            cond = (res.current.condition.text);
            cond2 = cond.replace(" ", "_");
            condef = cond2.toLowerCase();
               
            document.getElementById('citta').innerHTML = locdef;
            document.getElementById('temperatura').innerHTML = res.current.temp_c + ' °';
            /*document.getElementById('weatherCity').innerHTML = res.current.condition.text;*/
            document.getElementById('maxi-icona').style.backgroundImage = 'url("src/img/" + condef + ".svg")';
            /*
            document.getElementById('humidity').innerHTML = res.current.humidity;
            document.getElementById('feelsLike').innerHTML = res.current.feelslike_c;
             per ciclare un array esiste il metodo .map (nomeArray.map (function(res){
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

var bgalba = "linear-gradient(180deg, #9FC1F7 0%, #E48C75 100%)"
var bgmatt = "linear-gradient(180deg, #3C8AFC 0%, #ACD9F4 100%)"
var bgpome = "linear-gradient(180deg, #1A6DE1 0%, #8AD4F1 100%)"
var bgsera = "linear-gradient(180deg, #03223F 0%, #7D4D7B 50.83%, #DD7962 100%)"
var bgnotte = "linear-gradient(180deg, #000203 0%, #002746 100%)"


switch (exp) {
  case (0):
  document.getElementById("allprova").style.background = bgnotte; //h0
  document.getElementById("titolo").innerHTML = "<br><br><br>Buonanotte...";
  document.getElementById("sottotitolo").innerHTML = "Ricorda di mettere la sveglia per domani";
  var element = document.getElementById("animazione");
  element.classList.add("hidden");
  break;
  case (1):
  document.getElementById("allprova").style.background = bgnotte; //h0
  document.getElementById("titolo").innerHTML = "<br><br><br>Buonanotte...";
  document.getElementById("sottotitolo").innerHTML = "Ricorda di mettere la sveglia per domani";
  var element = document.getElementById("animazione");
  element.classList.add("hidden");
  break;
  case (2):
  document.getElementById("allprova").style.background = bgnotte; //h0
  document.getElementById("titolo").innerHTML = "<br><br><br>Buonanotte...";
  document.getElementById("sottotitolo").innerHTML = "Ricorda di mettere la sveglia per domani";
  var element = document.getElementById("animazione");
  element.classList.add("hidden");
  break;
  case (3):
  document.getElementById("allprova").style.background = bgnotte; //h0
  document.getElementById("titolo").innerHTML = "<br><br><br>Buonanotte...";
  document.getElementById("sottotitolo").innerHTML = "Ricorda di mettere la sveglia per domani";
  var element = document.getElementById("animazione");
  element.classList.add("hidden");
  break;
  case (4):
  document.getElementById("allprova").style.background = bgnotte; //h0
  document.getElementById("titolo").innerHTML = "<br><br><br>Buonanotte...";
  document.getElementById("sottotitolo").innerHTML = "Ricorda di mettere la sveglia per domani";
  var element = document.getElementById("animazione");
  element.classList.add("hidden");
  break;
  case (5):
  document.getElementById("allprova").style.background = bgnotte; //h0
  document.getElementById("titolo").innerHTML = "<br><br><br>Buonanotte...";
  document.getElementById("sottotitolo").innerHTML = "Ricorda di mettere la sveglia per domani";
  var element = document.getElementById("animazione");
  element.classList.add("hidden");
  break;
  case (6):
  document.getElementById("allprova").style.background = bgalba; //h6
  break;
  case (7):
  document.getElementById("allprova").style.background = bgalba; //h6
  break;
  case (8):
  document.getElementById("allprova").style.background = bgalba; //h6
  break;
  case (9):
  document.getElementById("allprova").style.background = bgmatt; //h9
  break;
  case (10):
  document.getElementById("allprova").style.background = bgmatt; //h9
  break;
  case (11):
  document.getElementById("allprova").style.background = bgmatt; //h9
  break;
  case (12):
  document.getElementById("allprova").style.background = bgmatt; //h9
  break;
  case (13):
  document.getElementById("allprova").style.background = bgmatt; //h9
  break;
  case (14):
  document.getElementById("allprova").style.background = bgpome; //h14
  break;
  case (15):
  document.getElementById("allprova").style.background = bgpome; //h14
  break;
  case (16):
  document.getElementById("allprova").style.background = bgpome; //h14
  break;
  case (17):
  document.getElementById("allprova").style.background = bgpome; //h14
  break;
  case (18):
  document.getElementById("allprova").style.background = bgpome; //h14
  break;
  case (19):
  document.getElementById("allprova").style.background = bgsera; //h19
  break;
  case (20):
  document.getElementById("allprova").style.background = bgsera; //h19
  break;
  case (21):
  document.getElementById("allprova").style.background = bgnotte; //h23
  document.getElementById("titolo").innerHTML = "<br><br><br>Buonanotte..."; //h4
  document.getElementById("sottotitolo").innerHTML = "Ricorda di mettere la sveglia per domani"; //h4
  var element = document.getElementById("animazione");
  element.classList.add("hidden");
  break;
  case (22):
  document.getElementById("allprova").style.background = bgnotte; //h23
  document.getElementById("titolo").innerHTML = "<br><br><br>Buonanotte..."; //h4
  document.getElementById("sottotitolo").innerHTML = "Ricorda di mettere la sveglia per domani"; //h4
  var element = document.getElementById("animazione");
  element.classList.add("hidden");
  break;
  case (23):
  document.getElementById("allprova").style.background = bgnotte; //h23
  document.getElementById("titolo").innerHTML = "<br><br><br>Buonanotte..."; //h4
  document.getElementById("sottotitolo").innerHTML = "Ricorda di mettere la sveglia per domani"; //h4
  var element = document.getElementById("animazione");
  element.classList.add("hidden");
  break;
}


if (exp < 10)
{
  expdef = ("0"+exp);
} else {
    expdef = exp;
  }



if (exp2 < 10)
{
  exp2def = ("0"+exp2);
} else {
    exp2def = exp2;
  }

var orario = expdef + ":" + exp2def;

document.getElementById("orario").innerHTML = orario;


/*
document.getElementById("allprova").style.background = linear-gradient(180deg, #9FC2F8 0%, #E58C74 100%);
*/
