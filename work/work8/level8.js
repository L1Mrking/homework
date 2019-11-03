var arr = [5,3,8,1];
var a,b;
function filterRange(arr, a , b){
    let hash=[];
    var i;
    for(i=0;i<arr.length;i++){
        if(arr[i]>=a&&arr[i]<=b){
            hash.push(arr[i]);
        }
    }
    return hash;
}
console.log(filterRange(arr,1,4))