
function include(file) { 
  
    const script  = document.createElement('script'); 
    script.src  = file; 
    script.type = 'text/javascript'; 
    script.defer = true; 
    
    document.getElementsByTagName('body').item(0).appendChild(script); 
    
}
include('./js/fetch-api.js'); 
include('./js/grid-view.js'); 
include('./js/form-search.js'); 
include('./js/cart.js'); 
