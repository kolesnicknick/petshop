const responseHandler = (res, data) => {
    console.log("Response handler");
    let rs = res.status.toString();
    res.json({ success: !(rs.startsWith('4') || rs.startsWith('5')), data: data }).send();

};
module.exports = responseHandler;
