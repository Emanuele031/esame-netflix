

import React from 'react';
import avatar from '../assets/avatar.png'; 

const ProfileForm = () => {
  return (
    <div className="card bg-black text-white p-4 rounded-3 shadow-lg mx-auto my-5" style={{ maxWidth: '600px' }}>
      <h1 className="text-center mb-4">Edit Profile</h1>
      <hr className="w-50 mx-auto text-bg-secondary" />

      <div className="d-flex justify-content-center mb-4">
        
        <div className="mr-3">
          <img src={avatar} alt="avatar" width="90px" height="90px" className='me-2'/>
        </div>
        <div className="d-flex flex-column">
          <input
            className="form-control bg-secondary text-white mb-3"
            type="text"
            value="Strive Student"
            readOnly
          />
          <p className="text-white">Language:</p>
          <div className="dropdown">
            <button
              className="btn btn-black text-white border border-white dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              English
            </button>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">Italiano</a></li>
              <li><a className="dropdown-item" href="#">Français</a></li>
              <li><a className="dropdown-item" href="#">Español</a></li>
            </ul>
          </div>
        </div>
      </div>

      <hr className="w-50 mx-auto text-bg-secondary" />

      <p className="text-white-50">Maturity Settings:</p>
      <button className="btn btn-secondary text-white w-100 mb-3" type="button">
        ALL MATURITY RATINGS
      </button>

      <p className="text-white">Show titles of <span>all maturity ratings</span> for this profile</p>
      <button className="btn btn-black text-white-50 w-100 mb-3" type="button">
        Edit
      </button>

      <hr className="w-50 mx-auto text-bg-secondary" />

      <p className="text-white-50">Autoplay Controls:</p>
      <div className="form-check text-white mb-3">
        <input className="form-check-input" type="checkbox" id="flexCheckDefault" />
        <label className="form-check-label" htmlFor="flexCheckDefault">
          Autoplay next episode in a series on all devices
        </label>
      </div>
      <div className="form-check text-white mb-3">
        <input className="form-check-input" type="checkbox" id="flexCheckChecked" checked />
        <label className="form-check-label" htmlFor="flexCheckChecked">
          Autoplay previews while browsing on all devices
        </label>
      </div>

      <hr className="w-50 mx-auto text-bg-secondary" />

      
      <div className="d-flex justify-content-between">
        <button className="btn btn-black text-white-50 border border-white-50" type="button">
          Save
        </button>
        <button className="btn btn-black text-white-50 border border-white-50" type="button">
          Cancel
        </button>
        <button className="btn btn-black text-white-50 border border-white-50" type="button">
          Delete Profile
        </button>
      </div>
    </div>
  );
};

export default ProfileForm;
