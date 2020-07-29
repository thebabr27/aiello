firebaseConfig = {
apiKey: "AIzaSyAyPpwYB1X-e5VnUkUgJ2orPcDr9ybDHEU",
authDomain: "draggable-9f92b.firebaseapp.com",
databaseURL: "https://draggable-9f92b.firebaseio.com",
projectId: "draggable-9f92b",
storageBucket: "draggable-9f92b.appspot.com",
messagingSenderId: "1010593277055",
appId: "1:1010593277055:web:1b729dc7368b8f6f"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
console.log("firebase loaded");
var swiperH = new Swiper('.swiper-container-h', {cssMode:true,slidesPerView: 1,spaceBetween: 30,mousewheel: true,speed: 400,pagination: {el: '.swiper-pagination-h',clickable: true,}, navigation: {nextEl: '.swiper-button-next',prevEl: '.swiper-button-prev',},});var swiperV = new Swiper('.swiper-container-v', {cssMode:true,direction: 'vertical',slidesPerView: 1,spaceBetween: 30,speed: 400,pagination: {el: '.swiper-pagination-v',clickable: true,},});const buttonNewRes = document.getElementById("buttonNewRes");const buttonEditRes = document.getElementById("buttonEditRes");const buttonGoEditRes = document.getElementById("buttonGoEditRes");const inputName = document.getElementById("inputName");const buttonConfirm = document.getElementById("buttonConfirm");const buttonDaySelected = document.getElementById("buttonDaySelected");const codeForm = document.getElementById("codeForm");var inputDay ="", inputMonth ="", inputYear ="";var inputService = document.getElementById("inputService");var nameValidation=false,surnameValidation=false,emailValidation=false,phoneValidation=false,serviceValidation=false,dayValidation=false,monthValidation=false,yearValidation=false,previousSelDay;function toggleNewRes() { 
bulletClick(14);

};
buttonNewRes.addEventListener('click', e => {

toggleNewRes();
});

function toggleGoData() { 
verifyValidation(2);

};
buttonGoData.addEventListener('click', e => {

toggleGoData();
});

function toggleDaySelected() { 
verifyValidation(3);

};
buttonDaySelected.addEventListener('click', e => {

toggleDaySelected();
});

function toggleGoHour() { 
verifyValidation(4);

};
buttonHourSelected.addEventListener('click', e => {

toggleGoHour();
});

function toggleConfirmRes() { 
verifyValidation(5);

};
buttonConfirm.addEventListener('click', e => {

toggleConfirmRes();
});

function bulletClick(bul) { 
document.getElementsByClassName("swiper-pagination-bullet")[bul].click();

};
function validateInput(theInput) { 
if(theInput.value=='' ){
	theInput.style.border="3px solid red";
theInput.removeAttribute("valid");
return false

} else {
	theInput.style.border="1px solid #ced4da";
theInput.setAttribute("valid","true");
return true

}

};
function calendarClick(day) { 
inputDay = day.split("_")[0];
inputMonth = day.split("_")[1];
inputYear = day.split("_")[2];
console.log(inputDay);

console.log(inputMonth);

console.log(inputYear);

if(previousSelDay){
	document.getElementById(previousSelDay).classList.toggle("bg-warning");document.getElementById(previousSelDay).classList.toggle("bg-light");

}
document.getElementById(day).classList.toggle("bg-warning");document.getElementById(day).classList.toggle("bg-light");
previousSelDay = day;
buttonDaySelected.classList.remove("disabled");

};
function verifyValidation(section) { 
switch (section) {
case 1:
if(buttonEditRes.classList.contains("focus")){
	
} else {
	location.href = "#section1";

}
break;
case 2:
nameValidation= validateInput(inputName);
surnameValidation= validateInput(inputSurname);
emailValidation= validateInput(inputEmail);
phoneValidation= validateInput(inputPhone);
if(nameValidation && surnameValidation && emailValidation && phoneValidation){
	document.getElementById("dataSpin").classList.toggle("d-none");
setTimeout(( ) => {
	document.getElementById("dataSpin").classList.toggle("d-none");
bulletClick(15);

}, 500);


}
break;
case 3:
console.log(inputDay+" "+dayValidation);

console.log(inputYear+" "+yearValidation);

console.log(inputMonth+" "+monthValidation);

document.getElementById("calendarSpin").classList.toggle("d-none");
setTimeout(( ) => {
	document.getElementById("calendarSpin").classList.toggle("d-none");
bulletClick(16);

}, 500);

break;
case 4:
document.getElementById("hourSpin").classList.toggle("d-none");
setTimeout(( ) => {
	document.getElementById("hourSpin").classList.toggle("d-none");
bulletClick(17);

}, 500);

	document.getElementById("riepilogo").innerHTML = "<h5 class=' mb-4 card-title text-center'>Riepilogo Prenotazione</h5><p class=' card-text text-left'>Nome: "+inputName.value+"</p><p class=' card-text text-left'>Cognome: "+inputSurname.value+"</p><p class=' card-text text-left'>Data appuntamento: "+inputDay+"/"+inputMonth+"/"+inputYear+"</p><p class=' card-text text-left'>Orario appuntamento: "+inputHour.value+":"+inputMinutes.value+"</p><p class=' card-text text-left'>Servizio richiesto: "+inputService.value+"</p>";;

break;
case 5:
if (inputName.valid!=undefined && inputSurname.valid!=undefined && inputPhone.valid!=undefined && inputEmail.valid!=undefined ) {
document.getElementById("confirmSpin").classList.toggle("d-none");
setTimeout(( ) => {
	document.getElementById("confirmSpin").classList.toggle("d-none");
firebase.database().ref("db/aiello/public/"+inputSurname.value+"_"+inputName.value).set({"service": inputService.value,"name": inputName.value,"surname": inputSurname.value,"phone": inputPhone.value,"email": inputEmail.value,"hour": inputHour.value,"minutes": inputMinutes.value,"day": inputDay,"month": inputMonth,"year": inputYear,});

}, 500);

} else {
document.getElementById("riepilogo").style.border = "3px solid red";
};
break;
}

};
