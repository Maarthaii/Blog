import PropTypes from 'prop-types'
import { Component } from 'react'

export default class ChangeButtonsComponent extends Component {

  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className='buttons'>
        <button onClick={this.props.events.changeImg1URL}>Cambiar 1</button>
        <button onClick={this.props.events.changeImg2URL}>Cambiar 2</button>
        <button onClick={this.props.events.changeImg3URL}>Cambiar 3</button>
      </div>
    )
  }
}

ChangeButtonsComponent.propTypes = {
  events: PropTypes.object
}