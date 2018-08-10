import React, { Component } from "react";
import Loader from "../Loader/Loader";
import { Container, Row, Col } from "reactstrap";
import "./Article.css";
import contentEditable from "../../services/contentEditable.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Article extends Component {
  constructor(props) {
    super(props);
    this.state = {
      article: {
        id: 5294,
        title: "Articulo de pruebas",
        content: "contenido del articulo",
        lastModif: "20/06/2018",
        modifAuthor: "@John"
      },
      loading: true,
      Cont: {},
      content: "prueba",
      recibido: "hola"
    };
  }

  render() {
    let EditableH1 = contentEditable("h1");

    {
      /* el false ese es temporal */
    }

    return (
      <Container
        className="RowMain"
        style={{
          paddingRight: "25px",
          paddingLeft: "25px",
          backgroundColor: "white"
        }}
      >
        <Row>
          <Col>
            <div className="App-Article">
              {false ? (
                <Loader />
              ) : (
                <Container>
                  <Container
                    style={{ borderBottom: "1px solid rgb(238, 238, 238" }}
                  >
                    <Row className="article-heading">
                      
                        <Col xs="1" className="pl-0">
                      <FontAwesomeIcon icon="angle-right" />
                       test
                        </Col>
                       <Col>
                      <EditableH1
                        updateFS={this.props.updateFS}
                        value={this.props.activeArticle.Titulo}
                      />
                      </Col>
                    </Row>

                    <div className="article-meta">
                      {/*console.log(this.props.activeArticle)*/}

                      <p>
                        Última modificación por:{" "}
                        {this.props.activeArticle.ModifAuthor} on{" "}
                        {new Date(
                          this.state.article.lastModif.replace(" ", "T")
                        ).toDateString()}{" "}
                      </p>
                    </div>
                  </Container>

                  <div className="article-content mt-3 px-4 py-3">
                    <div
                      dangerouslySetInnerHTML={{
                        __html: this.props.activeArticle.Contenido
                      }}
                    />
                  </div>
                </Container>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default Article;
