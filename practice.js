function compare(num1, num2, preference) {

  if (preference === "larger") {
    return Math.max(num1, num2);
  } else {
    return Math.min(num1, num2);
  }
}

function multiplyBiggerNumByTwo(num1, num2) {
  return compare(...arguments, "larger") * 2;
}

function divideBiggerNumByThree(num1, num2) {
  return compare(...arguments, "larger") / 3;
}

function eatMostTacos(sum1, sum2) {
    return `I ate ${compare(...arguments, "larger")} tacos.`;
}

function adoptSmallerDog(weight1, weight2) {
    return `I adopted a dog that weighs ${compare(...arguments, "smaller")} pounds.`;
}


/**************************************************************************/
/* DO NOT CHANGE THE CODE BELOW */
module.exports = {
  multiplyBiggerNumByTwo,
  divideBiggerNumByThree,
  eatMostTacos,
  adoptSmallerDog
};
