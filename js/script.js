var totalCosts = [];

function order(size, crust,meatTopping,vegetableTopping ){
    this.size = size;
    this.crust = crust;
    this.meatTopping =meatTopping;
    this.vegetableTopping=vegetableTopping;
    this.price = 0;

}
var pizzaSize = ["Large", "Standard", "Small"];
var pizzaCrust = ["Crispy Crust","Stuffed-Crust","Glutten-free Crust"];
var pizzameatTopping =["Chicken","Beef","Boerwors"];
var pizzavegetableTopping=["Onion","Brocolli","Spinach"];


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

    if (this.meatTopping === pizzameatTopping[0]){
        this.price += 500;
    }
     else if (this.meatTopping === pizzameatTopping[1]){
        this.price += 450;
    }
     else if (this.meatTopping === pizzameatTopping[2]){
        this.price += 400;
    }
    if (this.vegetableTopping === pizzavegetableTopping[0]){
        this.price += 100;
    }
     else if (this.vegetableTopping === pizzavegetableTopping[1]){
        this.price += 100;
    }
     else if (this.vegetableTopping === pizzavegetableTopping[2]){
        this.price += 100;
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
    $("form").submit(function (event) { 
        event.preventDefault();
        var sizes = $("select#size").val();
        var crusts = $("select#crust").val();
        var meatTopping = $("select#meattopping").val();
        var vegetableTopping=$("select#veggtopping").val();
        var newPizzaOrder = new order(sizes, crusts,meatTopping,vegetableTopping );
        newPizzaOrder.cost();
        totalCosts.push(newPizzaOrder.price);
        $("#pz").text(sizes);
        $("#cr").text(crusts);
        $("#mt").text(meattopping);
        $("#vt").text(veggtopping);
        $("#tc").text(newPizzaOrder.totalCost());
 
        
        $("button#order").click(function(){
            alert("Your Order has been received.Please click delivery and if you want your pizza to be delivered.");
        $("button#delivery").click(function(){
            prompt("Enter your location");
            alert("Your delivery charge is ksh 150.");
            alert("Your pizza will be delivered at your location.");
        })  
        })
    
  });
     
     $(".sub1 button#submit1").click(function(){ 
        var name =$("input#name").val();
        alert(name+" we have received your message. Thank you for reaching out to us.");
    });
        
});
