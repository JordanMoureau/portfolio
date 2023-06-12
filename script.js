

//slide out navigation bar

document.getElementById("heartbutton").addEventListener("click", open_close);

var menuState = 0 // close
function open_close() {
   if(menuState === 0){
    menuState = 1;
    document.getElementById("slidenav").style.width = "fit-content";
   }
   else {
    menuState = 0;
    document.getElementById("slidenav").style.width = "37px";
   }
   console.log(menuState);
} 


//begin JS for infinte slide for mobile portfolio display
let sliderWrap = document.querySelector('.mobile-portfolio-wrap');
let slider = document.querySelector('.mobile-portfolio');
let clonesWidth;
let sliderWidth;
let clones = [];
let disableScroll = false;
let scrollPos;

let items = [...document.querySelectorAll('.item')];
let images = [...document.querySelectorAll('.img-div')];

images.forEach((images, idx) => {
    images.style.backgroundImage = `url(./images/${idx+1}.png)`
})

items.forEach(item => {
    let clone = item.cloneNode(true);
    clone.classList.add('clone');
    slider.appendChild(clone);
    clones.push(clone);
})

function getClonesWidth(){
    let width = 0;
    clones.forEach(clone => {
        width += clone.offsetWidth;
    })

    return width;
}

function getScrollPos(){
    return window.scrollY;
}

//takes a pixel position and sets window to scroll

function scrollUpdate(){
    if(window.innerWidth > 2000){
      scrollPos = getScrollPos();
      if(clonesWidth + scrollPos >= sliderWidth){
          window.scrollTo({top:1});
      } else if (scrollPos <= 0) {
          window.scrollTo({top: sliderWidth - clonesWidth - 1})
      }
  
      slider.style.transform = `translateX(${-window.scrollY}px)`
  
      requestAnimationFrame(scrollUpdate)
    } else {
      sliderWrap.style.overflow = 'scroll';
    }
  }

function onLoad(){
    calculateDimensions()
    window.scrollTo({top:1});
    scrollUpdate();
}

function calculateDimensions(){
    sliderWidth = slider.getBoundingClientRect().width;
    clonesWidth = getClonesWidth();
}

onLoad()

//contact me form

const form = document.getElementById('form');
const result = document.getElementById('result');
const message = document.getElementById('message');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  const formData = new FormData(form);
  const object = Object.fromEntries(formData);
  const json = JSON.stringify(object);
  message.innerHTML = "<p>Sending your message...</p>";
  document.getElementById("submit").style.display = "none";

    fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: json
        })
        .then(async (response) => {
            let json = await response.json();
            if (response.status == 200) {
                result.innerHTML = "<h3>Message Sent!</h3><p>I'll be in touch.</p>";
                result.style.backgroundColor = "#F2AEC9";
                form.style.display = "none";
                message.style.display = "none";
            } else {
                console.log(response);
                result.innerHTML = json.message;
            }
        })

        .catch(error => {
            console.log(error);
            result.innerHTML = "Something went wrong!";
        })

        .then(function() {
            form.reset();
            setTimeout(() => {
                result.style.display = "none";
                form.style.display = "block";
                document.getElementById("submit").style.display = "block";
            }, 6000);
        });
});

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


function bigOneMask() {
    document.getElementById("bigOne").style.backgroundColor = "#fff";
    document.getElementById("bigOne").style.backgroundImage = "none";
    document.getElementById("bigOne").innerHTML = "The Mission is Love.";
  }
  
  function bigOneClick (){
    window.open("http://loveflowers.jordanmoureau.com/");
  }
  
  function bigOneOut() {
      document.getElementById("bigOne").style.backgroundColor = "white";
    document.getElementById("bigOne").innerHTML = "";
    document.getElementById("bigOne").style.backgroundImage = "url(images/loveandflowers.png)";
  }
  
  function bigTwoMask() {
    document.getElementById("bigTwo").style.backgroundColor = "#fff";
    document.getElementById("bigTwo").style.backgroundImage = "none";
    document.getElementById("bigTwo").innerHTML = "Poems and Grids.";
  }
  
  function bigTwoClick (){
    window.open("https://winter.jordanmoureau.com");
  }
  
  function bigTwoOut() {
      document.getElementById("bigTwo").style.backgroundColor = "white";
    document.getElementById("bigTwo").innerHTML = "";
    document.getElementById("bigTwo").style.backgroundImage = "url(images/emilywinter.png)";
  }
  
  function bigThreeClick (){
    window.open("https://blog.jordanmoureau.com");
  }
  
  function bigThreeMask() {
    document.getElementById("bigThree").style.backgroundColor = "#fff";
    document.getElementById("bigThree").style.backgroundImage = "none";
    document.getElementById("bigThree").innerHTML = "That's Ms Developer to You.";
  }
  
  function bigThreeOut() {
      document.getElementById("bigThree").style.backgroundColor = "white";
    document.getElementById("bigThree").innerHTML = "";
    document.getElementById("bigThree").style.backgroundImage = "url(images/blog.png)";
  }
  
  function bigFourMask() {
    document.getElementById("bigFour").style.backgroundColor = "#fff";
    document.getElementById("bigFour").style.backgroundImage = "none";
    document.getElementById("bigFour").innerHTML = "A text heavy blog concept.";
  }
  
  function bigFourClick (){
    window.open("https://wtwc.jordanmoureau.com");
  }
  
  function bigFourOut() {
      document.getElementById("bigFour").style.backgroundColor = "white";
    document.getElementById("bigFour").innerHTML = "";
    document.getElementById("bigFour").style.backgroundImage = "url(images/wtwc.png)";
  }
  
  function bigFiveMask() {
    document.getElementById("bigFive").style.backgroundColor = "#fff";
    document.getElementById("bigFive").style.backgroundImage = "none";
    document.getElementById("bigFive").innerHTML = "For Keeping track of my Life.";
  }
  
 function bigFiveClick (){
    window.open("https://todo.jordanmoureau.com");
  }
  
  function bigFiveOut() {
    document.getElementById("bigFive").innerHTML = "";
    document.getElementById("bigFive").style.backgroundImage = "url(images/inayearsite.png)";
  }
  
  function littleOneMask() {
    document.getElementById("littleOne").style.gridArea = "1 / 3 / span2 / span2";
    document.getElementById("littleTwo").style.display = "none";
    document.getElementById("littleThree").style.display = "none";
    document.getElementById("littleFour").style.display = "none";
    document.getElementById("littleOne").style.backgroundSize= "cover";
  }
  
  function littleOneOut() {
    document.getElementById("littleOne").style.gridArea = "1 / 3 / 1 / 3";
  document.getElementById("littleOne").style.backgroundImage = "url(images/rose&Axe.png)";
  document.getElementById("littleTwo").style.display = "block";
  document.getElementById("littleThree").style.display = "block";
  document.getElementById("littleFour").style.display = "block";
  document.getElementById("littleOne").style.backgroundSize= "330px";
  }
  
  function littleTwoMask() {
    document.getElementById("littleTwo").style.gridArea = "1 / 3 / span2 / span2";
    document.getElementById("littleOne").style.display = "none";
    document.getElementById("littleThree").style.display = "none";
    document.getElementById("littleFour").style.display = "none";
  }
  
  function littleTwoOut() {
    document.getElementById("littleTwo").style.gridArea = "1 / 4 / 1 / 4";
  document.getElementById("littleOne").style.display = "block";
  document.getElementById("littleThree").style.display = "block";
  document.getElementById("littleFour").style.display = "block";
  }
  
  function littleThreeMask() {
    document.getElementById("littleThree").style.gridArea = "1 / 3 / span2 / span2";
    document.getElementById("littleOne").style.display = "none";
    document.getElementById("littleTwo").style.display = "none";
    document.getElementById("littleFour").style.display = "none";
  }
  
  function littleThreeOut() {
    document.getElementById("littleThree").style.gridArea = "2 / 3 / 2 / 3";
  document.getElementById("littleOne").style.display = "block";
  document.getElementById("littleTwo").style.display = "block";
  document.getElementById("littleFour").style.display = "block";
  }
  
  function littleFourMask() {
    document.getElementById("littleFour").style.gridArea = "1 / 3 / span2 / span2";
    document.getElementById("littleOne").style.display = "none";
    document.getElementById("littleTwo").style.display = "none";
    document.getElementById("littleThree").style.display = "none";
    document.getElementById("littleFour").style.backgroundSize= "cover";
  }
  
  function littleFourOut() {
    document.getElementById("littleFour").style.gridArea = "2 / 4 / 2 / 4";
  document.getElementById("littleOne").style.display = "block";
  document.getElementById("littleTwo").style.display = "block";
  document.getElementById("littleThree").style.display = "block";
  document.getElementById("littleFour").style.backgroundSize= "320px";
  }
  
  function littleNineMask() {
    document.getElementById("littleNine").style.gridArea = "1 / 2 / span2 / 2";
    document.getElementById("littleTen").style.display = "none";
    document.getElementById("littleNine").style.backgroundSize= "cover";
    document.getElementById("littleNine").style.backgroundPosition= "center";
  }
  
  function littleNineOut() {
    document.getElementById("littleNine").style.gridArea = "1 / 2 / 1 / 2";
  document.getElementById("littleTen").style.display = "block";
  document.getElementById("littleNine").style.backgroundSize= "440px";
  document.getElementById("bigFive").style.display = "block";
  
  }
  
  function littleTenMask() {
    document.getElementById("littleTen").style.gridArea = "1 / 2 / span2 / 2";
    document.getElementById("littleNine").style.display = "none";
  }
  
  function littleTenOut() {
    document.getElementById("littleTen").style.gridArea = "2 / 2 / 2 / 2";
  document.getElementById("littleNine").style.display = "block";
  document.getElementById("bigFive").style.display = "block";
  
  }