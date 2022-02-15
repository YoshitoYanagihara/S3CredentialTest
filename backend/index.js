exports.handler = async (event) => {
    const response = {
        statusCode: 200,
        headers: {
            "Content-Type": "application/json",
            "Set-Cookie": "Test"
        },
        body: JSON.stringify('CLI Deploy Successful !!'),
    };
    return response;
};
