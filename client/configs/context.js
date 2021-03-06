import '/imports/init-accounts'
import { Meteor } from 'meteor/meteor'
import { Tracker } from 'meteor/tracker'
import { createStore, applyMiddleware, compose } from 'redux'
import { Accounts, STATES as ACCOUNT_STATES } from 'meteor/std:accounts-ui'
import * as time from '/imports/time'
import Logger from '/imports/Logger'
import createSagaMiddleware from 'redux-saga'
import * as CONF from './configuration'
const sagaMiddleWare = createSagaMiddleware()
import injectTapEventPlugin from 'react-tap-event-plugin'
import { browserHistory } from 'react-router'
import { routerMiddleware, push } from 'react-router-redux'
import i18n from 'meteor/universe:i18n'
import ROUTES from './routes'
import orangeTheme from './orangeTheme'
import solemnTheme from './solemnTheme'

const logger = new Logger('redux')

const loggerMiddleware = store => next => action => {
  let result = next(action)
  logger.debug('dispatching', action.type, ' with next state', store.getState())
  return result
}

const defaultState = { }

export default function ({ reducer }) {
  injectTapEventPlugin()
  const rMiddleware = routerMiddleware(browserHistory)
  let middleware
  if (window.devToolsExtension && window.devToolsExtension()) {
    middleware = compose(
      applyMiddleware(sagaMiddleWare, rMiddleware),
      window.devToolsExtension && window.devToolsExtension()
    )
  } else {
    middleware = compose(
      applyMiddleware(sagaMiddleWare, rMiddleware)
    )
  }
  const store = createStore(
    reducer,
    defaultState,
    middleware
  )
  return {
    Accounts,
    ACCOUNT_STATES,
    VERSION: CONF.VERSION,
    Meteor,
    Logger,
    Tracker,
    Store: store,
    CONF: CONF,
    sagaMiddleWare,
    ROUTES,
    t: i18n.__,
    nav: (route) => store.dispatch(push(route)),
    time,
    theme: solemnTheme
  }
}
