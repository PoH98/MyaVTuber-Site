export default function (req, res, next) {
  if (req.originalUrl.includes('patient') && !req.originalUrl.includes("beta")) {
    res.spa = true
  }
  next()
}
