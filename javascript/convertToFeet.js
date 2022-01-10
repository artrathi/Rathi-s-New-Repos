let lenInInches=26;
let lenInFeetQuo;
let lenInFeetRem;
function convertToFeet(lenInInches)
{
lenInFeetQuo=Math.floor(lenInInches/12);
lenInFeetRem=lenInInches%12;
console.log(lenInInches+"in Feet is: "+lenInFeetQuo+"ft "+lenInFeetRem+"inches");
}
convertToFeet(lenInInches);
lenInInches=60;
convertToFeet(lenInInches);