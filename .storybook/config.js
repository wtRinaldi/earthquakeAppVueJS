import { configure } from '@storybook/vue'
import Vue from 'vue'

// import RegionalData from '../src/components/RegionalData'
import test from '../src/components/test'

// Vue.component('regionalData', RegionalData)
Vue.component('test', test)

function loadStories () {
    require('../src/stories')
}

configure(loadStories, module)

// automatically import all files ending in *.stories.js
// configure(require.context('../stories', true, /\.stories\.js$/), module);
