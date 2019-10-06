//constructor
var totalCosts=[];
function order(size, crust, name, topping){
    this.size = size;
    this.crust = crust;
    this.name = name;
    this.topping = topping;
    this.price = 0;
}

var pizzaName =["Chicken","Vegetables","Meat"]
var pizzaSize=["Large","Small","Medium"]
var pizzaTopping=["Vegetable toppings","Extra meat toppings","Extra Chicken topping"]
var pizzaCrust=["Thin Crust","Thick Crust","Deep Crust"]
//prototype
order.prototype.cost= function(){
    if(this.size === pizzaSize[0]){
        this.price += 550;
    }
    else if(this.size=== pizzaSize[1]){
        this.price += 450;
    }
    else if(this.size === pizzaSize[2]){
        this.price +=500;
    }


    if(this.topping === pizzaTopping[0]){
        this.price += 100
    }
    else if(this.topping === pizzaTopping[1]){
        this.price += 100;
    }
    else if(this.topping === pizzaTopping[2]){
        this.price += 150;
    }


    if(this.crust===pizzaCrust[0]){
        this.price += 100;
    }
    else if(this.crust === pizzaCrust[1]){
        this.price += 150;
    }
    else if(this.crust === pizzaCrust[2]){
        this.price += 200;
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


// ui logics
$(document).ready(function(){
    $("button#submit").click(function(event){
        event.preventDefault();
        var size = $("#size").val();
        var crust =$("#crust").val();
        var topping =$("#topping").val();
        var name =$("#name").val();
        var newPizzaOrder = new order (size, crust, topping);
       newPizzaOrder.cost();
       totalCosts.push(newPizzaOrder.price);
       
       alert(totalCosts);
       
    });

   
});
var expanded = false;

function showCheckboxes() {
  var checkboxes = document.getElementById("checkboxes");
  if (!expanded) {
    checkboxes.style.display = "block";
    expanded = true;
  } else {
    checkboxes.style.display = "none";
    expanded = false;
  }
}