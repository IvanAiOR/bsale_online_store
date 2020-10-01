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