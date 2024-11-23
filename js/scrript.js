"use strict";

const personalPlanPeter = {
	name: "Peter",
	age: "29",
	skills: {
		languages: ['ru', 'eng'],
		programmingLangs: {
			js: '20%',
			php: '10%'
		},
		exp: '1 month'
	}, showAgeAndLangs: function (plan) {
		const { age } = plan;
		const { languages } = plan.skills;
		let str = "";
		for (const key in languages) {
			str += ` ${languages[key].toUpperCase()}`;
		}

		return console.log(`Мне ${age} и я владею языками:${str}`);
	}
};

personalPlanPeter.showAgeAndLangs(personalPlanPeter);

function showExperience(plan) {
	const { exp } = plan.skills;
	return console.log(exp);
}

showExperience(personalPlanPeter);

function showProgrammingLangs(plan) {
	const { programmingLangs } = plan.skills;
	let str = "";
	for (const key in programmingLangs) {
		str += `Язык ${key} изучен на ${programmingLangs[key]}\n`;
	}

	return console.log(str);
}

showProgrammingLangs(personalPlanPeter);