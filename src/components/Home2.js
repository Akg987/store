import React from 'react';
import { Link } from 'react-router-dom';
import FeaturedProducts from '../context/FeaturedProducts2';
import luster1 from '../assets/lusterchess.png';

const Home = () => {
    const PRODUCTS = [
        {
            id: 1,
            productImage: luster1, // Replace with the actual path to your image
            title: 'Example Product Title',
            description: 'Example product description goes here.',
            price: 100000,
        },
        // Add more products if needed
    ];

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
                                    <img className="img-fluid" src={PRODUCTS[0].productImage} alt="" />
                                </div>
                                <div className="col-lg-6 mb-0 d-flex align-items-center">
                                    <div className="text-align-left align-self-center">
                                        <h1 className="h1 text-success">
                                            بهترین ها
                                        </h1>
                                        <h3 className="h2">زیبا و ارزان</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="container">
                            <div className="row p-5">
                                <div className="mx-auto col-md-8 col-lg-6 order-lg-last">
                                    <img className="img-fluid" src={PRODUCTS[0].productImage} alt="" />
                                </div>
                                <div className="col-lg-6 mb-0 d-flex align-items-center">
                                    <div className="text-align-left">
                                        <h1 className="h1">بهترین ها</h1>
                                        <h3 className="h2">لوستر شیشه ای</h3>
                                        <p>
                                            مخصوص خانه های بزرگ
                                            <strong> از جنس شیشه با طراحی مدرن</strong>
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
                                    <img className="img-fluid" src={PRODUCTS[0].productImage} alt="" />
                                </div>
                                <div className="col-lg-6 mb-0 d-flex align-items-center">
                                    <div className="text-align-left">
                                        <h1 className="h1">بهترین ها</h1>
                                        <h3 className="h2">لوستر دیواری</h3>
                                        <p>
                                           ٪تخفیف ۴۵
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
            {/* End Featured Product */}

            {/* Categories of The Month 
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
                    {PRODUCTS.map((product) => (
                        <div key={product.id} className="col-12 col-md-4 p-5 mt-3">
                            <Link to={`/shop/${product.id}`}>
                                <img src={product.productImage} className="rounded-circle img-fluid border" alt={product.title} />
                            </Link>
                            <h5 className="text-center mt-3 mb-3">{product.title}</h5>
                            <p className="text-center">
                                <span className="text-muted">{product.price.toLocaleString()} تومان</span>
                            </p>
                        </div>
                    ))}
                </div>
            </section>
             End Categories of The Month */}
        </>
    );
};

export default Home;
