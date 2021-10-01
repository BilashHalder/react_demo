import React from 'react'
import banner from './image/home.svg';
import './Home.css'
export default function Home() {
    return (
        <>
            <section className="d-flex align-items-center">
                <div className="container-fluid nav_bg">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="hrow">
                            <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1">
                                <h1>
                                    Well Come to <fb className="brand-name"><b>My Proftfolio</b></fb>
                                </h1>
                                <h2 className="my-3 at-item">
                                    i am Full Stack <b>Web Developer</b>
                                </h2>
                                <div className="my-3">
                                    <a href="www.goole.com" className="btn btn-primary">My Resume</a>
                                </div>
                            </div>
                            <div className="col-lg-6 order-1 order-lg-2 header-img" >
                                <img src={banner} alt="" className="img-fluid zoomInLeft"/>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
