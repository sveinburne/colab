import React, { PropTypes } from 'react'
import Toggle from 'material-ui/Toggle'

const ToggleTimeLine = ({ height, setTimeLineVisibility, timeLineVisible }, { t }) => (
  <div style={{ height, display: 'flex', alignItems: 'center' }}>
    <Toggle style={{ margin: 'auto' }}
            labelStyle={{ fontSize: 14, textAlign: 'center', width: 140, lineHeight: '14px' }}
            label={t('experiment.display-time-explorer')}
            toggled={timeLineVisible}
            onToggle={() => setTimeLineVisibility(!timeLineVisible)}
    />
  </div>
)

ToggleTimeLine.contextTypes = {
  t: PropTypes.func.isRequired
}

ToggleTimeLine.propTypes = {
  timeLineVisible: PropTypes.bool.isRequired,
  setTimeLineVisibility: PropTypes.func.isRequired,
  experiment: PropTypes.object.isRequired,
  height: PropTypes.number.isRequired
}

export default ToggleTimeLine
