import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Sign = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        // Hardcoded correct email and password
        const correctEmail = ('test@example.com','ibad.2006.khan@gmail.com');
        const correctPassword = ('password123','ibad2859');

        if (email === correctEmail && password === correctPassword) {
            setMessage('Successful login');
            setTimeout(() => {
                navigate('/main');  // Redirect to the home page after a short delay
            }, 1000);
        } else {
            setMessage('Try again');
        }
    };

    return (
        <div>
            <div className="form-body">
                <div className="row">
                    <div className="form-holder">
                        <div className="form-content">
                            <div className="form-items">
                                <h3>Sign up</h3>
                                <p>Fill in the data below.</p>
                                <form className="requires-validation" noValidate onSubmit={handleSubmit}>
                                    <div className="col-md-12">
                                        <input
                                            className={`form-control ${!email && 'is-invalid'}`}
                                            type="email"
                                            name="email"
                                            placeholder="E-mail Address"
                                            required
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                        <div className="valid-feedback">Email field is valid!</div>
                                        <div className="invalid-feedback">Email field cannot be blank!</div>
                                    </div>

                                    <div className="col-md-12">
                                        <input
                                            className={`form-control ${!password && 'is-invalid'}`}
                                            type="password"
                                            name="password"
                                            placeholder="Password"
                                            required
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                        <div className="valid-feedback">Password field is valid!</div>
                                        <div className="invalid-feedback">Password field cannot be blank!</div>
                                    </div>

                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="invalidCheck"
                                            required
                                        />
                                        <label className="form-check-label">I confirm that all data are correct</label>
                                        <div className="invalid-feedback">Please confirm that the entered data are all correct!</div>
                                    </div>

                                    <div className="form-button mt-3">
                                        <button id="submit" type="submit" className="btn btn-primary">Login</button>
                                    </div>
                                    <div>
                                        <Link to='/restraction'>Register</Link>
                                    </div>
                                </form>
                                {message && <div className="mt-3">{message}</div>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sign;
