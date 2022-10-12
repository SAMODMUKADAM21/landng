function sendEmail() {
    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let WhatsApp = document.getElementById("WhatsApp").value;
    let email = document.getElementById("email").value;
    let address = document.getElementById("address").value;
    let finalmessage = `Name : ${name} <br> Phone : ${phone} <br> Whatsapp : ${WhatsApp} <br>  Email : ${email} <br>  Address : ${address} <br>`;
    
    Email.send({
        Host : "smtp.mailtrap.io",
        Username : "username",
        Password : "password",
        To : 'samodmukadam2005@gmail.com',
        From : "you@isp.com",
        Subject : "Mail from website",
        Body : finalmessage
    }).then(
      message => alert(message)
    );
}