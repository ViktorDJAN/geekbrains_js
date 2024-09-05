
//////////// part 1
async function getUserData(userId) {
    let response = await fetch(`http://example.com/users?${userId}`)

    return new Promise((resolve, reject) => {
        if (response.ok) {
            let foundUser = response.json;
            resolve('Your user is ' + foundUser)
        } else {
            reject('User is not found...')
        }
    }
    )
}
////////////// part 2

const user = {
    name: 'John Smith',
    age: 30,
    email: 'john@example.com'
};
async function saveUserData(user) {
    const response = await fetch("http:example.org/post",{
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
        body: JSON.stringify(user)
    })
    return new Promise((resolve,reject)=>{
        if(response.ok){
            resolve('POST request is sent')
        }else{
             reject('Something went wrong while attempting to send requset')
        }
    })
}



