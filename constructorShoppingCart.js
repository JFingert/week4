
function ShoppingCart (desc, count, price) {

	this.desc = "description";
	this.count = count;
	this.price = price;
}

ShoppingCart.prototype.cost = function () {
  return this.count * this.price;
}

ShoppingCart.prototype.getId = function (id) {
  var lilName = " ";
  if (this.id) {
   return this.id;
  } else {
    lilName = this.desc.substr(0,2) + Math.floor(Math.random() * 1000);
    this.id = lilName;
  }
      
  return lilName;
}

var Marbles = new ShoppingCart ("Blue", 31, 2.99)
console.log(Marbles.getId());
console.log(Marbles.cost());
	
  