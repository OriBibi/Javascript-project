/*import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

import Example from "./newReact"*/

//ReactDOM.render(<Example />,document.querySelector(".body"))
var choose=document.querySelector('#first_input');
choose.focus()
setTimeout(function(){
    if(choose.value!=0){
    alert('Don`t forget big capital!')}},0)
    
    /*
document.querySelector('input').style.display=function(e){
    if(e.invalid==true){
        this.backgroundColor=lightcoral;
    }
    
    
}
choose.addEventListener('input',function(){
    if (choose.value!='') {
        choose.style.display='none'
        
    }
})
var httpR= new XMLhttpRequest();
*/
function lissen(e){
    //console.log('e:',e.target.value)
    var url="http/:ori.com/getselect?selectName="
    endUrl=url+e.target.value
    console.log(endUrl)/* אפשר להכניס את הכתובת הזאת שיצרנו לתוך הפונקציה 
    אנסר ולשלוח ח את זה לתוך האופנן והסנד של איטטיטיפין 
    בכך להגיע לאיזה כתובת שאני מעוניין בה
     על סמך בחירה כל שהיא של המשתמשץ */
}
        function answer(){
            var httpR= new XMLHttpRequest();
            httpR.onreadystatechange=function(){
            if (httpR.readyState===XMLHttpRequest.DONE) {
                if (httpR.status===200) {
                document.querySelector("#body").remove();
                alert(JSON.parse(httpR.responseText))
                }
                else{
                    alert('ghjghj')
            }
        }}
        
       // httpR.open('POST','answer.html')
       // httpR.send()
}
document.querySelector('#course').addEventListener('change',lissen)
//-----------class 20---------------

//var timeoutid=setTimeout(function(){alert('welcome to my website!')},4000)
//var intervalid=setInterval(function(){alert('welcome to my website!')},8000)


//---------------------Jquery------------------//


$('.registration').click(function(){
    $('.showRegistration').show(800,function(){});
    $(this).hide();
    //this.style.color = this.style.color=='black'? 'grey':'black';
})
$('.send').click(function(){
    $('.showRegistration').hide();
    $('.registration').show();
})

    
   
    
     $(".checkbox").change(function () {
        if ($(this).is(':checked')) {
            $('.body').css({ 
                'backgroundImage': 'none',
            'backgroundColor': 'rgb(68, 66, 66)',
            'backgroundPosition': 'top center',
            'background-size': '100% auto'
            })
            console.log('rrrrrr')
        }
        else {
            console.log('qqqqqqq')
            $('.body').css({
                'backgroundImage': 'url(pictures/Capture.PNG)',
            'backgroundPosition': 'top center',
            'background-size': '100% auto',
            'backgroundRepeat':'no-repeat'
            
            } )       }
    })
        
    

    //----by javascript------
   /* document.querySelector(".registration").addEventListener('mouseover',function(){
            this.style.color='blue'
    })
    document.querySelector(".registration").addEventListener('mouseleave',function(){
            this.style.color='black'
    })
    //-----by jquery--------
    $('.registration').mouseover(function () {this.style.color='blue'})
    $('.registration').mouseleave(function () {this.style.color='black'})*/

    /*-----About me, how to insert the info word by word------*/
var i = 0;
var txt = 'Hi, a little about myself, I have about two years to finish my degree in computer engineering . I have a year and a half of experience working with advanced communication systems in "Elbit-Systems". This work included writing basic scripts on the Linux operating system, and in-depth learning of processes in communication networks. I love and proficient in Java, I have written a significant project in this language. Im a team worker,  dedicated and committed to the work.';
var speed =30 ;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
k=8;
console.log(k)
