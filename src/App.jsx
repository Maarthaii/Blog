import { Component } from 'react';
import './App.css';
import List from './components/List/List';
import Info from './components/Info/Info';
import Background from './components/Background/Background'




export default class App extends Component {

  constructor () {
    super();
    this.state = {
      backgroundURL: '/img/girasoles1.jpg',
      infoText: `El girasol, con su radiante esplendor y su eterna búsqueda del sol, simboliza la belleza que florece en cada mirada suya, mientras sus pétalos siguen con devoción la trayectoria del astro rey. En sus giras hacia la luz, revela un amor eterno que siempre se inclina hacia aquel que ilumina su existencia`
    }


    this.setBackground = this.setBackground.bind(this)
    this.setText = this.setText.bind(this)
  }

  setBackground (newURL) {
    this.setState({
      backgroundURL: newURL
    })
  }
  setText (newText) {
    this.setState({
      infoText: newText
    })
  }

  render() {
    return (
      <>
        <div className='App'>
          <Background url={this.state.backgroundURL} />
          <Info text={this.state.infoText}/>
          <List setBackground={this.setBackground} setText={this.setText}></List>
        </div>
      </>
    )
  } 
}


