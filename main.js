var choose=document.querySelector('#first_input');
choose.focus()
choose.title('First name')

choose.addEventListener('input',function(){
    
        console.log('INPUT!!');
})

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

function answer(){
    var httpR= new XMLhttpRequest();
    httpR.onreadystatechange=function(){
    if (httpR.readyState===XMLhttpRequest.DONE) {
        if (httpR.status===200) {
        alert(httpR.responseText)
        }
        else{
            alert('ghjghj')
        }
    }}
httpR.open('POST','answer.html')
httpR.send()
}