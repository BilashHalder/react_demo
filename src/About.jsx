import React from 'react'
import aboutimg from './image/about.svg';
import './About.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
export default function About() {
    return (
        <div>
          <div className="about-me container">

<div className="section-title">
  <h2>About</h2>
  <p>Learn more about me</p>
</div>

<div className="row about">
  <div className="col-3 " data-aos="fade-right">
    <img src={aboutimg} className="img-responsive" alt=""/>
  </div>
  <div className="col-9 pt-4 pt-lg-0 " data-aos="fade-left">
    <h1 className="abouttit">UI/UX &amp; Full Stack Web Developer</h1>
    <p className="fst-italic">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua.
    </p>
    <div className="row">
      <div className="col-lg-6">
        <ul className="list-group list-group-flush">
          <li className="list-group-item"><FontAwesomeIcon icon={faArrowRight} /> <strong>Birthday:</strong> <span>11 Aug 1993</span></li>
          <li  className="list-group-item"><FontAwesomeIcon icon={faArrowRight} /> <strong>Website:</strong> <span>www.bilashhalder.github.io</span></li>
          <li  className="list-group-item"><FontAwesomeIcon icon={faArrowRight} /> <strong>Phone:</strong> <span>+91 960 932 74 24</span></li>
          <li  className="list-group-item"><FontAwesomeIcon icon={faArrowRight} /> <strong>City:</strong> <span>Kolkata ,West Bengal ,India</span></li>
        </ul>
      </div>
      <div className="col-lg-6">
        <ul className="list-group list-group-flush">
          <li className="list-group-item"><FontAwesomeIcon icon={faArrowRight} /> <strong>Age:</strong> <span>28+</span></li>
          <li className="list-group-item"><FontAwesomeIcon icon={faArrowRight} /> <strong>Degree:</strong> <span>Master</span></li>
          <li className="list-group-item"><FontAwesomeIcon icon={faArrowRight} /> <strong>PhEmailone:</strong> <span>ibilashhalder@gmail.com</span></li>
          <li className="list-group-item"><FontAwesomeIcon icon={faArrowRight} /> <strong>Freelance:</strong> <span>Available</span></li>
        </ul>
      </div>
    </div>
    <a>
      Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor incidunt officia tempore. Et eius omnis.
      Cupiditate ut dicta maxime officiis quidem quia. Sed et consectetur qui quia repellendus itaque neque. Aliquid amet quidem ut quaerat cupiditate. Ab et eum qui repellendus omnis culpa magni laudantium dolores.
    </a>
  </div>
</div>



    <div class="row">
        <h2>My Skills</h2>
        <hr />
        <br />
        <div class="col-3 col-xs-6">
            <div class="progress blue">
                <span class="progress-left">
                    <span class="progress-bar"></span>
                </span>
                <span class="progress-right">
                    <span class="progress-bar"></span>
                </span>
                <div class="progress-value">90%</div>
            </div>
        </div>
        <div class="col-md-3 col-sm-6">
            <div class="progress yellow">
                <span class="progress-left">
                    <span class="progress-bar"></span>
                </span>
                <span class="progress-right">
                    <span class="progress-bar"></span>
                </span>
                <div class="progress-value">75%</div>
            </div>
        </div>
        <div class="col-md-3 col-sm-6">
            <div class="progress pink">
                <span class="progress-left">
                    <span class="progress-bar"></span>
                </span>
                <span class="progress-right">
                    <span class="progress-bar"></span>
                </span>
                <div class="progress-value">75%</div>
            </div>
        </div>
        <div class="col-md-3 col-sm-6">
            <div class="progress green">
                <span class="progress-left">
                    <span class="progress-bar"></span>
                </span>
                <span class="progress-right">
                    <span class="progress-bar"></span>
                </span>
                <div class="progress-value">75%</div>
            </div>
        </div>
        <div class="col-md-3 col-sm-6">
            <div class="progress yellow">
                <span class="progress-left">
                    <span class="progress-bar"></span>
                </span>
                <span class="progress-right">
                    <span class="progress-bar"></span>
                </span>
                <div class="progress-value">75%</div>
            </div>
        </div>

        <div class="col-md-3 col-sm-6">
            <div class="progress yellow">
                <span class="progress-left">
                    <span class="progress-bar"></span>
                </span>
                <span class="progress-right">
                    <span class="progress-bar"></span>
                </span>
                <div class="progress-value">45%</div>
            </div>
        </div>
    </div>


</div>
        </div>
    )
}
