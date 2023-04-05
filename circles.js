const circleThin = document.body.querySelector(".circle-thin");
const circleThick = document.body.querySelector(".circle-thick");
const circleDualThin = document.body.querySelector(".circle-dual-thin");
const circleDualThick = document.body.querySelector(".circle-dual-thick");

// const circleT1 = document.body.querySelector(".circle-t1");
// const circleT2 = document.body.querySelector(".circle-t2");
// const circleT3 = document.body.querySelector(".circle-t3");
// const circleT4 = document.body.querySelector(".circle-t4");
// const circleT5 = document.body.querySelector(".circle-t5");
// const circleb1 = document.body.querySelector(".circle-b1");
// const circleb2 = document.body.querySelector(".circle-b2");
// const circleb3 = document.body.querySelector(".circle-b3");
// const circleb4 = document.body.querySelector(".circle-b4");

const timing = {
    duration: 1000,
    easing: "ease",
    fill: "both",
    iterations: Infinity
}

circleThin.animate(
    [
        { offSetDistance: "0%" },
        { offsetDistance: "100%" }
    ],
    timing
);

circleThick.animate(
    [
        { offSetDistance: "0%" },
        { offsetDistance: "100%" }
    ],
    timing
);

circleDualThin.animate(
    [
        { offSetDistance: "0%" },
        { offsetDistance: "100%" }
    ],
    timing
);

circleDualThick.animate(
    [
        { offSetDistance: "0%" },
        { offsetDistance: "100%" }
    ],
    timing
);

// Get the things on the page
const svgPath = document.body.querySelector("header svg path");
const animateMotionElem = document.body.querySelector("animateMotion");
const svgCircle = document.body.querySelector(".cb4");
console.log(svgCircle)
const svgCircleX = svgCircle.getAttribute("cx");
const svgCircleY = svgCircle.getAttribute("cy");
const svgCirclePath = animateMotionElem.getAttribute("path");

// Use WAAPI to set things off
svgCircle.removeAttribute("cx");
svgCircle.removeAttribute("cy");
animateMotionElem.setAttribute("path", svgCirclePath);
animateMotionElem.beginElement();
