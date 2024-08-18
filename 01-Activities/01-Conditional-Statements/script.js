// Changed the values and operators to if the algoritm meets all conditions
var x = 50;
var exprssion1 = x  < 25;
var exprssion2 = x  > 50;

// Checked if  both expressions are tru using &&
if (exprssion1 && exprssion2) {
    console.log('True ✅ True ✅');

    // If both conditions are not true, checked if exprssion1 is true
}else if (exprssion1) {
    console.log('True ✅ False ❌');

    // If exprssion1 is not true, then checked if exprssion2 is true
} else if (exprssion2){
  console.log('False ❌ True ✅');

   // If none of the conditions above evaluated to true, both expressions must be false
}else {
  console.log('False ❌ False ❌');
}