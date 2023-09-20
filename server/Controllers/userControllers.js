const KJUR = require('jsrsasign');
require('dotenv').config();

const userControllers = {};

userControllers.generateToken = (req, res, next) => {
    try {
        let signature = '';
        const iat = Math.round(new Date().getTime() / 1000);
        const exp = iat + 60 * 60 * 2;

        const oHeader = { alg: 'HS256', typ: 'JWT' };

        //get credentials 

        const oPayload = {
            app_key: sdkKey,
            iat,
            exp,
            tpc: topic,
            pwd: passWord,
            user_identity: userIdentity,
            session_key: sessionKey,
            role_type: roleType,
        };
        const sHeader = JSON.stringify(oHeader);
        const sPayload = JSON.stringify(oPayload);
        signature = KJUR.jws.JWS.sign('HS256', sHeader, sPayload, sdkSecret);

        //save signature


        return next();
    }
    catch(err) {
        return next({err})
    }
}

module.exports = userControllers;