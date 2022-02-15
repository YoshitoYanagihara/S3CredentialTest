exports.handler = async (event) => {
    const response = {
        statusCode: 200,
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Headers" : "Content-Type",
            "Access-Control-Allow-Origin": "http://localhost:8080",
            "Access-Control-Allow-Credentials": true,
            "Set-Cookie": "Test"
        },
        body: JSON.stringify({ message: 'CLI Deploy Successful !!' }),
    };
    return response;
};
