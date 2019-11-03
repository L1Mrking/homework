var arr = [1,1,1,2,2,3,4,4,5,5,5];
function uniq(arr){
    let hash=[];
    let i,j;
    for(i = 0;i<arr.length;i++){
        for (j = 0;j < hash.length;j++){
            if(hash[j]==arr[i]){
                break;
            }
        }
        if(j==hash.length){
            hash.push(arr[i]);
        }
    }
    return hash;
}
console.log(uniq(arr));