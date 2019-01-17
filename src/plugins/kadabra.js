import Vue from 'vue'
import kadabraClient from '@kadabra/client'
import feathersClient from './feathers'

const kadabra = kadabraClient({ feathersClient })

Vue.prototype.$db = kadabra