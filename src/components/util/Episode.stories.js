import Episode from "./Episode.vue";

export default {
	title: "Info/Episode",
	component: Episode,
};

const Template = (args) => ({
	components: {
		Episode,
	},
	setup() {
		return { args };
	},
	template: `
    <episode style="width: 100%; max-width: 300px;" />
  `,
});

export const Main = Template.bind({});
