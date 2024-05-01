# CryptifyHub

**CryptifyHub** это веб-приложение для обучения основам криптографии.

# Installation

Вы установили проект, вам нужно перейти в директорию cryptifyhub-app и установить зависимости:

```bash
cd cryptifyhub-app
npm install
```

# Getting Started

Сначала запустите проект локально:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Откройте [http://localhost:3000](http://localhost:3000) в своем браузере, чтобы увидеть результат.

# Работа с SCORM пакетом

В приложении используется [SCORM API Wrapper](https://github.com/allanhortle/pipwerks-scorm-api-wrapper), чтобы работать с ним следуйте документации.

Для сборки SCORM пакета используется [Simple SCORM Packager](https://github.com/lmihaidaniel/simple-scorm-packager)

Сборка SCORM-пакета:

```bash
cd cryptifyhub-app
npm run scopackager
```