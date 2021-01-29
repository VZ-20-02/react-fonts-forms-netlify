const Form = () => {
    return (<>
        <form name="contact v1" method="post">
            <input type="hidden" name="form-name" value="contact v1" /> <br />
            <input type="text" name="first-name" placeholder="First Name" /><br />
            <input type="email" name="email" placeholder="Email" /><br />
            <textarea name="message" ></textarea>
            <button type="submit">Send Message</button>
        </form>
    </>);
}

export default Form;