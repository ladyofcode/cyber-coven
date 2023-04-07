const circleThin = document.body.querySelector(".circle-thin");
const circleThick = document.body.querySelector(".circle-thick");
const circleDualThin = document.body.querySelector(".circle-dual-thin");
const circleDualThick = document.body.querySelector(".circle-dual-thick");

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
