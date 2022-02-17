const AWS = require('aws-sdk');

function getPrivateKey () {
    return new Promise((resolve, reject) => {
        const secretsManager = new AWS.SecretsManager();
        secretsManager.getSecretValue({SecretId: "s3_rsa"}, (err, data) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(data.SecretString);
        });
    });
}

function getSignedCookie () {
    return new Promise(async (resolve, reject) => {
        const privateKey = await getPrivateKey();
        const keyPairId = process.env.KEY_PAIR_ID;
        const signer = new AWS.CloudFront.Signer(keyPairId, privateKey);    
        signer.getSignedCookie({
            url: "https://contents.yanap-app.com/hoge/fuga/piyo.json",
            expires: Math.round(new Date().getTime() / 1000) + 3600,
        }, (err, data) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(data);
        });    
    });
}

exports.handler = async (event) => {
    try {
        const data = await getSignedCookie();
        const response = {
            statusCode: 200,
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Headers" : "Content-Type",
                "Access-Control-Allow-Origin": "http://localhost:8080",
                "Access-Control-Allow-Credentials": true,
            },
            multiValueHeaders: {
                "Set-Cookie": [
                    `CloudFront-Expires=${data["CloudFront-Expires"]}`,
                    `CloudFront-Key-Pair-Id=${data["CloudFront-Key-Pair-Id"]}`,
                    `CloudFront-Signature=${data["CloudFront-Signature"]}`,
                ],
            },
            body: JSON.stringify({ message: "Success" }),
        };
        response.multiValueHeaders["Set-Cookie"] = response.multiValueHeaders["Set-Cookie"].map(cookie => {
            cookie += "; Secure; HttpOnly; SameSite=None; Domain=yanap-app.com; Path=/hoge/fuga/piyo.json";
            return cookie;
        });
        return response;
    } catch (err) {
        return {
            statusCode: 500,
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Headers" : "Content-Type",
                "Access-Control-Allow-Origin": "http://localhost:8080",
                "Access-Control-Allow-Credentials": true,
            },
            body: JSON.stringify({ error: err }),
        };
    }
};
