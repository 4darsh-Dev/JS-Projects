let itemArr = ["Banana", "Apple", "Vegetables", "Soap", "Shampoo", "Wine", "Peanuts", "Almonds"];


const printFunc = function(myArr) {
    console.log("\nAvailable Items are :-")

    for (let item of myArr) {

        console.log(`\t* ${item} `)
    }
}

const fCapsFunc = function(myStr) {

    myStr = myStr.toLowerCase();
    strArr = myStr.split(' ');

    for (let i = 0; i < strArr.length; i++) {
        strArr[i] = strArr[i].charAt(0).toUpperCase() + strArr[i].slice(1);
    }

    return strArr.join(' ')


};

const buyFunc = function(item, itemArr) {

    if (itemArr.includes(item) == true) {
        console.log("\nFetching your Item !");
        let totalPrice = 10
        console.log(`\tYour total Price is Rs. ${totalPrice}`);

        finalVal = prompt("\nDo you want to confirm the order ?\n* Yes \n* No ");
        
        if (finalVal == 1) {
            let myIndex = itemArr.indexOf(item);
            itemArr.splice(myIndex, 1);

            console.log("\nYour Order Confrimed !");
            console.log("Thanks for shopping with us! ");
        }

        else if (finalVal == 2) {
            console.log("\nYour Order had been Cancelled !");
            console.log("Thanks for visiting Us! ")

        }

        else {
            console.log("Invalid Input! Try again.")
        }
    }
    else {
        console.log("\nItem not available ! ")
    }

}

let welcomeMsg = `\n=========== Welcome to the Grocery Store ===========
1. List of Items
2. Buy Itmes
3. Exit`

while (true) {
    console.log(welcomeMsg);
    let ch = prompt("Enter your Choice : ");

    if (ch == 1) {
        printFunc(itemArr);

    } else if (ch == 2) {
        let item_name = prompt("Enter the name of the item : ");
        let formatted_item_name = fCapsFunc(item_name);

        buyFunc(formatted_item_name, itemArr);
    }
    else if (ch == 3) {
        console.log("\nThanks for visiting Us! ")
        break;
    }
    else {
        console.log("\nInvalid Input! Try again.")
    }
}
