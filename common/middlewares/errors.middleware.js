module.exports = (err, req, res, next) => {
    console.log(err);
    err.statusCode = err.statusCode ? err.statusCode : 500;
    res.status(err.statusCode || 500).json({
        success: false,
        error: err.error || 'Server error'
    });
};
