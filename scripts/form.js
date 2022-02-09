function validation(){
   //Identifying out and finding certain parts of elements in the Form.html to be edited
   var name = document.getElementById("name").value;
   var forms = document.getElementById("forms").value;
   var phone = document.getElementById("phone").value;
   var email = document.getElementById("email").value;
   var message = document.getElementById("message").value;
   var error_message = document.getElementById("error_message");
   var text;
   error_message.style.padding = "10px";
   //Conditional statements if the client enters a answer to this form that does not meet these requirements, the form cannot be submitted. ".length' refers to the length at which the client would enter in the answers by. If the answer's length does not adhere to these conditions, a error message will pop up which is in the dark salmon color with padding 10px.
   if(name.length < 5){
       text = "Please Enter Valid Name";
       error_message.innerHTML = text;
       return false;
   }
    if(forms.length<4){
        text = "Plese enter correct course";
        error_message.innerHTML = text;
        return false;
    }
    
    if(isNaN(phone) || phone.length != 8){
        text = "Please Enter Valid Phone Number"
        error_message.innerHTML = text;
        return false;
    }
    if(email.indexOf("@") == -1 || email.length < 6){
        text = "Please Enter Valid Email"
        error_message.innerHTML = text;
        return false;
    }
    if(message.length <=10){
        text = "Please Enter more than 10 characters";
        error_message.innerHTML = text;
        return false;
    }
    
}
    
