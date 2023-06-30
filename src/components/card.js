import React, { Component } from "react";
import { FaReact, FaLaravel, FaHtml5, FaCss3Alt, FaSass, FaPython, FaFigma, FaGitAlt } from "react-icons/fa";
import { DiJavascript } from "react-icons/di";
import { SiFlutter, SiArduino, SiDart, SiVisualstudiocode } from "react-icons/si";

import Tilt from "react-tilt"

import "../styles/css/card.css"

import arduino from '../svg/arduino.svg'
import css from '../svg/css.svg'
import dart from '../svg/dart.svg'
import figma from '../svg/figma.svg'
import flutter from '../svg/flutter.svg'
import git from '../svg/git.svg'
import html from '../svg/html.svg'
import javascript from '../svg/javascript.svg'
import laravel from '../svg/laravel.svg'
import python from '../svg/python.svg'
import react from '../svg/react.svg'
import sass from '../svg/sass.svg'
import vsc from '../svg/vsc.svg'

class Card extends Component {
    render() {
        let body;
        let smallIcon;
        let largeIcon;

        switch(this.props.letter){
            case "L":
                smallIcon = <FaLaravel size="30" />
                largeIcon = <img src={laravel} alt="" height="90" width="auto"/>
                break;
            case "H":
                smallIcon = <FaHtml5 size="30" />
                largeIcon = <img src={html} alt="" height="90" width="auto"/>
                break;
            case "R":
                smallIcon = <FaReact size="30" />
                largeIcon = <img src={react} alt="" height="90" width="auto"/>
                break;
            case "C":
                smallIcon = <FaCss3Alt size="30" />
                largeIcon = <img src={css} alt="" height="90" width="auto"/>
                break;
            case "S":
                smallIcon = <FaSass size="30" />
                largeIcon = <img src={sass} alt="" height="90" width="auto"/>
                break;
            case "J":
                smallIcon = <DiJavascript size="30" />
                largeIcon = <img src={javascript} alt="" height="90" width="auto"/>
                break;
            case "F":
                smallIcon = <SiFlutter size="30" />
                largeIcon = <img src={flutter} alt="" height="90" width="auto"/>
                break;
            case "A":
                smallIcon = <SiArduino size="30" />
                largeIcon = <img src={arduino} alt="" height="90" width="auto"/>
                break;
            case "D":
                smallIcon = <SiDart size="30" />
                largeIcon = <img src={dart} alt="" height="90" width="auto"/>
                break;
            case "P":
                smallIcon = <FaPython size="30" />
                largeIcon = <img src={python} alt="" height="90" width="auto"/>
                break;
            case "G":
                smallIcon = <FaGitAlt size="30" />
                largeIcon = <img src={git} alt="" height="90" width="auto"/>
                break;
            case "FG":
                smallIcon = <FaFigma size="30" />
                largeIcon = <img src={figma} alt="" height="90" width="auto"/>
                break;
            case "V":
                smallIcon = <SiVisualstudiocode size="30" />
                largeIcon = <img src={vsc} alt="" height="90" width="auto"/>
                break;
        }

        if (window.innerWidth > 768){
           body = 
                <Tilt className="card" options={{ scale: 1 }}>
                    <section className="card__upper">
                        <p className="text">{this.props.letter}</p>
                        {smallIcon}
                    </section>
                    <section className="card__middle">
                        <p className="card__middle__before" style={{ color: this.props.color}}>{this.props.content}</p>
                        <p className="card__middle__after" style={{color: this.props.color}}>{this.props.content}</p>
                        {largeIcon}
                        <h2 style={{ color: this.props.color}}>{this.props.name}</h2>
                    </section>
                    <section className="card__bottom">
                        <p className="text">{this.props.letter}</p>
                        {smallIcon}
                    </section>
                </Tilt> 
        } else {
            body =
                <div className="card">
                    <section className="card__upper">
                        <p className="text">{this.props.letter}</p>
                        {smallIcon}
                    </section>
                    <section className="card__middle">
                        <p className="card__middle__before" style={{ color: this.props.color}}>{this.props.content}</p>
                        <p className="card__middle__after" style={{color: this.props.color}}>{this.props.content}</p>
                        {largeIcon}
                        <h2 style={{ color: this.props.color}}>{this.props.name}</h2>
                    </section>
                    <section className="card__bottom">
                        <p className="text">{this.props.letter}</p>
                        {smallIcon}
                    </section>
                </div>
        }

        return(
            body
        )
    }
}

export default Card;