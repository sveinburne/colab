// import 'react-h5-video/lib/react-h5-video.css'
import 'meteor/svein:serrurier-reporter-paranoid'
import '/imports/init-cadenas'
import '/imports/init-conf-cadenas'
import '/imports/init-behaviors'
import { createApp } from 'mantra-core'
import initContext from './configs/context'
import { routerReducer } from 'react-router-redux'

import { combineReducers } from 'redux'

import coreModule from './modules/core'
import authModule from './modules/auth'
import mediaModule from './modules/medianode'
import dashBoardModule from './modules/dashboard'
import experimentModule from './modules/experiment'
import videotModule from './modules/video'

const reducers = {
  ...coreModule.reducer,
  ...authModule.reducer,
  ...mediaModule.reducer,
  ...dashBoardModule.reducer,
  ...experimentModule.reducer,
  ...videotModule.reducer,
  routing: routerReducer
}

const reducer = combineReducers(reducers)
const context = initContext({ reducer })

const app = createApp(context)

app.loadModule(coreModule)
app.loadModule(authModule)
app.loadModule(dashBoardModule)
app.loadModule(mediaModule)
app.loadModule(experimentModule)
app.loadModule(videotModule)

app.init()
