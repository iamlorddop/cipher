import scopackager from 'simple-scorm-packager';
import path from 'path';

const config = {
  version: '1.2', // version of scorm
  organization: 'CryptifyHub',
  title: 'CryptifyHub',
  language: 'ru-RUS',
  masteryScore: 100,
  startingPage: 'index.html',
  source: path.join(__dirname, 'build'),
  package: {
    version: process.env.npm_package_version,
    zip: true,
    author: 'CryptifyHub',
    outputFolder: path.join(__dirname, 'scorm_packages'),
    description: 'Основы криптографии',
    keywords: ['scorm', 'test', 'course'],
    typicalDuration: 'PT0H5M0S',
    rights: `©${new Date().getFullYear()} CryptifyHub. All right reserved.`,
    vcard: {
      author: 'CryptifyHub',
      org: 'CryptifyHub',
      mail: 'juliahavaeva7@gmail.com',
      url: 'https://github.com/iamlorddop/cryptify-hub/tree/main'
    }
  }
};

scopackager(config, () => {
  process.exit(0);
});