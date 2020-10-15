//This is basically you ORM now, linked directly to the front end. You can add the other functions using the first one as a template

let newUser = (newName) => {
    var user = {
        username: newName
    };
    axios.post('/api/users', user);
}

document.getElementById('signUp').addEventListener('click', event => {
    event.preventDefault()
    let name = document.getElementById("signUpUser").value;
    newUser(name);
});

export { newUser }