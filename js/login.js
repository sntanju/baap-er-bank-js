document.getElementById('login-submit').addEventListener('click', function(){
    //get user email
    const emailFiled = document.getElementById('user-email');
    const userEmail =  emailFiled.value;
   // console.log(userEmail);

    //get user password
    const passwordFiled = document.getElementById('user-password');
    const userPassword =  passwordFiled.value;
   //console.log(userPassword);

   //check email and password
   if(userEmail == 'sontan@baap.com' && userPassword == 'secret'){

    window.location.href = 'banking.html';
       //console.log('valid-user');
   }
})
