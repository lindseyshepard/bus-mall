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
    newImg.id = this.imageSrc;

    newLi.appendChild(newImg);
    newLi.appendChild(newP);
    target.appendChild(newLi);

}