'use strict';

var allProducts = [];

function ProductSelection(productItem, imageSrc) {
    this.productItem = productItem;
    this.imageSrc = imageSrc;
    this.clickCount = 0;

    allProducts.push(this);
}
console.log(allProducts);


ProductSelection.prototype.render = function() {

    var target = document.getElementById('allItems');

    var newLi = document.createElement('li');
    var newP = document.createElement('p');
    newP.textContext = 'Clicks: ' + this.clickCount;


    var newImg = document.createElement('img');
    newImg.src = this.imageSrc;
    newImg.id = this.productItem;

    newLi.appendChild(newImg);
    newLi.appendChild(newP);
    target.appendChild(newLi);
    console.log(newImg.id);

}

var clicks = 1;

function handlesClicksOnImg(event) {
    console.log(event);
    if (clicks < 25) {
        console.log('You clicked me ' + clicks);
        clicks++;

        console.log(event.target);
        console.log(event.target.src);
        for (var i = 0; i < allProducts.length; i++) {


            if (event.target.src === allProducts[i].imageSrc) {
                allProducts[i].clickCount++;
                console.log(' Clicks ' + allProducts[i].clickCount);
            }
        }
        // if (event.target.id === "img/assets/boots.jpg") {
        //     boots.clickCount++;
        //     console.log('you clicked on the boots');
        // }

        productsOnPage();
    }
}

function productsOnPage() {
    var target = document.getElementById('allItems');

    target.innerHTML = '';

    for (var i = 0; i < 3; i++) {
        var randomIndex = Math.floor(Math.random() * allProducts.length);

        allProducts[randomIndex].render();
        //TODO prevent repeats!
    }

}


var ulEl = document.getElementById('allItems');
ulEl.addEventListener('click', handlesClicksOnImg);





// LEFT TO DO
// prevent repeats in the random generator.
// display 3 choices on the screen at a time
// display the votes and percentages for the votes and images

































//Tests
var banana = new ProductSelection('allItems', 'img/assets/banana.jpg');
var bathroom = new ProductSelection('allItems', 'img/assets/bathroom.jpg');
var breakfast = new ProductSelection('allItems', 'img/assets/breakfast.jpg');
var bag = new ProductSelection('allItems', 'img/assets/bag.jpg')
var boots = new ProductSelection('allItems', 'img/assets/boots.jpg')
var bubblegum = new ProductSelection('allItems', 'img/assets/bubblegum.jpg')
var chair = new ProductSelection('allItems', 'img/assets/chair.jpg')
var cthulhu = new ProductSelection('allItems', 'img/assets/cthulhu.jpg')
var dogDuck = new ProductSelection('allItems', 'img/assets/dog-duck.jpg')
var dragon = new ProductSelection('allItems', 'img/assets/dragon.jpg')
var pen = new ProductSelection('allItems', 'img/assets/pen.jpg')
var petSweep = new ProductSelection('allItems', 'img/assets/pet-sweep.jpg')
var scissors = new ProductSelection('allItems', 'img/assets/scissors.jpg')
var shark = new ProductSelection('allItems', 'img/assets/shark.jpg')
var sweep = new ProductSelection('allItems', 'img/assets/sweep.png')
var tauntaun = new ProductSelection('allItems', 'img/assets/tauntaun.jpg')
var unicorn = new ProductSelection('allItems', 'img/assets/unicorn.jpg')
var usb = new ProductSelection('allItems', 'img/assets/usb.gif')
var waterCan = new ProductSelection('allItems', 'img/assets/water-can.jpg')
var wineGlass = new ProductSelection('allItems', 'img/assets/wine-glass.jpg')













productsOnPage();