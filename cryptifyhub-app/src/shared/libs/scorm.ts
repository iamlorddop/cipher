import { SCORM } from 'pipwerks-scorm-api-wrapper';

export const Scorm = {
	init() {
		SCORM.init();
	},

	calculateScore(score: number) {
		SCORM.set("cmi.core.score.raw", `${score}`);
		SCORM.set("cmi.core.score.max", "100");
		SCORM.set("cmi.core.score.min", "0");
		SCORM.save();
	},

	finish() {
		SCORM.set("cmi.core.lesson_status", "completed");
		SCORM.save();
		SCORM.quit();
	},
};