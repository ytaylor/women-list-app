const callToApi = () => {

    let url = ``
    return fetch(url)
        .then(response => response.json())
        .then(data => {
            return data.results;
        })
}

// Añadir una nueva persona al servidor


const addPersonToApi = (personData) => {
    return fetch(API_BASE_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(personData)
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Error al guardar la persona');
            }
            return response.json();
        });
};

export { callToApi, addPersonToApi };