// // FORK THIS PEN - // I've treated each question separately as though I need to define everything again to help myself not write over stuff I want to go back to
// // comment out whichever q you're not looking at as there'll be redeclarations otherwise.

// // 1. Wire up the buttons to the lights
// // You'll have to select and store the lights as a variable (although it may help you later to have a reference to all of them at once via the 'light' class)

stopButton.addEventListener("click", () => {
  stopLight.classList.add("on");
});
stopLight.addEventListener("mouseover", () => {
  stopLight.classList.add("on");
});
stopLight.addEventListener("mouseout", () => {
  stopLight.classList.remove("on");
});

// //CAUTION

cautionButton.addEventListener("click", () => {
  cautionLight.classList.add("on");
});

cautionLight.addEventListener("mouseover", () => {
  cautionLight.classList.add("on");
});

cautionLight.addEventListener("mouseout", () => {
  cautionLight.classList.remove("on");
});

// //GO

goButton.addEventListener("click", () => {
  goLight.classList.add("on");
});
goLight.addEventListener("mouseover", () => {
  goLight.classList.add("on");
});

goLight.addEventListener("mouseout", () => {
  goLight.classList.remove("on");
});

// // 2. (Extra credit): Have a go at making it so that only one light can be on at one time

const lightSetUp = (lightType) => {
  const Light = document.querySelector(`.${lightType}`);
  const Button = document.getElementById(lightType);
  Button.addEventListener("click", () => {
    const allLights = Array.from(document.querySelectorAll(".light"));
    allLights.forEach((lightElement) => {
      lightElement.classList.remove("on");
    });
    Light.classList.add("on");
  });
  Light.addEventListener("mouseover", () => {
    Light.classList.add("on");
  });
  Light.addEventListener("mouseout", () => {
    Light.classList.remove("on");
  });
};

const lights = ["stop", "caution", "go"];
lights.forEach(lightSetUp);

// 3. (wild&crazy credit) See if you can set up a timer of some sort to do that automatically (You'll have to add new start and stop buttons to the page)

const lightSetUp = (lightType) => {
  const Light = document.querySelector(`.${lightType}`);
  const Button = document.getElementById(lightType);
  const allLights = Array.from(document.querySelectorAll(".light"));
  allLights.forEach((lightElement) => {
    lightElement.classList.remove("on");
  });
  Light.classList.add("on");
  setTimeout(() => {
    Light.classList.remove("on");
  }, "2000");
};

const lights = ["stop", "caution", "go"];

const startTimerRef = document.getElementById("startTimer");
startTimerRef.addEventListener("click", loopFunction);

function timer() {
  setTimeout(() => {
    lightSetUp("stop");
  }, "2000");
  setTimeout(() => {
    lightSetUp("caution");
  }, "4000");
  setTimeout(() => {
    lightSetUp("go");
  }, "6000");
}

// not sure how to make it so there isnt a big delay on first click.
function loopFunction() {
  setInterval(timer, 6000);
}
