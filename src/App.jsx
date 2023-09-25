import './App.css';
import FondoFlorComponent from './FondoFlor';




function MyBlog() {
  return (
    <>
      <div className="contenedor" > 
      <h1>Jardin de sentimientos</h1>

      <div  className="contenedores">
        <img src="../src/img/tulipan1.jpg" className="img-flores" alt="Tulipan"/> 
        <p  className="info" >El tulipán, delicado y elegante, despliega sus pétalos en un baile armonioso, como un suspiro de amor que se desliza en el viento. Su belleza resplandece como un símbolo de pasión y ternura, cautivando corazones con su encanto cautivador. Cada uno de sus colores vibrantes es un susurro de amor, un regalo de la naturaleza que nos recuerda la dulzura de un romance floreciente.</p> 
      </div>

      <div className="contenedores">  
        <img src="../src/img/dalia1.jpg" className="img-flores" alt="Dalia"/>  
        <p className="info">La dalia, con su elegancia intrínseca y sus pétalos enigmáticos, es un símbolo de amor que despierta pasiones profundas. Cada curva de sus delicadas formas revela la promesa de un romance floreciente, mientras sus colores vivos despiertan emociones intensas en cada mirada. En el lenguaje secreto de las flores, la dalia susurra palabras de amor eterno y enciende la llama de la pasión en los corazones enamorados.</p> 
      </div>

      <div  className="contenedores">
        <img src="../src/img/girasoles2.jpg" className="img-flores" alt="Girasol"/>  
        <p  className="info" >El girasol, con su radiante esplendor y su eterna búsqueda del sol, simboliza la belleza que florece en cada mirada suya, mientras sus pétalos siguen con devoción la trayectoria del astro rey. En sus giras hacia la luz, revela un amor eterno que siempre se inclina hacia aquel que ilumina su existencia</p> 
      </div>

      </div>
      <br/>
      <FondoFlorComponent/>
      
      
    </>
  )
}



export default MyBlog

