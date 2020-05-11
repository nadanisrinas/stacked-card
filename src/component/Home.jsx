import React,{Fragment,useState,useEffect} from "react"
import {Router,Route} from "react-router-dom"
import { createBrowserHistory } from 'history'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import '../assets/scss/Home.scss'
import $ from "jquery"
import Card from "./Card.jsx"
import CardLayer from "./CardLayer.jsx"
import Modal from "./Modal.jsx"

const Home = (props) => {
    const [content,setContent] = useState("");
    const history = createBrowserHistory();
    const onHandleDetail = (id) => {
      if(id == 1){
        setContent("content1");
      }
      if(id == 2){
        setContent("content2");
      }
      if(id == 3){
        setContent("content3");
      }
      history.push({
        pathname : `/modal/${id}`,
        content : {content}
      });
    }
    useEffect(() =>{
      
      let sliderImagesBox = document.querySelectorAll('.cards-box');
      sliderImagesBox.forEach(el => {
        let imageNodes = el.querySelectorAll('.card:not(.hide)')
        let arrIndexes = []; 
        let start = 0;
        while (imageNodes.length > start) {
            arrIndexes.push(start++);
        };
        
        let setIndex = (arr) => {
            for(let i = 0; i < imageNodes.length; i++) {
                imageNodes[i].dataset.slide = arr[i]; 
            }
        }

        el.click(() => {

        });
        
        $('.btn-next').click(() => {
            arrIndexes.unshift(arrIndexes.pop());
            console.log("next",arrIndexes);
            setIndex(arrIndexes);
        });
        
        $('.btn-prev').click(() => {
            const middle= arrIndexes.indexOf(arrIndexes[Math.floor(arrIndexes.length/2)]);
            const middleIndex = arrIndexes.indexOf(middle);
            arrIndexes.unshift(arrIndexes[parseInt(arrIndexes.slice(middleIndex,middleIndex+1).join(""))]);
            arrIndexes.splice(arrIndexes.length/2,1);
            arrIndexes.push(arrIndexes[1]);
            arrIndexes.splice(1,1);
            setIndex(arrIndexes);
            console.log("prev2 ",arrIndexes);
        });
        setIndex(arrIndexes)
    });
    },[]);
    return(
        <Fragment>
        <div className="container">
              <div className="row">
                  <div className="col-lg-6">
                    <Card>
                      <CardLayer detail={() => onHandleDetail} content="card1" id={1}/>
                      <CardLayer detail={() => onHandleDetail} content="card2" id={2}/>
                      <CardLayer detail={() => onHandleDetail} content="card3" id={3}/>
                    </Card>
                  </div>
                  <div className="col-lg-6">
                    <div className="content section-button">
                        <button className="btn btn-prev"><i className="fa fa-arrow-left"></i></button>
                        <button className="btn btn-next"><i className="fa fa-arrow-right"></i></button>
                    </div>
                  </div>
              </div>
        </div>
      </Fragment>
    )
}

export default Home