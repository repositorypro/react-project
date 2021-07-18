import React, {useContext, useState} from "react";
import {useHistory} from "react-router-dom";
import {Axios} from "../utils/Axios";

export const Signup = () => {
    const history = useHistory();

    const [form, setForm] = useState({
        email: '',
        password: ''
    });

    const changeHandler = (e) => {
        const {name, value} = e.target;
        setForm({...form, [name]: value});
    }

    const signupHandler = async (e) => {
        try {
            const {data} = await Axios.post('/sign-up', form);
            console.log(data);
            if(!data.success) {
                throw new Error("Email or password incorrect!");
            }

            // store data.
            history.push('/');
        } catch (error) {
            console.error(error.message);
        }
    }

    return (
        <div>
            <input
                type="email"
                name="email"
                placeholder="Email"
                required
                onChange={changeHandler}
            />
            <br/><br/>

            <input
                type="password"
                name="password"
                placeholder="Password"
                required
                min={6}
                onChange={changeHandler}
            />
            <br/><br/>

            <button type="button" onClick={signupHandler}>Sign up</button>

            <p>{form.email}</p>
            <p>{form.password}</p>
        </div>
    );
}