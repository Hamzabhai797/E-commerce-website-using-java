let card = document.querySelector(".trend");
let card2 = document.getElementById("trendSecond");
let about = document.querySelector(".about");
let blog = document.querySelector(".trends");
let mainPage = document.querySelector(".main");
let contact = document.querySelector(".contact");

function homes() {
    mainPage.style.display="flex"
    card.style.display="block"
    card2.style.display="block"
    blog.style.display="block"
    about.style.display="none"

    document.getElementById("shop").style.color="black"
    document.getElementById("blog").style.color="black"
    document.getElementById("home").style.color="rgb(2, 173, 173)"
    document.getElementById("contact").style.color="black"
    document.getElementById("about").style.color="black"
}
function shops() {
    mainPage.style.display="none"
    blog.style.display="none"
    about.style.display="none"
     card.style.display="block"
    card2.style.display="block"

    document.getElementById("shop").style.color="rgb(2, 173, 173)"
    document.getElementById("blog").style.color="black"
    document.getElementById("home").style.color="black"
    document.getElementById("contact").style.color="black"
    document.getElementById("about").style.color="black"
}

function blogs () {
    mainPage.style.display="none"
    card.style.display="none"
    card2.style.display="none"
    about.style.display="none"
    blog.style.display="block"

    document.getElementById("blog").style.color="rgb(2, 173, 173)"
    document.getElementById("home").style.color="black"
    document.getElementById("shop").style.color="black"
    document.getElementById("contact").style.color="black"
    document.getElementById("about").style.color="black"
}

function abouts() {
    mainPage.style.display="none"
    card.style.display="none"
    card2.style.display="none"
    blog.style.display="none"
    contact.style.display="none"
    about.style.display="block"

    document.getElementById("blog").style.color="black"
    document.getElementById("home").style.color="black"
    document.getElementById("shop").style.color="black"
    document.getElementById("contact").style.color="black"
    document.getElementById("about").style.color="rgb(2, 173, 173)"
}

function contacts() {
    mainPage.style.display="none"
    card.style.display="none"
    card2.style.display="none"
    blog.style.display="none"
    about.style.display="none"
    contact.style.display="block"

    document.getElementById("blog").style.color="black"
    document.getElementById("home").style.color="black"
    document.getElementById("shop").style.color="black"
    document.getElementById("contact").style.color="black"
    document.getElementById("about").style.color="black"
    document.getElementById("contact").style.color="rgb(2, 173, 173)"
}

function show(img) {
    let newImg = document.getElementById("newImg");
    newImg.src = img.src;

    mainPage.style.display="none"
    card.style.display="none"
    card2.style.display="none"
    blog.style.display="none"
    about.style.display="none"
    contact.style.display="none"
    document.querySelector(".cart").style.display="flex"
}

function AddCart(){
    alert("Added to cart");
    location.reload()
}
