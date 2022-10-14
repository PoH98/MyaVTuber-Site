import config from '../plugins/specialEvent.json';
export default (req, res, next) => {
    // detect urls you'd like to redirect
    // call res.redirect(CODE, NEWURL)

    if (req.url === '/celebrate3Dsuccess' && !config.showSpecialCelebrate) {
        res.writeHead(301, { Location: '/' });
        res.end();
    } else {
        next();
    }
}