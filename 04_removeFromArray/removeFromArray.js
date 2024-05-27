const removeFromArray = function() {
    for (let j = 1; j < arguments.length; j++) {
        for (let i = 0; i < arguments[0].length; i++) {
            if (arguments[0][i] === arguments[j]) {
                arguments[0].splice(i, 1);
                i--;
            }
        }
    }
    return arguments[0];
};

// Do not edit below this line
module.exports = removeFromArray;


//Alternate solution with better runtime but worse space complexity
/*
    const newArray = [];
    array.forEach((item) => {
      if (!args.includes(item)) {
        newArray.push(item);
      }
    });
    return newArray;
  };
  */