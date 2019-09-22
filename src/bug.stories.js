import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import BugVue from './bug.vue';

Vue.component('component', BugVue);

storiesOf('Story', module)
  .add('index', () => '<component></component>');
