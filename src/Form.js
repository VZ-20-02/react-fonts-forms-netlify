const Form = () => {
    return (<>
        <form name="contact v1" method="post">
            {/* Wichtig ist das versteckte Inputfeld und dessen value, der eine Verbindung zu dem Form im HTML herstellt 
            Sonst normales Form mit name Attributen */}

            <input type="hidden" name="form-name" value="contact v1" /> <br />
            <input type="text" name="first-name" placeholder="First Name" /><br />
            <input type="email" name="email" placeholder="Email" /><br />
            <textarea name="message" ></textarea> <br />
            <button type="submit">Send Message</button>
        </form>
    </>);
}

export default Form;