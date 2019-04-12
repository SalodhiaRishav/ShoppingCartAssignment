$('#login').click(()=>{
    let loginuser={};
    loginuser.email=$('#emailId').val();
    loginuser.password=$('#password').val();

      
   $.post('/api/users/login/',loginuser,
   (data)=>{
   if(data.success){
      alert('you are logged in');
      localStorage.setItem('useremail',data.data.email)
      localStorage.setItem('userid',data.data.id)

      if(data.data.email==="rishav@admin.com")
      {
       window.location = "/VendorUI/Vendor.html";

      }else
      {
       window.location = "/ProductUI/loginedHomePage/Product.html";

      }
   }
   else
   {
      alert(data.message)
   }
   }
   )
})