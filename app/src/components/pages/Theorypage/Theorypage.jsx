import React, { useState } from 'react';
import TheoryOne from '../../../assets/images/theory_01.png';
import TheoryTwo from '../../../assets/images/theory_02.png';
import TheoryThree from '../../../assets/images/theory_03.png';
import TheoryFour from '../../../assets/images/theory_04.png';
import './theorypage.css';

function Theorypage() {
	const [caesarShow, setCaesarShow] = useState(false)
	const [tritemiusShow, setTritemiusShow] = useState(false)
	const [replacementShow, setReplacementShow] = useState(false)
	const [rsaShow, setRsaShow] = useState(false)

	return (
		<>
			<section className="theory">
				<div className="container">
					<h1 className="title">Теоретические материалы</h1>
					<article className={caesarShow ? "theory-article active" : "theory-article"}>
						<img src={TheoryOne} alt="Шифр Цезаря" />
						<div className="theory-article__body-text">
							<p className="text"><b className="cipher-name">Шифр Цезаря</b> — это простой метод шифрования, при<br />котором каждая буква в открытом тексте заменяется<br />другой буквой,находящейся на постоянном позиций в алфавите.</p>
							<br />
							<p className="text"><b>Принцип работы шифра Цезаря</b>: каждая буква алфавита<br />заменяется другой буквой на фиксированное количество<br />позиций в алфавите. Это число позиций называется ключом<br />шифра. Например, если ключ шифра равен 3, каждая буква<br />будет заменена буквой, следующей через две позиции в алфавите.<br />Таким образом, буква «А» станет «Г», «Б» станет «Д», «В»<br />станет «Е» и так далее.</p>
						</div>
						<button
							className="readmore" 
							id="cipher-caesar-read" 
							onClick={() => {
									document.getElementById('cipher-caesar-read').scrollIntoView({ behavior: 'smooth', block: 'end'});
									setCaesarShow(!caesarShow);
								}
							}
						>
							{caesarShow ? "▲ Свернуть" : "▼ Развернуть"}
						</button>
					</article>
					<article className={tritemiusShow ? "theory-article active" : "theory-article"}>
						<img src={TheoryTwo} alt="Шифр Тритемиуса" />
						<div className="theory-article__body-text">
							<p className="text"><b className="cipher-name">Шифр Тритемиуса</b> — относится к различным методам шифрования,<br />предложенным Иоганном Тритемием (Johann Trithemius), немецким<br />монахом, ученым и криптографом,жившим в XV-XVI веках.</p>
							<br />
							<p className="text"><b>Принцип работы</b>: пронумеровать буквы алфавита по порядку.<br />Выбрать слово-ключ.Написать кодируемое слово, под ним<br />слово-ключ, и сложить цифры,соответствующие буквам в словах.<br />Последовательность цифр и будет зашифрованным сообщением.</p>
						</div>
						<button 
							className="readmore" 
							id="cipher-tritemius-read" 
							onClick={() => {
									document.getElementById('cipher-tritemius-read').scrollIntoView({ behavior: 'smooth', block: 'start'});
									setTritemiusShow(!tritemiusShow);
								}
							}
						>
							{tritemiusShow ? "▲ Свернуть" : "▼ Развернуть"}
						</button>
					</article>
					<article className={replacementShow ? "theory-article active" : "theory-article"}>
						<img src={TheoryThree} alt="Шифр одноалфавитной замены" />
						<div className="theory-article__body-text">
							<p className="text"><b className="cipher-name">Шифр одноалфавитной замены</b> — это один из самых простых<br />и наиболеераспространенных методов шифрования, который<br />используетзамену символов или букв в сообщении с помощью<br />других символов или букв.</p>
							<br />
							<p className="text"><b>Принцип работы</b>:
							<br /> 
							<b className="text-accent">Шифрование</b>
							<br />
							В процессе шифрования каждая буква исходного текста<br />заменяется на соответствующую ей букву из алфавита шифра. <br />Например, если алфавит шифра состоит из букв A-Z, то буква «А»<br />может быть заменена на «С», «Б» на «Е» и так далее. Таким<br />образом, исходный текст преобразуется в зашифрованный<br />текст, состоящий из букв алфавита шифра.
							<br />
							<b className="text-accent">Дешифрование</b>
							<br />
							Для дешифрования зашифрованного текста необходимо<br />выполнить обратную операцию – заменить каждую букву<br />алфавита шифра на соответствующую ей букву из<br />исходного алфавита. Таким образом, зашифрованный<br />текст преобразуется обратно в исходный текст.<br />Принцип работы шифра простой замены достаточно<br />прост и понятен. Однако, такой шифр не обладает<br />высокой степенью безопасности, так как его<br />легко взломать с помощью методов частотного<br /> анализа и других криптоаналитических методов.</p>
						</div>
						<button 
							className="readmore" 
							id="cipher-replacement-read" 
							onClick={() => {
									document.getElementById('cipher-replacement-read').scrollIntoView({ behavior: 'smooth', block: 'start'});
									setReplacementShow(!replacementShow);
								}
							}
						>
							{replacementShow ? "▲ Свернуть" : "▼ Развернуть"}
						</button>
					</article>
					<article className={rsaShow ? "theory-article active" : "theory-article"}>
						<img src={TheoryFour} alt="RSA" />
						<div className="theory-article__body-text">
							<p className="text"><b className="cipher-name">Алгоритм RSA</b> (Rivest-Shamir-Adleman) является одним из<br />самых популярных асимметричных алгоритмов шифрования.<br />Он основан на математической задаче факторизации больших<br />чисел и использует два ключа: публичный и приватный.</p>
							<br />
							<div className="text"><b>Принцип работы</b>: Для генерации ключей в алгоритме<br />RSA необходимо выполнить следующие шаги:
							<ol>
								<li>Выбрать два простых числа p и q.</li>
								<li>Вычислить их произведение n = p * q, которое<br />будет использоваться в качестве модуля<br />для шифрования и дешифрования.</li>
								<li>Вычислить значение функции Эйлера<br />от числа n, которое обозначается как<br />φ(n) = (p-1) * (q-1).</li>
								<li>Выбрать целое число e, которое является<br />взаимно простым с φ(n) и меньше φ(n).</li>
								<li>Вычислить число d, обратное к числу e по<br />модулю φ(n), то есть d * e ≡ 1 (mod φ(n)).</li>
							</ol>
							Полученные значения (e, n) составляют<br />публичный ключ, который распространяется<br />всем пользователям, а (d, n) – приватный ключ,<br />который хранится в секрете.
							Для шифрования<br />сообщения m с помощью публичного ключа<br />(e, n) используется формула<br />c = m^e mod n<br /> где c – зашифрованное сообщение.
							Для<br />дешифрования зашифрованного сообщения<br />c с помощью приватного ключа (d, n)<br />используется формула<br />m = c^d mod n<br />где m – исходное сообщение.
							Алгоритм RSA<br />обладает свойством невозможности обратного<br />вычисления приватного ключа по публичному<br />ключу, что обеспечивает безопасность передачи<br />данных. Он также обладает свойством цифровой<br />подписи, позволяющим проверить<br />подлинность отправителя сообщения.
							</div>
						</div>
						<button 
							className="readmore" 
							id="rsa-read" 
							onClick={() => {
									document.getElementById('rsa-read').scrollIntoView({ behavior: 'smooth', block: 'start'});
									setRsaShow(!rsaShow)
								}
							}
						>
							{rsaShow ? "▲ Свернуть" : "▼ Развернуть"}
						</button>
					</article>
				</div>
			</section>
		</>
	);
}

export default Theorypage;