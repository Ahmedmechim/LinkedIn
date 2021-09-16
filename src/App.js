import NavBar from "./Components/NavBar";
import Profil from "./Components/Profil";
import FilActualite from "./Components/FilActualite";
import { Container, Row, Col } from "react-grid-system";
import "./App.css";
import Post from "./Components/Post";
import Suggestion from "./Components/Suggestion";

function App() {
  const coordonnees = [
    {
      avatar:
        "https://media-exp1.licdn.com/dms/image/C4D0BAQE5WFFfV9G4uQ/company-logo_200_200/0/1578990022474?e=1639612800&v=beta&t=Of5xlaqKI2zPVVfxS3qfLFZXKcak8cJukkPpDBysCp8",
      name: "Cabinet SILVERT",
      discreption: "748 abonnés",
      message:
        "Maitrise d’œuvre démolition/desamiantage en collaboration BET Pitscheider / Cabinet Silvert pour cette tour R+10 à Thuir (66)",
      pub: "https://media-exp1.licdn.com/dms/image/C5622AQF_Ecb4nwKBgg/feedshare-shrink_800/0/1619642086791?e=1634169600&v=beta&t=gksiCPppNg8JSg8V_QF7Wm-_JKPSSN-D6mct-UeoufE",
    },
    {
      avatar:
        "https://media-exp1.licdn.com/dms/image/C560BAQHXEt6oDGZJNQ/company-logo_200_200/0/1559225265524?e=1639612800&v=beta&t=-RcI4b5GeMjb1xbHf0YlKLheV6BNtYdzGLFOEUM_RGg",
      name: "STUDI International",
      discreption: "13 088 abonnés",
      message:
        "STUDI International conforte son rang dans les 100 premiers du classement ENR (Engineering News Record), une référence mondiale dans le secteur de l’ingénierie, en gagnant 6 places par rapport à l’an dernier.",
      pub: "https://media-exp1.licdn.com/dms/image/C4E22AQEGJO_NgrdiOA/feedshare-shrink_800/0/1627989276511?e=1634169600&v=beta&t=47eTEOkmrhHSC3UepanHXJbZadQ7Bl6nFX8nYKykW-4",
    },
    {
      avatar:
        "https://media-exp1.licdn.com/dms/image/C4D0BAQHzzZvz4EjwRA/company-logo_200_200/0/1611051287135?e=1639612800&v=beta&t=7kivc1BI1HtFOEIzDJkrX-fsRDbArn4ikvtQbNJMJQM",
      name: "PERI",
      discreption: "133 796 abonnés",
      message:
        "El proyecto Vía Pamplona-Cúcuta, es la obra de infraestructura vial más importante del departamento de Norte de Santander en Colombia.",
      pub: "https://media-exp1.licdn.com/dms/image/C5622AQHoi2zR9lXLQw/feedshare-shrink_2048_1536/0/1631121212271?e=1634169600&v=beta&t=eLmmmVM2PYxIK84Idttt67eNPSEbvWT6MosgPHzOeMY",
    },
    {
      avatar:
        "https://media-exp1.licdn.com/dms/image/C4E0BAQEqgrsz0y-0MQ/company-logo_200_200/0/1589094578342?e=1639612800&v=beta&t=tZ24d5Y4hwV0M2pEQ6FRCCxmUy1ebZvhPU1TnZeEvsY",
      name: "Web Developer",
      discreption: "45 368 abonnées",
      message: "",
      pub: "https://media-exp1.licdn.com/dms/image/C4D22AQGpDxwZmxXSBg/feedshare-shrink_800/0/1629443633492?e=1634169600&v=beta&t=Y4l5eQnjsLfmWEe80Ap34lZDAlF7R16KaLha2pTXI20",
    },
    {
      avatar:
        "https://media-exp1.licdn.com/dms/image/C4E0BAQFz8MiI_EVUxg/company-logo_200_200/0/1519893511699?e=1639612800&v=beta&t=GeXIL-1QtVlmjAq7LRYg2UU5uGYTblV-0r-ozzKex_E",
      name: "Novaway",
      discreption: "539 abonnés",
      message:
        "L'été touche à sa fin et les nouveaux projets sont de retour👨‍🏫 Pour relever les défis à venir, on renforce notre équipe lyonnaise avec 2 postes en #CDI",
      pub: "https://media-exp1.licdn.com/dms/image/C4E22AQH1gAz1sPWkjA/feedshare-shrink_800/0/1631027551466?e=1634169600&v=beta&t=AhfDPvfWoFVtLsdvSYe5Qhuzw2eKOEVdg78cKd3L8iw",
    },
  ];
  const suggestions = [
    {
      avatar:
        "https://media-exp1.licdn.com/dms/image/C4D0BAQHvtqQvbthlwg/company-logo_200_200/0/1619260902645?e=1639612800&v=beta&t=QirifJmde8I2zFkpKuFPaFRJnn-h64zI5iFjDfCBxCw",
      name: "emploi france",
      discreption: "Entreprise de recrutement",
      
    },{
      avatar:
        "https://media-exp1.licdn.com/dms/image/C4D0BAQETZvoKhsnh4Q/company-logo_200_200/0/1613574806430?e=1639612800&v=beta&t=ZshQLQY1KjoLVWJIm8zhkybnktfxplMV4cJzPe27H5w",
      name: "Québec International",
      discreption: "Entreprise de Commerce et développement international",
      
    },{
      avatar:
        "https://media-exp1.licdn.com/dms/image/C560BAQHE-x8NL3nYtA/company-logo_200_200/0/1543956297971?e=1639612800&v=beta&t=uGhdULZQJtfxnc_44hKRMMozaBGLCTHWIezR96cEjug",
      name: "Québec en tête",
      discreption: "Entreprise de recrutement",
      
    },
  ];
  return (
    <div className="App">
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.15.4/css/all.css"
        integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm"
        crossorigin="anonymous"
      ></link>

      <NavBar />

      <div>
        <Container>
          <Row>
            <Col sm={2.5}>
              <Profil />
            </Col>
            <Col sm={6}>
              <FilActualite />
              <Post coordonnees={coordonnees} />
            </Col>
            <Col sm={3.5}>
              <Suggestion suggestions={suggestions}/>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default App;
