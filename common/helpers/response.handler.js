const responseHandler = (res, data) => {
    let rs = res.status.toString();
    res.status(res.status).json({ success: (rs.startsWith('4') || rs.startsWith('5')), data: data });

};
module.exports = responseHandler;
