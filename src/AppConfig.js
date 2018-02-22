let ConfigOverride
try {
    ConfigOverride = require("./config.json")
} catch (e) {
    // console.log(e)
}

const runConfig = () => {
    this.config = {
        clientId: ConfigOverride
            ? ConfigOverride.clientId
            : process.env.REACT_APP_CLIENT_ID,
        apiKey: ConfigOverride
            ? ConfigOverride.apiKey
            : process.env.REACT_APP_API_KEY,
        serverUri: ConfigOverride
            ? ConfigOverride.serverUri
            : process.env.REACT_APP_SERVER_URI 
    }
}
runConfig()

module.exports = this.config