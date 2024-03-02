const myImage = document.querySelector("img");

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/bear.jpg") {
        myImage.setAttribute("src", "images/bear2.jpg");
    } else {
        myImage.setAttribute("src", "images/bear.jpg");
    }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Enter your name.");
    if (!myName) {
        setUserName();
    }
    else {
        localStorage.setItem("name", myName);
        myHeading.textContent = `Learn About Bears, ${myName}`;
    }
}

if (!localStorage.getItem("name")) {
    setUserName();
}
else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Learn About Bears, ${storedName}`;
}

myButton.onclick = () => {
    setUserName();
};
