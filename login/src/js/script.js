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
const auth = firebase.auth();loginButton.addEventListener("click", e => {const email = inputEmail.value;const pass = inputPassword.value;const promise = auth.signInWithEmailAndPassword(email,pass);promise.catch(e => console.log("err"));});logoutButton.addEventListener("click", e => {firebase.auth().signOut();});function onClickLogin() { 
document.getElementById("loginSpin").classList.toggle("d-none");
setTimeout(function(){document.getElementById("loginSpin").classList.toggle("d-none");
},3000);


};
loginButton.addEventListener('click', e => {

onClickLogin();
});

firebase.auth().onAuthStateChanged(firebaseUser => {if (firebaseUser) {document.getElementById("loginGroup").classList.toggle("d-none");
document.getElementById("logoutGroup").classList.toggle("d-none");

console.log("logged in");} else {console.log("not logged in");			document.getElementById("logoutGroup").classList.add("d-none");
	document.getElementById("loginGroup").classList.remove("d-none");

}});$(".hamburger").on("click", ()=>{$(".overlay").toggleClass("h-100");$(".navbar").toggleClass("shadow");$(".hamburger span").toggleClass("fa-bars");$(".hamburger span").toggleClass("fa-times");$(".hamburger").toggleClass("unclickable");setTimeout(()=>{$(".hamburger").toggleClass("unclickable");},500);});