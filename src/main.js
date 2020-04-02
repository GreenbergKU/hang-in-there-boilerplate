//<script src="../hang_src_try/try.js"></script>
// query selector variables go here 👇
var backToMainBtn = document.querySelector('.back-to-main'); //this button take you back to main page from saved poster page
var imageInput = document.querySelector('#poster-image-url'); //this is the image input section for make your our poster
var mainPosterSec = document.querySelector('.main-poster'); //this is the main poster page
var makePosterBtn = document.querySelector('.show-form'); //this is the button for 'make your our poster'
var makePosterSec = document.querySelector('.poster-form'); //this is the 'make your poster' form page
var nevermindBtn = document.querySelector('.show-main'); //this is the 'nevermind,take me back' button
var quoteInput = document.querySelector('#poster-quote'); //this is the quote input section for make you own poster
var randomButton = document.querySelector('.show-random') //this is the show random poster button
var savedPostersBtn = document.querySelector('.show-saved'); //this is the show saved button
var savedPostersGrid = document.querySelector('.saved-posters-grid'); //this is the are where the saved posters go
var savedPostersSec = document.querySelector('.saved-posters'); //this is the saved posters page
var saveMyPosterBtn = document.querySelector('.save-poster'); // this button saves the poster made
var showPosterBtn = document.querySelector('.make-poster'); //This is the show my poster button
var targetImage = document.querySelector('.poster-img'); //This is the main poster image
var targetQuote = document.querySelector('.poster-quote'); //this is the main poster quote
var targetTitle = document.querySelector('.poster-title'); //this is the main poster title
var titleInput = document.querySelector('#poster-title'); //this is the input title section for the make you poster page
var tossOutDiv = document.querySelector('.mini-poster'); //this is the grid page, all 9 mini-posters areas, purpose: doubleclick delete
var tossOutMini = document.querySelector('.div.mini-poster'); //this is the grid page, all 9 mini-posters areas, purpose: doubleclick delete

var images = [
  "./assets/bees.jpg",
  "./assets/bridge.jpg",
  "./assets/butterfly.jpg",
  "./assets/cliff.jpg",
  "./assets/elephant.jpg",
  "./assets/flock.jpg",
  "./assets/fox.jpg",
  "./assets/frog.jpg",
  "./assets/horse.jpg",
  "./assets/lion.jpg",
  "./assets/mountain.jpg",
  "./assets/pier.jpg",
  "./assets/puffins.jpg",
  "./assets/pug.jpg",
  "./assets/runner.jpg",
  "./assets/squirrel.jpg",
  "./assets/tiger.jpg",
  "./assets/turtle.jpg"
];

var titles = [
  "determination",
  "success",
  "inspiration",
  "perspiration",
  "grit",
  "empathy",
  "feelings",
  "hope",
  "believe",
  "try",
  "conviction",
  "accomplishment",
  "achievement",
  "ambition",
  "clarity",
  "challenge",
  "commitment",
  "confidence",
  "action",
  "courage",
  "focus",
  "breathe",
  "gratitude",
  "imagination",
  "kindness",
  "mindfulness",
  "knowledge",
  "opportunity",
  "passion",
  "patience",
  "practice",
  "smile",
  "trust",
  "understanding",
  "wisdom"
];

var quotes = [
  "Don’t downgrade your dream just to fit your reality, upgrade your conviction to match your destiny.",
  "You are braver than you believe, stronger than you seem and smarter than you think.",
  "You are confined only by the walls you build yourself.",
  "The one who has confidence gains the confidence of others.",
  "Act as if what you do makes a difference. It does.",
  "Success is not final, failure is not fatal: it is the courage to continue that counts.",
  "Never bend your head. Always hold it high. Look the world straight in the eye.",
  "What you get by achieving your goals is not as important as what you become by achieving your goals.",
  "Believe you can and you're halfway there.",
  "When you have a dream, you've got to grab it and never let go.",
  "I can't change the direction of the wind, but I can adjust my sails to always reach my destination.",
  "No matter what you're going through, there's a light at the end of the tunnel.",
  "It is our attitude at the beginning of a difficult task which, more than anything else, will affect its successful outcome.",
  "Life is like riding a bicycle. To keep your balance, you must keep moving.",
  "Just don't give up trying to do what you really want to do. Where there is love and inspiration, I don't think you can go wrong.",
  'Limit your "always" and your "nevers."',
  "You are never too old to set another goal or to dream a new dream.",
  "Try to be a rainbow in someone else's cloud.",
  "You do not find the happy life. You make it.",
  "Inspiration comes from within yourself. One has to be positive. When you're positive, good things happen.",
  "Sometimes you will never know the value of a moment, until it becomes a memory.",
  "The most wasted of days is one without laughter.",
  "You must do the things you think you cannot do.",
  "It isn't where you came from. It's where you're going that counts.",
  "It is never too late to be what you might have been.",
  "Happiness often sneaks in through a door you didn't know you left open.",
  "We must be willing to let go of the life we planned so as to have the life that is waiting for us.",
  "Never limit yourself because of others’ limited imagination; never limit others because of your own limited imagination.",
  "Be the change that you wish to see in the world.",
  "Let us make our future now, and let us make our dreams tomorrow's reality.",
  "You don't always need a plan. Sometimes you just need to breathe, trust, let go, and see what happens.",
  "If I cannot do great things, I can do small things in a great way.",
  "Don't wait. The time will never be just right.",
  "With the right kind of coaching and determination you can accomplish anything.",
  "If you have good thoughts they will shine out of your face like sunbeams and you will always look lovely.",
  "No matter what people tell you, words and ideas can change the world.",
  "Each person must live their life as a model for others.",
  "A champion is defined not by their wins but by how they can recover when they fall."
];

var savedPosters = [
  makePoster(
     "https://i.giphy.com/media/5LU6ZcEGBbhVS/giphy.gif",
     "Optimism",
     "Keep a joyful heart!"
   )
];

var onscreenPoster;
var cusPoster = [(imageInput.value, titleInput.value, quoteInput.value)];

makePosterBtn.addEventListener('click', switchToFormPage);
savedPostersBtn.addEventListener('click', switchToSavedPosters);
nevermindBtn.addEventListener('click', switchBackFromForm);
backToMainBtn.addEventListener('click', switchBackFromSaved);
showPosterBtn.addEventListener('click', saveInput);
randomButton.addEventListener('click', goRandom);
saveMyPosterBtn.addEventListener('click', goSavePoster);
var tossOutMinis = document.querySelector('.mini-poster')

function goRandom() {
  var randomImage = images[getRandomIndex(images)];
  var randomTitle = titles[getRandomIndex(titles)];
  var randomQuote = quotes[getRandomIndex(quotes)];
  targetImage.src = randomImage;
  targetTitle.innerText = randomTitle;
  targetQuote.innerText = randomQuote;
  onscreenPoster = new Poster(randomImage, randomTitle, randomQuote);
}

function makePoster(imageURL, title, quote) {
    return new Poster(imageURL, title, quote);
}

function saveInput(event) {
  event.preventDefault();

  var cusImage = imageInput.value;
  var cusTitle = titleInput.value;
  var cusQuote = quoteInput.value;

  // images.push(cusImage);
  // titles.push(cusTitle);
  // quotes.push(cusQuote);

  cusPoster = makePoster(cusImage, cusTitle, cusQuote);

  targetImage.src = cusPoster.imageURL;
  targetTitle.innerText = cusPoster.title;
  targetQuote.innerText = cusPoster.quote;

  //added code below
  onscreenPoster = new Poster (cusImage, cusTitle, cusQuote);

  if (cusPoster.imageURL === "") {
    switchBackFromSaved();
    goRandom();
  }
  // added code above

  makePosterSec.classList.add('hidden');
  mainPosterSec.classList.remove('hidden');
}

function onlyOnce() {
  for (var i = 0; i < savedPosters.length; i ++) {
    if (savedPosters[i].id === onscreenPoster.id) {
      return false;
    }
  }
  return true;
}

function goSavePoster() {
  if (onlyOnce()) {
    savedPosters.push(onscreenPoster);
    images.push(onscreenPoster.imageInput)
    titles.push(onscreenPoster.title);
    quotes.push(onscreenPoster.quote);
  }
}
    // savedPosters.push(cusPoster) || savedPosters.push(goRandom.value);

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
// targetImage.src = images[getRandomIndex(images)];
// targetTitle.innerText = titles[getRandomIndex(titles)];
// targetQuote.innerText = quotes[getRandomIndex(quotes)];

function switchToFormPage() {
   mainPosterSec.classList.add('hidden');
   makePosterSec.classList.remove('hidden');
   savedPostersSec.classList.add('hidden');
}

function switchToSavedPosters() {
    mainPosterSec.classList.add('hidden');
    savedPostersSec.classList.remove('hidden');
    savedPostersGrid.innerHTML = "";
    for (var i = 0; i < savedPosters.length; i++) {
        savedPostersGrid.insertAdjacentHTML("afterbegin", `
            <div class="mini-poster" data-id=${savedPosters[i].id}>
              <img src=${savedPosters[i].imageURL}>
              <h2>${savedPosters[i].title}</h2>
              <h4>${savedPosters[i].quote}</h4>
            </div>`)
    }

}
        //   <article>
        //     <img src=${savedPosters[i].imageURL}>
        //     <h2>${savedPosters[i].title}</h2>
        //     <h4>${savedPosters[i].quote}</h4>
        //   </article>`;

//makePoster(targetImage.src, targetTitle.innerText, targetQuote.innerText)

function deletePoster() {
  //
  // for (var i = 0; i < savedPosters.length; i++) {
  //     //savedPostersGrid.insertAdjacentHTML("afterbegin", `
  //         <div class="mini-poster" data-id=${savedPosters[i].id}>
  //           <img src=${savedPosters[i].imageURL}>
  //           <h2>${savedPosters[i].title}</h2>
  //           <h4>${savedPosters[i].quote}</h4>
  //         </div>`)
  //
  // var tossOutDiv = document.querySelector('.mini-poster')
  // var tossOutMini = document.querySelector('.div.mini-poster')
  //
} //var savedPostersGrid = document.querySelector('.saved-posters-grid')
function switchBackFromForm() {
  makePosterSec.classList.add('hidden');
  mainPosterSec.classList.remove('hidden');
}

function switchBackFromSaved() {
  mainPosterSec.classList.remove('hidden');
  savedPostersSec.classList.add('hidden');
}

goRandom();
