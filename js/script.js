function order(size, crust,topping ){
    this.size = size;
    this.crust = crust;
    this.topping =topping;
    this.price = 0;

}
var pizzaSize = ["Large", "Standard", "Small"];
var pizzaCrust = ["Crispy Crust","Stuffed-Crust","Glutten-free Crust"];
var pizzaTopping =["Large:Chicken ksh 500","Large:Meat ksh 450","Large:Vegetables ksh 400"]
var totalCosts = [];

order.prototype.cost = function(){
    if (this.size === pizzaSize[0]){ 
        this.price += 1000;
    }
    else if (this.size === pizzaSize[1]){
        this.price +=800;
    }
    else if (this.size === pizzaSize[2]){
        this.price += 600;
    }

    if (this.crust === pizzaCrust[0]){
        this.price += 150;
    }
    else if (this.crust === pizzaCrust[1]){
        this.price += 200;
    }
    else if (this.crust === pizzaCrust[2]){
        this.price += 250;
    }

    if (this.topping === pizzaTopping[0]){
        this.price += 500;
    }
     else if (this.topping === pizzaTopping[1]){
        this.price += 450;
    }
     else if (this.topping === pizzaTopping[2]){
        this.price += 400;
    }
     
     return this.price;

}
order.prototype.totalCost = function(){
    var orderTotal = 0;
    for(var order =0; order < totalCosts.length; order++){
        orderTotal += totalCosts[order];
    }
    return orderTotal;
}

$(document).ready(function () {
    $("button#submit").click(function (event) { 
        event.preventDefault();
        var sizes = $("select#size").val();
        var crusts = $("select#crust").val();
        var toppings = $("select#topping").val();
        

        var newPizzaOrder = new order(sizes, crusts,toppings);
        newPizzaOrder.cost();
        totalCosts.push(newPizzaOrder.price);
        alert(totalCosts);

        }); 

        $(".frm1").submit(function(){
            var name =$("input#name").val();
            alert(name+" we have received your message. Thank you for communicating back to us.");
        });
        
});
