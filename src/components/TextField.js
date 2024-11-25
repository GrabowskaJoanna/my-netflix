const TextField = ({ label, type, placeholder }) => {
	return (
		<div className='input-wrapper'>
			<input
				type={type}
				className='input'
				placeholder={placeholder}
				id={label}
			/>
			<label htmlFor={label}>{label}</label>
		</div>
	);
};

export default TextField;
