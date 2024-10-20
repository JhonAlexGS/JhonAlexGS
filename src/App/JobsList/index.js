import React from 'react';
import './Description.css'

const Description = () => {

  // const [stateCatEyes, setstateCatEyes] = React.useState(0);

  // const handleButtonClick = () => {
  //     window.location.href = 'https://drive.google.com/file/d/1xZKCOz2Z3gX3bMfDuXPVs_5z8l4aDzpi/view?usp=sharing';
  //     };

  const items = [

    {
      image: "https://companieslogo.com/img/orig/9613.T-dd7e06a3.png?t=1720244490",
      image_width: "110px",
      image_height: "300px",
      name: "NTT Data",
      description: "Multinacional especializada en servicios de consultoría tecnológica con sede en Tokio, que continúa sumando territorios en los que seguir innovando a través de las tecnologías emergentes, con el objetivo de desarrollar proyectos innovadores que contribuyan a mejorar la vida de las personas.",
      rol: "Programador Full Stack",
      functions: ["Desarrollo, revisión y supervisión de la funcionalidad y entrenamiento de las nuevas funcionalidades que ofrece el Chatbot de la compañía Zurich."],
      ingreso: "Ene-2022",
      skills: ["Python", "Control de calidad"]
    },
    {
      image: "https://www.usergioarboleda.edu.co/wp-content/uploads/2017/03/cropped-U-SERGIOV11-295x220.png",
      name: "Universidad Sergio Arboleda",
      image_width: "110px",
      // image_height: "600px",
      description: "Plataforma que permite a estudiantes, profesores e investigadores disfrutar, compartir y recomendar material bibliográfico, apuntes académicos, artículos y vídeos, para facilitar la comprensión de diferentes temas o clases.",
      rol: "Monitor y centro de apoyo",
      functions: ["Asistencia de programación y desarrollo en proyectos de máquinas virtuales de oracle, páginas web y SQL  como Monitor de MisionTic."],
      ingreso: "Jul-2022",
      skills: ["Java", "Spring Boot", "Autenticación"]
    },
    {
      image: "https://software.uniandes.edu.co/wp-content/uploads/2021/02/Logo-booklick-FINAL-1.png",
      image_width: "110px",
      // image_height: "600px",
      name: "Booklick",
      description: "Plataforma que permite a estudiantes, profesores e investigadores disfrutar, compartir y recomendar material bibliográfico, apuntes académicos, artículos y vídeos, para facilitar la comprensión de diferentes temas o clases.",
      rol: "Full Stack Developer",
      functions: [
        "Programador y desarrollador en diferentes plataformas de bases de datos como MongoDB, PhpMyAdmin, MySQLProssgres usando lenguajes Python y Typescript empleando servicios de AWS.",
        "Gestor estadístico de bases de datos que mediante el uso de Power BI fomentaba el uso que tenían los usuarios frente a los servicios que ofrecía la plataforma Booklick.",
        "Gestionar e integrar recursos al buscador usando Postgress, Elastic Search."
      ],
      ingreso: "Enero-2023",
      skills: ["Python", "JavaScript", "Nest","PowerBi", "PostgreSQL"]
    },
    {
      image: "https://media.licdn.com/dms/image/v2/D4E0BAQGT6RAYLDTltg/company-logo_200_200/company-logo_200_200/0/1666032192176/coally_logo?e=2147483647&v=beta&t=wLCQGyYZx-WJUwyTzS394WOKP2AGsLlKMHuQgrPtesM",
      name: "Coally",
      image_width: "110px",
      // image_height: "600px",
      description: "Plataforma que permite a estudiantes, profesores e investigadores disfrutar, compartir y recomendar material bibliográfico, apuntes académicos, artículos y vídeos, para facilitar la comprensión de diferentes temas o clases.",
      rol: "Monitor y centro de apoyo",
      functions: ["Asistencia de programación y desarrollo en proyectos de máquinas virtuales de oracle, páginas web y SQL  como Monitor de MisionTic."],
      ingreso: "Oct-2024",
      skills: ["JavaScript", "MongoDb", "Autenticación"]
    }

  ];

  return (
    <div className='TableJobs shadow-box'>

      <h1 id="TitleSupport">Empresas apoyadas</h1>      
      <hr></hr>
      <br></br>

      <p>Durante mi trayectoria profesional, he tenido la oportunidad de trabajar en diversas empresas, donde he desempeñado mis habilidades y, al mismo tiempo, he aprendido nuevas competencias. Estas experiencias me han permitido crecer tanto personal como profesionalmente, adaptándome a diferentes entornos y desafíos.</p>

      {items.map(item => (
        <div className='descriptionJobs'>

          <div id="cardJobs">
            <img id="logoJob" alt="NttData" style={{height:item.image_height, width:item.image_width}} src={item.image} />
            {/* <div class="button_slide slide_left" onClick={handleButtonClick}>CV </div> */}
          </div>

          <div class="broad">

            <div className="not-affected">
              <p id="date">"Ingreso: {item.ingreso}"</p>
              <h2 className='rowdies-light'>{item.name}</h2>
              <hr></hr>
              <hr></hr>
            </div>

            <br></br>

            <p class="smallText"> {item.description} </p>

            <br></br>

            <p><b>Cargo desempeñado:</b> {item.rol} </p>

            <br></br>

            <p><b>Función:</b> </p>

            <br></br>

            <ul id="adquiredJobs">
              {item.functions.map((skill) => (
                <li>{skill}</li>
              ))}
            </ul>

            <br></br>

            <h3>Habilidades adquiridas:</h3>

            <br></br>

            <ul id="acquiredSkills">
              {item.skills.map((skill) => (
                <li>{skill}</li>
              ))}
            </ul>

          </div>
        </div>

      ))}

    </div>
  );

}

export default Description;