import React from 'react';
import Navbar from './Component/Navbar';
import Gallery from './Component/Gallery';
import Footer from './Component/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

class App extends React.Component {
  render() {
    return (
      <div style={{ backgroundColor: '#221f1f', minHeight: '100vh' }}>
        <Navbar />
        
        
        <div className="container-fluid px-4">
          <div className="d-flex justify-content-between text-white">
            <div className="d-flex">
              <h2 className="mb-4">TV Shows</h2>
              <div className="btn-group" role="group">
                <div className="dropdown ms-4 mt-1">
                  <button
                    type="button"
                    className="btn btn-secondary btn-sm dropdown-toggle rounded-0"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    style={{ backgroundColor: '#221f1f' }}
                  >
                    Genres
                  </button>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Comedy</a></li>
                    <li><a className="dropdown-item" href="#">Drama</a></li>
                    <li><a className="dropdown-item" href="#">Thriller</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='me-2 d-flex'>
              <i className="bi bi-grid icons mx-3 d-none d-md-block"></i>
              <i className="bi bi-grid-3x3 icons d-none d-md-block"></i>
            </div>
          </div>
        </div>
        
        
        <Gallery title="Trending Now" searchQuery="Harry Potter" />
        <Gallery title="Watch it Again" searchQuery="Lord of the Rings" />
        <Gallery title="New Releases" searchQuery="Star Wars" />
        
        <Footer />
      </div>
    );
  }
}

export default App;

