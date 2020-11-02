import React from "react";

class MarvelMovie extends React.Component {
    constructor() {
        super()
        this.state = {
            error:null,
            isLoaded: false,
            marvelMovies: []
        }
        this.state= {isNotSelected: true}
        this.selectMovie = this.selectMovie.bind(this)
    }


    componentDidMount() {
      fetch('http://localhost:3093/marvelAPI')
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            marvelMovies: result.marvelMovies
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }
  
  selectMovie() {
    this.setState(state => ({
      isSelected: !state.isSelected
      }))
  }
  
  
  
    render() {

        const { err, isLoaded, marvelMovies } = this.state
        if (err) {
            return <div>Error {err.message}</div>
        }
        else if (!isLoaded) {
            return <div>Loading...</div>
        }
        else {
            return (
                <div className={this.state.isSelected ? 'selectedMovie' : 'notSelected'}
                onClick={() => {this.selectMovie()}}>
                    <img className='moviePoster' src={marvelMovies.marvelContent[this.props.id].poster} alt=''/>
                    <p className='movieStars'>{marvelMovies.marvelContent[this.props.id].stars} Stars</p>
                </div>
            )
        }
   
  }
}    
export default MarvelMovie 
  


