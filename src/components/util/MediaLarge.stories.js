import MediaLarge from "./MediaLarge.vue";

export default {
	title: "Info/MediaLarge",
	component: MediaLarge,
};

const Template = (args) => ({
	components: {
		MediaLarge,
	},
	setup() {
		return { args };
	},
	template: `
   		<media-large :data="args.data" style="width: 100%; max-width: 300px;" />
  	`,
});

export const TvLargePOI = Template.bind({});
TvLargePOI.args = {
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

export const TvLargeFlash = Template.bind({});
TvLargeFlash.args = {
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

export const TvLargeFAM = Template.bind({});
TvLargeFAM.args = {
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

export const MovieLargeEndgame = Template.bind({});
MovieLargeEndgame.args = {
	data: {
		title: "Avengers: Endgame",
		cover:
			"https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/7RyHsO4yDXtBv1zUU3mTpHeQ0d5.jpg",
		href: "/tt1839578",
		date: new Date("24 apr 2019"),
	},
};
