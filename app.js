'use strict';


var lastItemSeen = [];





function ProductSelection(productItem, imageSrc) {
    this.productItem = productItem;
    this.imageSrc = imageSrc;
    this.clickCount = 0;
    this.renderedCount = 1;

    ProductSelection.allProducts.push(this);
}


ProductSelection.allProducts = [];


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


function makeChart() {
    var ctx = document.getElementById('canvaschart').getContext('2d');


    var namesOfProducts = [];

    for (var i = 0; i < ProductSelection.allProducts.length; i++) {
        namesOfProducts.push(ProductSelection.allProducts[i].productItem);
    }



    var clicks = [];
    for (i = 0; i < ProductSelection.allProducts.length; i++) {
        clicks.push(ProductSelection.allProducts[i].clickCount);
    }
    console.log(clicks);
    console.log(namesOfProducts);

    // =========== (mostly) boilerplate code from chartjs =============
    new Chart(ctx, {


        // The type of chart we want to create
        type: 'bar',

        // The data for our dataset
        data: {
            labels: namesOfProducts,
            datasets: [{
                    label: 'namesOfProducts',
                    backgroundColor: 'rgb(255, 99, 132, 0.4)',
                    borderColor: 'rgb(255, 99, 132)',
                    // this data === the datapoints
                    data: clicks
                },
                {
                    // TODO: make this the times seen data
                    label: 'All Products Available Seen',
                    backgroundColor: 'rgb(30, 99, 132, 0.4)',
                    borderColor: 'rgb(30, 99, 132)',
                    // this data === the datapoints
                    data: [20, 15, 2, 4]
                }
            ]
        },

        // Configuration options go here
        options: {
            scales: {
                xAxes: [{
                    stacked: true
                }],
                yAxes: [{
                    stacked: true
                }]
            }
        }
    });

    console.log(namesOfProducts);
}



makeChart();








//Tests
new ProductSelection('banana', 'img/assets/banana.jpg');
new ProductSelection('bathroom', 'img/assets/bathroom.jpg');
new ProductSelection('breakfast', 'img/assets/breakfast.jpg');
new ProductSelection('bag', 'img/assets/bag.jpg')
new ProductSelection('boots', 'img/assets/boots.jpg')
new ProductSelection('bubblegum', 'img/assets/bubblegum.jpg')
new ProductSelection('chair', 'img/assets/chair.jpg')
new ProductSelection('cthulhu', 'img/assets/cthulhu.jpg')
new ProductSelection('dogDuck', 'img/assets/dog-duck.jpg')
new ProductSelection('dragon', 'img/assets/dragon.jpg')
new ProductSelection('pen', 'img/assets/pen.jpg')
new ProductSelection('petSweep', 'img/assets/pet-sweep.jpg')
new ProductSelection('scissors', 'img/assets/scissors.jpg')
new ProductSelection('shark', 'img/assets/shark.jpg')
new ProductSelection('sweep', 'img/assets/sweep.png')
new ProductSelection('tauntaun', 'img/assets/tauntaun.jpg')
new ProductSelection('unicorn', 'img/assets/unicorn.jpg')
new ProductSelection('usb', 'img/assets/usb.gif')
new ProductSelection('waterCan', 'img/assets/water-can.jpg')
new ProductSelection('wineGlass', 'img/assets/wine-glass.jpg')





console.log('local products', ProductSelection.allProducts);
localStorage.setItem('allTheProductsBadString', ProductSelection.allProducts);

// a variable that is gonna turn into a string wooot
var allProductsThatHaveBeenMadeStringy = JSON.stringify(ProductSelection.allProducts);
localStorage.setItem('productsFromLocalStorage', allProductsThatHaveBeenMadeStringy);

console.log('allProductsThatHaveBeenMadeStringy', allProductsThatHaveBeenMadeStringy);

// when we get it from local storage
var productsFromLocalStorageStillAString = localStorage.getItem('productsFromLocalStorage');
var actualJavaScriptProductArray = JSON.parse(productsFromLocalStorageStillAString);

console.log('productsFromLocalStorage, after being parsed ', allProductsThatHaveBeenMadeStringy);








var reInstantiatedProductItems = [];
for (var i = 0; i < actualJavaScriptProductArray.length; i++) {
    var itemLS = actualJavaScriptProductArray[i].productItem;
    var clicksLS = actualJavaScriptProductArray[i].clicks;

    reInstantiatedProductItems.push(
        new ProductSelection(itemLS, clicksLS)
    );
}
ProductSelection.allProducts = reInstantiatedProductItems;

//rendering

for (i = 0; ProductSelection.allProducts.length; i++) {
    allProducts.render();
}



// //Tests
// var banana = new ProductSelection('banana', 'img/assets/banana.jpg');
// var bathroom = new ProductSelection('bathroom', 'img/assets/bathroom.jpg');
// var breakfast = new ProductSelection('breakfast', 'img/assets/breakfast.jpg');
// var bag = new ProductSelection('bag', 'img/assets/bag.jpg')
// var boots = new ProductSelection('boots', 'img/assets/boots.jpg')
// var bubblegum = new ProductSelection('bubblegum', 'img/assets/bubblegum.jpg')
// var chair = new ProductSelection('chair', 'img/assets/chair.jpg')
// var cthulhu = new ProductSelection('cthulhu', 'img/assets/cthulhu.jpg')
// var dogDuck = new ProductSelection('dogDuck', 'img/assets/dog-duck.jpg')
// var dragon = new ProductSelection('dragon', 'img/assets/dragon.jpg')
// var pen = new ProductSelection('pen', 'img/assets/pen.jpg')
// var petSweep = new ProductSelection('petSweep', 'img/assets/pet-sweep.jpg')
// var scissors = new ProductSelection('scissors', 'img/assets/scissors.jpg')
// var shark = new ProductSelection('shark', 'img/assets/shark.jpg')
// var sweep = new ProductSelection('sweep', 'img/assets/sweep.png')
// var tauntaun = new ProductSelection('tauntaun', 'img/assets/tauntaun.jpg')
// var unicorn = new ProductSelection('unicorn', 'img/assets/unicorn.jpg')
// var usb = new ProductSelection('usb', 'img/assets/usb.gif')
// var waterCan = new ProductSelection('waterCan', 'img/assets/water-can.jpg')
// var wineGlass = new ProductSelection('wineGlass', 'img/assets/wine-glass.jpg')


productsOnPage();