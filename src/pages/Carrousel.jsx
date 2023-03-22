import React from 'react'

const Carrousel = () => {
    let counter = 1;
        setInterval(function(){
            
            document.getElementById('radio' + counter).checked = true; 
            counter++;
            if(counter > 4){
                counter = 1;
            }
        }, 5000);

  return (
    <div className='Carrousel'>
        <div className="slides">
            <input type="radio" name="radio-btn" id="radio1"/>
            <input type="radio" name="radio-btn" id="radio2"/>
            <input type="radio" name="radio-btn" id="radio3"/>
            <input type="radio" name="radio-btn" id="radio4"/>
            
            <div class="slide first">
                <img src="slide1.jpg" alt="modelo"/>
            </div>
            <div class="slide2">
                <img src="slide2.jfif" alt="modelo2"/>
            </div>
            <div class="slide3">
                <img src="slide3.avif" alt="modelo3"/>

            </div>
            <div class="slide4">
                <img src="slide4.webp" alt="modelo4"/>
            </div>
            
            <div class="navigation-auto">
                <div class="auto-btn1"></div>
                <div class="auto-btn2"></div>
                <div class="auto-btn3"></div>
                <div class="auto-btn4"></div>
            </div>
        </div>
        <div class="navigation-manual">
            <label for="radio1" class="manual-btn"></label>
            <label for="radio2" class="manual-btn"></label>
            <label for="radio3" class="manual-btn"></label>
            <label for="radio4" class="manual-btn"></label>
        </div>
    </div>
        
        
  )
}

export default Carrousel