import { Component } from 'react'
import PropTypes from 'prop-types';

export default class CardBlogComponent extends Component {

  constructor(props) {
    super(props)
  }


  render() {
    return (
      <div  className="blog__container">
      <div className='blog__container__img'>
        <img
          src={this.props.imgUrl} alt="Tulipan"
        />
      </div>
      <p  className="blog__container__info" >
        {this.props.children}
      </p>
    </div>
    )
  }
}


CardBlogComponent.propTypes = {
  imgUrl: PropTypes.string,
  children: PropTypes.node
}