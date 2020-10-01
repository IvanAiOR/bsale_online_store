const LoadGrid = (list = []) => {
    //allow load the list of item in a grid on the main page
    let girdList = '';
    list.forEach(element => {
        girdList += `
        <article class="grid-item">
            <article class="card card-footer">
                <img src="${element.url_image || '../img/img_not_found.png'}" style="width:100%" alt="">
                <div class="container">
                    <h4><b>${element.name}</b></h4>
                    <hr>
                    <div  class="row justify-content-between">
                        <div class="column center-h" >
                            <span class="">$${element.price}</span>

                        </div>
                        <div class="column">
                            <a onclick="AddToCart(${element.id})" title="Add to cart" class="pointer"> 
                                <img src="./img/shopping-cart.svg" alt="${element.name}" style="width: 20%;">
                            </a>
                        </div>
                    </div>
                </div>
            </article>
        </article>
            `;

    })
    const articleGrid = document.getElementById('idArticleGrid');
    articleGrid.innerHTML = girdList;
}
