

function refreshList() {
   
    $.get('/api/products/', (data) => {
      $('#productList').empty()
   if(data.success)
   {
     
      for (let product of data.data) {
        
          $('#productList').append(
            `<div class="col-sm-3">
    <div class="card mt-3">
      <div class="card-body">
        <h5 class="card-title">Name : ${product.name}</h5>
        <h6>Vendor : ${product.vendorname}</h6>
        <h6>Price : Rs.${product.price}</h6>
        <h6>Quantity : ${product.quantity}</h6>
        <input type="number" min=1 class="form-control col-md-4" id="qty${product.id}"  placeholder="Qty">                                                    
        <button class="btn btn-primary" onclick="addToCart(${product.id})">Add To Cart</button>
      </div>
    </div>
  </div> `
            
          )
        }
   }  
   else
   {
     alert('something went wrong while fetching products')
   }   
    })
  }
  
  refreshList()

  function addToCart(productId)
  {
    
    let path='/api/carts';
    
    let userId=localStorage['userid'];
    let txtBox='#qty'+productId
    quantity=$(txtBox).val();
    if(userId===undefined)
    {
      console.log('user not logined');
    }
    else
    {


      $.post(path,{
        productId:productId,
        quantity:quantity,
        userId:userId
      },
      (data)=> {
       
        if(data.success)
        {         
          alert('added successfully')
        }
        else
        {
          alert('some errors..');
        }
      })
    }
  }


   $('#logOut').click(()=>{
     
     alert('you are going to log out')
     localStorage.setItem('userid',null);
     window.location='/';
   })


  

