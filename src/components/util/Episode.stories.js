import StorybookWrapper from "../../stories/Wrapper.vue";
import Episode from "./Episode.vue";

export default {
	title: "Info/Episode",
	component: Episode,
};

const Template = (args) => ({
	components: {
		Episode,
		StorybookWrapper,
	},
	setup() {
		return { args };
	},
	template: `
    <episode style="width: 100%; max-width: 300px;" />
  `,
});

export const Main = Template.bind({});
