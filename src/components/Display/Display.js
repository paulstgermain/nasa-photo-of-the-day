import React from "react";
import "../../App.css";
import styled from 'styled-components';

export default function Display(props) {
    const {date, explanation, hdurl, title} = props.podData;

    return (
        <DisplaySection className="display_section">

            <div className="display">

                <span className="display_desc">

                    <p className="title">{ title } • { date }</p>

                    <hr />

                    <p className="explanation">{ explanation }</p>

                </span>

            </div>

            <div className="pod_image">

                <img src={hdurl} alt="Nasa POD"></img>

            </div>

        </DisplaySection>
    )
}

const DisplaySection = styled.section`

  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  font-size: 62.5%;


.display {
  width: 30%;
  padding: 1.5rem;
  overflow: scroll;
}

.display::-webkit-scrollbar {
  display: none;
}

.title {
  font-size: 2.4rem;
  margin-bottom: 1.5rem;
}

.explanation {
  margin-top: 1.5rem;
  font-size: 1.6rem;
}

.pod_image {
  width: 65%;
  overflow: scroll;
}

.pod_image::-webkit-scrollbar {
  display: none;
}

.pod_image img {
  /* max-height: 100%; */
  max-width: 100%;
  object-fit: fill;
}
`