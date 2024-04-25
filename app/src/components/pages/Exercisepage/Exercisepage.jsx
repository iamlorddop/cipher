import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import CipherCaesar from '../../exercises/CipherCaesar/CipherCaesar';
import СipherCaesarFrequency from '../../exercises/СipherCaesarFrequency/СipherCaesarFrequency';
import CipherCaesarStrip from '../../exercises/CipherCaesarStrip/CipherCaesarStrip';
import ReplacementCipher from '../../exercises/ReplacementCipher/ReplacementCipher';
import TrisemiusCipher from '../../exercises/TrisemiusCipher/TrisemiusCipher';
import Rsa from '../../exercises/Rsa/Rsa';
import './exercisepage.css';

function Exercisepage() {
	const location = useLocation();
	const { from } = location.state;
	const surname = from[0];
	const name = from[1];
	const patronymic = from[2];
	const variant = from[3];
	const mode = from[4];

	function getName() {
		if (mode === 'cipherCaesar') {
			return <>Шифр Цезаря: <br /> криптоанализ по открытому тексту</>;
		} else if (mode === 'cipherCaesarFrequency') {
			return <>Шифр Цезаря: <br /> криптоанализ с использованием<br /> статистических свойств языка</>;
		} else if (mode === 'cipherCaesarStrip') {
			return <>Шифр Цезаря: <br /> криптоанализ методом «полного перебора»</>;
		} else if (mode === 'replacementCipher') {
			return <>Шифр одноалфавитной замены: <br /> криптоанализ по фрагменту открытого текста</>;
		} else if (mode === 'trisemiusCipher') {
			return 'Шифр многоалфавитной замены';
		} else if (mode === 'rsa') {
			return 'Цифровая подпись по алгоритму RSA';
		}
	}

	function getLayout() {
		if (mode === 'cipherCaesar') {
			return <CipherCaesar surname={surname} name={name} patronymic={patronymic} variant={ variant } />;
		} else if (mode === 'cipherCaesarFrequency') {
			return <СipherCaesarFrequency surname={surname} name={name} patronymic={patronymic} variant={ variant } />;
		} else if (mode === 'cipherCaesarStrip') {
			return <CipherCaesarStrip surname={surname} name={name} patronymic={patronymic} variant={ variant } />;
		} else if (mode === 'replacementCipher') {
			return <ReplacementCipher surname={surname} name={name} patronymic={patronymic} variant={ variant } />;
		} else if (mode === 'trisemiusCipher') {
			return <TrisemiusCipher surname={surname} name={name} patronymic={patronymic} variant={ variant } />;
		} else if (mode === 'rsa') {
			return <Rsa surname={surname} name={name} patronymic={patronymic} variant={ variant } />;
		}
	}
	
	return (
	<>
		
		<section className="exercise exercise-page">
			<p className="binary-animation">10100100011110101</p>
			<p className="binary-animation">1000011001111110101</p>
			<p className="binary-animation">1000011001111110101</p>
			<p className="binary-animation">10100100011110101</p>
			<div className="container">
				<Link to='/exercises' state={{ from: [surname, name, patronymic, variant]}} className="exercise-back"><span></span>Назад</Link>
				<h1 className="title">
					Задание варианта: #<span>{ variant }</span>
					<br />
					<span>{ getName() }</span>
				</h1>
				{ getLayout() }
			</div>
		</section>
	</>
	);
}

export default Exercisepage;