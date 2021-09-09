import "./styles/contact-us.css" ;

function ContactUs(){
    return(
        <div className="contact-us">
            <form action="">
                <lable for="request-name">Name: </lable>
                <input type="text" id="request-name" name="request-name" required minlength="2" maxlength="15" size="15"></input>

                <lable for="request-phone">Phone Number: </lable>
                <input type="text" id="request-phone" name="request-phone" required minlength="10" maxlength="13" size="15"></input>

                <lable for="request-email">Email ID: </lable>
                <input type="email" id="request-name" name="request-name" required minlength="2" maxlength="15" size="15"></input>
                
                <lable for="request-description">Description: </lable>
                <input type="text" id="request-name" name="request-name" required minlength="2" maxlength="15" size="15"></input>

                <button type="submit"> Submit Request</button>
            </form>
        </div>
    );
}

export default ContactUs ;