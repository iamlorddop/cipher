import React, { useState } from 'react';
import Modal from '../../Modal/Modal';
import Scorm from '../../../scorm';

let fragmentOfText = 'ЗАХОТЕЛ_ОТДОХНУТЬ_ОТ_РАТНЫХ_ДЕЛ_И_ПОКОЙ_СЕБЕ_УСТРОИТЬ';

function CipherCaesarStrip({ surname, name, variant }) {
	const [phraseTitle, setPhraseTitle] = useState('Расшифрованный текст');
	const [keyTitle, setKeyTitle] = useState('Ключ');
	const [alphabetTitle, setAlphabetTitle] = useState('Запишите код шифрованного текста');
	const [snpTitle, setSnpTitle] = useState('Используя полученный код (шифр), закодируйте с его помошью свою фамилию');
	const [values, setValues] = useState([
		{
			id: 0,
			label: 'A',
			name: 'a',
			value: ''
		},
		{
			id: 1,
			label: 'Б',
			name: 'b',
			value: ''
		},
		{
			id: 2,
			label: 'В',
			name: 'v',
			value: ''
		},
		{
			id: 3,
			label: 'Г',
			name: 'g',
			value: ''
		},
		{
			id: 4,
			label: 'Д',
			name: 'd',
			value: ''
		},
		{
			id: 5,
			label: 'Е',
			name: 'e',
			value: ''
		},
		{
			id: 6,
			label: 'Ж',
			name: 'zh',
			value: ''
		},
		{
			id: 7,
			label: 'З',
			name: 'z',
			value: ''
		},
		{
			id: 8,
			label: 'И',
			name: 'i',
			value: ''
		},
		{
			id: 9,
			label: 'Й',
			name: 'iq',
			value: ''
		},
		{
			id: 10,
			label: 'К',
			name: 'k',
			value: ''
		},
		{
			id: 11,
			label: 'Л',
			name: 'l',
			value: ''
		},
		{
			id: 12,
			label: 'М',
			name: 'm',
			value: ''
		},
		{
			id: 13,
			label: 'Н',
			name: 'n',
			value: ''
		},
		{
			id: 14,
			label: 'О',
			name: 'o',
			value: ''
		},
		{
			id: 15,
			label: 'П',
			name: 'p',
			value: ''
		},
		{
			id: 16,
			label: 'Р',
			name: 'r',
			value: ''
		},
		{
			id: 17,
			label: 'С',
			name: 's',
			value: ''
		},
		{
			id: 18,
			label: 'Т',
			name: 't',
			value: ''
		},
		{
			id: 19,
			label: 'У',
			name: 'u',
			value: ''
		},
		{
			id: 20,
			label: 'Ф',
			name: 'f',
			value: ''
		},
		{
			id: 21,
			label: 'Х',
			name: 'h',
			value: ''
		},
		{
			id: 22,
			label: 'Ц',
			name: 'c',
			value: ''
		},
		{
			id: 23,
			label: 'Ч',
			name: 'ch',
			value: ''
		},
		{
			id: 24,
			label: 'Ш',
			name: 'sh',
			value: ''
		},
		{
			id: 25,
			label: 'Щ',
			name: 'shch',
			value: ''
		},
		{
			id: 26,
			label: 'Ь',
			name: 'mb',
			value: ''
		},
		{
			id: 27,
			label: 'Ы',
			name: 'bl',
			value: ''
		},
		{
			id: 28,
			label: 'Ъ',
			name: 'tb',
			value: ''
		},
		{
			id: 39,
			label: 'Э',
			name: 'ae',
			value: ''
		},
		{
			id: 30,
			label: 'Ю',
			name: 'yu',
			value: ''
		},
		{
			id: 31,
			label: 'Я',
			name: 'ya',
			value: ''
		},
		{
			id: 32,
			label: '_',
			name: 'space',
			value: ''
		},
	]);
	const [decrypted, setDecrypted] = useState('');
	const [keyVal, setKeyVal] = useState('');
	const [winDecrypted, setWinDecrypted] = useState(false);
	const [winKey, setWinKey] = useState(false);
	const [win, setWin] = useState(false);
	const [prewin, setPrewin] = useState('');
	const [modalActive, setModalActive] = useState(false);
	const shift = 81 - +variant;
	const key = shift % 33;
	let cipherData = {
		'shift' : shift,
		'code' : {
			'А' : '',    'Б' : '',    'В' : '',    'Г' : '',    'Д' : '',
			'Е' : '',    'Ж' : '',   'З' : '',    'И' : '',	'Й' : '',
			'К' : '',    'Л' : '',    'М' : '',    'Н' : '',    'О' : '',    
			'П' : '',    'Р' : '',    'С' : '',    'Т' : '',    'У' : '',
			'Ф' : '',    'Х' : '',    'Ц' : '',    'Ч' : '',   'Ш' : '',
			'Щ' : '',  	'Ь' : '',     'Ы' : '',    'Э' : '', 	'Ю' : '',
			'Я' : '',   '_' : '',
		},
		'alph' : [
			'А','Б','В','Г','Д','Е','Ж','З','И','Й','К','Л','М','Н','О','П','Р','С','Т','У','Ф','Х','Ц','Ч','Ш','Щ','Ь','Ы', 'Ъ', 'Э','Ю','Я','_',
			'А','Б','В','Г','Д','Е','Ж','З','И','Й','К','Л','М','Н','О','П','Р','С','Т','У','Ф','Х','Ц','Ч','Ш','Щ','Ь','Ы', 'Ъ', 'Э','Ю','Я','_',
			'А','Б','В','Г','Д','Е','Ж','З','И','Й','К','Л','М','Н','О','П','Р','С','Т','У','Ф','Х','Ц','Ч','Ш','Щ','Ь','Ы', 'Ъ', 'Э','Ю','Я','_',
			'А','Б','В','Г','Д','Е','Ж','З','И','Й','К','Л','М','Н','О','П','Р','С','Т','У','Ф','Х','Ц','Ч','Ш','Щ','Ь','Ы', 'Ъ', 'Э','Ю','Я','_']
	};

	function setGame() {
		cipherData['code']['А'] = cipherData['alph'][cipherData['shift']];
		cipherData['code']['Б'] = cipherData['alph'][cipherData['shift'] + 1];
		cipherData['code']['В'] = cipherData['alph'][cipherData['shift'] + 2];
		cipherData['code']['Г'] = cipherData['alph'][cipherData['shift'] + 3];
		cipherData['code']['Д'] = cipherData['alph'][cipherData['shift'] + 4];
		cipherData['code']['Е'] = cipherData['alph'][cipherData['shift'] + 5];
		cipherData['code']['Ж'] = cipherData['alph'][cipherData['shift'] + 6];
		cipherData['code']['З'] = cipherData['alph'][cipherData['shift'] + 7];
		cipherData['code']['И'] = cipherData['alph'][cipherData['shift'] + 8];
		cipherData['code']['Й'] = cipherData['alph'][cipherData['shift'] + 9];
		cipherData['code']['К'] = cipherData['alph'][cipherData['shift'] + 10];
		cipherData['code']['Л'] = cipherData['alph'][cipherData['shift'] + 11];
		cipherData['code']['М'] = cipherData['alph'][cipherData['shift'] + 12];
		cipherData['code']['Н'] = cipherData['alph'][cipherData['shift'] + 13];
		cipherData['code']['О'] = cipherData['alph'][cipherData['shift'] + 14];
		cipherData['code']['П'] = cipherData['alph'][cipherData['shift'] + 15];
		cipherData['code']['Р'] = cipherData['alph'][cipherData['shift'] + 16];
		cipherData['code']['С'] = cipherData['alph'][cipherData['shift'] + 17];
		cipherData['code']['Т'] = cipherData['alph'][cipherData['shift'] + 18];
		cipherData['code']['У'] = cipherData['alph'][cipherData['shift'] + 19];
		cipherData['code']['Ф'] = cipherData['alph'][cipherData['shift'] + 20];
		cipherData['code']['Х'] = cipherData['alph'][cipherData['shift'] + 21];
		cipherData['code']['Ц'] = cipherData['alph'][cipherData['shift'] + 22];
		cipherData['code']['Ч'] = cipherData['alph'][cipherData['shift'] + 23];
		cipherData['code']['Ш'] = cipherData['alph'][cipherData['shift'] + 24];
		cipherData['code']['Щ'] = cipherData['alph'][cipherData['shift'] + 25];
		cipherData['code']['Ь'] = cipherData['alph'][cipherData['shift'] + 26];
		cipherData['code']['Ы'] = cipherData['alph'][cipherData['shift'] + 27];
		cipherData['code']['Ъ'] = cipherData['alph'][cipherData['shift'] + 28];
		cipherData['code']['Э'] = cipherData['alph'][cipherData['shift'] + 29];
		cipherData['code']['Ю'] = cipherData['alph'][cipherData['shift'] + 30];
		cipherData['code']['Я'] = cipherData['alph'][cipherData['shift'] + 31];
		cipherData['code']['_'] = cipherData['alph'][cipherData['shift'] + 32];
	}

	setGame();

	function replaceLetters(text) {
		let replaced = text.toUpperCase();
		let str = '';
		
		for (let i = 0; i < replaced.length; i++) {
			str += cipherData['code'][replaced[i]];
		}
	
		return str;
	}

	function getAnswer(shift) {
		let rightAnswer = '';
	
		for (let i = 99; i <= 131; i++) { 
			rightAnswer = rightAnswer + cipherData['alph'][i - shift];
		}
	
		return rightAnswer;
	}

	function handleChange(event) {
		const prevState = [...values];
		prevState.find(item => item.name === event.target.name).value = event.target.value;
		setValues(prevState);
	}

	function onSubmitPhrase() {
		if (decrypted.toUpperCase() === fragmentOfText) {
			setWinDecrypted(true);
			setPhraseTitle('Правильный ответ');
		} else {
			setPhraseTitle('Неправильный ответ');
			setTimeout(() => setPhraseTitle('Запишите дешифрованную фразу'), 1500);
		}
	}

	function onSubmitKey() {
		if (keyVal == key) {
			setWinKey(true);
			setKeyTitle('Правильный ответ');
		} else {
			setKeyTitle('Неправильный ответ');
			setTimeout(() => setKeyTitle('Ключ'), 1500);
		}
	}

	function onSubmitWin() {
		let rightAnswer = getAnswer(cipherData['shift']);
		let userAnswer = values.map(item => item.value).join('').toUpperCase();

		if (userAnswer === rightAnswer) {
			setWin(true);
			setAlphabetTitle('Правильный ответ');
		} else {
			setAlphabetTitle('Неправильный ответ');
			setTimeout(() => setAlphabetTitle('Запишите код шифрованного текста'), 1500);
		}
	}

	function onSubmitPreWin() {
		let rightSNP = replaceLetters(`${surname}`);

		if (rightSNP === prewin.toUpperCase()) {
			setModalActive(true);
			setSnpTitle('Правильный ответ');
			Scorm.calculateScore(50.1);
		} else {
			setSnpTitle('Неправильный ответ');
			setTimeout(() => setSnpTitle('Используя полученный код (шифр), закодируйте с его помошью свою фамилию'), 1500);
		}
	}

	return (
	<>
		<Modal 
			title="Поздравляем!"
			text={ `${surname} ${name}, вы решили практическое задание на «Шифр Цезаря:
			криптоанализ методом «полного перебора».` } 
			active={ modalActive } 
			setActive={ setModalActive } 
		/>
		<div className="exercise-box">
			<div className="exercise-box__body-text">
				<p className="text">
					Некоторый текст зашифрован кодом Цезаря. Необходимо расшифровать этот текст методом <b>«Полосок»</b>. Определите <b>ключ</b> шифра и, воспользовавшись им, зашифруйте свою фамилию.
				</p>
			</div>
			<div className="exercise-box__body-text">
				<h2 className="subtitle">
					Зашифрованный текст
				</h2>
				<p className="text">{ replaceLetters(fragmentOfText) }</p>
			</div>
			<form action="#" method="POST" onSubmit={e => e.preventDefault()} className="exercise-form exercise-form-prewin">
				<h2 className="subtitle">
					{ phraseTitle }
				</h2>
				<input 
					type="text" 
					value={ decrypted } 
					onChange={e => setDecrypted(e.target.value)} 
					className="prewin-input" 
					name="decrypted" 
				/>
				<input 
					type="button" 
					value="Ввести" 
					onClick={ onSubmitPhrase } 
					className="btn" 
				/>
			</form>
			<form action="#" method="POST" onSubmit={e => e.preventDefault()} className="exercise-form exercise-form-prewin">
				<h2 className="subtitle">
					{ keyTitle }
				</h2>
				<input 
					type="text" 
					value={ keyVal } 
					onChange={e => setKeyVal(e.target.value)} 
					className="prewin-input" 
					name="key" 
					disabled={ !winDecrypted } 
				/>
				<input 
					type="button" 
					value="Ввести" 
					onClick={ onSubmitKey } 
					disabled={ !winDecrypted } 
					className="btn" 
				/>
			</form>
			<form action="#" method="POST" onSubmit={e => e.preventDefault()} className="exercise-form">
				<h2 className="subtitle">
					{ alphabetTitle }
				</h2>
				{values.map(item => {
					return <>
						<div key={ item.id } className="exercise-input">
							<label htmlFor={ item.name }>
								{ item.label }
							</label>
							<input 
								type="text"
								id={ item.id } 
								name={ item.name } 
								value={ item.value } 
								onChange={e => handleChange(e)} 
								className="word-input" 
								placeholder="?" 
								disabled={ !winKey } 
							/>
						</div>
					</>
				})}
				<div className="exercise-form-button">
					<input 
						type="button" 
						className="btn" 
						onClick={ onSubmitWin }
						disabled={ !winKey } 
						value="Ввести" 
					/>
				</div>
			</form>
			<form action="#" method="POST" onSubmit={e => e.preventDefault()} className="exercise-form exercise-form-prewin">
				<h2 className="subtitle">{ snpTitle }</h2>
				<input 
					type="text" 
					value={ prewin } 
					onChange={event => setPrewin(event.target.value)} 
					className="prewin-input" 
					name="prewin" 
					disabled={ !win } 
				/>
				<input 
					type="button" 
					value="Ввести" 
					onClick={ onSubmitPreWin } 
					disabled={ !win } 
					className="btn" 
				/>
			</form>
		</div>
	</>
	);
}



export default CipherCaesarStrip;