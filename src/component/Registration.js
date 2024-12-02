import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Registration = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);

    function handleReg(e) {

    }

    return (
        <div className='container py-5' id='bg_shadow'>
            <div className='row m-3'>
                <div className='col-md-5 py-4 px-4 rounded-3 m-auto animate__animated animate__zoomIn' id='reg_form'>

                    <div className='d-flex align-items-center justify-content-between p-2'>
                        <h3 className='text-center m-0' id='reg_heading'>Create Your Account</h3>
                        {/* <h5>{message}</h5> */}
                        {/* <img src='/food.png' alt='...' className='w-25' /> */}
                    </div>

                    <form onSubmit={(e) => { handleReg(e) }}>
                        <input value={username} onChange={(e) => setUsername(e.target.value)} placeholder='Username' id='username' type='text' required className='mb-3 form-control' />
                        <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' id='password' type='password' required className='mb-3 form-control' />
                        <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder='email' id='email' type='email' required className='mb-3 form-control' />
                        <button className='form-control btn' style={{ backgroundColor: '#007bff', color: '#fff' }} id='loginbtn' disabled={loading}>{loading ? <><span className="spinner-border spinner-border-sm"></span> Registering...</> : "Register"}</button>
                        <p className='text-center mt-2 mb-0'>Already have an account? <Link id='sign_in' to='/Login'>Sign in</Link></p>
                    </form>

                </div>
            </div>
        </div>
    )
}

export default Registration