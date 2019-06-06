// test Lambda function

function emailLog(record) {
    return new Promise((resolve, reject) => {
        resolve(record.ses);
    });
}

exports.handler = async event => {
    let records = event.Records;
    await Promise.all(
        records.map(async record => {
            let ses = await emailLog(record);
            return ses;
        })
    );

    let response = {
        statusCode: 200,
        body: records
    };

    return response;
};
