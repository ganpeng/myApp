import express from 'express'

const router = express.Router()


router.get('/', (req, res) => {
    setTimeout(() => {
        res.status(200).json({
            movies : [
                {
                    title : '谍影重重'
                },
                {
                    title : '最后生还者2'
                }
            ]
        })
    }, 5000)
})

export default router
