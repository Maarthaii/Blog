import { Component } from 'react'
import './List.css'

import PropType from 'prop-types'

class Img extends Component {

  constructor (props) {
    super(props);
    this.props.setBackground.bind(this)
  }
  

  render() {
    return (
      <div className='img-list__item'>
        <div className='img-list__item__img'
        >
          <img src={this.props.url} />
        </div>

        <div className='img-list__item__description'>
          <p>Click para leer el resto de la información</p>
            <hr />
            <button
              onClick={() => {
                this.props.setBackground(this.props.url)
                this.props.setText(this.props.text)
              }}
            >
              Leer más
            </button>
        </div>

      </div>
    )
  }
}

Img.propTypes = {
  setBackground: PropType.func,
  url: PropType.string,
  setText: PropType.func,
  text: PropType.string
}

export default class List extends Component {
  constructor (props) {
    super(props);
    
  }

  render() {
    return (
      <div className='img-list'>

        {/* Solo hay que agregar nuevos imgs y pasarles la url con su descripción, el resto es automatico */}

        <Img 
          url={'/img/girasoles1.jpg'} 
          text={'El girasol, con su radiante esplendor y su eterna búsqueda del sol, simboliza la belleza que florece en cada mirada suya, mientras sus pétalos siguen con devoción la trayectoria del astro rey. En sus giras hacia la luz, revela un amor eterno que siempre se inclina hacia aquel que ilumina su existencia'}
          setBackground={this.props.setBackground}
          setText={this.props.setText}
        />
        <Img 
          url={'/img/tulipan1.jpg'} 
          text={'El tulipán, delicado y elegante, despliega sus pétalos en un baile armonioso, como un suspiro de amor que se desliza en el viento. Su belleza resplandece como un símbolo de pasión y ternura, cautivando corazones con su encanto cautivador. Cada uno de sus colores vibrantes es un susurro de amor, un regalo de la naturaleza que nos recuerda la dulzura de un romance floreciente.'}
          setBackground={this.props.setBackground}
          setText={this.props.setText} 
        />
        <Img 
          url={'/img/dalia1.jpg'} 
          text={'La dalia, con su elegancia intrínseca y sus pétalos enigmáticos, es un símbolo de amor que despierta pasiones profundas. Cada curva de sus delicadas formas revela la promesa de un romance floreciente, mientras sus colores vivos despiertan emociones intensas en cada mirada. En el lenguaje secreto de las flores, la dalia susurra palabras de amor eterno y enciende la llama de la pasión en los corazones enamorados.'}
          setBackground={this.props.setBackground} 
          setText={this.props.setText}
        />
        <Img 
          url={'/img/girasoles2.jpg'}
          text={'El girasol, con su radiante esplendor y su eterna búsqueda del sol, simboliza la belleza que florece en cada mirada suya, mientras sus pétalos siguen con devoción la trayectoria del astro rey. En sus giras hacia la luz, revela un amor eterno que siempre se inclina hacia aquel que ilumina su existencia'}
          setBackground={this.props.setBackground} 
          setText={this.props.setText}
        />
        <Img 
          url={'/img/tulipanes2.png'}
          text={'El tulipán, delicado y elegante, despliega sus pétalos en un baile armonioso, como un suspiro de amor que se desliza en el viento. Su belleza resplandece como un símbolo de pasión y ternura, cautivando corazones con su encanto cautivador. Cada uno de sus colores vibrantes es un susurro de amor, un regalo de la naturaleza que nos recuerda la dulzura de un romance floreciente.'}
          setBackground={this.props.setBackground} 
          setText={this.props.setText}
        />
        <Img 
          url={'/img/dalia2.jpg'}
          text={'La dalia, con su elegancia intrínseca y sus pétalos enigmáticos, es un símbolo de amor que despierta pasiones profundas. Cada curva de sus delicadas formas revela la promesa de un romance floreciente, mientras sus colores vivos despiertan emociones intensas en cada mirada. En el lenguaje secreto de las flores, la dalia susurra palabras de amor eterno y enciende la llama de la pasión en los corazones enamorados.'}
          setBackground={this.props.setBackground} 
          setText={this.props.setText}
        />

      </div>
    )
  }
}

List.propTypes = {
  setBackground: PropType.func,
  setText: PropType.func
}


