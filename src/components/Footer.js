import React, { useState } from 'react';

const Footer = () => {
    const [email, setEmail] = useState('');

    const handleSubscribe = () => {
        
        console.log(`Subscribed: ${email}`);
        setEmail('');
    };

    return (
        <footer className="bg-dark" id="tempaltemo_footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 pt-5">
                        <h2 className="h2 text-success border-bottom pb-3 border-light logo">LuxLuster</h2>
                        <ul className="list-unstyled text-light footer-link-list">
                            <li>
                                <i className="fas fa-map-marker-alt fa-fw"></i>
                                تهران
                            </li>
                            <li>
                                <i className="fa fa-phone fa-fw"></i>
                                <a className="text-decoration-none" href="tel:010-020-0340">021-020-0340</a>
                            </li>
                            <li>
                                <i className="fa fa-envelope fa-fw"></i>
                                <a className="text-decoration-none" href="mailto:info@company.com">info@company.com</a>
                            </li>
                        </ul>
                    </div>

                    <div className="col-md-4 pt-5">
                        <h2 className="h2 text-light border-bottom pb-3 border-light">محصولات</h2>
                        <ul className="list-unstyled text-light footer-link-list">
                            <li><a className="text-decoration-none" href="#">لوستر دیواری</a></li>
                            <li><a className="text-decoration-none" href="#">لوستر سقفی</a></li>
                            <li><a className="text-decoration-none" href="#">چراق مطالعه</a></li>
                        </ul>
                    </div>

                    <div className="col-md-4 pt-5">
                        <h2 className="h2 text-light border-bottom pb-3 border-light">اطلاعات بیشتر</h2>
                        <ul className="list-unstyled text-light footer-link-list">
                            <li><a className="text-decoration-none" href="#">فروشگاه</a></li>
                            <li><a className="text-decoration-none" href="#">درباره ما</a></li>
                            <li><a className="text-decoration-none" href="#">مکان های فروشگاه</a></li>
                            <li><a className="text-decoration-none" href="#">سوالات متداول</a></li>
                            <li><a className="text-decoration-none" href="#">ارتباط باما</a></li>
                        </ul>
                    </div>
                </div>

                <div className="row text-light mb-4">
                    <div className="col-12 mb-3">
                        <div className="w-100 my-3 border-top border-light"></div>
                    </div>
                    <div className="col-auto me-auto">
                        <ul className="list-inline text-left footer-icons">
                            <li className="list-inline-item border border-light rounded-circle text-center">
                                <a rel="nofollow" aria-label="Facebook" className="text-light text-decoration-none" target="_blank" href="http://fb.com/templatemo"><i className="fab fa-facebook-f fa-lg fa-fw"></i></a>
                            </li>
                            <li className="list-inline-item border border-light rounded-circle text-center">
                                <a aria-label="Instagram" className="text-light text-decoration-none" target="_blank" href="https://www.instagram.com/"><i className="fab fa-instagram fa-lg fa-fw"></i></a>
                            </li>
                            <li className="list-inline-item border border-light rounded-circle text-center">
                                <a aria-label="Twitter" className="text-light text-decoration-none" target="_blank" href="https://twitter.com/"><i className="fab fa-twitter fa-lg fa-fw"></i></a>
                            </li>
                            <li className="list-inline-item border border-light rounded-circle text-center">
                                <a aria-label="LinkedIn" className="text-light text-decoration-none" target="_blank" href="https://www.linkedin.com/"><i className="fab fa-linkedin fa-lg fa-fw"></i></a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-auto">
                        <label className="sr-only" htmlFor="subscribeEmail">Email address</label>
                        <div className="input-group mb-2">
                            <input 
                                type="text" 
                                className="form-control bg-dark border-light" 
                                id="subscribeEmail" 
                                placeholder="Email address" 
                                value={email} 
                                onChange={(e) => setEmail(e.target.value)} 
                            />
                            <div className="input-group-text btn-success text-light" onClick={handleSubscribe}>
                                Subscribe
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-100 bg-black py-3">
                <div className="container">
                    <div className="row pt-2">
                        <div className="col-12">
                            <p className="text-left text-light">
                                Copyright &copy; 2021 Company Name 
                                | Designed by <a rel="sponsored" href="https://google.com" target="_blank">Aref</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
