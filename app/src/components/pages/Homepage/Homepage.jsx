import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Footer from '../../Footer/Footer';
import imageOne from '../../../assets/images/about_01.png';
import imageTwo from '../../../assets/images/about_02.png';
import imageThree from '../../../assets/images/about_03.png';
import imageFour from '../../../assets/images/about_04.png';
import imageFive from '../../../assets/images/about_05.png';
import imageSix from '../../../assets/images/about_06.png';
import './homepage.css';

function Homepage() {
	const location = useLocation()

	return (
		<>
			<section className="about">
				<div className="container">
					<h1 className="title">
						&lt;h1&gt;CIPHER&lt;/h1&gt;
					</h1>
					<h2 className="subtitle">
						&lt;h2&gt;Приложение для изучения основ криптографии&lt;/h2&gt;
					</h2>
					<p className="caption">&lt;p&gt;Расшифруйте свои возможности&lt;/p&gt;</p>
					<div className="about-flex">
						<div className="about-flex__elem">
							<img src={imageFour} alt="cipher" />
							<p className="text">Четыре шифра</p>
						</div>
						<div className="about-flex__elem">
							<img src={imageFive} alt="examples" />
							<p className="text">80 вариантов</p>
						</div>
						<div className="about-flex__elem">
							<img src={imageSix} alt="theory" />
							<p className="text">Подробная теория</p>
						</div>
					</div>
					<article className="about-article">
						<h2 className="title">Теоретические материалы</h2>
						<div className="about-article__elem about-article__elem-theory">
								<p className="binary-animation">1000011001111110101</p>
								<p className="binary-animation">1000011001111110101</p>
								<p className="binary-animation">10100100011110101</p>
							<div className="about-article__elem-text">
								<p className="text">
									&lt;ul&gt;
										<span className="about-article__elem-span">&lt;li&gt;Шифр Цезаря&lt;/li&gt;</span>
										<span className="about-article__elem-span">&lt;li&gt;Шифр Тритемиуса&lt;/li&gt;</span>
										<span className="about-article__elem-span">&lt;li&gt;Шифр одноалфавитной замены&lt;/li&gt;</span>
										<span className="about-article__elem-span">&lt;li&gt;Алгоритм RSA&lt;/li&gt;</span>
									&lt;/ul&gt;
								</p>
								<Link to="/theory" state={location.state} className="btn">Изучить</Link>
							</div>
							<img src={imageOne} alt="theory" />
						</div>
					</article>
					<article className="about-article">
						<h2 className="title">Задания</h2>
						{
							(!location.state) ?
							<div className="about-article__elem about-article__elem-login">
								<p className="binary-animation">10100100011110101</p>
								<p className="binary-animation">1000011001111110101</p>
								<p className="binary-animation">1000011001111110101</p>
								<p className="binary-animation">10100100011110101</p>
								<div className="about-article__elem-text">
									<p className="text">
										Авторизуйтесь,
										<br />
										чтобы получить доступ к заданиям
									</p>
									<Link to="/auth" state={location.state} className="btn">Войти</Link>
								</div>
								<img src={imageThree} alt="theory" />
							</div>
							:
							<div className="about-article__elem about-article__elem-exercises">
								<p className="binary-animation">10100100011110101</p>
								<p className="binary-animation">1000011001111110101</p>
								<p className="binary-animation">1000011001111110101</p>
								<p className="binary-animation">10100100011110101</p>
								<div className="about-article__elem-text">
									<p className="text">
										{location.state.from[0]} {location.state.from[1]},
										<br />
										готовы к решению заданий?
									</p>
									<Link to="/exercises" state={location.state} className="btn">Перейти</Link>
								</div>
								<img src={imageTwo} alt="theory" />
							</div>
						}
					</article>
				</div>
			</section>
			<Footer />
		</>
	);
}

export default Homepage;