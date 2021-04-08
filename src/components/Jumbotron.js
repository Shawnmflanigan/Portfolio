import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import profile from "../Assets/profileImage.png";

function Jumbotron() {
    return (
        <div class="container margin-left">
            <div class="card">
                <div class="card-header">About Me</div>

                <div class="card-body">
                    <div class="row">
                        <div class="col-s-5 mx-auto d-block">
                            <img src={profile} />
                        </div>
                        <div class="col-s-12">
                            <p>Current student at the University of Oregon's full stack web development coding bootcamp. I
                            graduated from Reed College in 2012 with a degree in Political Science.
                        </p>

                            <p>After a few years working in sales I took the leap to web development and haven't looked back
                            since.</p>

                            <p>I currently live in Portland, Oregon with my wonderful partner, three beautiful children, and
                            our spitfire cat</p>
                        </div>
                    </div>
                    <a href="https://github.com/shawnmflanigan">
                        <FontAwesomeIcon icon="linkedin" />
                    </a>
                    <a href="https://linkedin.com/in/shawnmflanigan">
                        <i class="fab fa-linkedin fa-lg"></i>
                    </a>
                    <a href="mail:to theshawns@gmail.com">
                        <i class="fa fa-envelope fa-lg"></i>
                    </a>
                    <a href="./assets/resume.pdf">
                        <i class="fa fa-file fa-lg" aria-hidden="true"></i>
                    </a>



                </div>
            </div>
        </div>
    )
}

export default Jumbotron;
