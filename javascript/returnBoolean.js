let num1=5654;
const boolYes=true;
const boolNo=false;
function checkNumber(num1)
{
if (num1>5000 && num1<9999)
return(boolYes);
else
return(boolNo);
}
console.log(num1+" is between 5000 and 9999: "+checkNumber(num1));

num1=4231;
console.log(num1+" is between 5000 and 9999: "+checkNumber(num1));