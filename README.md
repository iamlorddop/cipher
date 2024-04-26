# CryptifyHub

**CryptifyHub** is a web application for teaching the basics of cryptography.

# Installation

You have installed the project, you need to go to the application folder and install the dependencies:

```bash
cd cryptifyhub-app
npm install
```

# Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

# Working with SCORM Package

The application uses [SCORM API Wrapper](https://github.com/allanhortle/pipwerks-scorm-api-wrapper), to work with it, read the documentation.

To build the SCORM package, use [Simple SCORM Packager](https://github.com/lmihaidaniel/simple-scorm-packager)

To build the SCORM package:

```bash
cd cryptifyhub-app
npm run scopackager
```