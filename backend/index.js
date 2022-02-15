exports.handler = async (event) => {
    const response = {
        statusCode: 200,
        body: JSON.stringify('CLI Deploy Successful !!'),
    };
    return response;
};
