import Router from 'express'

const router = new Router()

router.get('/user', async(req, res) => {
    res.status(200).send("Jess User")
})

export default router