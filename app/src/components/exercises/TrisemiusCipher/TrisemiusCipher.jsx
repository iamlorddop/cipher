import React, { useState } from 'react';
import Modal from '../../Modal/Modal';
import Scorm from '../../../scorm';

const phrases = [
	'МОРОЖЕНОЕ_ЛЮБЯТ_ВСЕ',
	'СОЛНЦЕ_СВЕТИТ_ЯРКО',
	'ПОГОДА_ВЕЧЕРОМ_ПЛОХАЯ',
	'ДЕТИ_ИГРАЮТ_НА_УЛИЦЕ',
	'КОШКА_ЛЮБИТ_КУСАТЬСЯ',
	'СОБАКА_ГАВКАЕТ_ГРОМКО',
	'БЭКЕНД_РАЗРАБАТЫВАЕТСЯ_ДЛЯ_РАБОТЫ_С_ДАННЫМИ',
	'БАЗЫ_ДАННЫХ_ХРАНЯТ_ИНФОРМАЦИЮ',
	'МУЗЫКА_ЗВУЧИТ_ГРОМКО',
	'ВЕТЕР_ШУМИТ_СИЛЬНО',
	'БЕЗОПАСНЫЕ_ПРОГРАММЫ_ИЗБЕГАЮТ_УЯЗВИМОСТЕЙ_И_УГРОЗ',
	'ЗВЁЗДЫ_СИЯЮТ_ЯРКО',
	'ДОРОГА_МОКРАЯ_ПОСЛЕ_ДОЖДЯ',
	'МАМА_ГОТОВИТ_ВКУСНО',
	'ПАПА_ЧИТАЕТ_КНИГУ_СЫНУ',
	'БАБУШКА_ВЯЖЕТ_НОСКИ',
	'ДЕДУШКА_СТУЧИТ_ПО_ДОСКЕ',
	'ДРУЗЬЯ_СМЕЮТСЯ_ГРОМКО',
	'УТРО_СВЕТЛОЕ_И_ТИХОЕ',
	'ВЕЧЕР_ТЕМНЫЙ_И_ТИХИЙ',
	'ОЗЕРО_ГОЛУБОЕ_И_ПРОЗРАЧНОЕ',
	'МОРЕ_БУРЛИТ_И_ШУМИТ',
	'ГОРЫ_ВЕЛИЧАВО_ВОЗДЫХАЮТ',
	'ЛЕС_ЗЕЛЕНЫЙ_И_ТАИНСТВЕННЫЙ',
	'РЕКА_БЕГУЧАЯ_И_ШИРОКАЯ',
	'ДОМАШНИЕ_КОМПЬЮТЕРЫ_И_УСТРОЙСТВА_ИЗМЕНИЛИ_НАШУ_ОБЫДЕННУЮ_ЖИЗНЬ',
	'ИЗУЧАТЬ_АЛГОРИТМЫ_ОЧЕНЬ_ПОЛЕЗНО',
	'ЗДОРОВЬЕ_ЦЕНИТЬ_НЕОБХОДИМО_И_ВАЖНО',
	'ЛЮБОВЬ_СИЛЬНА_И_ПРЕКРАСНА',
	'ДРУЖБА_НАДЕЖНА_И_НЕОЦЕНИМА',
	'ПРИРОДА_УДИВИТЕЛЬНА_И_МНОГООБРАЗНА',
	'ИСКУССТВО_ДЕЛАЕТ_МИР_ЛУЧШЕ',
	'ОБРАЗОВАНИЕ_НУЖНО_И_ПОЛЕЗНО',
	'ТВОРЧЕСТВО_ВАЖНО_И_УНИКАЛЬНО',
	'СПОРТ_ПОЛЕЗЕН_И_УВЛЕКАТЕЛЕН',
	'АНАЛИЗ_ДАННЫХ_ПРИВОДИТ_К_НОВЫМ_ОТКРЫТИЯМ_И_РЕШЕНИЯМ',
	'НЕЙРОННЫЕ_СЕТИ_И_МАШИННОЕ_ОБУЧЕНИЕ_МЕНЯЮТ_ПОДХОДЫ_К_РЕШЕНИЮ_ЗАДАЧ',
	'ФИЛЬМ_СМОТРЕЛИ_И_ЕЛИ_ПОПКОРН',
	'ЛИТЕРАТУРА_УВЛЕКАТЕЛЬНА_И_ПОЛЕЗНА',
	'ПУТЕШЕСТВИЕ_РАСШИРЯЕТ_СОЗНАНИЕ',
	'ОХОТА_УВЛЕКАТЕЛЬНА_И_ЭМОЦИОНАЛЬНА',
	'РЫБАЛКА_СПОКОЙНА_И_МЕДИТАТИВНА',
	'НА_ПИКНИКЕ_БЫЛИ_НЕ_ВСЕ',
	'ВСЕ_ПРИШЛИ_НА_БАРБЕКЮ',
	'КАМИН_СОГРЕВАЕТ_И_УСПОКАИВАЕТ',
	'УЛИЦА_БЫЛА_НЕОБЫЧАЙНО_КРАСИВОЙ',
	'ПАРК_ОЧЕНЬ_КРАСИВЫЙ_И_РОМАНТИЧНЫЙ',
	'ШКОЛА_ЭТО_КНИГА_ЗНАНИЙ_И_ВОСПОМИНАНИЙ',
	'УНИВЕРСИТЕТ_ВЫСОКИХ_ТЕХНОЛОГИЙ_ИНФОРМАЦИОННОЙ_БЕЗОПАСНОСТИ',
	'ПЕТЯ_ИЗУЧАЕТ_ШИФРОВАНИЕ_ЦЕЗАРЯ',
	'ВАСЯ_ЧИТАЕТ_И_РЕШАЕТ_ШИФРЫ',
	'СУЩЕСТВУЕТ_МНОГО_ВИДОВ_ШИФРОВАНИЙ',
	'КАРТИНА_БЫЛА_КРАСИВОЙ_И_ЗАГАДОЧНОЙ',
	'ШИФРОВАНИЕ_КЛЮЧ_К_ЗАЩИТЕ_ДАННЫХ',
	'ВЫСТАВКА_ИСКУССТВА_И_ТВОРЧЕСТВА',
	'КЛАССИКА_ВЕЧНА_И_БЕССМЕРТНА',
	'СОВРЕМЕННОСТЬ_ДИНАМИЧНА_И_ИЗМЕНЧИВА',
	'БУДУЩЕЕ_НЕИЗВЕСТНО_И_УВЛЕКАТЕЛЬНО',
	'ПРОШЛОЕ_НАСТОЯЩЕЕ_И_БУДУЩЕЕ',
	'ДИЗАЙН_ИНТЕРФЕЙСА_ДОЛЖЕН_БЫТЬ_ПОНЯТНЫМ_И_УДОБНЫМ',
	'АЛГОРИТМЫ_ИСПОЛЬЗУЮТСЯ_В_РАЗЛИЧНЫХ_СФЕРАХ',
	'ИНФОРМАЦИЯ_МНОЖИТСЯ_И_УМНОЖАЕТСЯ',
	'КОМПЬЮТЕР_ТЕХНИЧЕСКИЙ_И_МОЩНЫЙ',
	'ИНТЕРНЕТ_БЕЗГРАНИЧЕН_И_НЕИЗВЕСТЕН',
	'ТЕЛЕВИЗОР_РАЗВЛЕКАТЕЛЬНЫЙ_И_ПОЛЕЗНЫЙ',
	'ПОГОДА_НЕПРЕДСКАЗУЕМА_И_ИЗМЕНЧИВА',
	'ПУТЬ_ДЛИННЫЙ_И_ИНТЕРЕСНЫЙ',
	'ДОРОГА_ГРЯЗНАЯ_И_СТРАШНАЯ',
	'ТРАВА_ЗЕЛЕНАЯ_И_МЯГКАЯ',
	'КОДИРОВАНИЕ_ПОЗВОЛЯЕТ_СОЗДАТЬ_НОВЫЕ_ПРОГРАММЫ', 
	'ЗВЁЗДЫ_МЕЛКИЕ_И_СИЯЮЩИЕ',
	'ЛУНА_СВЕТИТ_ЯРКО_И_ЗАГАДОЧНО',
	'СОЛНЦЕ_ГОРЯЧЕЕ_И_ОСЛЕПИТЕЛЬНОЕ',
	'ДОЖДЬ_МЕЛКИЙ_И_ТИХИЙ',
	'СНЕГ_ХОЛОДНЫЙ_И_БЕЛЫЙ',
	'ВЕТЕР_СВЕЖИЙ_И_ОЧЕНЬ_ВЛАЖНЫЙ',
	'ВОЗДУХ_ЧИСТЫЙ_И_ПРОЗРАЧНЫЙ',
	'ПРОГРАММИРОВАНИЕ_ЯВЛЯЕТСЯ_СОВРЕМЕННЫМ_ИСКУССТВОМ',
];
const keys = [
	'ПРОЦЕСС',
	'СИСТЕМА',
	'КОДИТЬ',
	'ИНТЕРНЕТ',
	'МОДУЛЬ',
	'АЛГОРИТМ',
	'ПОЛЕЗНО',
	'РЕШЕНИЕ',
	'КЛАССЫ',
	'ФАЙЛОВЫЙ',
	'ПРОГРАММА',
	'СКРИПТ',
	'БИБЛИОТЕКА',
	'КОМАНДА',
	'МАСШТАБ',
	'ДАННЫЕ',
	'КЛАВИША',
	'ПРОГНОЗ',
	'ВИРУС',
	'МОДУЛЬ',
	'ПРОЦЕСС',
	'АДРЕС',
	'ХРАНЕНИЕ',
	'СЕРВЕР',
	'КЛИЕНТ',
	'ИНТЕРФЕЙС',
	'АДМИН',
	'ПОДПИСЬ',
	'АНАЛИЗ',
	'ФРЕЙМ',
	'КОНТРОЛЬ',
	'ПРОФИЛЬ',
	'ПРОЕКТ',
	'ПРОЧИТАЙ',
	'ШАБЛОН',
	'АУДИО',
	'КЭШИРОВАНИЕ',
	'ГРАФИКА',
	'КЛИК',
	'ОБЛАКО',
	'УСТАНОВКА',
	'РАСПИСАНИЕ',
	'БАЗА',
	'БУФЕР',
	'СТРОКА',
	'ПАРСИНГ',
	'РЕЖИМ',
	'РАБОЧИЙ',
	'ПАКЕТ',
	'ПИНГ',
	'ОШИБКА',
	'ТЕКСТ',
	'ЗНАЧЕНИЕ',
	'СТЕК',
	'ФАЙЛ',
	'ГОСТЬ',
	'ШИФР',
	'ПЛАГИН',
	'ФОРМА',
	'ТАБЛИЦА',
	'СТИЛЬ',
	'СТРОКА',
	'НОВОСТИ',
	'КАЧЕСТВО',
	'СКРЫТИЕ',
	'ЗАГОЛОВОК',
	'РАЗМЕР',
	'РЕАЛЬНЫЙ',
	'КОНСОЛЬ',
	'КОНФИГ',
	'РОУТЕР',
	'ТЕМА',
	'ФЛАГ',
	'ЛОГИН',
	'АССЕТ',
	'ФАЙЛЫ',
	'БИЗНЕС',
	'ФУНКЦИЯ',
	'ГЛУБИНА'
];

function TrisemiusCipher({ surname, name, patronymic, variant }) {
	const [phraseTitle, setPhraseTitle] = useState('Зашифрованный текст');
	const [text, setText] = useState('');
	const [modalActive, setModalActive] = useState(false);
	const key = keys[+variant - 1];

	function replaceLetters(text) {
		const dictionary = 'АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЬЫЪЭЮЯ_';
		let replaced = '';

		for (let i = 0; i < text.length; i++) {
			const char = text[i].toUpperCase();
			const charIndex = dictionary.indexOf(char);

			if (charIndex === -1) {
				replaced += char;
			} else {
				const keyIndex = i % key.length;
				const keyChar = key[keyIndex];
				const keyCharIndex = dictionary.indexOf(keyChar);
				const encryptedIndex = (charIndex + keyCharIndex + 1) % 33;
				const encryptedChar = dictionary[encryptedIndex];

				replaced += encryptedChar;
			}
		}

		return replaced;
	}

	function onSubmitWin() {
		if (replaceLetters(phrases[+variant - 1]) === text.toUpperCase()) {
			setModalActive(true);
			setPhraseTitle('Правильный ответ');
		} else {
			setPhraseTitle('Неправильный ответ');
			setTimeout(() => setPhraseTitle('Зашифрованный текст'), 1500);
		}
	}

	return (
	<>
		<Modal 
			title="Поздравляем!"
			text={ `${surname} ${name}, вы решили практическое задание на «Шифр многоалфавитной замены».` } 
			active={ modalActive } 
			setActive={ setModalActive } 
		/>
		<div className="exercise-box">
			<div className="exercise-box__body-text">
				<p className="text">Имеется текст, который необходимо закодировать шифром <b>тритемиуса</b>, используя заданное ключевое слово.</p>
				<br />
				<p className="text"><b>Фраза:</b> { phrases[+variant - 1] }</p>
				<br />
				<p className="text"><b>Ключ:</b> { key }</p>
			</div>
			<form action="#" method="POST" onSubmit={e => e.preventDefault()} className="exercise-form exercise-form-prewin">
				<h2 className="subtitle">
					{ phraseTitle }
				</h2>
				<input 
					type="text" 
					value={ text } 
					onChange={event => setText(event.target.value)} 
					className="prewin-input" 
					name="prewin" 
				/>
				<input 
					type="button" 
					value="Ввести" 
					onClick={ onSubmitWin } 
					className="btn" 
				/>
			</form>
		</div>
	</>
	);
}

export default TrisemiusCipher;