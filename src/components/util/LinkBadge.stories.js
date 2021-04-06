import StorybookWrapper from "../../stories/Wrapper.vue";
import LinkBadgeComponent from "./LinkBadge.vue";
import { ChevronRightIcon } from "@zhuowenli/vue-feather-icons";

export default {
  title: "App/Buttons",
  component: LinkBadgeComponent,
};

const Template = (args) => ({
  components: {
    LinkBadge: LinkBadgeComponent,
    ChevronRightIcon,
    StorybookWrapper,
  },
  setup() {
    return { args };
  },
  template: `
    <link-badge to="#">
      {{args.label}}
    </link-badge>
  `,
});

export const LinkBadge = Template.bind({});
LinkBadge.args = {
  label: "This is my link button",
};
