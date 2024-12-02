import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Login = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    function handleLogin(e) {

    }

    return (
        <div className='container pt-5 ' id='bg_shadow'>
            <div className='row m-3'>
                <div className='col-md-5 py-4 px-4 rounded-3 m-auto animate__animated animate__zoomIn' id='reg_form'>

                    <div className='d-flex align-items-center justify-content-between p-2'>
                        <h3 className='m-0' id='reg_heading'>Login</h3>
                        <img src='/food.png' alt='...' className='w-25' />
                    </div>

                    <form onSubmit={(e) => { handleLogin(e) }}>
                        <input value={username} onChange={(e) => setUsername(e.target.value)} placeholder='Username' id='username' type='text' required className='mb-3 form-control' />
                        <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' id='password' type='password' required className='mb-3 form-control' />
                        <button className='form-control btn btn-info' id='loginbtn'>{loading ? 'Logging in...' : 'Login'}</button>
                        <p className='text-center mt-2'>Don't have an account? <Link id='sign_in' to='/Registration'>Sign up</Link></p>
                        <p className='text-center m-0'><Link to='/forget'>Forget password?</Link></p>
                    </form>

                </div>
            </div>
        </div>
    )
}

export default Login