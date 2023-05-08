

//begin hover bubbles functionality

function mOver(obj) {
   obj.innerHTML = "Mentor and Dev Ops Engineer"
 }
 
 function mOut(obj) {
   obj.innerHTML = "Brian Peck"
 }

 function mOverjesse(obj) {
   obj.innerHTML = "Assistant Branch Manager at ICCU"
 }
 
 function mOutjesse(obj) {
   obj.innerHTML = "Jesse Villalpando"
 }

 function mOverjen(obj) {
   obj.innerHTML = "Branch Manager ICCU"
 }
 
 function mOutjen(obj) {
   obj.innerHTML = "Jen Franklin"
 }


 function mOvermark(obj) {
   obj.innerHTML = "Branch Manager STCU"
 }
 
 function mOutmark(obj) {
   obj.innerHTML = "Mark Norisada"
 }

 //slide nav bar

document.getElementById("myBtn").addEventListener("click", open_close);

var menuState = 0 // close
function open_close() {
   if(menuState === 0){
    menuState = 1;
    document.getElementById("slidenav").style.width = "fit-content";
   }
   else {
    menuState = 0;
    document.getElementById("slidenav").style.width = "45px";
   }
   console.log(menuState);
} 

// folder tabs

document.getElementById("mediatabone").addEventListener("click", slideOut);

var tabImage = 0 // close
function slideOut() {
   if(tabImage === 0){
    tabImage = 1;
    document.getElementById("mediaone").style.display = "block";
   }
   else {
    tabImage = 0;
    document.getElementById("mediaone").style.display = "none";
   }
   console.log(tabImage);
}

document.getElementById("mediatabtwo").addEventListener("click", slideOutTwo);

var tabImage = 0 // close
function slideOutTwo() {
   if(tabImage === 0){
    tabImage = 1;
    document.getElementById("mediatwo").style.display = "block";
   }
   else {
    tabImage = 0;
    document.getElementById("mediatwo").style.display = "none";
   }
   console.log(tabImage);
} 

document.getElementById("mediatabthree").addEventListener("click", slideOutThree);

var tabImage = 0 // close
function slideOutThree() {
   if(tabImage === 0){
    tabImage = 1;
    document.getElementById("mediathree").style.display = "block";
   }
   else {
    tabImage = 0;
    document.getElementById("mediathree").style.display = "none";
   }
   console.log(tabImage);
} 

// skills game

function functJavaScript() {
   document.getElementById("resource").setAttribute('style', 'display: block');
   document.getElementById("resource").setAttribute('style', 'animation-duration: 4.2s;');
 }

 function functResearch() {
   document.getElementById("highenergy").setAttribute('style', 'display: block');
   document.getElementById("highenergy").setAttribute('style', 'animation-duration: 2.2s;');
 }

 function functHighEnergy() {
   document.getElementById("git").setAttribute('style', 'display: block');
   document.getElementById("git").setAttribute('style', 'animation-duration: 5.8s;');
 }

 function functGit() {
   document.getElementById("goals").setAttribute('style', 'display: block');
   document.getElementById("goals").setAttribute('style', 'animation-duration: 7s;');
 }
 
 function functResource() {
   document.getElementById("coach").setAttribute('style', 'display: block');
   document.getElementById("coach").setAttribute('style', 'animation-duration: 3s;');
 }

 //contact me form script

 