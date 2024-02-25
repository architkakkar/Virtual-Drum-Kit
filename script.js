// DOM Elements.
const drums = document.querySelectorAll(".drum");

// logic for mouse click.
drums.forEach((drum) => {
  drum.addEventListener("click", () => {
    // store clicked key value.
    const keyClicked = drum.value;

    // call playSound() & clickAnimation function.
    playSound(keyClicked);
    clickAnimation(keyClicked);
  });
});

// logic for keypress. (handles both lower and upper case)
document.addEventListener("keydown", (event) => {
  // call playSound() & clickAnimation function.
  playSound(event.key);
  clickAnimation(event.key);
});

// plays sound for relevent mouse click or keypress.
playSound = (key) => {
  try {
    // converting to lowercase.
    key = key.toLowerCase();

    // check for the key and play the sound.
    switch (key) {
      case "w":
        const tom1 = new Audio("sounds/tom-1.mp3");
        tom1.play();
        break;
      case "a":
        const tom2 = new Audio("sounds/tom-2.mp3");
        tom2.play();
        break;
      case "s":
        const tom3 = new Audio("sounds/tom-3.mp3");
        tom3.play();
        break;
      case "d":
        const tom4 = new Audio("sounds/tom-4.mp3");
        tom4.play();
        break;
      case "j":
        const snare = new Audio("sounds/snare.mp3");
        snare.play();
        break;
      case "k":
        const crash = new Audio("sounds/crash.mp3");
        crash.play();
        break;
      case "l":
        const kickBass = new Audio("sounds/kick-bass.mp3");
        kickBass.play();
        break;
      default:
        break;
    }
  } catch (error) {
    console.log("playSound() broken: ", error);
  }
};

// generates an animation for relevent mouse click or keypress.
const clickAnimation = (key) => {
  try {
    // array of all possible keys.
    const allPossibleKeys = ["w", "a", "s", "d", "j", "k", "l"];
    // converting to lowercase.
    key = key.toLowerCase();

    // return if any other than possible key is pressed.
    if (!allPossibleKeys.includes(key)) {
      return;
    }

    // mapping to the same key's drum.
    const drum = document.querySelector("." + key);

    // adds and remove pressed class to look like animation.
    drum.classList.add("pressed");

    setTimeout(() => {
      drum.classList.remove("pressed");
    }, 150);
  } catch (error) {
    console.log("clickAnimation() broken: ", error);
  }
};
