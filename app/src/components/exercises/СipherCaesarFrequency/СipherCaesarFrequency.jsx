import React, { useState } from 'react';
import Modal from '../../Modal/Modal';
import Scorm from '../../../scorm';

const fragmentOfText = [
	'СКАЖИКА_ДЯДЯ_ВЕДЬ_НЕДАРОМ_',
	'МОСКВА_СПАЛЕННАЯ_ПОЖАРОМ_',
	'ФРАНЦУЗУ_ОТДАНА_',	
	'ВЕДЬ_БЫЛИ_Ж_СХВАТКИ_БОЕВЫЕ_',	
	'ДА_ГОВОРЯТ_ЕЩЕ_КАКИЕ_',	
	'НЕДАРОМ_ПОМНИТ_ВСЯ_РОССИЯ_',	
	'ПРО_ДЕНЬ_БОРОДИНА_',	
	'ДА_БЫЛИ_ЛЮДИ_В_НАШЕ_ВРЕМЯ_',	
	'НЕ_ТО_ЧТО_НЫНЕШНЕЕ_ПЛЕМЯ_',	
	'БОГАТЫРИ__НЕ_ВЫ_',	
	'ПЛОХАЯ_ИМ_ДОСТАЛАСЬ_ДОЛЯ_',	
	'НЕМНОГИЕ_ВЕРНУЛИСЬ_С_ПОЛЯ_',	
	'НЕ_БУДЬ_НА_ТО_ГОСПОДНЯ_ВОЛЯ_',	
	'НЕ_ОТДАЛИ_Б_МОСКВЫ_',	
	'МЫ_ДОЛГО_МОЛЧА_ОТСТУПАЛИ_',	
	'ДОСАДНО_БЫЛО_БОЯ_ЖДАЛИ_',	
	'ВОРЧАЛИ_СТАРИКИ_',	
	'ЧТО_Ж_МЫ_НА_ЗИМНИЕ_КВАРТИРЫ_',	
	'НЕ_СМЕЮТ_ЧТО_ЛИ_КОМАНДИРЫ_',	
	'ЧУЖИЕ_ИЗОРВАТЬ_МУНДИРЫ_',	
	'О_РУССКИЕ_ШТЫКИ_',	
	'И_ВОТ_НАШЛИ_БОЛЬШОЕ_ПОЛЕ_',	
	'ЕСТЬ_РАЗГУЛЯТЬСЯ_ГДЕ_НА_ВОЛЕ_',	
	'ПОСТРОИЛИ_РЕДУТ_',	
	'У_НАШИХ_УШКИ_НА_МАКУШКЕ_',	
	'ЧУТЬ_УТРО_ОСВЕТИЛО_ПУШКИ_',	
	'И_ЛЕСА_СИНИЕ_ВЕРХУШКИ_',	
	'ФРАНЦУЗЫ_ТУТ_КАК_ТУТ_',	
	'ЗАБИЛ_ЗАРЯД_Я_В_ПУШКУ_ТУГО_',	
	'И_ДУМАЛ_УГОЩУ_Я_ДРУГА_',	
	'ПОСТОЙКА_БРАТ_МУСЬЮ_',	
	'ЧТО_ТУТ_ХИТРИТЬ_ПОЖАЛУЙ_К_БОЮ_',	
	'УЖ_МЫ_ПОЙДЕМ_ЛОМИТЬ_СТЕНОЮ_',	
	'УЖ_ПОСТОИМ_МЫ_ГОЛОВОЮ_',	
	'ЗА_РОДИНУ_СВОЮ_',	
	'ДВА_ДНЯ_МЫ_БЫЛИ_В_ПЕРЕСТРЕЛКЕ_',	
	'ЧТО_ТОЛКУ_В_ЭТАКОЙ_БЕЗДЕЛКЕ_',	
	'МЫ_ЖДАЛИ_ТРЕТИЙ_ДЕНЬ_',	
	'ПОВСЮДУ_СТАЛИ_СЛЫШНЫ_РЕЧИ_',	
	'ПОРА_ДОБРАТЬСЯ_ДО_КАРТЕЧИ_',	
	'И_ВОТ_НА_ПОЛЕ_ГРОЗНОЙ_СЕЧИ_',	
	'НОЧНАЯ_ПАЛА_ТЕНЬ_',	
	'ПРИЛЕГ_ВЗДРЕМНУТЬ_Я_У_ЛАФЕТА_',	
	'И_СЛЫШНО_БЫЛО_ДО_РАССВЕТА_',	
	'КАК_ЛИКОВАЛ_ФРАНЦУЗ_',	
	'НО_ТИХ_БЫЛ_НАШ_БИВАК_ОТКРЫТЫЙ_',	
	'КТО_КИВЕР_ЧИСТИЛ_ВЕСЬ_ИЗБИТЫЙ_',	
	'КТО_ШТЫК_ТОЧИЛ_ВОРЧА_СЕРДИТО_',	
	'КУСАЯ_ДЛИННЫЙ_УС_',	
	'И_ТОЛЬКО_НЕБО_ЗАСВЕТИЛОСЬ_',	
	'ВСЕ_ШУМНО_ВДРУГ_ЗАШЕВЕЛИЛОСЬ_',	
	'СВЕРКНУЛ_ЗА_СТРОЕМ_СТРОЙ_',	
	'ПОЛКОВНИК_НАШ_РОЖДЕН_БЫЛ_ХВАТОМ_',	
	'СЛУГА_ЦАРЮ_ОТЕЦ_СОЛДАТАМ_',	
	'ДА_ЖАЛЬ_ЕГО_СРАЖЕН_БУЛАТОМ_',	
	'ОН_СПИТ_В_ЗЕМЛЕ_СЫРОЙ_',	
	'И_МОЛВИЛ_ОН_СВЕРКНУВ_ОЧАМИ_',	
	'РЕБЯТА_НЕ_МОСКВА_ЛЬ_ЗА_НАМИ_',	
	'УМРЕМТЕ_Ж_ПОД_МОСКВОЙ_',	
	'КАК_НАШИ_БРАТЬЯ_УМИРАЛИ_',	
	'И_УМЕРЕТЬ_МЫ_ОБЕЩАЛИ_',
	'И_КЛЯТВУ_ВЕРНОСТИ_СДЕРЖАЛИ_',	
	'МЫ_В_БОРОДИНСКИЙ_БОЙ_',	
	'НУ_Ж_БЫЛ_ДЕНЕК_СКВОЗЬ_ДЫМ_ЛЕТУЧИЙ_',	
	'ФРАНЦУЗЫ_ДВИНУЛИСЬ_КАК_ТУЧИ_',	
	'И_ВСЁ_НА_НАШ_РЕДУТ_',	
	'УЛАНЫ_С_ПЕСТРЫМИ_ЗНАЧКАМИ_',	
	'ДРАГУНЫ_С_КОНСКИМИ_ХВОСТАМИ_',	
	'ВСЕ_ПРОМЕЛЬКНУЛИ_ПЕРЕД_НАМИ_',	
	'ВСЕ_ПОБЫВАЛИ_ТУТ_',	
	'ВАМ_НЕ_ВИДАТЬ_ТАКИХ_СРАЖЕНИЙ_',
	'НОСИЛИСЬ_ЗНАМЕНА_КАК_ТЕНИ_',	
	'В_ДЫМУ_ОГОНЬ_БЛЕСТЕЛ_',	
	'ЗВУЧАЛ_БУЛАТ_КАРТЕЧЬ_ВИЗЖАЛА_',	
	'РУКА_БОЙЦОВ_КОЛОТЬ_УСТАЛА_',	
	'И_ЯДРАМ_ПРОЛЕТАТЬ_МЕШАЛА_',	
	'ГОРА_КРОВАВЫХ_ТЕЛ_',	
	'ИЗВЕДАЛ_ВРАГ_В_ТОТ_ДЕНЬ_НЕМАЛО_',	
	'ЧТО_ЗНАЧИТ_РУССКИЙ_БОЙ_УДАЛЫЙ_',	
	'НАШ_РУКОПАШНЫЙ_БОЙ_',	
	'ЗЕМЛЯ_ТРЯСЛАСЬ__КАК_НАШИ_ГРУДИ_',
	'СМЕШАЛИСЬ_В_КУЧУ_КОНИ_ЛЮДИ_',	
	'И_ЗАЛПЫ_ТЫСЯЧИ_ОРУДИЙ_',	
	'СЛИЛИСЬ_В_ПРОТЯЖНЫЙ_ВОЙ_',	
	'ВОТ_СМЕРКЛОСЬ_БЫЛИ_ВСЕ_ГОТОВЫ_',	
	'ЗАУТРА_БОЙ_ЗАТЕЯТЬ_НОВЫЙ_',	
	'И_ДО_КОНЦА_СТОЯТЬ_',	
	'ВОТ_ЗАТРЕЩАЛИ_БАРАБАНЫ_',	
	'И_ОТСТУПИЛИ_БУСУРМАНЫ_',	
	'ТОГДА_СЧИТАТЬ_МЫ_СТАЛИ_РАНЫ_',	
	'ТОВАРИЩЕЙ_СЧИТАТЬ_',	
	'ДА_БЫЛИ_ЛЮДИ_В_НАШЕ_ВРЕМЯ_',	
	'МОГУЧЕЕ_ЛИХОЕ_ПЛЕМЯ_',	
	'БОГАТЫРИ_НЕ_ВЫ_',	
	'ПЛОХАЯ_ИМ_ДОСТАЛАСЬ_ДОЛЯ_',	
	'НЕМНОГИЕ_ВЕРНУЛИСЬ_С_ПОЛЯ_',	
	'КОГДА_Б_НА_ТО_НЕ_БОЖЬЯ_ВОЛЯ_',	
	'НЕ_ОТДАЛИ_Б_МОСКВЫ'
];

function СipherCaesarFrequency({ surname, name, patronymic, variant }) {
	const [alphabetTitle, setAlphabetTitle] = useState('Определите код алфавита текста');
	const [phraseTitle, setPhraseTitle] = useState('Запишите дешифрованную фразу');
	const [snpTitle, setSnpTitle] = useState('Используя код алфавита, зашифруйте с его помошью свое ФИО');
	const [win, setWin] = useState(false);
	const [tried, setTried] = useState(false);
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
	const [phraseVal, setPhraseVal] = useState('');
	const [snpVal, setSnpVal] = useState('');
	const [modalActive, setModalActive] = useState(false);
	const [modalWin, setModalWin] = useState(false);
	let cipherData = {
		'shift' : +variant,
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

	function countFrequency(text){
		let dictionary = [
			'А','Б','В','Г','Д','Е','Ж','З','И','Й','К','Л','М','Н','О','П','Р','С','Т','У','Ф','Х','Ц','Ч','Ш','Щ','Ь','Ы', 'Ъ', 'Э','Ю','Я','_'
		];
		let result = [
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
		];
		
		for (let j = 0; j <= 32; j++) {
			let count = 0;
			for (let i = 0; i < text.length; i++) { 
				if (text[i] === dictionary[j]) {
					count++;
				}
				if (i === text.length - 1) {
					if ((count / text.length) === 0) {
						result[j].value = 0;
					} else {
						result[j].value = (count / text.length).toFixed(10);
					}
				}
			}	
		}

		return result;
	}

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

	function onSubmitWin() {
		let rightAnswer = getAnswer(cipherData['shift']);
		let userAnswer = values.map(item => item.value).join('').toUpperCase();

		if (userAnswer === rightAnswer) {
			setWin(true);
			setAlphabetTitle('Правильный ответ');
		} else {
			setAlphabetTitle('Неправильный ответ');
			setTimeout(() => setAlphabetTitle('Определите код алфавита текста'), 1500);
		}
	}

	function onSubmitPhrase() {
		if (fragmentOfText[+variant].slice(0, -1) === phraseVal.toUpperCase()) {
			setTried(true);
			setPhraseTitle('Правильный ответ');
		} else {
			setPhraseTitle('Неправильный ответ');
			setTimeout(() => setPhraseTitle('Запишите дешифрованную фразу'), 1500);
		}
	}

	function onSubmitPreWin() {
		let rightSNP = replaceLetters(`${surname}_${name}_${patronymic}`);
		
		if (rightSNP === snpVal.toUpperCase()) {
			setModalWin(true);
			setSnpTitle('Правильный ответ');
			Scorm.calculateScore(33.4);
		} else {
			setSnpTitle('Неправильный ответ');
			setTimeout(() => setSnpTitle('Используя код алфавита, зашифруйте с его помошью свое ФИО'), 1500);
		}
	}

	return (
	<>
		<Modal 
			title="Текст"
			text={ 
				fragmentOfText.map(item => {
					return (
						<>
							{replaceLetters(item)}<br />
						</>
					);
				})
			} 
			active={ modalActive } 
			setActive={ setModalActive } 
		/>
		<Modal 
			title="Поздравляем!"
			text={ `${surname} ${name}, вы решили практическое задание на «Шифр Цезаря: криптоанализ  с использованием статистических свойств языка».` } 
			active={ modalWin } 
			setActive={ setModalWin } 
		/>
		<div className="exercise-box">
			<div className="exercise-box__body-text">
				<p className="text">
					Имеется некоторый закрытый (зашифрованный) текст и фраза этого текста. Известна вероятность появления символов алфавита.<br />
					Определив вероятность появления символов текста, найдите код алфавита текста, дешифрируйте заданную фразу и используя найденный код алфавита, зашифруйте свою фамилию (имя, отчество).</p>
			</div>
			<div className="exercise-box__body-text">
				<h2 className="subtitle">
					Зашифрованный текст
				</h2>
				<p className="text">
					{ replaceLetters(fragmentOfText[+variant].slice(0, -1)) }
				</p>
			</div>
			<div className="exercise-box__body-text exercise-form exercise-form-frequency">
				<h2 className="subtitle">
					Вероятность появления символов алфавита
				</h2>
				{countFrequency(fragmentOfText.join('')).map(item => (
					<>
						<div key={ item.id } className="exercise-input exercise-input-frequency">
							<label htmlFor={ item.name }>
								{ item.label }
							</label>
							<input 
								type="text"
								id={ item.id } 
								name={ item.name } 
								defaultValue={ item.value } 
								className="word-input" 
								placeholder="?"
								readOnly 
							/>
						</div>
					</>
				))}
			</div>
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
							/>
						</div>
					</>
				})}
				<div className="button-container">
					<input 
						type="button" 
						className="btn" 
						value="Ввести"
						onClick={onSubmitWin}  
					/>
					<button 
						type="button" 
						className="btn" 
						onClick={() => setModalActive(true)}
					>Текст</button>
				</div>
			</form>
			<form action="#" method="POST" onSubmit={e => e.preventDefault()} className="exercise-form exercise-form-prewin">
				<h2 className="subtitle">
					{ phraseTitle }
				</h2>
				<input 
					type="text" 
					name="name"
					value={ phraseVal }
					onChange={event => setPhraseVal(event.target.value)}
					className="prewin-input" 
					disabled={ !win } 
				/>
				<input 
					type="button" 
					value="Ввести" 
					className="btn"
					onClick={ onSubmitPhrase }
					disabled={ !win } 
				/>
			</form>
			<form action="#" method="POST" onSubmit={e => e.preventDefault()} className="exercise-form exercise-form-prewin">
				<h2 className="subtitle">{ snpTitle }</h2>
				<input 
					type="text" 
					name="prewin"
					className="prewin-input"
					value={snpVal}
					onChange={event => setSnpVal(event.target.value)} 
					disabled={ !tried } 
				/>
				<input 
					type="button" 
					value="Ввести" 
					className="btn"
					onClick={ onSubmitPreWin }
					disabled={ !tried } 
				/>
			</form>
		</div>
	</>
	);
}


export default СipherCaesarFrequency;