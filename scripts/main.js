let myImage = document.querySelector('img');
myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/Glimsplosion.png') {
        myImage.setAttribute('src','images/oh-no.png');
    }else {
        myImage.setAttribute('src','images/Glimsplosion.png');
    }
}
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
myButton.onclick = function() {setUserName();}
function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {
        setUserName()
    } else {
    localStorage.setItem('name', myName);
    myHeading.textContent = 'This is a glimdrop,' + myName;
    }
}if(!localStorage.getItem('name')) {
    setUserName();
}else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'This is a glimdrop, ' + storedName;
};
let a= "node is pretty chill";