function pizzaOven(crustType, sauceType, cheeses, toppings) {
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}
    
var pizza1 = pizzaOven("deep dish", "traditional", ["mozzerella"], ["pepperoni", "sausage"])
console.log(pizza1)

var pizza2 = pizzaOven("hand tossed", "marinara", ["mozzerella", "feta"], ["mushrooms", "olives", "onions"])
console.log(pizza2)

var pizza3 = pizzaOven("thin", "white", ["mozzerella", "cotija"], ["mushrooms", "chicken", "broccoli"])
console.log(pizza3)

var jessFave = pizzaOven("deep dish", "San Marzano homemade", ["mozzerella"], ["pepperoni", "banana peppers", "parmesean"])
console.log(jessFave)
