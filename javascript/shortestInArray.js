let nameArray=["Ramesh","Thangarathi","Hansen","Renisha","Riona","Anio","Anthoniz Thanaseelan","Rio"] ;
let smallestOfArray="";
let num=0;

function compareNameArray(nameArray)
{
num=nameArray[0].length;
smallestOfArray=nameArray[0];
for(i=1;i<nameArray.length;i++)
if (nameArray[i].length<num)
{
num=nameArray[i].length;
smallestOfArray=nameArray[i];
}
return(smallestOfArray);
}
console.log("Smallest of the Array: "+compareNameArray(nameArray));