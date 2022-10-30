inputName = document.querySelector(".input");
next1Btn = document.querySelector(".next-1-btn");
next2Btn = document.querySelector(".next-2-btn");
next3Btn = document.querySelector(".next-3-btn");
next4Btn = document.querySelector(".next-4-btn");
welcomeText = document.querySelector(".welcome-text");
characterText = document.querySelector(".character-text");
takeNameContainer = document.querySelector(".container-1");
welcomeMssgContainer = document.querySelector(".container-2");
personalitiesContainer = document.querySelector(".container-3");
maleContainer = document.querySelector(".male-container")
femaleContainer = document.querySelector(".female-container")
characterContainer = document.querySelector(".container-4")

function showWelcomeMssg(){
    takeNameContainer.style.display = "none";
    welcomeMssgContainer.style.display = "block";
}

next1Btn.addEventListener("click", showWelcomeMssg)