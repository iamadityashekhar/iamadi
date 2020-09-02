function clicked() {
          var user = document.getElementById('username');
          var pass = document.getElementById('password');
  
            
           var coruser = "iamadi";
           var corpass = "iamadi";

           if(user.value == coruser)  {
 

                  if(pass.value == corpass) {

                       
                        window.alert("login successful click ok to continue");
                        window.open("file:///E:/9th%20Standard/9th%20Recordings/iamadiindianarmy.com/securelogin.html")

            }  else {

                       window.alert("incorrect password!!");
                       window.open("https://www.valuedopinions.co.in/login");
                       

            }



      }    else {

                 window.alert("Incorrect username and passwoed!!");
                 window.open("https://www.valuedopinions.co.in/login");

      }  


      }



                              