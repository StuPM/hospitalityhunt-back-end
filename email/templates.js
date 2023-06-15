const templates = {
    welcome: (email) => {
        const split = email.split("@");
        return `<p>Welcome ${split[0]} to Hospitality Hunt</p>`
    }
};

module.exports = templates;