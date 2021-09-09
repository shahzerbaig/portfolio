import "./styles/contact-us.css" ;

function ContactUs(){
    return(
        <div className="contact-us">
            <form action="">
                <lable for="request-name">Name: </lable>
                <input type="text" id="request-name" name="request-name" required minlength="2" maxlength="15" size="15"></input>
            </form>
        </div>
    );
}

export default ContactUs ;