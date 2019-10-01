'use strict';

$(".bringTheDogs").submit(function(event) {
    event.preventDefault();  
    fetch('https://dog.ceo/api/breeds/image/random/'+$(".userInput").val())
      .then(response => response.json())
      .then(responseJson => printDogImages(responseJson));
    }
);

function printDogImages(data) {
  for(let i=0;i < data.message.length;i++){
    console.log(data.message[i]);
    let img = '<li><img src="'+ data.message[i] + '"></li>';
    $(".dogsContainer").append(img);
  }
}

$(".bringTheDogBreed").submit(function(event) {
  event.preventDefault();  
  fetch('https://dog.ceo/api/breed/'+$(".userInputBreed").val().toLowerCase()+`/images/random`)
    .then(response => response.json())
    .then(responseJson => getDogByBreed(responseJson))
    .catch(function(error) 
      {console.log('There has been a problem with your fetch operation: ', error.message);
      displayError();
      });
    });

function displayError(){
  $(".dogsByBreedContainer").html("<li>Sorry, breed not found. Try again.</li>");
}
function getDogByBreed(userInputBreed) {
  console.log(userInputBreed);
  if(userInputBreed.message === "Breed not found (master breed does not exist)") 
  { displayError();
  } else { 
  let breedImg = '<li><img src="'+ userInputBreed.message + '"></li>';
  $(".dogsByBreedContainer").append(breedImg);}
};
