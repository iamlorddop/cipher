import { SCORM } from 'pipwerks-scorm-api-wrapper';

interface IScorm {
	/** Initialization SCORM */
	init(): void;
	/** Method to calculate score. Score is value from results  */
	calculateScore(score: number): void;
	/** Finish SCORM */
	finish(): void;
}

export const Scorm: IScorm = {
	init() {
		SCORM.init();
	},
	calculateScore(score) {
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