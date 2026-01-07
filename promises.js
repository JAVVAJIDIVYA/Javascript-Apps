const movrat = new Promise((resolve, reject) => {
    let rating = 2.5;
    if (rating > 4) {
        resolve("Good movie");
    }
    else {
        reject("Waste of Time");
    }
});
//to call promise
movrat.then((result) => {
    console.log(result);
}).catch((result) => {
    console.log(result)
});