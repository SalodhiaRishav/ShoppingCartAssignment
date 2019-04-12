let totalPrice=0;
function refreshList() {
   let userId=localStorage['userid'];
   let path='/api/carts/'+userId;
    $.get(path, (data) => {
      $('#productList').empty()
   if(data.success)
   {
     
      for (let product of data.data) {
        
        let path ='/api/products/'+product.productId;
       
        $.get(path,(mproduct)=>{
          
         
          $('#productList').append(
            `<tr>
            <td class="col-sm-8 col-md-6">
            <div class="media">
                <a class="thumbnail pull-left" href="#"> <img class="media-object" src="http://icons.iconarchive.com/icons/custom-icon-design/flatastic-2/72/product-icon.png" style="width: 72px; height: 72px;"> </a>
                <div class="media-body">
                    <h4 class="media-heading"><a href="#">${mproduct.data.name}</a></h4>
                    <h5 class="media-heading"> by <a href="#">${mproduct.data.vendorname}</a></h5>
                    <span>Status: </span><span class="text-success"><strong>In Stock</strong></span>
                </div>
            </div></td>
            <td class="col-sm-1 col-md-1 text-center"><strong>${product.quantity}</strong></td>
           
            <td class="col-sm-1 col-md-1 text-center"><strong>Rs.${mproduct.data.price}</strong></td>
            <td class="col-sm-1 col-md-1 text-center"><strong>Rs.${product.quantity*mproduct.data.price}</strong></td>
            <td class="col-sm-1 col-md-1">
            <button type="button" class="btn btn-danger" onclick=deleteThisProductFromCart(${mproduct.data.id})>
                            <span class="glyphicon glyphicon-remove "></span> Remove
                        </button></td>
        </tr>`
      
          )
        })
       
      } 
        
   }  
   else
   {
     alert('something went wrong while fetching products')
   }   
    })
  }
  refreshList();


  function deleteThisProductFromCart(productId)
  {
    let userId=localStorage['userid'];
    
    let path='/api/carts/delete?userId='+userId+'&productId='+productId;
 
    $.ajax({
      url: path,
      type: 'DELETE',
      success:(data) => {
        if(data.success)
        {
          alert('deleted successfully...')
        }
      
       
          refreshList()
       
      }
  });

  }
  $('#logOut').click(()=>{
     
    alert('you are going to log out')
    localStorage.setItem('userid',null);
    window.location='/';
  })
