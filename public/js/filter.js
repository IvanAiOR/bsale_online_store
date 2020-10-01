const LoadFilter = (listOfCategories = []) => {
    const filter = document.getElementById('idFilter');
    let optionList = '';
    listOfCategories.forEach(element => {
        optionList += `
        <option value="${element.id}">${element.name}</option>
        `
    })
    filter.innerHTML = optionList;
}

const FilterProductByCategory = async () => {
    const filterSelect = document.getElementById('idFilter');

    const body = { categoryID: filterSelect.options[filterSelect.selectedIndex].value }
    if (!body.categoryID) {
        return alert('Empty search info!')
    }
    const urlAction = '/api/product/byCategory';
    const listFiltered = await GetProductFiltered(urlAction, body);

    if (listFiltered) {
        console.log(listFiltered)
        LoadGrid(listFiltered);
    }
    else {
        alert('Error trying to load data');
    }

}
