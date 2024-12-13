import React from 'react';
import FeaturedProducts from './FeaturedProducts';
import luster1 from '../assets/lusterchess.png'
const Home = () => {
    const PRODUCTS = {
        productImage: luster1, // Replace with the actual path to your image
        title: 'Example Product Title',
        description: 'Example product description goes here.',
      };
      
  return (
    
    <>
      {/* Banner Hero */}
      <div id="template-mo-zay-hero-carousel" className="carousel slide" data-bs-ride="carousel">
        <ol className="carousel-indicators">
          <li data-bs-target="#template-mo-zay-hero-carousel" data-bs-slide-to="0" className="active"></li>
          <li data-bs-target="#template-mo-zay-hero-carousel" data-bs-slide-to="1"></li>
          <li data-bs-target="#template-mo-zay-hero-carousel" data-bs-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="container">
              <div className="row p-5">
                <div className="mx-auto col-md-8 col-lg-6 order-lg-last">
                  <img className="img-fluid" src={PRODUCTS.productImage} alt="" />
                </div>
                <div className="col-lg-6 mb-0 d-flex align-items-center">
                  <div className="text-align-left align-self-center">
                    <h1 className="h1 text-success">
                        بهترین ها 
                    </h1>
                    <h3 className="h2">Tiny and Perfect eCommerce Template</h3>

                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="container">
              <div className="row p-5">
                <div className="mx-auto col-md-8 col-lg-6 order-lg-last">
                  <img className="img-fluid" src={PRODUCTS.productImage} alt="" />
                </div>
                <div className="col-lg-6 mb-0 d-flex align-items-center">
                  <div className="text-align-left">
                    <h1 className="h1">بهترین ها</h1>
                    <h3 className="h2">Aliquip ex ea commodo consequat</h3>
                    <p>
                      You are permitted to use this Zay CSS template for your commercial websites. You are
                      <strong> not permitted</strong> to re-distribute the template ZIP file in any kind of template collection websites.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="container">
              <div className="row p-5">
                <div className="mx-auto col-md-8 col-lg-6 order-lg-last">
                  <img className="img-fluid" src={PRODUCTS.productImage} alt="" />
                </div>
                <div className="col-lg-6 mb-0 d-flex align-items-center">
                  <div className="text-align-left">
                    <h1 className="h1">بهترین ها</h1>
                    <h3 className="h2">Ullamco laboris nisi ut </h3>
                    <p>
                      We bring you 100% free CSS templates for your websites. If you wish to support TemplateMo, please make a small contribution via PayPal or tell your friends about our website. Thank you.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <a className="carousel-control-prev text-decoration-none w-auto ps-3" href="#template-mo-zay-hero-carousel" role="button" data-bs-slide="prev">
          <i className="fas fa-chevron-left"></i>
        </a>
        <a className="carousel-control-next text-decoration-none w-auto pe-3" href="#template-mo-zay-hero-carousel" role="button" data-bs-slide="next">
          <i className="fas fa-chevron-right"></i>
        </a>
      </div>
      {/* Featured Product */}
      <FeaturedProducts />
        {/*End Featured Product*/}

      {/* Categories of The Month */}
      <section className="container py-5">
        <div className="row text-center pt-3">
          <div className="col-lg-6 m-auto">
            <h1 className="h1">Categories of The Month</h1>
            <p>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-4 p-5 mt-3">
            <a href="#">
              <img src="./assets/img/category_img_01.jpg" className="rounded-circle img-fluid border" alt="Category" />
            </a>
            <h5 className="text-center mt-3 mb-3">Watches</h5>
            <p className="text-center">
              <a className="btn btn-success" href="#">Go Shop</a>
            </p>
          </div>
          <div className="col-12 col-md-4 p-5 mt-3">
            <a href="#">
              <img src="./assets/img/category_img_02.jpg" className="rounded-circle img-fluid border" alt="Category" />
            </a>
            <h2 className="h5 text-center mt-3 mb-3">Shoes</h2>
            <p className="text-center">
              <a className="btn btn-success" href="#">Go Shop</a>
            </p>
          </div>
          <div className="col-12 col-md-4 p-5 mt-3">
            <a href="#">
              <img src="./assets/img/category_img_03.jpg" className="rounded-circle img-fluid border" alt="Category" />
            </a>
            <h2 className="h5 text-center mt-3 mb-3">Accessories</h2>
            <p className="text-center">
              <a className="btn btn-success" href="#">Go Shop</a>
            </p>
          </div>
        </div>
      </section>
        {/* End Categories of The Month */}

    
    
    </>
    );
};
export default Home;