document.getElementById("btncf").addEventListener("click",function(){
var x=document.getElementById("bar1").value;
var t= (x*9/5)+32;
document.getElementById("cf").innerText=t+"F";
})

document.getElementById("btnfc").addEventListener("click",function(){
var x=document.getElementById("bar2").value;
var v= (x-32)*5/9;
document.getElementById("fc").innerText=v+"C";
})

document.getElementById("btnkc").addEventListener("click",function(){  
var x=document.getElementById("bar3").value;
var k= (x-273.15); 
document.getElementById("kc").innerText=k+"C";
})

    

        
    