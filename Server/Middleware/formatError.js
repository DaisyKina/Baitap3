const errorData = (error, _, res, next) => {
   if (error) {
    return res.status(404).json({
        errorMsg: error.message,
    })
   }
   next()
}
module.exports = errorData