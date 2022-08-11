const playerId = document.querySelector('.playerId')

async function removedPlayer() {

    const id = playerId.innerText

    try {

        await fetch('/removed', {
            method: 'POST',
            body: JSON.stringify({ id }),
            headers: {'Content-Type':'application/json'}
        })
    
        location.assign('/')

    }

    catch (err) { console.log(err) }
    
}