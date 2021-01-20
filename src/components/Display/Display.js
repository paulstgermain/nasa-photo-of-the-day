import React, { useState, useEffect } from "react";
import "../../App.css";

export default function Display(props) {
    const {date, explanation, hdurl, title} = props.podData;

    return (
        <section class="display_section">

            <div class="display">

                <span class="display_desc">

                    <p class="title">{ title } • { date }</p>

                    <hr />

                    <p class="explanation">{ explanation }</p>

                </span>

            </div>

            <div class="pod_image">

                <img src={hdurl} alt="Nasa POD"></img>

            </div>

        </section>
    )
}