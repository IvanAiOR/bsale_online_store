const LoadDataContain = async (ev = Event) => {
    ev.preventDefault();
    const body = { dataSearched: ev.target.searchData.value }
    if (!body.dataSearched) {
        return alert('Empty search info!')
    }
    const url = ev.target.action;
    const listFiltered = await GetDataContain(url, body);
    
    if (listFiltered){
        console.log(listFiltered)
        LoadGrid(listFiltered);
    }
    else{
        alert('Error trying to load data');
    }
    
}

