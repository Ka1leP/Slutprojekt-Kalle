function set_show_medborgarskap_input(val){
    var element=document.getElementById('medborgarskap_input');
    if (val=="other"){ //när other är valt så kommer rutan upp
        element.style.display='';
        element.value='';
    }
    else{
        element.style.display='none'; //när det inte är "other " så visas inget
        element.value=val;
    }
}
 

 set_show_medborgarskap_input(document.getElementById('medborgarskap').value); 
 //gör så att raden göms även när man startar/laddar om, innan var det här en bugg och är nu löst