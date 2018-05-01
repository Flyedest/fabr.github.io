function cortina(){
    
    var target = document.getElementById('cortina');
    var mainContent = document.getElementById('mainContent');
    
    if (target.classList.contains('active')){
        
        target.classList.remove('active');
        target.classList.add('deactive');
        setTimeout(1000);
        mainContent.classList.remove('esconder');
        mainContent.classList.add('mostrar');
        
    } else {
         target.classList.remove('deactive');
         target.classList.add('active');
        
         mainContent.classList.remove('mostrar');
         mainContent.classList.add('esconder');
    }
}


