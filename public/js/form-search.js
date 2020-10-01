const LoadDataContain = async (ev = Event) => {
    ev.preventDefault();
    const body = { dataSearched: ev.target.searchData.value }
    const url = ev.target.action;
    const {data:listFiltered} = await GetDataContain(url, body);
    
    if (listFiltered){
        
        LoadGrid(listFiltered);
    }
    else{
        alert('Error trying to load data');
    }
    
}
    
