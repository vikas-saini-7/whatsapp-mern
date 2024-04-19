import React from 'react'
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";
import { useDispatch } from 'react-redux';
import { loginUser } from '../../redux/actions/authActions';

const LoginWithGoogleBtn = () => {
    const dispatch = useDispatch();
    function handleLoginSuccess(credentials){
        let decoded = jwtDecode(credentials.credential)
        dispatch(loginUser(decoded))
    }
  return (
    <div>
        <GoogleLogin
            onSuccess={handleLoginSuccess}
            onError={() => {
                console.log('Login with Google Failed');
            }}  
        />
        {/* <div onClick={handleLoginSuccess}>TRY</div> */}
    </div>
  )
}

export default LoginWithGoogleBtn