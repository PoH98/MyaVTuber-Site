export default function (req, res, next) {
  if (req.originalUrl.includes('patient')) {
    res.spa = true
  }
  next()
}
