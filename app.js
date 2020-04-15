'use strict';


var lastItemSeen = [];



var allProducts = [];

function ProductSelection(productItem, imageSrc) {
    this.productItem = productItem;
    this.imageSrc = imageSrc;
    this.clickCount = 0;
    this.renderedCount = 1;

    allProducts.push(this);
}
console.log(allProducts);

ProductSelection.prototype.render = function() {

    var target = document.getElementById('allItems');

    var newLi = document.createElement('li');
    var newP = document.createElement('p');
    newP.textContext = 'Clicks: ' + this.clickCount;
    this.renderedCount++;
    console.log(this.renderedCount);

    var newImg = document.createElement('img');
    newImg.src = this.imageSrc;
    newImg.id = this.productItem;

    newLi.appendChild(newImg);
    newLi.appendChild(newP);
    target.appendChild(newLi);

    console.log(this.productItem + ' Displayed : ' + this.renderedCount + ', Times Selected : ' + this.clickCount);
}

var clicks = 1;

function handlesClicksOnImg(event) {
    console.log(event);
    if (clicks < 25) {
        console.log('You clicked ' + clicks + ' times!');
        clicks++;

        console.log(event.target);
        console.log(event.target.src);
        for (var i = 0; i < allProducts.length; i++) {


            if (event.target.id === allProducts[i].productItem) {
                allProducts[i].clickCount++;
                console.log(' Clicks ' + allProducts[i].clickCount);
            }
        }


        productsOnPage();
    }

    // TO DO console.log the productItems with amount of clicks
    // calculate the percentages of items that were clicked.
    // how many times were each product was shown and then clicked

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



function noRepeats() {

    var threeProducts = [];
    threeProducts.push(productsOnPage());
    var secondProduct = productsOnPage();
    while (threeProducts[0] === secondProduct || secondProduct === lastItemSeen[0] || secondProduct === lastItemSeen[1] || secondProduct === lastItemSeen[2]) {
        var secondProduct = productsOnPage();
    }
    secondProduct.push(secondProduct);
    var thirdProduct = productsOnPage();
    while (threeProducts[1] === thirdProduct || threeProducts[0] === thirdProduct) {
        var thirdProduct = productsOnPage();
    }
    thirdProduct.push(thirdProduct);
    console.log(threeProducts);
    lastItemSeen = threeProducts;
    return threeProducts;
}


function findThreeUnique() {
    var threeArray = productsOnPage();

    // while (threeArray contains anything from lastItemSeen) {
    //     threeArray = productsOnPage();
    // }



    return threeArray;

}

// LEFT TO DO
// prevent repeats in the random generator.
// display 3 choices on the screen at a time
// display the votes and percentages for the votes and images





//Tests
var banana = new ProductSelection('banana', 'img/assets/banana.jpg');
var bathroom = new ProductSelection('bathroom', 'img/assets/bathroom.jpg');
var breakfast = new ProductSelection('breakfast', 'img/assets/breakfast.jpg');
var bag = new ProductSelection('bag', 'img/assets/bag.jpg')
var boots = new ProductSelection('boots', 'img/assets/boots.jpg')
var bubblegum = new ProductSelection('bubblegum', 'img/assets/bubblegum.jpg')
var chair = new ProductSelection('chair', 'img/assets/chair.jpg')
var cthulhu = new ProductSelection('cthulhu', 'img/assets/cthulhu.jpg')
var dogDuck = new ProductSelection('dogDuck', 'img/assets/dog-duck.jpg')
var dragon = new ProductSelection('dragon', 'img/assets/dragon.jpg')
var pen = new ProductSelection('pen', 'img/assets/pen.jpg')
var petSweep = new ProductSelection('petSweep', 'img/assets/pet-sweep.jpg')
var scissors = new ProductSelection('scissors', 'img/assets/scissors.jpg')
var shark = new ProductSelection('shark', 'img/assets/shark.jpg')
var sweep = new ProductSelection('sweep', 'img/assets/sweep.png')
var tauntaun = new ProductSelection('tauntaun', 'img/assets/tauntaun.jpg')
var unicorn = new ProductSelection('unicorn', 'img/assets/unicorn.jpg')
var usb = new ProductSelection('usb', 'img/assets/usb.gif')
var waterCan = new ProductSelection('waterCan', 'img/assets/water-can.jpg')
var wineGlass = new ProductSelection('wineGlass', 'img/assets/wine-glass.jpg')


productsOnPage();