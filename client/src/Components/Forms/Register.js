import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
import "./Form.css";
import axios from 'axios';

function Register({isLogin}) {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [otp, setOtp] = useState('');

    // const [err, setError] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (password !== confirmPassword) {
            console.log('Password and Confirm Password do not match.');
            return;
        }
        console.log(name, email, username, password, phoneNumber);
        axios.post('http://localhost:5000/register', {
            name,
            email,
            username,
            password,
            phoneNumber
        }).then(response => {
            if (response.status === 200) {
                console.log("Sucess : ", response);
                navigate('/');
                alert("User created successfully")
            } else if (response.status === 409) {
                alert("User already exists")
            }
        }).catch(error => {
            console.error("Error : ", error);
        })

    };

    return (
        <div className='loginContainer'>
            <form action="/" method="post" className='form'
                onSubmit={handleSubmit}>
                <span className='text-bold'
                    style={
                        {textAlign: 'center'}
                }>Register</span>
                <div className="formGroup">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="name"
                        value={name}
                        onChange={
                            (e) => setName(e.target.value)
                        }
                        placeholder='Name'/>
                </div>
                <div className="formGroup">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email"
                        value={email}
                        onChange={
                            (e) => setEmail(e.target.value)
                        }
                        placeholder='Email'/>
                </div>
                <div className="formGroup">
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" id="username"
                        value={username}
                        onChange={
                            (e) => setUsername(e.target.value)
                        }
                        placeholder='Username'/>
                </div>
                <div className="formGroup">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password"
                        value={password}
                        onChange={
                            (e) => setPassword(e.target.value)
                        }
                        placeholder='Password'/>
                </div>
                <div className="formGroup">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input type="password" name="confirmPassword" id="confirmPassword"
                        value={confirmPassword}
                        onChange={
                            (e) => setConfirmPassword(e.target.value)
                        }
                        placeholder='Confirm Password'/>
                </div>
                <div className="formGroup">
                    <label htmlFor="phoneNumber">Mobile Number</label>
                    <input type="number" inputMode="tel" name="phoneNumber" id="phoneNumber"
                        value={phoneNumber}
                        onChange={
                            (e) => setPhoneNumber(e.target.value)
                        }
                        placeholder='Mobile Number'/>
                </div>
                <div className="formGroup">
                    <label htmlFor="otp">Otp</label>
                    <input type="number" inputMode='tel' name="otp" id="otp"
                        value={otp}
                        onChange={
                            (e) => setOtp(e.target.value)
                        }
                        placeholder='Otp Number'/>
                </div>
                <div className="formGroup formButtonGroup">
                    <input type="submit" value="Register"/>
                    <input type="reset" value="Clear"/>
                </div>
                <p>
                    Already have an account?
                    <Link to={'/login'}
                        onClick={isLogin}>click here to login</Link>
                </p>
            </form>
        </div>
    )
}

export default Register;
