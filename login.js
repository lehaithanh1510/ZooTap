model = {

}
model.register = async (data) => {
    try {
        const response = await firebase.auth().createUserWithEmailAndPassword(data.email, data.password)
        console.log(response)
        firebase.auth().currentUser.updateProfile({
            displayName: data.firstName + ' ' + data.lastName
        })
        firebase.auth().currentUser.sendEmailVerification()
    } catch (err) {
        alert(err.message)
        console.log(err)
    }
}
model.login = async (email, password,) => {
    try {
        // console.log(email)
        const response = await firebase.auth().signInWithEmailAndPassword(email, password)
        // if (response.user.emailVerified) {
            // console.log('haha')
            // model.currentUser = {
            //     email : response.user.email,
            //     displayName: response.user.displayName,
            // }
        // }
        // else {
        //     alert ('Please verifify your email')
        // }
        window.location.href = "consumer"
    } catch (err) {
        alert(err.message)
        console.log(err)
    }
}
// let  loginForm document.querrySelector(".user")
// document.querrySelector(".user").addEventListener("submit", () => {
//     let data = {
//         email : 
//     }
//     model.login()
// })
document.querySelector(".user").addEventListener("submit", (e) => { 

    e.preventDefault()
    console.log("1")
    window.location.href = "consumer.html"
})
