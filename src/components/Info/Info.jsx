import { Component } from 'react'
import './Info.css'
import PropType from 'prop-types'

export default class Info extends Component {
  constructor (props) {
    super(props);
  }
  

  render() {
    return (
      <div className='info'>
        <p>
          {
            this.props.text
          }
        </p>
      </div>
    )
  }
}

Info.propTypes = {
  text: PropType.string
}