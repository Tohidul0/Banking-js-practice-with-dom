document.getElementById('battu'),addEventListener('click', function(){
    const mail= document.getElementById('email');
    const pass = document.getElementById('passcode');
    if(mail.value == 'akil@gmail.com' && pass.value == 'akil123'){
        window.location.href ="banking.html"
    }
})