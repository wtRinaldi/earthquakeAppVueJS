import { linkTo } from '@storybook/addon-links'
import { storiesOf } from '@storybook/vue'

import RegionalData from 'src/components/RegionalData'

export default {
  title: 'App',
};

export const toStorybook = () => ({
  components: { RegionalData },
  template: '<regional-data :showApp="action" />',
  methods: { action: linkTo('Button') },
});

toStorybook.story = {
  name: 'to Storybook',
};
