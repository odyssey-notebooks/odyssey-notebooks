import Vue from 'vue'
import feathersClient from './feathers'
import VueFeathers from '@vue-feathers/vue-feathers'

Vue.use(VueFeathers, { feathersClient })