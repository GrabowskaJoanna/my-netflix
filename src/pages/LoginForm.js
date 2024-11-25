import TextField from "../components/TextField";

const LoginForm = () => {
	return (
		<div className='login_page'>
			<div className='login_page_container'>
				<form className='login_page_form'>
					<h1 className='form_header'>Sign In</h1>
					<TextField
						type='text'
						label='Email or mobile number'
						placeholder='Email or mobile number'
					/>
					<TextField label='Password' type='password' placeholder='Password' />
					<button type='submit' className='submit_btn btn'>
						Sign in
					</button>
					<button className='password_btn'>Forgot password?</button>
				</form>
			</div>
		</div>
	);
};

export default LoginForm;
