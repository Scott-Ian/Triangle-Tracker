const triangleCheck = function (num1, num2, num3) {
  if (num1 + num2 <= num3 || num2 + num3 <= num1 || num3 + num1 <= num2) {
    return false;
  }
  else {
    return true;
  }
}

const equilateralCheck = function(num1, num2, num3) {
  if (num1 === num2 && num2 === num3 && num3 === num1) {
    return true;
  }
  else {
    return false;
  }
}

const isoscelesCheck = function(num1, num2, num3) {
  if (num1 === num2 || num2 === num3 || num3 === num1) {
    return true;
  }
  else {
    return false;
  }
}

$(document).ready(function(){
  $("form#triangle").submit(function(event) {
    event.preventDefault();
    
    const num1 = parseInt($(".number1").val());
    const num2 = parseInt($(".number2").val());
    const num3 = parseInt($(".number3").val());

    if (triangleCheck (num1, num2, num3)) {
      if (equilateralCheck (num1, num2, num3)){
        $(".equilateral").show();
      }
      else if (isoscelesCheck (num1, num2, num3)){
        $(".isosceles").show();
      }
      else {
        $(".scalene").show();
    }
  }
    else {
      $(".notTriangle").show();
    }
  });
});