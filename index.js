const bearerToken = require('express-bearer-token')()
const firebaseAdmin = require('firebase-admin')

module.exports = (req, res, next) => {
  bearerToken(req, res, async () => {
    try {
      req.user = await firebaseAdmin.auth().verifyIdToken(req.token)

      return next()
    } catch (error) {}

    res.sendStatus(401)
  })
}
