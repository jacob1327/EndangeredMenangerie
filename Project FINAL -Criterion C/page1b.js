$('#videolink').magnificPopup({
  type:'inline',
  midClick:true
})


var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {

  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

function Slide1(){
    var node = document.getElementById('svgcontainer2');
    node.style.visibility= 'hidden'
    var node = document.getElementById('svgcontainer');
    node.style.visibility= 'visible'
    var node = document.getElementById('stellertitle');
    node.style.visibility= 'visible'    
    var node = document.getElementById('svgcontainer3');
    node.style.visibility= 'hidden' 
    var node = document.getElementById("slide3title");
    node.style.visibility= 'hidden'
    var node = document.getElementById("capetitle");
    node.style.visibility= 'hidden'

    document.getElementById('stellertitle').setAttribute("class", "showslide1title");
    document.getElementById("youtubevid").src = "https://www.youtube.com/embed/dXAmEDFFero";
    document.getElementById( "threatinfo" ).setAttribute( "onClick", "javascript: change_imgtotext();" );
    document.getElementById( "statsinfo" ).setAttribute( "onClick", "javascript: change_imgtostats();" );
    document.getElementById( "prev1" ).setAttribute( "onClick", "javascript: Slide3();" );
    document.getElementById( "next1" ).setAttribute( "onClick", "javascript: Slide2();" );
}

function Slide2(){
    var node = document.getElementById('svgcontainer');
    node.style.visibility= 'hidden'
    var node = document.getElementById('svgcontainer2');
    node.style.visibility= 'visible'
    var node = document.getElementById('svgcontainer3');
    node.style.visibility= 'hidden' 
    var node = document.getElementById("slide3title");
    node.style.visibility= 'hidden'
    var node = document.getElementById("stellertitle");
    node.style.visibility= 'hidden'
    var node = document.getElementById("capetitle");
    node.style.visibility= 'visible'
    var node = document.getElementById('capeinfo');
    node.style.visibility= 'hidden'  

    document.getElementById('capetitle').setAttribute("class", "showcapetitle");
    document.getElementById('svgcontainer2').setAttribute("class", "wrapper2adjust");
    document.getElementById("youtubevid").src = "https://www.youtube.com/embed/qhrT0v7QSvc";
    document.getElementById( "threatinfo" ).setAttribute( "onClick", "javascript: change_imgtotext2();" );
    document.getElementById( "statsinfo" ).setAttribute( "onClick", "javascript: change_imgtostats2();" );
    document.getElementById( "prev1" ).setAttribute( "onClick", "javascript: Slide1();" );
    document.getElementById( "next1" ).setAttribute( "onClick", "javascript: Slide3();" );
}

function Slide3(){
    var node = document.getElementById('svgcontainer2');
    node.style.visibility= 'hidden'
    var node = document.getElementById('svgcontainer');
    node.style.visibility= 'hidden'
    var node = document.getElementById('svgcontainer3');
    node.style.visibility= 'visible' 
    var node = document.getElementById("slide3title");
    node.style.visibility= 'visible'
    var node = document.getElementById('stellertitle');
    node.style.visibility= 'hidden'  
    var node = document.getElementById("capetitle");
    node.style.visibility= 'hidden'

    document.getElementById('svgcontainer3').setAttribute("class", "wrapper3adjust");
    document.getElementById('slide3title').setAttribute("class", "showslide3title");
    document.getElementById("youtubevid").src = "https://www.youtube.com/embed/TS6ylmkQFhU";
    document.getElementById( "threatinfo" ).setAttribute( "onClick", "javascript: change_imgtotext3();" );
    document.getElementById( "statsinfo" ).setAttribute( "onClick", "javascript: change_imgtostats3();" );
    document.getElementById( "prev1" ).setAttribute( "onClick", "javascript: Slide2();" );
    document.getElementById( "next1" ).setAttribute( "onClick", "javascript: Slide1();" );
}


function change_imgtotext(){
    var node = document.getElementById('svgcontainer');
    node.style.visibility= 'hidden'
    var node = document.getElementById('exitbtn');
    node.style.visibility= 'visible'
    var node = document.getElementById('stellerinfo');
    node.style.visibility= 'visible'
    document.getElementById('exitbtn').setAttribute("class", "exitbtnshow");
    document.getElementById('stellerinfo').setAttribute("class", "style1");
    document.getElementById('stellertitle').setAttribute("class", "style2"); 
    document.getElementById('exitbtn2').setAttribute( "onClick", "javascript: backtoimg();" );    
}

function change_imgtotext2() {
    var node = document.getElementById('svgcontainer2');
    node.style.visibility= 'hidden'
    var node = document.getElementById('exitbtn2');
    node.style.visibility= 'visible'
    var node = document.getElementById('capeinfo');
    node.style.visibility= 'visible' 

    document.getElementById('capeinfo').setAttribute("class", "capeinfoadjust");
    document.getElementById('capetitle').setAttribute("class", "style2");   
    document.getElementById('exitbtn2').setAttribute("class", "newexitbtn");
    document.getElementById('exitbtn2').setAttribute( "onClick", "javascript: backtoimg2();" );   
}


function change_imgtotext3() {
   var node = document.getElementById('svgcontainer3');
    node.style.visibility= 'hidden'
    var node = document.getElementById('exitbtn2');
    node.style.visibility= 'visible'
    var node = document.getElementById('sumatraninfo');
    node.style.visibility= 'visible'

    document.getElementById('slide3title').setAttribute("class", "showslide3titleb");
    document.getElementById('stellertitle').setAttribute("class", "style2");  
    document.getElementById('sumatraninfo').setAttribute("class", "sumatraninfoadjust");  
    document.getElementById('exitbtn2').setAttribute("class", "newexitbtn2");
    document.getElementById('exitbtn2').setAttribute( "onClick", "javascript: backtoimg3();" );   
}


function backtoimg(){
    var node = document.getElementById('exitbtn2');
    node.style.visibility= 'hidden'

    var node = document.getElementById('exitbtn');
    node.style.visibility= 'hidden'
    var node = document.getElementById('svgcontainer');
    node.style.visibility= 'visible'
    var node = document.getElementById('stellerinfo');
    node.style.visibility= 'hidden'
    var node = document.getElementById('stellergraph');
    node.style.visibility= 'hidden'

    document.getElementById('stellertitle').setAttribute("class", "reset"); 
}


function backtoimg2(){
    var node = document.getElementById('exitbtn2');
    node.style.visibility= 'hidden'
    var node = document.getElementById('svgcontainer2');
    node.style.visibility= 'visible'
    var node = document.getElementById('capeinfo');
    node.style.visibility= 'hidden'
    var node = document.getElementById('capegraph');
    node.style.visibility= 'hidden'

    document.getElementById('capetitle').setAttribute("class", "reset"); 
}

function backtoimg3(){
    var node = document.getElementById('exitbtn2');
    node.style.visibility= 'hidden'
    var node = document.getElementById('svgcontainer3');
    node.style.visibility= 'visible'
    var node = document.getElementById('sumatraninfo');
    node.style.visibility= 'hidden'
    var node = document.getElementById('sumatrangraph');
    node.style.visibility= 'hidden'

    document.getElementById('slide3title').setAttribute("class", "showslide3title"); 
}


function change_imgtostats(){
    var node = document.getElementById('svgcontainer');
    node.style.visibility= 'hidden'
    var node = document.getElementById('stellergraph');
    node.style.visibility= 'visible'
    var node = document.getElementById('exitbtn2');
    node.style.visibility= 'visible'

    document.getElementById('stellergraph').setAttribute("class", "style3");
    document.getElementById('stellertitle').setAttribute("class", "style2");  
    document.getElementById('exitbtn2').setAttribute("class", "style4");  
    document.getElementById('exitbtn2').setAttribute( "onClick", "javascript: backtoimg();" );    
}

function change_imgtostats2(){
    var node = document.getElementById('svgcontainer2');
    node.style.visibility= 'hidden'
    var node = document.getElementById('capegraph');
    node.style.visibility= 'visible'
    var node = document.getElementById('exitbtn2');
    node.style.visibility= 'visible'

    document.getElementById('capegraph').setAttribute("class", "style3b");
    document.getElementById('capetitle').setAttribute("class", "style2b");  
    document.getElementById('exitbtn2').setAttribute("class", "style4b");  
    document.getElementById('exitbtn2').setAttribute( "onClick", "javascript: backtoimg2();" );    
}


function change_imgtostats3(){
    var node = document.getElementById('svgcontainer3');
    node.style.visibility= 'hidden'
    var node = document.getElementById('sumatrangraph');
    node.style.visibility= 'visible'
    var node = document.getElementById('exitbtn2');
    node.style.visibility= 'visible'

    document.getElementById('sumatrangraph').setAttribute("class", "style3c");
    document.getElementById('slide3title').setAttribute("class", "style2c");  
    document.getElementById('exitbtn2').setAttribute("class", "style4c");  
    document.getElementById('exitbtn2').setAttribute( "onClick", "javascript: backtoimg3();" );    
}

