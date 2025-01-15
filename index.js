//create prompt
const userInput = prompt("Enter Froyo flavors separated by commas:");

//userInput --> vanilla,vanilla,vanilla,strawberry,coffee,coffee

//spilt userInput using ,
const order = userInput.split(",");
console.log("Order: " + order);

//create function
function orderQty(order) {

  const flavorCounts = {}; //create empty object

  for (i = 0; i < order.length; i++) { //iterate through the order to get flavor & qty
    let currentFlavor = order[i];
    let sameFlavor = 0;
    console.log("Current Flavor: " + currentFlavor);
    sameFlavor = addOrder(currentFlavor, flavorCounts); //determine if the current flavor is new or another order
    if (sameFlavor === 1) { //if another order, add 1 to the qty of that flavor
      flavorCounts[currentFlavor]++;
      console.log("Another order");
    } else if (sameFlavor === 0) { //if new flavor, add flavor with qty of 1
      flavorCounts[currentFlavor] = 1;
      console.log("New Flavor");
    }
    //console.log(flavorCounts);
  }

  return flavorCounts; //return object with flavors and counts
}

function addOrder(currentFlavor, flavorCounts) {
  let sameFlavor = 0;
  for (const flavor in flavorCounts) {//loop to determine if current flavor is new or not
    if (currentFlavor === flavor) {
      //console.log("Object Loop: " + flavor);
      sameFlavor = 1;
      break;
    }
  }
  return sameFlavor;
}

console.log(orderQty(order));
