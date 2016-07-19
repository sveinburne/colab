import * as actionTypes from '/imports/medianode/actions'
import reducer from '/imports/medianode/reducer'
import medianodeSaga from '/imports/medianode/saga'
import ColabMediaConf from './libs/ColabMediaConf'
import { LOGOUT } from '../auth/actions/actionTypes'
import { START_MEDIA_NODE_AUTH } from '../core/actions/actionTypes'

export default {
  actionTypes,
  reducer,
  load (context) {
    const { sagaMiddleWare, CONF } = context
    // noinspection JSUnresolvedVariable
    sagaMiddleWare.run(medianodeSaga, new ColabMediaConf({
      appName: CONF.MEDIA_NODE_APP_NAME,
      SYM_AUTH_ACTION: START_MEDIA_NODE_AUTH,
      SYM_RESET_ACTION: LOGOUT,
      RETRY_AFTER_SECONDS: CONF.MEDIA_NODE_RECONNECT_AFTER_S
    }))
  }
}

