import { useState } from 'react';
import { TextFieldBasicExampleWrapper } from './TextF';
import { TextField, Stack, IStackProps, IStackStyles, ThemeProvider, initializeIcons } from '@fluentui/react';


function MyForm() {
    const [inputs, setInputs] = useState({});
    const [data, setData] = useState({});


    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(inputs);
        setData(values => ({...values, inputs}))
        console.log(JSON.stringify(data));
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Enter your name:
                <input
                    type="text"
                    name="username"
                    value={inputs.username || ""}
                    onChange={handleChange}
                />
            </label>
            <label>Enter your age:
                <input
                    type="number"
                    name="age"
                    value={inputs.age || ""}
                    onChange={handleChange}
                />
            </label>
            <input type="submit" />
            {inputs && 
                <><h3>Entered Data:</h3><label>{inputs.age} </label></>
            }
        </form>

    )
}

export default MyForm;