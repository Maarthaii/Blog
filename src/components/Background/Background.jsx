import { Component } from 'react'
import './Background.css';
import PropType from 'prop-types'

export default class Background extends Component {
  constructor (props) {
    super(props);

  }


  render() {
    return (
      <div className='background'>
        <img src={this.props.url} />
      </div>
    )
  }
}

Background.propTypes = {
  url: PropType.string
}
