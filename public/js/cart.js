
const localStorageCartKey = 'cartSaved';
const formatterNumberToMoney = new Intl.NumberFormat('es-CL', {
    style: 'currency',
    currency: 'CLP'
})

const AddToCart = (id) => {
    const storagedCartList = GetLocalStorageCartList(localStorageCartKey)

    if (storagedCartList) {
        const itemFound = storagedCartList.find(e => e.id === id);

        if (itemFound) {
            itemFound.quantity++;
            const newList = storagedCartList.filter(e => e.id !== id);
            newList.push(itemFound);
            SetLocalStorageCartList(localStorageCartKey, newList);
        }
        else {
            AddNewItemToCartList(storagedCartList, id);
        }
        SetLocalStorageCartList(localStorageCartKey, storagedCartList)
        localStorage.setItem(localStorageCartKey, JSON.stringify(storagedCartList));
    }
    else {
        CreateCart(id);
    }

}

const CreateCart = (id) => {
    const cart = [
        {
            id,
            quantity: 1
        }];

    localStorage.setItem(localStorageCartKey, JSON.stringify(cart));
}

const AddNewItemToCartList = (currentList, id) => {
    const newItem = {
        id,
        quantity: 1
    }
    currentList.push(newItem);

    localStorage.setItem("cartSaved", JSON.stringify(currentList));
}

const SetLocalStorageCartList = (localStorageKey, list) => {

    localStorage.setItem(localStorageKey, JSON.stringify(list));
}

const GetLocalStorageCartList = (localStorageKey) => {

    const localStorageList = localStorage.getItem(localStorageKey)
    return JSON.parse(localStorageList);
}
//this function allow generate the cart table over the grid
const LoadCartTable = async () => {
    const grid = document.getElementById('idArticleGrid')
    const localStorageList = GetLocalStorageCartList(localStorageCartKey);

    grid.innerHTML = GenerateCartTable();

    const cartTable = document.getElementById('idCartTableBody');
    localStorageList.forEach(async (elem) => {
        const productValid = await GetProductByID('/api/product/details', { id: elem.id });
        let itemResult = productValid[0];
        itemResult.quantity = elem.quantity;
        const tr = document.createElement('tr');
        tr.innerHTML = `   
            <td>${itemResult.id}</td>
            <td>${itemResult.name}</td>
            <td>${formatterNumberToMoney.format(itemResult.price)}</td>
            <td>${itemResult.quantity}</td>
            <td>${formatterNumberToMoney.format(itemResult.quantity * itemResult.price)}</td>
            <td><button class="btn-filter" onclick="DeleteCartItem(${itemResult.id})" >X</button></td>
            `;
        cartTable.appendChild(tr);

    })




}

const GenerateCartTable = () => {
    let cartCard = `
    <article class="card cart-card">
    <h3 class="text-center">Cart List</h3>
    <table class="cart-table">
        <thead>
            <tr>
                <th>SKU</th>
                <th>Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Delete</th>
            </tr>
        </thead>
        <tbody id='idCartTableBody'>
            
        </tbody>
    </table>
</article>`;
    return cartCard;
}

const DeleteCartItem = (id) => {
    const storedCartList = GetLocalStorageCartList(localStorageCartKey);
    const updatedCartList = storedCartList.filter(element => element.id !== id);
    console.log(updatedCartList);
    SetLocalStorageCartList(localStorageCartKey, updatedCartList);
    LoadCartTable();
}

