//Variables
let day; //-----------------------------------------------------------nuova variabile "day" vuota
let numberDays = 7; //------------------------------------------------nuova variabile "numberDays"=7

var container = document.getElementById('week'); //-------------------nuova variabile "container"=l'elemento con ID "week"

//Language
let lang = 'it';//----------------------------------------------------nuova variabile "lang"='it'

//API Address
const url = 'https://api.apixu.com/v1/forecast.json?key=';//----------nuova costante "url"=(il json)
const key = '0db36efa0a20473b95a112940191203';//----------------------nuova costante "key"=(la chiave)
let requestURL;//----------------------------------------------------nuova variabile "requestURL" vuota

//GeoLocation
let GetLocation = () => {//------------------------------------------nuova funzione "GetLocation" senza parametri
    let nav = navigator.geolocation//--------------------------------nuova variabile "nav"=navigator.geolocation
    if (nav) {//-----------------------------------------------------ciclo IF con parametro variabile nav
        nav.getCurrentPosition((position) => {//---------------------azione => funzione getCurrentPosition con parametro variabile position
            latlong = position.coords.latitude + ',' + position.coords.longitude;//variabile latlong = latitudine +","+longitudine
            requestURL = url + key + '&lang=' + lang + '&q=' + latlong + '&days=' + numberDays;//variabile requestURL = url + key + "&lang=" + lang + "&q=" + latlong + "&days" + numberDays
            console.log(latlong)
        }, () => {//-------------------------------------------------altra funzione senza parametri
            requestURL = url + key + '&lang=' + lang + '&q=Rome' + '&days=' + numberDays;
            console.log('errore geo');
        });
    } else {
        requestURL = url + key + '&lang=' + lang + '&q=Rome' + '&days=' + numberDays;
        console.log('geo non disponibile');
    }
}

//Create HTML on Call
let CreateWeek = (day, temp, weather, link ) =>{
    let box = document.createElement('a');
        box.className = 'row';
        box.href = "/day1";
    let choosenDay = document.createElement('h3');
        choosenDay.innerHTML = day
    let choosenTemp = document.createElement('h4');
        choosenTemp.innerHTML = temp
    let icon = document.createElement('img');
        icon.src = weather;
    box.append(choosenDay, choosenTemp, icon);
    container.append(box);
}

//Get Data from Apixu
let getMeteoData = () => fetch(requestURL)
    .then(response => response.json())
    .then(array => {
        var result = array.forecast.forecastday;
        container.innerHTML = ' ';
        currentDay = new Date().getDay()
        var changeDay = 0;
        console.log(result)
        for (i = 0; i < result.length; i++) {
            if (changeDay > (6-currentDay)){
                changeDay = -currentDay;
            }
            switch (currentDay + changeDay) {
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
            switch (changeDay){
                case 0:
                    day = "Oggi";
                    break;
                case 1:
                    day = "Domani";
                    break;
            }
            changeDay++;
            CreateWeek(day, result[i].day.avgtemp_c, result[i].day.condition.icon )

          }
    }).catch(err => {
        if (err.name === 'AbortError') {
            console.error('Fetch aborted')
        } else {
            console.error('Another error', err)
        }
    })

window.onload = () =>{
    GetLocation()
    setInterval( GetLocation, 55000);
    setTimeout( getMeteoData, 100);
    setInterval( getMeteoData, 60000);
}

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
