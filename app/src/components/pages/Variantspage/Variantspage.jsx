/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import './variantspage.css';

function Variantspage({surname, name, patronymic, variant}) {
	return (
	<>
		<section className="exercise">
			<div className="container">
				<div className="exercise-flex">
					<Link to="/exercise" state={{ from: [surname, name, patronymic, variant, 'cipherCaesar']}} className="exercise-flex__elem">
						<h2 className="title">
							Шифр Цезаря
							<span className="title-span">криптоанализ по открытому тексту</span>
						</h2>
						<p className="text exercise-link">Перейти<span></span></p>
					</Link>
					<Link to="/exercise" state={{ from: [surname, name, patronymic, variant, 'cipherCaesarFrequency']}} className="exercise-flex__elem">
						<h2 className="title">
							Шифр Цезаря
							<span className="title-span">криптоанализ с использованием статистических свойств языка</span>
						</h2>
						<p className="text exercise-link">Перейти<span></span></p>
					</Link>
					<Link to="/exercise" state={{ from: [surname, name, patronymic, variant, 'cipherCaesarStrip']}} className="exercise-flex__elem">
						<h2 className="title">
							Шифр Цезаря
							<span className="title-span">криптоанализ методом<br />«полного перебора»</span>
						</h2>
						<p className="text exercise-link">Перейти<span></span></p>
					</Link>
					<Link to="/exercise" state={{ from: [surname, name, patronymic, variant, 'replacementCipher']}} className="exercise-flex__elem">
						<h2 className="title">
							Шифр одноалфавитной замены
							<span className="title-span">криптоанализ по фрагменту открытого текста</span>
						</h2>
						<p className="text exercise-link">Перейти<span></span></p>
					</Link>
					<Link to="/exercise" state={{ from: [surname, name, patronymic, variant, 'trisemiusCipher']}} className="exercise-flex__elem">
						<h2 className="title">
							Шифр многоалфавитной <br /> замены
						</h2>
						<p className="text exercise-link">Перейти<span></span></p>
					</Link>
					<Link to="/exercise" state={{ from: [surname, name, patronymic, variant, 'rsa']}} className="exercise-flex__elem">
						<h2 className="title">
							Алгоритм RSA
							<span className="title-span">цифровая подпись</span>
						</h2>
						<p className="text exercise-link">Перейти<span></span></p>
					</Link>
				</div>
			</div>
		</section>
	</>
	);
}

export default Variantspage;