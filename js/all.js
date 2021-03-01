
//1.簡易計算機(加減乘除)
function showresult(choise) {
  var n1 = parseFloat(document.getElementById("num1").value);
  var n2 = parseFloat(document.getElementById("num2").value);
  var r;
  var c = choise;

  switch (c) {
    case "1":
      r = n1 + n2;
      break;
    case "2":
      r = n1 - n2;
      break;
    case "3":
      r = n1 * n2;
      break;
    case "4":
      r = n1 / n2;
      break;
    case "5":
      r = (n2 * 100) / n1;
      break;
    default:
      break;
  }
  document.getElementById("result").value = r;
}


//2.輸入一個數字，判斷此數字是否為質數 。利用迴圈、判斷式、與%運算子處理
//從2到num之間的數字中，找能被num整除的數字，如果這個數字等於num,num就是質數，否則不是質數
var num = 7;
for (let i = 2; i <= num; i++) {
  if(num % i == 0){
     if (num == i) {
         console.log(num + "是質數");
     }else{
         console.log(num + "不是質數");
         break;
     }
  }
}
