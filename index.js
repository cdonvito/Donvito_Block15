//create prompt

const userInput = prompt("Enter Froyo flavors separated by commas:");

//userInput --> vanilla,vanilla,vanilla,strawberry,coffee,coffee

//spilt userInput using ,
const order = userInput.split(",");
console.log("Order: " + order);

//create function
function orderQty(order) {
  /** 
    //create empty obj
    //loop over array
        //add the flavor as a key, with a value of 1 if the key doesn't exist otherwise add 1 to the current value
            //ways to add 1 to current value obj[key] = obj[key]++ || obj[key]+=1
    //return obj created above
*/

  const flavorCounts = {};
  for (i = 0; i < order.length; i++) {
    let currentFlavor = order[i];
    let sameFlavor = 0;
    console.log("Current Flavor: " + currentFlavor);
    sameFlavor = addOrder(currentFlavor, flavorCounts) 
      if (sameFlavor === 1 ){
        flavorCounts[currentFlavor]++;
        console.log("Another order");
      }
      else if (sameFlavor === 0){
        flavorCounts[currentFlavor] = 1;
        console.log("New Flavor")
      }
      console.log(flavorCounts);
    }
  }

function addOrder (currentFlavor, flavorCounts) {
  let sameFlavor = 0;
  for (const flavor in flavorCounts) {
    if (currentFlavor === flavor) {
      console.log("Object Loop: " + flavor);
      sameFlavor = 1;
      break;
    }
  }
  return sameFlavor;
};

console.log(orderQty(order));
