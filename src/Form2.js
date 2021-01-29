import { useState } from 'react'

// https://www.netlify.com/blog/2017/07/20/how-to-integrate-netlifys-form-handling-in-a-react-app/
const Form2 = () => {
    const [inputs, setInputs] = useState({
        name: "", email: "", message: ""
    })
    const handleInputs = (e) => {
        setInputs(previous => {
            return {
                ...previous,
                [e.target.name]: e.target.value
            }
        }
        )
    }

    const handleForm = (e) => {
        e.preventDefault()
        const encode = (data) => {
            return Object.keys(data)
                .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
                .join("&");
        }
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "contact v1", ...inputs })
        })
            .then(res => console.log(res))
            .catch(err => console.log(err));
    }
    return (<>
        <form name="contact v1" onSubmit={e => handleForm(e)}>
            {/* Wichtig ist das versteckte Inputfeld und dessen value, der eine Verbindung zu dem Form im HTML herstellt 
            Sonst normales Form mit name Attributen */}
            <input type="hidden" name="form-name" value="contact v1" /> <br />
            <input type="text" name="name" placeholder="First Name" value={inputs.name} onChange={e => handleInputs(e)} /><br />
            <input type="email" name="email" placeholder="Email" value={inputs.email} onChange={e => handleInputs(e)} /><br />
            <textarea name="message" value={inputs.message} onChange={e => handleInputs(e)}></textarea> <br />
            <button type="submit">Send Message</button>
        </form>
    </>);
}

export default Form2;