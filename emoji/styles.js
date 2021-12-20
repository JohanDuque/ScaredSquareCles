const possibleColors = [
    "GOLD",
    "NAVY",
    "BLUE",
    "dodgerblue",
    "PURPLE",
    "FUCHSIA",
    "MAROON",
    "RED",
    "ORANGE",
    "YELLOW",
    "GREEN",
    "limegreen",
    "BLACK",
    "GRAY",
    "SILVER",
    "WHITE",
    "slateblue",
    "DEEPPINK",
    "SNOW",
    "goldenrod",
    "chocolate",
    "darkorange",
    "orangered",
    "TOMATO",
    "CORAL",
    "SALMON"
];

function randomStyles() {
    let root = document.documentElement;
    //TODO color and border
    root.style.setProperty('--background-size', '23px 20px');
    const backgroundColor = "#000000b5";
    root.style.setProperty('--background-color', backgroundColor);

    const headAnimationSecs = 5;
    const headAnimation = randAnimation();
    root.style.setProperty('--mouth-animation', randAnimation() + ' ' + getRandomIntInclusive(2, 5) + 's infinite');
    root.style.setProperty('--head-animation', headAnimation + ' ' + headAnimationSecs + 's infinite');
    root.style.setProperty('--shadow-animation', 'zoom ' + headAnimationSecs + 's infinite');


    let headTop;
    let headLeft;
    if (headAnimation == "zoom") {
        headTop = getRandomIntInclusive(7, 33);
        headLeft = getRandomIntInclusive(12, 38);
    } else { //animation == float
        headTop = getRandomIntInclusive(30, 36);
        headLeft = getRandomIntInclusive(37, 39);
    }

    root.style.setProperty('--head-top', headTop + '%');
    root.style.setProperty('--head-left', headLeft + '%');
    //root.style.setProperty('--head-translate', 'translate(' + getRandomIntInclusive(-(42 - headSpace), 42 - headSpace) + '%, ' + getRandomIntInclusive(-(42 - headSpace), 42 - headSpace) + '%)');
    //root.style.setProperty('--head-translate', 'translate(0%, 0%)');

    const skinColor = getRandomColorExcluding(backgroundColor);
    console.log("skinColor", skinColor);
    root.style.setProperty('--skin-color', skinColor); //"#9b0cd"
    root.style.setProperty('--border-radius', getRandomIntInclusive(-20, 70) + '%');
    root.style.setProperty('--iris-color', "WHITE");
    //root.style.setProperty('--iris-color', getRandomColor());
    const irisSize = getRandomIntInclusive(30, 70);
    root.style.setProperty('--iris-size', irisSize + '%');
    root.style.setProperty('--iris-after-size', getRandomIntInclusive(30, 70) + '%');

    const eyeSize = getRandomIntInclusive(20, 30);
    root.style.setProperty('--eye-size', eyeSize + '%');
    root.style.setProperty('--left-eye-color', getRandomColorExcluding(skinColor));
    root.style.setProperty('--right-eye-color', getRandomColorExcluding(skinColor));
    root.style.setProperty('--eye-blink-animation', 'blink ' + getRandomNumber(5) + 's infinite');
    root.style.setProperty('--mouth-blink-animation', 'blink ' + getRandomNumber(5) + 's infinite');

    //TODO check if is square or circle
    const eyesTop = getRandomIntInclusive(14, 30);
    root.style.setProperty('--left-eye-top', eyesTop + '%');
    root.style.setProperty('--letf-eye-horiz', getRandomIntInclusive(15, 30) + '%');
    root.style.setProperty('--right-eye-top', eyesTop + '%');
    root.style.setProperty('--right-eye-horiz', getRandomIntInclusive(15, 30) + '%');

    const mouthTop = getRandomIntInclusive(10 + eyesTop + eyeSize, 70);
    const mouthWidth = getRandomIntInclusive(10, 130 - mouthTop);
    const mouthHeigh = getRandomIntInclusive(15, 45 - eyesTop);

    root.style.setProperty('--mouth-width', mouthWidth + '%');
    root.style.setProperty('--mouth-left', getRandomIntInclusive(10, 90 - mouthWidth) + '%');
    root.style.setProperty('--mouth-height', mouthHeigh + '%');
    root.style.setProperty('--mouth-top', mouthTop + '%');
    root.style.setProperty('--mouth-color', getRandomColorExcluding(skinColor));

    const translatePerc = 92 - irisSize;
    root.style.setProperty('--keyframe-translate-1', 'translate' + randFromArray(['X', 'Y']) + '(' + randFromArray([translatePerc, -(translatePerc)]) + '%)');
    root.style.setProperty('--keyframe-translate-2', 'translate' + randFromArray(['X', 'Y']) + '(' + randFromArray([translatePerc, -(translatePerc)]) + '%)');
    root.style.setProperty('--keyframe-translate-3', 'translate' + randFromArray(['X', 'Y']) + '(' + randFromArray([translatePerc, -(translatePerc)]) + '%)');
    root.style.setProperty('--keyframe-translate-4', 'translate' + randFromArray(['X', 'Y']) + '(' + randFromArray([translatePerc, -(translatePerc)]) + '%)');
    root.style.setProperty('--keyframe-translate-5', 'translateY(-99px)');
}

function randFromArray(array) {
    return array[Math.floor(Math.random() * array.length)];;
}

function randAnimation() {
    return randFromArray(["float", "zoom"]);
}

function getRandomColor() {
    let n = (Math.random() * 0xfffff * 1000000).toString(16);
    return '#' + n.slice(0, 6);
    //return randFromArray(possibleColors);
}

function getRandomColorExcluding(exclusion) {
    let n = (Math.random() * 0xfffff * 1000000).toString(16);
    return '#' + n.slice(0, 6);
    const filteredColors = possibleColors.filter(function(value) {
        return value != exclusion;
    });
    return randFromArray(filteredColors);
}

function getRandomNumber(limit) {
    return Math.floor(Math.random() * limit);;
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}