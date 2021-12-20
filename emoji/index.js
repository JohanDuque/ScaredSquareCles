let counter = 0;

//document.body.onload = addHead();

function addHead() {
    const head = document.createElement("div");
    head.id = "head";
    head.setAttribute("class", "head");

    // EYES
    const leftIris = document.createElement("div");
    leftIris.id = "leftIris";
    leftIris.setAttribute("class", "iris");
    const leftEye = document.createElement("div");
    leftEye.id = "leftEye";
    leftEye.setAttribute("class", "left-eye eye");
    leftEye.appendChild(leftIris);

    const rightIris = document.createElement("div");
    rightIris.id = "rightIris";
    rightIris.setAttribute("class", "iris");
    const rightEye = document.createElement("div");
    rightEye.id = "rightEye";
    rightEye.setAttribute("class", "right-eye eye");
    rightEye.appendChild(rightIris);

    //MOUTH
    const mouth = document.createElement("div");
    mouth.id = "mouth";
    mouth.setAttribute("class", "mouth");

    head.appendChild(leftEye);
    head.appendChild(rightEye);
    head.appendChild(mouth);

    document.body.appendChild(head);

    const shadow = document.createElement("div");
    shadow.id = "shadow";
    shadow.setAttribute("class", "shadow");
    head.appendChild(shadow);

    randomStyles();
    //saveToFile();
}

function saveToFile() {
    let fileContent = document.documentElement.outerHTML;

    fileContent = fileContent.replace('<link rel="stylesheet" href="styles.css">', "");
    fileContent = fileContent.replace('<script src="styles.js"></script>', "");
    fileContent = fileContent.replace('<script src="index.js"></script>', "");
    //console.log("NEW FILECONTENT:", fileContent);

    const blob = new Blob([fileContent], { type: "text/html" });

    let a = document.createElement('a');
    a.href = window.URL.createObjectURL(blob);

    //TODO fix counter
    a.download = 'ScaredSquareCles3' + counter + '.html';
    a.click();

};

/*
setTimeout(function() {
    window.location.reload(1);
}, 60000);

*/