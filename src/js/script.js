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
// Initialize Swiper
var mySwiper = new Swiper (
	'.swiper-container', {
	direction: 'horizontal',
	loop: true, 
	pagination: {	
	el: '.swiper-pagination',
	dynamicBullets: true,
	}, 
	navigation: {
	nextEl: '.swiper-button-next', 
	prevEl: '.swiper-button-prev',
	}
});
console.log("swiper loaded");const buttonNewRes = document.getElementById("buttonNewRes");const buttonEditRes = document.getElementById("buttonEditRes");const inputName = document.getElementById("inputName");const buttonConfirm = document.getElementById("buttonConfirm");const buttonDaySelected = document.getElementById("buttonDaySelected");const codeForm = document.getElementById("codeForm");var inputDay ="", inputMonth ="", inputYear ="";var inputService = document.getElementById("inputService");var nameValidation=false,surnameValidation=false,emailValidation=false,phoneValidation=false,serviceValidation=false,dayValidation=false,monthValidation=false,yearValidation=false,previousSelDay;function toggleGoEditRes() { 
verifyValidation(1);
setTimeout(( ) => {
	document.getElementById("inputName").focus();

}, 500);


};
buttonGoEditRes.addEventListener('click', e => {

toggleGoEditRes();
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
buttonGoHour.addEventListener('click', e => {

toggleGoHour();
});

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
	location.href = "#section2";

}
break;
case 3:
console.log(inputDay+" "+dayValidation);

console.log(inputYear+" "+yearValidation);

console.log(inputMonth+" "+monthValidation);

location.href = "#section3";
break;
case 4:
location.href = "#section4";
	document.getElementById("riepilogo").innerHTML = "<h5 class=' card-title text-center'>Riepilogo Prenotazione</h5><p class=' card-text'>"+inputName.value+"</p><p class=' card-text'>"+inputSurname.value+"</p><p class=' card-text'>"+inputDay+"/"+inputMonth+"/"+inputYear+"</p><p class=' card-text'>"+inputHour.value+":"+inputMinutes.value+"</p>";;

break;
}

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
function toggleNewRes() { 
toggleNewEditRes();
toggleCodeForm();

};
buttonNewRes.addEventListener('click', e => {

toggleNewRes();
});

function toggleEditRes() { 
toggleNewEditRes();
toggleCodeForm();

};
buttonEditRes.addEventListener('click', e => {

toggleEditRes();
});

function toggleCodeForm() { 
codeForm.classList.toggle("d-none");

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
function toggleNewEditRes() { 
buttonNewRes.classList.toggle("active");
buttonNewRes.classList.toggle("focus");
buttonEditRes.classList.toggle("active");
buttonEditRes.classList.toggle("focus");

};
function confirmAction() { 
firebase.database().ref("db/aiello/public/customer1").set({"service": inputService.value,"name": inputName.value,"surname": inputSurname.value,"phone": inputPhone.value,"email": inputEmail.value,"hour": inputHour.value,"minutes": inputMinutes.value,"day": inputDay,"month": inputMonth,"year": inputYear,});

};
buttonConfirm.addEventListener('click', e => {

confirmAction();
});

