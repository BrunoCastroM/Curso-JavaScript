exports.middlewareGlobal = (req, res, next) => {
    res.locals.umaVariavelLocal = 'Valor da <span style="color: red;">variável</span> local';
    next();
};

exports.outroMiddleware = (req, res, next) => {
    next();
};