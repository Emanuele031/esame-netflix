
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Loader from './Loader';
import Alert from './Alert';

class Gallery extends React.Component {
  state = {
    movies: [],
    isLoading: true,
    error: null,
  };

  fetchMovies = () => {
    const { searchQuery } = this.props;
    fetch(`http://www.omdbapi.com/?apikey=e9692a7c&s=${searchQuery}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('La risposta della rete non è stata corretta');
        }
        return response.json();
      })
      .then((data) => {
        if (data.Response === 'True' && data.Search) {
          this.setState({ movies: data.Search, isLoading: false });
        } else {
          this.setState({ error: data.Error || 'Nessun film trovato', isLoading: false });
        }
      })
      .catch((err) => {
        this.setState({ error: err.message, isLoading: false });
      });
  };

  componentDidMount() {
    this.fetchMovies();
  }

  render() {
    const { title } = this.props;
    const { movies, isLoading, error } = this.state;

    const displayedMovies = movies.slice(0, 6);

    return (
      <div className="my-4">
        {isLoading ? (
          <Loader />
        ) : error ? (
          <Alert message={error} />
        ) : (
          <div className='px-4'>
            
            <h4 className="text-light">{title}</h4>
            <div id="movieCarousel" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="row row-cols-1 row-cols-sm-3 row-cols-md-4 row-cols-lg-6 g-4">
                    {displayedMovies.map((movie) => (
                      <div key={movie.imdbID} className="col">
                        <div className="card shadow-sm border-0">
                          <img
                            className="card-img-top img-fluid rounded-3"
                            src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/400x600.png?text=No+Image'}
                            alt={movie.Title}
                            style={{
                              objectFit: 'cover',
                              height: '300px',
                              width: '100%',
                              borderRadius: '0',
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#movieCarousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#movieCarousel" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Gallery;
