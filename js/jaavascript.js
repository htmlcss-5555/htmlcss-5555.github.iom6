let nightMode = document.querySelector('#night-mode');
let mode = false;

nightMode.addEventListener('click', function(){
    if (mode == false) {
        mode = true;

        document.querySelector('#night-mode').style.background = "#fff";
         
        document.querySelector('body').style.background = '#000';
        document.querySelector('body').style.color = '#fff';
        document.querySelector('.main-info h2').style.color = 'yellow';
        
        
        
        document.querySelector('.form-main__info > p').style.color = '#fff';
        
        
    }   else {
        mode = false;
        document.querySelector('#night-mode').style.background = "rgb(45, 248, 255)";


        document.querySelector('body').style.background = '#fff';
        document.querySelector('body').style.color = '#000';
        document.querySelector('.main-info h2').style.color = '#000';


        document.querySelector('.form-main__info > p').style.color = '#000';



    }
});
