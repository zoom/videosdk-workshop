import KJUR from "jsrsasign";
import dotenv from "dotenv";
dotenv.config();

const generateToken = (req, res, next) => {
  try {
    let signature = "";
    const iat = Math.round(new Date().getTime() / 1000);
    const exp = iat + 60 * 60 * 2;

    const oHeader = { alg: "HS256", typ: "JWT" };

    //get credentials
    const { topic, password, name, sessionKey, roleType } = req.body;
    const sdkKey = process.env.ZOOM_SDK_KEY;
    const sdkSecret = process.env.ZOOM_SDK_SECRET;
    const oPayload = {
      app_key: sdkKey,
      iat,
      exp,
      tpc: topic,
      pwd: password,
      user_identity: name,
      session_key: sessionKey,
      role_type: roleType,
    };
    const sHeader = JSON.stringify(oHeader);
    const sPayload = JSON.stringify(oPayload);
    signature = KJUR.jws.JWS.sign("HS256", sHeader, sPayload, sdkSecret);

    //save signature
    res.locals.signature = signature;

    return next();
  } catch (err) {
    return next({ err });
  }
};

export default { generateToken };
