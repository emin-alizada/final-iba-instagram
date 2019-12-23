export const verifyUser = (logInUser) => {
    return async dispatch => {
        await fetch("https://fp-instagram.herokuapp.com/login",{
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Origin": "http://localhost:3000"
            },
            method: "POST",
            body: JSON.stringify(logInUser)
        }).then(response => {
            if(response.status === 200){
                return response.json();
            }
            else{
                alert("Wrong Username or password");
                throw new Error("Wrong username or password")
            }
        })
            .then(user => {
                dispatch({type: "VERIFIED_USER", payload:user})
            })
            .catch(e => {
                console.log(e);
        })
    }
};