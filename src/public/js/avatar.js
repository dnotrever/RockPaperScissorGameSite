var avatarSelect

function selectAvatar(element) {

    avatarSelect = element.id

    console.log(avatarSelect)

    const avatarList = document.querySelector(".avatar-list")

    for (const [key, value] of Object.entries(avatarList.children)) {
        value.id = ""
    }

    element.parentNode.id = "selected"

    for (const [key, value] of Object.entries(avatarList.children)) {
        console.log(value)
    }

}

const playerId = document.querySelector('.player-id')
const button = document.querySelector('button')

button.addEventListener('click', async event => {

    event.preventDefault()

    const id = playerId.textContent
    const avatar = avatarSelect

    try {

        await fetch('/avatar', {
            method: 'POST',
            body: JSON.stringify({ id, avatar }),
            headers: { 'Content-Type': 'application/json' }
        })

        location.assign('/profile')

    }

    catch (err) { console.log(err) }

})