//objects in js
const movieInfo = {
  moviename: "Akanda2",
  heroname: "balaiah",
  directorname: "boyapatti",
};
//how to get
console.log(movieInfo.directorname);
console.log(movieInfo["heroname"]);
for (let info in movieInfo) {
  console.log(movieInfo[info]);
}
//ES-6 +new features
//object.keys
Object.keys(movieInfo).forEach((key) => {
  console.log(key);
});
//to get only values
//object.values
Object.values(movieInfo).forEach((val) => {
  console.log(val);
});
//to get key and values
Object.entries(movieInfo).forEach((entry) => {
  console.log(entry[0] + " " + entry[1]);
});
//for of
for (let [info,value] of Object.entries(movieInfo)) {
  console.log(info + " " + value);
}
//nested objects
const myObj = {
  name: "John",
  age: 30,
  cars: [
    { name: "Ford", models: ["Fiesta", "Focus", "Mustang"] },
    { name: "BMW", models: ["320", "X3", "X5"] },
    { name: "Fiat", models: ["500", "Panda"] },
  ],
};

console.log(myObj.cars[0].models);
//cart object
const cart = {
  items: [
    {pid:1234, pname: "Ac", price: 45000, qty: 1 },
    {pid:1235, pname: "Drone", price: 5000, qty: 2 }
    
    ],
    shippingAddress: {
        street: "vignan college",
        city: "vadlamudi",
        pincode: 522213
    },
    userinfo: {
        uid:1001,
        name: "Ramesh",
        email: "ramesh@gmail.com"
    }
};
console.log(cart.userinfo.name);
//social media post
const post = {
    postId: 1001,
    content: "This is my first post",
    author: {
        uid: 1001,
        name: "Ramesh",
        email: "ramesh@gmail.com"
    }
};