import React from "react";
import "../../App.css";
import styled from 'styled-components';

export default function Display(props) {
    const {date, explanation, hdurl, title} = props.podData;

    return (
        <DisplaySection className="display_section">

            <div className="display">

                <span className="display_desc">

                    <p className="explanation">{ explanation }</p>

                </span>

            </div>

            <div className="pod_image">

                <p className="title">{ title } • { date }</p>

                <img src={hdurl} alt="Nasa POD"></img>

            </div>

        </DisplaySection>
    )
}

const DisplaySection = styled.section`

  height: auto;
  width: 100%;
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-around;
  align-items: center;
  font-size: 62.5%;


.display {
  width: 70%;
  padding: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
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
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.pod_image::-webkit-scrollbar {
  display: none;
}

.pod_image img {
  /* max-height: 100%; */
  /* max-width: 100%; */
  width: 50%;
  object-fit: fill;
}

`