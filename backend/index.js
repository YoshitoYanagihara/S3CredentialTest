exports.handler = async (event) => {
    const response = {
        statusCode: 200,
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Headers" : "Content-Type",
            "Access-Control-Allow-Origin": "http://localhost:8080",
            "Access-Control-Allow-Credentials": true,
        },
        multiValueHeaders: {
            "Set-Cookie": ["Test1=Hoge; Path=/hoge", "Test2=Fuga; Path=/hoge/fuga", "Test3=Piyo; Path=/hoge/fuga/piyo.json"],
        },
        body: JSON.stringify({ message: 'CLI Deploy Successful !!' }),
    };
    response.multiValueHeaders["Set-Cookie"] = response.multiValueHeaders["Set-Cookie"].map(cookie => {
        cookie += "; Secure; HttpOnly; SameSite=None; Domain=yanap-app.com";
        return cookie;
    });
    return response;
};
