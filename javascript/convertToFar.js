let tempInCel=35;
let tempInFrh;
function convertToFahrenheit(tempInCel)
{
tempInFrh=(tempInCel * 9/5) + 32;
return(tempInFrh);
}
tempInFrh=convertToFahrenheit(tempInCel);
console.log("Temperature "+tempInCel+"C in Fahrenheit is:"+tempInFrh+"f");

tempInCel=0;
tempInFrh=convertToFahrenheit(tempInCel);
console.log("Temperature "+tempInCel+"C in Fahrenheit is:"+tempInFrh+"f");