class Record {
    constructor(documentName, projectName, subject, sender, recipient, transferMethod, date) {
        this.documentName = documentName;
        this.projectName = projectName;
        this.subject = subject;
        this.documentTransferInfo = {
            subject: subject,
            recipient: recipient,
            transferMethod: transferMethod,
            date: date
        };
        this.recordValidator = null;
        this.documentDetails = null;
    };
}

module.exports = {
    Record
}