const routes = require('express').Router()
const playerController = require('./app/controllers/playerController')
const { requireAuth, checkPlayer } = require('./middleware/middleware')

// GET

routes.get('*', checkPlayer)

routes.get('/', (req, res) => {
    res.render('home')
})

routes.get('/signup', (req, res) => {
    res.render('signup')
})

routes.get('/login', (req, res) => {
    res.render('login')
})

routes.get('/ranking', playerController.playerAll)

routes.get('/logout', requireAuth, playerController.playerLogout)

routes.get('/profile', requireAuth, (req, res) => {
    res.render('profile')
})

routes.get('/game', requireAuth, (req, res) => {
    res.render('game')
})

routes.get('/settings', requireAuth, (req, res) => {
    res.render('settings')
})

routes.get('/avatar', requireAuth, (req, res) => {
    res.render('avatar')
})

routes.get('/delete', requireAuth, (req, res) => {
    res.render('delete')
})

routes.get('/removed', requireAuth, (req, res) => {
    res.render('removed', {layout: 'removed'})
})

// POST

routes.post('*', checkPlayer)

routes.post('/signup', playerController.playerSignup)

routes.post('/login', playerController.playerLogin)

routes.post('/game', playerController.playerPlays)

routes.post('/settings', playerController.playerSettings)

routes.post('/avatar', playerController.playerAvatar)

routes.post('/removed', playerController.playerRemove)

module.exports = routes