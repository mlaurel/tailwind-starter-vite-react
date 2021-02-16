exports.handler = async (event, context) => {
    try {
        return {
            statusCode: 200,
            body: `Go serverless or go home!`,
        }
    } catch (err) {
        return { statusCode: 500, body: err.toString() }
    }
}
