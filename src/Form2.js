import { useState } from 'react'
import axios from 'axios'
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
        // let myData = Object.keys(inputs)
        //     .map(
        //         key => `${encodeURIComponent(key)}=${encodeURIComponent(inputs[key])}`
        //     )
        //     .join("&");

        // fetch('/', {
        //     method="post",

        // })
        console.log(inputs)
        axios({
            "form-name": "contact v1",
            method: 'post',
            url: '/',
            data: {
                name: 'Fred',
                email: 'Flintstone'
            }
        })
            .then(data => console.log(data))
            .catch(err => console.log(err))

    }
    return (<>
        <form name="contact v1" onSubmit={e => handleForm(e)}>
            {/* Wichtig ist das versteckte Inputfeld und dessen value, der eine Verbindung zu dem Form im HTML herstellt 
            Sonst normales Form mit name Attributen */}
            <input type="hidden" name="form-name" value="contact v1" /> <br />
            <input type="text" name="name" placeholder="First Name" onChange={e => handleInputs(e)} /><br />
            <input type="email" name="email" placeholder="Email" onChange={e => handleInputs(e)} /><br />
            <textarea name="message" onChange={e => handleInputs(e)}></textarea> <br />
            <button type="submit">Send Message</button>
        </form>
    </>);
}

export default Form2;