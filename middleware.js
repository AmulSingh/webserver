var middleware = {
    requestLogger: function(req, res, next){
        console.log('Request : '+req.method+' '+req.originalUrl)
        next()
    },
    privateLogger: function(req, res, next){
        console.log('private')
        next()
    }
};

module.exports = middleware;