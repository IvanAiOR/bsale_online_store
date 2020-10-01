
const GetAllProducts = async () => {
    const init = {
        method: 'get'
    }
    try {
        const responseFetch = await fetch('/api/product/all', init)
            .then(response => response.json());

        return responseFetch.data;

    } catch (error) {
        return {
            ok: false,
            msg: 'Can´t reach the server side',
            error
        }

    }

}

const GetDataContain = async (url, body) => {
    const init = {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
    }
    try {

        const responseFetch = await fetch(url, init).then(response => response.json());
        console.log(responseFetch)
        return responseFetch.data;

    } catch (error) {
        console.log(error)
        return {
            ok: false,
            msg: 'Can´t reach the server side trying to search products',
            error
        }

    }
}


const GetAllCategories = async () => {
    const init = {
        method: 'get'
    }
    try {
        const responseFetch = await fetch('/api/category/all', init)
            .then(response => response.json());

        return responseFetch.data;

    } catch (error) {
        return {
            ok: false,
            msg: `Categories are empty, couldn't reach the server side`,
            error
        }

    }

}

const GetProductFiltered = async (urlAction, body) => {
    const init = {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
    }
    try {

        const responseFetch = await fetch(urlAction, init).then(response => response.json());
        console.log(responseFetch)
        return responseFetch.data;

    } catch (error) {
        console.log(error)
        return {
            ok: false,
            msg: 'Can´t reach the server side trying to filter products',
            error
        }

    }
}