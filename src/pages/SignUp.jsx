import React from 'react';
import Button from '../components/Button';

const SignUp = () => {
    return (
        <section>
        <h1>Sign Up</h1>
        <form action="">
            <input type="text"id='username' name='username' placeholder='username' />
            <input type="email" name="email" id="email"  placeholder='email'/>
            <input type="password" name="password" id="password" placeholder='password' />
            <input type="password" name="confirmpassword" id="confirmpassword"  placeholder='confirm password'/>
            <Button 
             type={"submit"}
             text={"sign up"}
            />
        </form>
        <p>Already Signed Up click <a href="">here</a></p>
        </section>
        );
}

export default SignUp;
