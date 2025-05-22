import React from 'react';
import { Link } from 'react-router-dom';
import './Category.css';
import img1 from './eve2.jpg';
import img2 from './R.jpg';
import img3 from './fash.jpeg';

function Category() {
  return (
    <div className="ctg-bg">
      <div className="ctg-main">
        <h1>Categories</h1>
      </div>

      <div className="ctg-name">
        <Link to="/Category-Page/Fashion">Fashion</Link>
        <Link to="/Category-Page/Travel">Travel</Link>
        <Link to="/Category-Page/Food">Food</Link>
        <Link to="/Category-Page/Pets">Pets</Link>
        <Link to="/Category-Page/Lifestyle">Lifestyle</Link>
        <Link to="/Category-Page/Technology">Technology</Link>
      </div>


      <div className="ctg-trnds">
        <h1>Trending Now</h1>
      </div>

      <div className="row cards-row">
        <div className="col-4">
          <div className="card">
            <img src={img1} className="card-img" alt="Travel" />
            <div className="card-body">
              <Link to="/Category-Page/Travel" className="btn-category travel">Travel</Link>
            </div>
          </div>
        </div>

        <div className="col-4">
          <div className="card">
            <img src={img2} className="card-img" alt="Food" />
            <div className="card-body">
              <Link to="/Category-Page/Food" className="btn-category food">Food</Link>
            </div>
          </div>
        </div>

        <div className="col-4">
          <div className="card">
            <img src={img3} className="card-img" alt="Fashion" />
            <div className="card-body">
              <Link to="/Category-Page/Fashion" className="btn-category fashion">Fashion</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Category;
