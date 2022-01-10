et str1="Hello World!";
let str2="rathi";

function compareStrLeng(str1,str2)
{
if (str1.length>str2.length)
console.log("String1: "+str1+" and String2: "+str2+" : Largest in length is: "+str1);
else if (str1.length<str2.length)
console.log("String1: "+str1+" and String2: "+str2+" : Largest in length is: "+str2);
else if (str1.length==str2.length)
console.log("String1: "+str1+" and String2: "+str2+" : String1 and String2 are Equal");
}
compareStrLeng(str1,str2);

str1="Thangarathi";
str2="Hello World";
compareStrLeng(str1,str2);

str1="Rathi";
str2="Thangarathi";
compareStrLeng(str1,str2);