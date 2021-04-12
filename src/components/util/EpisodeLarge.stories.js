import StorybookWrapper from "../../stories/Wrapper.vue";
import EpisodeLarge from "./EpisodeLarge.vue";

export default {
	title: "Info/EpisodeLarge",
	component: EpisodeLarge,
};

const Template = (args) => ({
	components: {
		EpisodeLarge,
		StorybookWrapper,
	},
	setup() {
		return { args };
	},
	template: `
   		<episode-large :data="args.data" style="width: 100%; max-width: 300px;" />
  	`,
});

export const LargePOI = Template.bind({});
LargePOI.args = {
	data: {
		title: "B.S.O.D",
		season: 5,
		episode: 1,
		cover:
			"https://m.media-amazon.com/images/M/MV5BMTA0ODQ1NDktYTNjMi00YWVlLTlkOTItMTI4NzVhNzhiYmQyXkEyXkFqcGdeQXVyMjg2MTMyNTM@._V1_UX1280_CR0,0,1280,720_AL_.jpg",
		parent: {
			name: "Person of Interest",
			href: "/tt1839578",
		},
		date: new Date("22 feb 2017"),
	},
};

export const LargeFlash = Template.bind({});
LargeFlash.args = {
	data: {
		title: "Fear Me",
		season: 7,
		episode: 5,
		cover:
			"https://m.media-amazon.com/images/M/MV5BYjA1Y2Y5YTYtNjQyZi00MTUwLWFjNTUtOTU4YjA3MzE5N2Y1XkEyXkFqcGdeQXVyNzE3ODQxNjU@._V1_UX1280_CR0,0,1280,720_AL_.jpg",
		parent: {
			name: "The Flash",
			href: "/tt1839578",
		},
		date: new Date("30 mar 2021"),
	},
};

export const LargeFAM = Template.bind({});
LargeFAM.args = {
	data: {
		title: "Triage",
		season: 2,
		episode: 9,
		cover:
			"https://m.media-amazon.com/images/M/MV5BOTA0OTgxNmYtMDY2NC00NTZmLTk1MDQtMWM1ZDgzYzIwMDA1XkEyXkFqcGdeQXVyNjEwNTM2Mzc@._V1_FMjpg_UX1280_.jpg",
		parent: {
			name: "For All Mankind",
			href: "/tt1839578",
		},
		date: new Date("16 apr 2021"),
	},
};
