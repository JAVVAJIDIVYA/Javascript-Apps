//promises chaining
const book = () => {
    return new Promise((resolve, reject) => {
        resolve("Ticket booked")
    
    });
};
const popcorn = (msg) => {
    return new Promise((resolve, result) => {
        resolve(msg+"popcorn obtained")
    });
};
const coke = (msg) => {
  return new Promise((resolve, result) => {
    resolve(msg+"coke obtained");
  });
};
//to execute
book()
.then((result) => {
    return popcorn(result);
})
    .then((result) => {
        return coke(result);
    }).then((result) => {
        console.log("wanna go to movie"+result)
    })
  .catch((error) => {
    console.log(error);
  });
