const LoadDataContain = async (ev = Event) => {
    ev.preventDefault();
    const body = { dataToSearch: ev.target.searchData.value }
    const url = ev.target.action;
    const filteredData = await GetDataContain(url, body);
    let girdList='';
    if (!filteredData.ok){
        alert(`Data can't load`);
    }
    else{

        filteredData.data.forEach(element => {
            girdList+= `<article class="grid-item">
                <article class="card">
                    <img src="${url_image}" style="width:100%" alt="">
                    <div class="container">
                        <h4><b>${element.name}</b></h4>                        
                    </div>
                </article>
            </article>
            `
        });
    }
    
}

const LoadDataFromServerFiltered = (ev)=>{
    
}
