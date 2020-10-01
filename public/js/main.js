
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
include('./js/filter.js'); 

window.onload = () => {
    //on window load it try to get the data from products and categories 
    LoadProductGrid();
    LoadCategoryFilter();
    
};

const LoadProductGrid = async()=>{
    const allProducts = await GetAllProducts();
    if (allProducts) {
        LoadGrid(allProducts);
    }
}

const LoadCategoryFilter = async()=>{
    const allCategories = await GetAllCategories();  
    if (allCategories) {
        LoadFilter(allCategories);
    }
}
