// Add your code here
const userData = {
    name: " ", 
    email: " "
}

function submitData(name, email){
    const configObj = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            name: name,
            email: email
        })
    }
    return fetch("http://localhost:3000/users", configObj)
    .then(resp => resp.json())
    .then(response => {
        console.log(response)
        const newId = response.id;
        const h1 = document.createElement('h1');
        h1.innerHTML = `${newId}`;
        document.body.append(h1);
        return response;
    })
    .catch(error => {
        const h1 = document.createElement('h1')
        h1.innerHTML = `Error: ${error.message}`
        document.body.append(h1)
    })
}


submitData(userData.name, userData.email);