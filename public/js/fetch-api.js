const GetAllProducts = async () => {
    const init = {
        method: 'get'
    }
    await fetch('/api/products/all', init).catch((error) => {
        return {
            ok: false,
            msg: 'Can´t reach the server side'
        }
    }).then(data => {
        return data;
    });
    
}

const GetDataContain = async (url, body) => {
    const init = {
        method: 'GET',
        body
    }
    await fetch(url, init).catch((error) => {
        return {
            ok: false,
            msg: 'Can´t reach the server side'
        }
    }).then(data => {
        return data;
    });

}
