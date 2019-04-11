$('#signUpButton').click(()=>{
    let user={};
    user.firstname=$('#firstName').val();
    user.lastname=$('#lastName').val();
    user.email=$('#emailId').val();
    user.password=$('#password').val();

   $.post('http://localhost:1156/api/users/',user,(data)=>{
  
    if(data.success)
    {
      alert('you are successfully registered.. ');
    
      window.location = "http://localhost:1156/UserUI/Login/Login.html";

    }else
    {
      alert(data.message)
    }
     
   }
   )
})