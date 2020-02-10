Feature('loginform');


//<<--------------------------------------------Test Case 1------------------------------------------------------------->>


Scenario('Should let you login', (I) => {    //Checking whether account page is redirected after signing in

    //For opening Login URL
    I.amOnPage('https://accounts.cloud.charly.education/login?login_challenge=c76e4edb6e4c4cb2a0cc3c2de7be74da');
    I.resizeWindow(1366,768);
    
    //Enter email id and password into input fields
    I.fillField('email','aditya.chaudhari@s2017.tu-chemnitz.de');
    I.fillField('password','Ansang$1234');
    
    // search for link or button "Login"
    I.click('Login');

    //Assert to find out whether the user is directed to correct URL
    I.seeInCurrentUrl('https://app.cloud.charly.education/dashboard');

});

//<<--------------------------------------------Test Case 2------------------------------------------------------------->>


Scenario('Should give you error for not entering password', (I) => {// Should display error when password is not entered for login
    
    //For opening Login URL
    I.amOnPage('https://accounts.cloud.charly.education/login?login_challenge=c76e4edb6e4c4cb2a0cc3c2de7be74da');
    
    //Enter email id  input fields with name "email"
    I.fillField('email','aditya.chaudhari@s2017.tu-chemnitz.de');    
        
    // search for link or button "Login"
    I.click('Login');

    //Assert to find out whether the user is directed to correct URL
    I.seeInCurrentUrl('https://accounts.cloud.charly.education/login');
    //I.seeInField('Entweder sind deine E-Mail oder Passwort inkorrekt','.register-subtitle');
});
        

//<<--------------------------------------------Test Case 3------------------------------------------------------------->>


Scenario('Should give you error for not entering email', (I) => { // Should display error when email address is not entered for login

    //For opening Login URL
    I.amOnPage('https://accounts.cloud.charly.education/login?login_challenge=c76e4edb6e4c4cb2a0cc3c2de7be74da');
    
    //Enter password input fields with name "password"
    I.fillField('password','Ansang$1234')
    
    // search for link or button "Login"
    I.click('Login')

    //Assert to find out whether the user is directed to correct URL
    I.seeInCurrentUrl('https://accounts.cloud.charly.education/login')
    //I.seeInField('Entweder sind deine E-Mail oder Passwort inkorrekt','.register-subtitle');
});


//<<--------------------------------------------Test Case 4------------------------------------------------------------->>

Scenario('Should give you error for invalid email address', (I) => { // Should display error when invalid email address is entered for login
    
    //For opening Login URL
    I.amOnPage('https://accounts.cloud.charly.education/login?login_challenge=c76e4edb6e4c4cb2a0cc3c2de7be74da');
    
    //Enter invalid "email id" and valid "password" into input fields
    I.fillField('email','aditya.chaudhari')    
    I.fillField('password','Ansang$1234')

    // search for link or button "Login"    
    I.click('Login')

    //Assert to find out whether the user is directed to correct URL    
    I.seeInCurrentUrl('https://accounts.cloud.charly.education/login')
    //  I.seeInField('Entweder sind deine E-Mail oder Passwort inkorrekt','.register-subtitle');
});    


//<<--------------------------------------------Test Case 5------------------------------------------------------------->>

Scenario('Should give you error for invalid password', (I) => {  // Should display error when invalid password is entered for login
    
    //For opening Login URL
    I.amOnPage('https://accounts.cloud.charly.education/login?login_challenge=c76e4edb6e4c4cb2a0cc3c2de7be74da')
   
    //Enter valid "email id" and invalid "password" into input fields
    I.fillField('email','aditya.chaudhari@s2017.tu-chemnitz.de')
    I.fillField('password','xxxx')
    
    // search for link or button "Login"
    I.click('Login');

    //Assert to find out whether the user is directed to correct URL
    I.seeInCurrentUrl('https://accounts.cloud.charly.education/login')
    // I.seeInField('Entweder sind deine E-Mail oder Passwort inkorrekt','.register-subtitle');                
});            


//<<--------------------------------------------Test Case 6------------------------------------------------------------->>

Scenario('Should redirect to recover password page after clicking on Forgot Password', (I) => { //Should be directed to recover password form	
    
    //For opening Login URL
    I.amOnPage('https://accounts.cloud.charly.education/login?login_challenge=c76e4edb6e4c4cb2a0cc3c2de7be74da');
    
    //search for link or button "forgot password"
    I.click('.forgotPass');

    //Assert to find out whether the user is directed to correct URL
    I.seeInCurrentUrl('https://accounts.cloud.charly.education/forgot_password');
});


//<<--------------------------------------------Test Case 7------------------------------------------------------------->>


Scenario('Email field resets if incorrect email is entered', (I) => { //Email filed should reset if incorrect email id is entered	
    
    //For opening Login URL    
    I.amOnPage('https://accounts.cloud.charly.education/login?login_challenge=c76e4edb6e4c4cb2a0cc3c2de7be74da');
    
    //search for link or button "forgot password"    
    I.click('.forgotPass');

    //Enter "email id" with invalid format in "email id" field with 
    I.fillField('email','aditya.chaudhari');
    
    // search for link or button "Send"
    I.click('.appButton');

    //Assert to find out whether the email id feild has been reseted after entering email in invalid format
    I.seeInField('email', '');
});


//<<--------------------------------------------Test Case 8------------------------------------------------------------->>


Scenario('Should give you error for unregistered email address while recovering password', (I) => { //Email filed should reset if incorrect email id is entered	
    
    //For opening Login URL        
    I.amOnPage('https://accounts.cloud.charly.education/login?login_challenge=c76e4edb6e4c4cb2a0cc3c2de7be74da');
    
    //search for link or button "forgot password"        
    I.click('.forgotPass');

    //Enter unregistered "email id" in "email id" field with 
    I.fillField('email','aditya.chaudhari@qw.com');  
    
    // search for link or button "Send"
    I.click('.appButton');
    
    //Assert to find out whether the email id feild has been reseted after entering email in invalid format
    I.seeInField('email', '');

    //Assert to find out whether the user is not directed any other URL    
    I.seeInCurrentUrl('https://accounts.cloud.charly.education/forgot_password');
});


//<<--------------------------------------------Test Case 9------------------------------------------------------------->>


Scenario('Password recovery mail is successfully sent to registered email address', (I) => { //Password recovery mail is successfully sent to registered email address
    
    //For opening Login URL        
    I.amOnPage('https://accounts.cloud.charly.education/login?login_challenge=c76e4edb6e4c4cb2a0cc3c2de7be74da');
    
    //search for link or button "forgot password"        
    I.click('.forgotPass');

    //Enter valid "email id" in "email id" field with 
    I.fillField('email','aditya.chaudhari@s2017.tu-chemnitz.de');    

    // search for link or button "Send"
    I.click('.appButton');

    //Assert to find out whether the user is directed to correct URL
    I.seeInCurrentUrl('https://accounts.cloud.charly.education/reset_requested');
});


