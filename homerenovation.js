function addPaintAndSupplies(totalCost, callback) {

    let cost = prompt("Enter the cost for the paint and supplies :");

    cost = parseFloat(cost);

    if (cost > 100) {

        cost *= 1.1;

    } else if (cost > 200) {

        alert("Sorry, you spent too much on paint... put some back!");

    }

    // Get a handle for the paint paragraph

    let paintArea = document.querySelector(".paint");

    paintArea.innerHTML = `Paint $ ${cost.toFixed(2)}`;


    callback(totalCost + cost);

    return (totalCost + cost);

}


const furnitureCost = function (totalCost, callback) {
    let cost = prompt("Enter the price of furniture: ");
    cost = parseFloat(cost);

    if (cost > 2000) {
        alert("You spent too much money on furniture, take something back!");
    } else if (cost < 500) {
        discount = (cost * .10);
        cost = cost - discount;
    }

    let furnitureTotal = document.querySelector(".furniture");
    furnitureTotal.innerHTML = `Furniture $ ${cost.toFixed(2)}`;
    
    callback(totalCost + cost);

    return(totalCost + cost);
}


const floorCoverings = function(totalCost, callback) {
    let cost = prompt("Enter the cost of floor covering: ");

    if (cost > 2000) {
        alert("You spent too much on floor coverings, take some back!");
    } else if (cost < 500) {
        discount = (cost * .15);
        cost = (cost - discount);
    }

    let coveringTotal = document.querySelector(".floorCoverings");
    coveringTotal.innerHTML = `Floor Coverings $ ${cost.toFixed(2)}`;

    callback(totalCost + cost);

    return(totalCost + cost);
}


const updateTotals = (cost) => {

    // Get a handle for the furniture paragraph
    
    let totalsArea = document.querySelector(".totalCost");
    
    totalsArea.innerHTML = `Total $ ${cost.toFixed(2)}`;
    
    }
    
       
    let totalCost = 0;
    
    
    totalCost = addPaintAndSupplies(totalCost, updateTotals);
    totalCost = totalCost + furnitureCost(totalCost, updateTotals);
    totalCost = totalCost + floorCoverings(totalCost, updateTotals);
