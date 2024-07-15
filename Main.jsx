import React from "react";
import x from "../Assets/img1.jpeg"
import y from "../Assets/img2.jpeg"
import z from "../Assets/img3.jpeg"
import a from "../Assets/img4.jpeg"
import b from "../Assets/img5.jpeg"
import c from "../Assets/img6.jpeg"
import d from "../Assets/img7.jpeg"
import e from "../Assets/img8.jpeg"


function Main(){
    return(
        <div id="container">
            <div id="small-container">
                <div className="c1">OUR MENU</div>
                <div className="c1" id="c2">See All</div>
            </div>
            <div id="container2">
                <div id="sub-container">
                <div class="imgs"id="img1"><img src={x} alt="" /></div>
                    <div class="imgs"id="img2"><img src={y} alt="" /></div>
                    <div class="imgs"id="img3"><img src={z} alt="" /></div>
                    <div class="imgs"id="img4"><img src={a} alt="" /></div>
                    <div class="imgs"id="img5"><img src={b} alt="" /></div>
                    <div class="imgs"id="img6"><img src={c} alt="" /></div>
                    <div class="imgs"id="img7"><img src={d} alt="" /></div>
                    <div class="imgs"id="img8"><img src={e} alt="" /></div>
                </div>
                <div id="sub-container1">
                    <div class="images">Best of Combos(Upto 20% OFF)</div>
                    <div class="images">Whopper</div>
                    <div class="images">Burgers & Wraps</div>
                    <div class="images">Kings Premium Burgers</div>
                    <div class="images">Sides</div>
                    <div class="images">Beverages</div>
                    <div class="images">Chicken Wings & Nuggets</div>
                    <div class="images">BK Caf</div>
                </div>
            </div>
        </div>
    )
}
export default Main;