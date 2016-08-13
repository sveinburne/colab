import React, { Component, PropTypes } from 'react'
import { Provider } from 'react-redux'
import getExtendedMuiTheme from '/imports/ui/getExtendedMuiTheme'
import { setWinHeight, setWinWidth } from '../actions/index'
import throttle from 'lodash/throttle'
import AppLoading from '/imports/ui/AppLoading'

class MainLayout extends Component {
  constructor (props) {
    super(props)
    this.handleResize = throttle(() => {
      const height = window.innerHeight
      const width = window.innerWidth
      this.props.setWinHeight(height)
      this.props.setWinWidth(width)
    }, props.CONF.WIN_UPDATE_PERIOD)
  }

  componentWillMount () {
    this.handleResize()
  }

  componentDidMount () {
    window.addEventListener('resize', this.handleResize)
  }

  componentWillUnmount () {
    window.removeEventListener('resize', this.handleResize)
  }

  getChildContext () {
    return {
      muiTheme: getExtendedMuiTheme(this.props.theme),
      t: this.props.t,
      VERSION: this.props.VERSION,
      theme: this.props.theme,
      ROUTES: this.props.ROUTES,
      nav: this.props.nav,
      ACCOUNT_STATES: this.props.ACCOUNT_STATES,
      CONF: this.props.CONF
    }
  }

  render () {
    const { delayLoading, configLoading } = this.props
    if (delayLoading || configLoading) return <AppLoading />
    else return (
      <Provider store={this.props.store}>
        {this.props.children}
      </Provider>
    )
  }
}

MainLayout.propTypes = {
  t: PropTypes.func.isRequired,
  setWinHeight: PropTypes.func.isRequired,
  setWinWidth: PropTypes.func.isRequired,
  config: PropTypes.object,
  VERSION: PropTypes.string,
  theme: PropTypes.object.isRequired,
  ROUTES: PropTypes.object.isRequired,
  nav: PropTypes.func.isRequired,
  ACCOUNT_STATES: PropTypes.object.isRequired,
  store: PropTypes.object.isRequired,
  delayLoading: PropTypes.bool.isRequired,
  configLoading: PropTypes.bool.isRequired,
  CONF: PropTypes.object.isRequired
}

MainLayout.childContextTypes = {
  muiTheme: PropTypes.object.isRequired,
  t: PropTypes.func.isRequired,
  VERSION: PropTypes.string,
  theme: PropTypes.object.isRequired,
  ROUTES: PropTypes.object.isRequired,
  nav: PropTypes.func.isRequired,
  ACCOUNT_STATES: PropTypes.object.isRequired,
  CONF: PropTypes.object.isRequired
}

export default MainLayout
