const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/pianoplaying.jpg") {
    myImage.setAttribute("src", "images/pianoplaying2.jpg");
  } else {
    myImage.setAttribute("src", "images/pianoplaying.jpg");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `My Piano Journey (Welcome, ${myName})`;
  }
}
  if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `My Piano Journey (Welcome, ${storedName})`;
  }
  myButton.onclick = () => {
    setUserName();
  };
    
    