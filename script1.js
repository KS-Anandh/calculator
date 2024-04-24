function solve(val){
    var v=document.getElementById('out');
    v.value +=val;

}
function result(){
    var num=document.getElementById('out').value
    var num1 =eval(num);
    document.getElementById('out').value=num1;
}

function clear(){
    document.getElementById('out').value=" ";
}