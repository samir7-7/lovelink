import React from 'react';
import './selectgender.css'

function Selectgender() {
  return (
    <div class="selectgender-container">
            <div class="select-btn">
                <span class="btn-text">Select Language</span>
                <span class="arrow-dwn">
                    <i class="fa-solid fa-chevron-down"></i>
                </span>
            </div>
            <ul class="list-items">
                <li class="selectgender-item">
                    <span class="checkbox">
                        <i class="fa-solid fa-check check-icon"></i>
                    </span>
                    <span class="item-text">HTML & CSS</span>
                </li>
                <li class="selectgender-item">
                    <span class="checkbox">
                        <i class="fa-solid fa-check check-icon"></i>
                    </span>
                    <span class="item-text">Bootstrap</span>
                </li>
                <li class="selectgender-item">
                    <span class="checkbox">
                        <i class="fa-solid fa-check check-icon"></i>
                    </span>
                    <span class="item-text">JavaScript</span>
                </li>
                <li class="selectgender-item">
                    <span class="checkbox">
                        <i class="fa-solid fa-check check-icon"></i>
                    </span>
                    <span class="item-text">Node.Js</span>
                </li>
            </ul>
        </div>

  )
}

export default Selectgender