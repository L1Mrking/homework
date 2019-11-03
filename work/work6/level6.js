var str;
var test1='p';
var test2='.myclass';
var test3='#myid';

function $(str){
    var re=0;
    if(str==test3){
        re=document.getElementById('myid');
    }
    if(str==test2){
        re=document.getElementsByClassName('myclass')
    }
    if(str==test1){
        re=document.getElementsByTagName('p');
    }
    return re;
}
console.log($('p'));
console.log($('#myid'));
console.log($('.myclass'));