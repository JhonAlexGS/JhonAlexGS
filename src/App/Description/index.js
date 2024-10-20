import { FaDatabase } from "react-icons/fa";
import { MdWebAsset } from "react-icons/md";
import { IoIosRadio } from "react-icons/io";
import { MdOutlineSecurity } from "react-icons/md";
import { GiArtificialIntelligence } from "react-icons/gi";
import { SiFrontendmentor } from "react-icons/si";
import { FaUser } from "react-icons/fa";
import { GrCloudSoftware } from "react-icons/gr";
import myCat0 from '../img/Gato_0.png';
import myCat1 from '../img/Gato_1.png';
import myCat2 from '../img/Gato_2.png';
import React from 'react';
import './Description.css'

const Description = () =>{

    const [stateCatEyes, setstateCatEyes] = React.useState(0);

    const handleButtonClick = () => {
        window.location.href = 'https://drive.google.com/file/d/1xZKCOz2Z3gX3bMfDuXPVs_5z8l4aDzpi/view?usp=sharing';
        };

    const catEyes = [
        myCat0, myCat1, myCat2
    ]

    const catSize = [
        ["100px","100px"], ["100px","100px"], ["100px","100px"]
    ]

    return (

        <div className='description shadow-box'>

            <div id="cardCat" class="centerXY">
                <img id="imgCat" className='circleEdge' 
                    style={{
                        height:catSize[stateCatEyes][0],
                        width:catSize[stateCatEyes][1]
                    }} 
                    alt="Cat" src={catEyes[stateCatEyes]}  
                    onClick={
                        () => {
                            if (stateCatEyes === 2) {
                                setstateCatEyes(0)
                            }else{
                                setstateCatEyes(stateCatEyes+1)
                            }
                            
                        }
                    }/>
                <div class="button_slide slide_left buttonCV" onClick={handleButtonClick}>
                    <h1>CV</h1>
                </div>
            </div>
            
            <div id="aboutMe" class="centerY broad">
                <div className="not-affected">
                    <h2 className='rowdies-light'>
                        Ingeniero de Sistemas y Telecomunicaciones
                    </h2>
                    <hr></hr>
                    <hr></hr>
                </div>
                
                <p class="smallText">
                    <br></br>
                    Mi nombre es Jhon Alexander García Sierra, 
                    <br></br><br></br>
                    Soy ingeniero de sistemas con 2 años de experiencia profesional en áreas de la tecnología. Tengo un gran interés en múltiples campos como redes <GiArtificialIntelligence />, bases de datos <FaDatabase />, desarrollo web <MdWebAsset />, radio definida por software <IoIosRadio />, arquitectura de software <GrCloudSoftware />, diseño de experiencia de usuario <FaUser />, seguridad de la información e inteligencia artificial <MdOutlineSecurity />. 
                    <br></br><br></br>
                    Además, poseo habilidades tanto en el desarrollo de back-end como de front-end, <SiFrontendmentor /> lo que me permite ofrecer soluciones completas y eficientes en los proyectos que lidero.

                </p>
            </div>
        </div>

    )

}

export default Description ;