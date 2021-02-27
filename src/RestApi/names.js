const API = "http://localhost:3000/";

export const GetData = async() => {
    const data = await fetch(`${API}user`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },

    })
    return data.json()
}

export const updateUser = (name) => {


    fetch(`${API}`, {
        method: 'PUT',
        body: JSON.stringify({name: name}),
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });

}