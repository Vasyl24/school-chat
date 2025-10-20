function SignIn() {
  return (
    <>
      <h2>Sign In</h2>

      <form>
        <label htmlFor="">
          Email
          <input type="email" placeholder="example@gmail.com" />
        </label>

        <label htmlFor="">
          Password
          <input type="password" placeholder="Enter password" />
        </label>
      </form>

      <a href="#">Forgot password</a>

      <button>Continue</button>

      <p>Don't have an account yet?</p>

      <a href="#">Sign up</a>
    </>
  );
}

export default SignIn;
