const localStorageKey = 'cartSaved';

const AddToCart = (id) => {
    const storagedCartList = GetLocalStorageCartList(localStorageKey)

    if (storagedCartList) {
        const itemFound = storagedCartList.find(e => e.id === id);

        if (itemFound) {
            itemFound.quantity++;
            const newList = storagedCartList.filter(e => e.id !== id);
            newList.push(itemFound);
            SetLocalStorageCartList(localStorageKey, newList);
        }
        else {
            AddNewItemToCartList(storagedCartList, id);
        }
        SetLocalStorageCartList(localStorageKey, storagedCartList)
        localStorage.setItem(localStorageKey, JSON.stringify(storagedCartList));
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

    localStorage.setItem(localStorageKey, JSON.stringify(cart));
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

const LoadCartTable = () => {
    const cartCard = `
    <article class="card cart-card">
        <h3 class="text-center">Cart List</h3>
        <table class="cart-table">
            <thead>

                <tr>
                    <th>SKU</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1234</td>
                    <td>asd</td>
                    <td>1234</td>
                    <td>1234</td>
                </tr>
            </tbody>
        </table>
    </article>
    `;
    ArticleGrid.innerHTML()
}

