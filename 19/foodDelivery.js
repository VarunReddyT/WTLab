// 19.
// Write a JavaScript program that simulates a food delivery process using asynchronous functions. The 
// program should:
// 1. Simulate placing an order with a delay of 1 second.
// 2. Simulate preparing food with a delay of 3 seconds.
// 3. Simulate packaging the food and delivering it concurrently, where packaging takes 1 second and 
// delivery takes 2 seconds.
// 4. Log messages at each step to indicate the progress of the food delivery process

const placeOrder = () => {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log("Order placed.");
            resolve();
        },1000);
    })
};
const prepareFood = () => {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log("Food prepared.");
            resolve();
        },3000);
    })
};
const deliverFood = () => {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log("Food delivered.");
            resolve();
        },2000);
    })
};
const packageFood = () => {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log("Food packaged.");
            resolve();
        },1000);
    })
};
const startFoodDeliveryProcess = async () => {
    try {
        await placeOrder();

        await prepareFood();

        await Promise.all([packageFood(), deliverFood()]);

        console.log("Food delivery process complete.");
    } catch (error) {
        console.log("Error during the food delivery process:", error);
    }
};
startFoodDeliveryProcess();