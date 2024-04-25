import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './loginpage.css';

function Loginpage() {
	const [surname, setSurname] = useState('');
	const [name, setName] = useState('');
	const [patronymic, setPatronymic] = useState('');
	const [variant, setVariant] = useState('');

	function isValid() {
		const regexp = /^[A-Za-z0-9ё%&!',:;=?$\x22]+$/i;
		return !surname || !name || !patronymic || !variant || variant < 1 || variant > 80 || regexp.test(surname) || regexp.test(name) || regexp.test(patronymic);
	}

	return (
	<>
		<section className="login">
			<p className="binary-animation">10100100011110101</p>
			<p className="binary-animation">1000011001111110101</p>
			<p className="binary-animation">1000011001111110101</p>
			<p className="binary-animation">10100100011110101</p>
			<p className="binary-animation">1000011001111110101</p>
			<div className="container">
				<div className="login-flex">
					<h1 className="title">
						&lt;h1&gt;Учебный курс&lt;/h1&gt;
						<span>&lt;p&gt;Основы криптографии&lt;/p&gt;</span>
					</h1>
					<form action="#" method="POST" className="login__form">
						<h2 className="subtitle">
							Вход
						</h2>
						<div className="login__input">
							<input 
								type="text" 
								id="surname" 
								name="surname"
								value={surname}
								onChange={event => setSurname(event.target.value)} 
								placeholder="Фамилия"
								required 
							/>
						</div>
						<div className="login__input">
							<input 
								type="text" 
								id="name" 
								name="name" 
								value={name}
								onChange={event => setName(event.target.value)} 
								placeholder="Имя"
								required 
							/>
						</div>
						<div className="login__input">
							<input 
								type="text" 
								id="patronymic" 
								name="patronymic" 
								value={patronymic}
								onChange={event => setPatronymic(event.target.value)}
								placeholder="Отчество"
								required 
							/>
						</div>
						<div className="login__input">
							<input 
								type="text" 
								id="var" 
								name="var" 
								value={variant} 
								onChange={event => setVariant(event.target.value)} 
								placeholder="Вариант"
								required 
							/>
						</div>
						<Link 
							to="/" 
							state={{ from: [surname, name, patronymic, variant]}} 
						>
							<button type="button" className="btn" disabled={ isValid() }>
								Войти
							</button>
						</Link>
					</form>
				</div>
			</div>
		</section>
	</>
	);
}

export default Loginpage;