import { Component } from 'react';
import './App.css';
import CardBlogComponent from './components/CardBlogComponent';
import ChangeButtonsComponent from './components/ChangeButtonsComponent';




class MyBlog extends Component {

  constructor() {
    super();
    this.state = {
      img1: '/img/fondo-girasoles.jpg',
      img2: '/img/fondo-girasoles.jpg',
      img3: '/img/fondo-girasoles.jpg'
    }

    
    this.changeImg1URL = this.changeImg1URL.bind(this)
    this.changeImg2URL = this.changeImg2URL.bind(this)
    this.changeImg3URL = this.changeImg3URL.bind(this)
  }
  changeImg1URL () {
    this.setState({ img1: '/img/fondo-dalia.jpg' })
  }
  changeImg2URL () {
    this.setState({ img2: '/img/fondo-dalia.jpg' })
  }
  changeImg3URL () {
    this.setState({ img3: '/img/fondo-dalia.jpg' })
  }


  render() {
    return (
      <>
        <section className="blog" >
          <h1 className='blog__title'>Jardin de sentimientos</h1>


          <CardBlogComponent imgUrl={this.state.img1}>
            El tulipán, delicado y elegante, despliega sus pétalos en un baile armonioso, como un suspiro de amor que se desliza en el viento. Su belleza resplandece como un símbolo de pasión y ternura, cautivando corazones con su encanto cautivador. Cada uno de sus colores vibrantes es un susurro de amor, un regalo de la naturaleza que nos recuerda la dulzura de un romance floreciente.
          </CardBlogComponent>
  

          <CardBlogComponent imgUrl={this.state.img2}>
              La dalia, con su elegancia intrínseca y sus pétalos enigmáticos, es un símbolo de amor que despierta pasiones profundas. Cada curva de sus delicadas formas revela la promesa de un romance floreciente, mientras sus colores vivos despiertan emociones intensas en cada mirada. En el lenguaje secreto de las flores, la dalia susurra palabras de amor eterno y enciende la llama de la pasión en los corazones enamorados.
          </CardBlogComponent>
  

          <CardBlogComponent imgUrl={this.state.img3}>
              El girasol, con su radiante esplendor y su eterna búsqueda del sol, simboliza la belleza que florece en cada mirada suya, mientras sus pétalos siguen con devoción la trayectoria del astro rey. En sus giras hacia la luz, revela un amor eterno que siempre se inclina hacia aquel que ilumina su existencia
          </CardBlogComponent>


        </section>

        <ChangeButtonsComponent 
            events={{
              changeImg1URL: this.changeImg1URL,
              changeImg2URL: this.changeImg2URL,
              changeImg3URL: this.changeImg3URL
            }}

        ></ChangeButtonsComponent> 
 
      </>
    )
  } 
}



export default MyBlog

