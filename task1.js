function printMatchingRandom(num) {
  while (true) {
    if (Math.floor(Math.random() * 11) === num) console.log(num);
    else return;
  }
}

printMatchingRandom(8);

// i dunno if I get the exercise correctly )))