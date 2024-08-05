const baseURL = "http://localhost:3001/sales";

const cFetch = (response) => {
    if(!response.ok) {
        throw new Error(response.statusText);
    }
    return response;
}


export const salesDataApi = async () => {
    return fetch (baseURL , {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
    .then(cFetch)
    .catch((msg) => console.log(msg));
};