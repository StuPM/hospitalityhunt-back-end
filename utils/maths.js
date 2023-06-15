const getRandomString = (length) => {

    let randomStr = "";
    const chars = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890";
    const charsLength = chars.length;

    for (let i = 0; i < length; i++) {
        randomStr += chars.charAt(Math.floor(Math.random() * charsLength))
    }

    return Date.now() + randomStr;
}

module.exports = { getRandomString };