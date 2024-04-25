import scopackager from 'simple-scorm-packager';

const config = {
	version: '1.2',
	organization: 'Cipher',
	title: 'Cipher',
	language: 'ru-RUS',
	masteryScore: 6,
	startingPage: 'index.html',
	source: './dist',
	package: {
		version: '0.5.1.2',
		zip: true,
		author: 'Cipher',
		outputFolder: './scorm_packages',
		description: 'Основы криптографии',
		keywords: ['scorm', 'test', 'course'],
		typicalDuration: 'PT0H5M0S',
		rights: `©${new Date().getFullYear()} Cipher. All right reserved.`,
		vcard: {
			author: 'Cipher',
			org: 'Cipher',
		}
	}
};

scopackager(config, function(msg) {
	console.log(msg);
});