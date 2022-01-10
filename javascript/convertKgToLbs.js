let wtInkg;
let wtInLbs;
wtInKg=1;

function convertKgToLbs(wtInKg)
{
wtInLbs=wtInKg*2.2;
return(wtInLbs);
}
wtInLbs=convertKgToLbs(wtInKg);
console.log("Weight "+ wtInKg +"kg in pounds: "+ wtInLbs+"lbs");

wtInLbs=2;

function convertLbsToKg(wtInLbs)
{
wtInkg=wtInLbs/2.2;
return(wtInkg);
}
console.log("Weight "+wtInLbs+"lbs in Kilograms: "+convertLbsToKg(wtInLbs)+"kg");