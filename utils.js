class Record {
    constructor(documentName, projectName, subject, sender, recipient, transferMethod, date) {
        this.documentName = documentName;
        this.projectName = projectName;
        this.subject = subject;
        this.sender = sender;
        this.recipient = recipient;
        this.transferMethod = transferMethod;
        this.date = date;
        this.recordValidator = null;
        this.documentDetails = null;
    };


}

module.exports = {
    Record
}