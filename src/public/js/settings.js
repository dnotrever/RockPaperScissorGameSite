const form = document.querySelector("form")
const playerId = document.querySelector(".playerId")

const usernameMessage = document.querySelector(".username")
const emailMessage = document.querySelector(".email")
const passwordMessage = document.querySelector(".password")

const noChanges = document.querySelector(".settings-message")

form.addEventListener("submit", async event => {

    event.preventDefault()

    usernameMessage.textContent = ""
    emailMessage.textContent = ""
    passwordMessage.textContent = ""

    noChanges.textContent = ""

    const id = playerId.innerText
    const username = form.username.value
    const email = form.email.value
    const password = form.password.value

    try {

        const res = await fetch("/settings", {
            method: "POST",
            body: JSON.stringify({ id, username, email, password }),
            headers: {"Content-Type":"application/json"}
        })

        const data = await res.json()


        if (data.messages.usernameSuccess) {
            usernameMessage.textContent = data.messages.usernameSuccess
            usernameMessage.setAttribute("style", "color: green")
        }

        if (data.messages.usernameError) {
            usernameMessage.textContent = data.messages.usernameError
            usernameMessage.setAttribute("style", "color: red")
        }

        if (data.messages.emailSuccess) {
            emailMessage.textContent = data.messages.emailSuccess
            emailMessage.setAttribute("style", "color: green")
        }

        if (data.messages.emailError) {
            emailMessage.textContent = data.messages.emailError
            emailMessage.setAttribute("style", "color: red")
        }

        if (data.messages.passwordSuccess) {
            passwordMessage.textContent = data.messages.passwordSuccess
            passwordMessage.setAttribute("style", "color: green")
        }

        if (data.messages.passwordError) {
            passwordMessage.textContent = data.messages.passwordError
            passwordMessage.setAttribute("style", "color: red")
        }

        noChanges.textContent = data.messages.noChanges

    } 

    catch (err) { console.log(err) }

})