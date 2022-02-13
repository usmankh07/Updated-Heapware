import React from 'react';
import face1 from "../../images/face1.jpg"
import face2 from "../../images/face2.jpg"
import face3 from "../../images/face3.jpg"
import face4 from "../../images/face4.jpg"
import face5 from "../../images/face5.jpg"
import face6 from "../../images/face6.jpg"

function Team3() {

    return <>
        <div className="team3">
            <div className="teamimages">
                <div className="teamimage1">
                    <div className="face_image" >
                        <img src={face1} alt="" />
                        {/* Hover Effect on People Images */}
                        <div className="hover_effect">
                            <div className="hover_icons">

                                <i class="fab fa-facebook"></i>
                                <i class="fab fa-instagram"></i>
                                <i class="fab fa-linkedin"></i>
                            </div>

                        </div>
                    </div>
                    <h3>Qaisar</h3>
                    <p>Web Developer</p>
                </div>
                <div className="teamimage1">
                    <div className="face_image">
                        <img src={face2} alt="" />
                        {/* Hover Effect on People Images */}
                        <div className="hover_effect">
                            <div className="hover_icons">

                                <i class="fab fa-facebook"></i>
                                <i class="fab fa-instagram"></i>
                                <i class="fab fa-linkedin"></i>
                            </div>

                        </div>
                    </div>
                    <h3>Qaisar</h3>
                    <p>Web Developer</p>
                </div>
                <div className="teamimage1">
                    <div className="face_image">
                        <img src={face3} alt="" />
                        {/* Hover Effect on People Images */}
                        <div className="hover_effect">
                            <div className="hover_icons">

                                <i class="fab fa-facebook"></i>
                                <i class="fab fa-instagram"></i>
                                <i class="fab fa-linkedin"></i>
                            </div>

                        </div>
                    </div>
                    <h3>Qaisar</h3>
                    <p>Web Developer</p>
                </div>
                <div className="teamimage1">
                    <div className="face_image">
                        <img src={face4} alt="" />
                        {/* Hover Effect on People Images */}
                        <div className="hover_effect">
                            <div className="hover_icons">

                                <i class="fab fa-facebook"></i>
                                <i class="fab fa-instagram"></i>
                                <i class="fab fa-linkedin"></i>
                            </div>

                        </div>
                    </div>
                    <h3>Qaisar</h3>
                    <p>Web Developer</p>
                </div>
                <div className="teamimage1">
                    <div className="face_image">
                        <img src={face5} alt="" />
                        {/* Hover Effect on People Images */}
                        <div className="hover_effect">
                            <div className="hover_icons">

                                <i class="fab fa-facebook"></i>
                                <i class="fab fa-instagram"></i>
                                <i class="fab fa-linkedin"></i>
                            </div>

                        </div>
                    </div>
                    <h3>Usman</h3>
                    <p>Web Developer</p>
                </div>
                <div className="teamimage1">
                    <div className="face_image">
                        <img src={face6} alt="" />
                        {/* Hover Effect on People Images */}
                        <div className="hover_effect">
                            <div className="hover_icons">

                                <i class="fab fa-facebook"></i>
                                <i class="fab fa-instagram"></i>
                                <i class="fab fa-linkedin"></i>
                            </div>

                        </div>
                    </div>

                    <h3>Umer</h3>
                    <p>Web Developer</p>
                </div>
            </div>
        </div>
    </>;
}

export default Team3;
