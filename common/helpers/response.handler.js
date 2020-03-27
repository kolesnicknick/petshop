const responseHandler = (res, data, ...values) => {
    console.log("Response handler");
    let rs = res.status.toString();
    let resData = { success: !(rs.startsWith('4') || rs.startsWith('5')), data, info:values};
    res.json(resData).send();

};
module.exports = responseHandler;
