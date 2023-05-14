function set_show_medborgarskap_input(val){
    var element=document.getElementById('medborgarskap_input');
    if (val=="other"){
        element.style.display='';
        element.value='';
    }
    else{
        element.style.display='none';
        element.value=val;
    }
}
 

 set_show_medborgarskap_input(document.getElementById('medborgarskap').value); 
 //gör så att raden göms även när man startar/laddar om 