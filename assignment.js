function feetToMile(feet)
{
    var mile = feet*0.00018939;
    return mile;
}
var resultmile= feetToMile(7);
console.log(resultmile);



function woodCalculator(chair,table,khat){
var charCount = chair*1;
var tableCount = table*3;
var khatCount = khat*5;
var totalWood = charCount + tableCount + khatCount;
return totalWood;
}
var WoodResult = woodCalculator(1,1,1);
console.log(WoodResult);
var WoodResult1 = woodCalculator(14,5,114);
console.log(WoodResult1);

function brickCalculator(number)
{
    if(number<=10 && number>=1)
    {
        var brick= number*15000;
        return brick;

    }
    else if( number>10 && number<=20)
    {
        var brick =((12000*(number-10))+150000);
        return brick;
    }
    else{
        var brick = ((10000*(number-20)) + 270000);
    }
}
var result = brickCalculator(7);
console.log(result);


function tinyFriend(string)
{
    var min= string[0];
    for(var i=0; i<string.length;i++)
    {
        var element= string[i];
        if(element<min)
        {
            min = element;
      
        }
}
return min;
}
var smallFriend= tinyFriend(["popy","tripti","supti"]);
console.log(smallFriend);