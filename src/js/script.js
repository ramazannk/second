const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      closeElem = document.querySelector('.menu__close');

hamburger.addEventListener('click',()=>{
    menu.classList.add('active');
});
closeElem.addEventListener('click',()=>{
    menu.classList.remove('active');
});

const counters = document.querySelectorAll('.rating__counter'),
      lines = document.querySelectorAll('.rating__line span');

counters.forEach((item , i) =>{
    lines[i].style.width = item.innerHTML;
});  

$(document).ready(function(){
    
    
    $('#contacts').validate({
        rules:{
            name: "required",
            email:{
                required: true,
                email: true
            },
            checkbox: "required"
        },
        messages: {
            name: "Please specify your name",
            email: {
              required: "We need your email address to contact you",
              email: "Your email address must be in the format of name@domain.com"
            },
            
          }
        
    });
    $('form').submit(function(e){
        e.preventDefault();
        if (!$(this).validate()) {
            return;
        }
        $.ajax({
            type: "POST",
            url: "mailer/smart.php",
            data: $(this).serialize()
        }).done(function(){
            $(this).find('input').validate('');
            $('form').trigger('reset');     
        });
        return false;
    });
});


