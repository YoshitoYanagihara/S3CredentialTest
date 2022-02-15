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
            "Set-Cookie": ["Test1", "Test2", "Test3"],
        },
        body: JSON.stringify({ message: 'CLI Deploy Successful !!' }),
    };
    response.multiValueHeaders["Set-Cookie"] = response.multiValueHeaders["Set-Cookie"].map(cookie => {
        cookie += "; Secure; HttpOnly; SameSite=None";
        return cookie;
    });
    return response;
};
