inputName = document.querySelector("#input");
next1Btn = document.querySelector(".next-1-btn");
next2Btn = document.querySelector(".next-2-btn");
next3Btn = document.querySelector(".next-3-btn");
next4Btn = document.querySelector(".next-4-btn");
welcomeText = document.querySelector(".welcome-text");
characterText = document.querySelector(".character-text");
takeNameContainer = document.querySelector(".container-1");
welcomeMssgContainer = document.querySelector(".container-2");
chooseGenderContainer = document.querySelector(".container-3");
maleContainer = document.querySelector(".male-container")
femaleContainer = document.querySelector(".female-container")
characterContainer = document.querySelector(".container-4")
chooseForm = document.querySelector(".choose-form");

function showWelcomeMssg(){
    takeNameContainer.style.display = "none";
    welcomeMssgContainer.style.display = "block";
    welcomeText.innerText = "Hello " + `${inputName.value}` + "!\nLet's go find you a costume for Halloween 🎃";
}

function chooseGender(){
    takeNameContainer.style.display = "none";
    welcomeMssgContainer.style.display = "none";
    chooseGenderContainer.style.display = "block";
    // const formChoice = new FormData(chooseForm);
    // const choices = ["male", "female"];
    // let index = 0;
    // for(let value of formChoice.values()){
    //     console.log(value)
    //     index++;
    // }
    
    // if(formChoice.values() == "male"){
    //     console.log("male");
    // } else if(formChoice.values() == "female"){
    //     console.log("female");
    // }
}

function choosePersonality(){
    takeNameContainer.style.display = "none";
    chooseGenderContainer.style.display = "none";
    console.log("bdshcb")
    const formChoice = new FormData(chooseForm);
    // let values = formChoice.values();
    if(formChoice.values() === "male"){
        maleContainer.style.display = "block";
        console.log("male");
    } else if(formChoice.values() === "female"){
        console.log("female");
        femaleContainer.style.display = "block";
    }
}

next3Btn.addEventListener("click", choosePersonality);
next2Btn.addEventListener("click", chooseGender);
next1Btn.addEventListener("click", showWelcomeMssg);