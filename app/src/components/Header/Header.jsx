import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom'
import './header.css';
import Image from '../../assets/images/logo.svg'

export default function Header({ isLogin, surname, name }) {
	const [active, setActive] = useState(false);
	const location = useLocation()

	return <>
		<header className="header">
			<div className="container">
				<div className="header-flex">
					<div className="header-flex__elem">
						<a href="#" className="logo">
							<img src={Image} alt="logo" />
						</a>
						<nav className="header-nav">
							<ul className="nav-list">
								<li className="nav-list__item">
									<Link to="/" state={location.state} className={(location.pathname === '/') ? 'active nav-link' : 'nav-link'}>Главная</Link>
								</li>
								<li className="nav-list__item">
									<Link to="/theory" state={location.state} className={(location.pathname === '/theory') ? 'active nav-link' : 'nav-link'}>Теория</Link>
								</li>
								{(isLogin === true) ? <li className="nav-list__item"><Link to="/exercises" state={location.state} className={(location.pathname === '/exercises') ? 'active nav-link' : 'nav-link'}>Задания</Link></li> : null}
							</ul>
						</nav>
					</div>
					<div className="header-flex__elem">
						<p className="nav-link">{surname} {name}</p>
						<Link to="/auth" className="nav-link">{(isLogin === true) ? 'Выйти' : 'Войти'}</Link>
					</div>
				</div>
				<div className="burger-menu">
					<a href="#" className="logo">
						<img src={Image} alt="logo" />
					</a>
					<div className="burger" onClick={() => setActive(true)}>
						<span></span>
					</div>
				</div>
			</div>
		</header>
		<div className={active ? "burger-menu-nav-container active" : "burger-menu-nav-container"}>
			<div className="burger-menu-nav-flex">
				<a href="#" className="logo">
					<img src={Image} alt="logo" />
				</a>
				<div className="cross" onClick={() => setActive(false)}>
					<span></span>
				</div>
			</div>
			<nav className="burger-menu-nav">
				<ul className="nav-list">
					<li className="nav-list__item">
						<Link 
							to="/"
							state={location.state} 
							className=
							{
								(location.pathname === '/') ? 'active nav-link' 
								: 'nav-link'} onClick={() => setActive(false)
							}
						>
							Главная
						</Link>
					</li>
					<li className="nav-list__item">
						<Link 
							to="/theory"
							state={location.state} 
							className=
							{
								(location.pathname === '/theory') ? 'active nav-link' 
								: 'nav-link'
							} 
							onClick={() => setActive(false)}
						>
							Теория
						</Link>
					</li>
					{
						(isLogin === true) ? 
						<li className="nav-list__item">
							<Link 
								to="/exercises"
								state={location.state} 
								className=
								{
									(location.pathname === '/exercises') ? 'active nav-link' 
									: 'nav-link'
								} 
								onClick={() => setActive(false)}
							>
								Задания
							</Link>
						</li> 
						: null
					}
					<li className="nav-list__item">
						<p className="nav-link">{surname} {name}</p>
					</li>
					<li className="nav-list__item">
						<Link 
							to="/auth" 
							className="nav-link" 
							onClick={() => setActive(false)}
						>
							{(isLogin === true) ? 'Выйти' 
							: 'Войти'
							}
						</Link>
					</li>
				</ul>
			</nav>
		</div>
	</>
}