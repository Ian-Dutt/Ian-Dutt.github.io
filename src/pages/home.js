import React from "react";
import Row from "../components/utils/Row";
import Column from "../components/utils/Column";

export default function Home(){
    return (
      <div >
        <Row numColumns={1}>
          <Column>
          <h1 align='center'>Hello</h1>
          <div>
            On this website you will find some of the projects I have worked on, a bit about myself, and other things I am interested in.      
          </div>
          </Column>
        </Row>
        <Row numColumns={2}>
          <Column>
            <h1 align='center'>
              Projects
            </h1>
            <div>
              This is a list of the projects that I have worked on:
              <ul>
                <li>
                  Trip Planning website and server using Java and React
                </li>
                <li>
                  Company management website and server using Java, React and CSS
                </li>
                <li>
                  Solitaire
                </li>
              </ul>
            </div>
          </Column>
          <Column>
            <h1 align='center'>
              Interests
            </h1>
          </Column>
        </Row>
      </div>
    )
  }
