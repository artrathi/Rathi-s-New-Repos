const arr=[2,6,"sam","Adam",67,"Rathi",45,784,2,"Hansen",23,800,4,"Reni","Ramesh","Felistus"];
function returnNelements(n){
    for (let i=0;i<arr.length;i++)
        if (i<n)
            console.log(arr[i]);
    }
returnNelements(8);