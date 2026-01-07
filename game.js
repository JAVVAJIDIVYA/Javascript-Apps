const scoreCheck = new Promise((resolve, reject) => {
  let score = Math.floor(Math.random() * 10);

  if (score >= 5) {
    resolve("High Score: " + score);
  } else {
    reject("Low Score: " + score);
  }
});

// to call promise
scoreCheck
  .then((result) => {
    console.log(result);
  })
  .catch((result) => {
    console.log(result);
  });
