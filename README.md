# Cipher

<div align="center">
  <img src="https://github.com/iamlorddop/cipher/blob/main/img/logo.svg" alt="crypto logo" />
</div>

**Cipher** это веб-приложение для обучения основам криптографии. В нем вы изучите:

- Шифр Цезаря: криптоанализ по открытому тексту
- Шифр Цезаря: криптоанализ с использованием статистических свойств языка
- Шифр Цезаря: криптоанализ методом «полного перебора»
- Шифр одноалфавитной замены: криптоанализ по фрагменту открытого текста
- Шифр Тритемиуса
- Цифровая подпись по алгоритму RSA

# Установка приложения

Скачайте zip архив или пропишите в терминале:

`gh repo clone iamlorddop/cipher`

Вы установили проект, вам нужно перейти в папку приложения и установить зависимости, для этого:

```
../cipher cd crypto
../cipher/crypto npm install
```

Для того чтобы запустить приложение в командной строке пропишите:

`../cipher/crypto npm run dev`

Для того чтобы забилдить приложение в командной строке пропишите:

`../cipher/crypto npm run build`

Для просмотра билда приложения в командной строке пропишите:

`../cipher/crypto npm run preview`

## Работа с scorm пакетом

В приложении используется [SCORM API Wrapper](https://github.com/allanhortle/pipwerks-scorm-api-wrapper), для работы с ним читайте документацию.
Для сборки SCORM-пакета используется [Simple SCORM Packager](https://github.com/lmihaidaniel/simple-scorm-packager)

Для указания текущей версии приложения необходимо открыть файл `scoPackager.js` и в настройках указать нужную версию. Файл находится:

```
../cipher/crypto/scoPackager.js
```

Чтобы собрать SCORM-пакет в терминале пропишите:

```
../cipher cd crypto
../cipher/crypto npm run package-scorm
```

Архив SCORM-пакета находится:

`../cipher/crypto/scorm_packages`
