//sib boilerplate
const SibApiV3Sdk = require("sib-api-v3-sdk");
//create instance
let defaultClient = SibApiV3Sdk.ApiClient.instance;
//decide on how to auth
let apiKey = defaultClient.authentications["api-key"];
//set api key
apiKey.apiKey = process.env.SIB_API_KEY;
//create instance of the ability to send transaction email
let apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();
//create a smto email instance
let sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();

function sendEmail(
  subject,
  htmlContent,
  toEmail,
  toName,
  sender = { name: "FT3", email: "ft3@tinsleymail.co.uk" },
  replyTo = { name: "FT3", email: "ft3@tinsleymail.co.uk" }
) {
  //config email
  sendSmtpEmail.subject = subject;
  sendSmtpEmail.htmlContent = htmlContent;
  sendSmtpEmail.to = [{ name: toName, email: toEmail }];
  sendSmtpEmail.sender = sender;
  sendSmtpEmail.replyTo = replyTo;

  apiInstance.sendTransacEmail(sendSmtpEmail).then(
    function (data) {
      console.log("API responsed with", data);
    },
    function (error) {
      console.log(error);
    }
  );
}

module.exports = sendEmail;
