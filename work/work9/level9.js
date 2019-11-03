let john = { name:"john",surname:"Smith",id:"J"}
let pete = { name:"Pete",surname:"Hunt",id:"P"}
let mary = { name:"Mary",surname:"Key",id:"M"}
let users = [john,pete,mary];
let usersMapped = [];
for (i=0;i < users.length;i++){
    usersMapped[i]={fullName:users[i].name+""+users[i].surname,id:i+1}
}
/*usersMapped = [
    {fullName:"john Smith",id:1},
    {fullName:"Pete Hunt",id:2},
    {fullName:"Mary Key",id:3}
]*/
console.log(usersMapped);
