import Button from "../components/Button";

const SignIn = () => {
    return (
        <section>
            <h1>Sign In</h1>
            <form action="">
                <input type="email" name="email" id="email" placeholder="Email"/>
                <input type="password" name="password" id="password" placeholder="Password" />
                <Button 
                type={"submit"}
                text={"sign in"}
                 />
            </form>
            <p><a href="">Forgot Password ?</a></p>
            <p>Have Not Signed Up Yet Click <a href="">Here</a></p>
        </section>
    );
}

export default SignIn;
