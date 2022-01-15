function one(two_Fun) {
    console.log("Step 1: call a function");
    two_Fun();
}

function two() {
    console.log("Step 2: call back function");
}
one(two);