const KJUR = require('jsrsasign');

async function generateToken({ sdkKey, sdkSecret, topic, roleType }) {
  try {
    let signature = '';
    const iat = Math.round(new Date().getTime() / 1000);
    const exp = iat + 60 * 60 * 2;

    const oHeader = { alg: 'HS256', typ: 'JWT' };

    const oPayload = {
      app_key: sdkKey,
      iat,
      exp,
      tpc: topic,
      role_type: roleType,
      version: 1
    };
    const sHeader = JSON.stringify(oHeader);
    const sPayload = JSON.stringify(oPayload);
    signature = await KJUR.jws.JWS.sign('HS256', sHeader, sPayload, sdkSecret);
    return { signature };
  } catch (err) {
    return err;
  }
}
module.exports = { generateToken };
