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