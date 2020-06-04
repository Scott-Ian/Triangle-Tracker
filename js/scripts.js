const eq1= A + B <= C
const eq2= 
const eq3=

$(document).ready(function(){
  $("form#triangle").submit(function(event) {
    event.preventDefault();
    
    const num1 = parseInt($(".number1").val());
    const num2 = parseInt($(".number2").val());
    const num3 = parseInt($(".number3").val());

    if (num1 + num2 >=num3 || num2 + num3 >= num1 || num3 + num1 >= num2) {

      if (num1 === num2 && num2 === num3 && num3 === num1){
        $(".equilateral").show();
        $(".isosceles").hide();
        $(".scalene").hide();
        $(".notTriangle").hide();
      }
  
      else if (num1 === num2 || num2 === num3 || num3 === num1){
        $(".equilateral").hide();
        $(".isosceles").show();
        $(".scalene").hide();
        $(".notTriangle").hide();
      }
  
      else {
        $(".equilateral").hide();
        $(".isosceles").hide();
        $(".scalene").show();
        $(".notTriangle").hide();
    }
  }
    else {
      $(".equilateral").hide();
      $(".isosceles").hide();
      $(".scalene").hide();
      $(".notTriangle").show();
    }
  });
});