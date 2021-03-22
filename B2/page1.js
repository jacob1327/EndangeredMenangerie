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
    var node = document.getElementById('amurtitle');
    node.style.visibility= 'hidden'    
    var node = document.getElementById('svgcontainer3');
    node.style.visibility= 'hidden' 
    var node = document.getElementById("slide1title");
    node.style.visibility= 'visible'
    var node = document.getElementById("slide3title");
    node.style.visibility= 'hidden'

    document.getElementById('slide1title').setAttribute("class", "showslide1title");
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
    var node = document.getElementById('amurtitle');
    node.style.visibility= 'visible'  
    var node = document.getElementById("slide1title");
    node.style.visibility= 'hidden'


    document.getElementById('svgcontainer2').setAttribute("class", "wrapper2adjust");
    document.getElementById("amurtitle").innerHTML="Malayan Tiger";
    document.getElementById('amurtitle').setAttribute("class", "malayantitle");
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
    var node = document.getElementById('amurtitle');
    node.style.visibility= 'hidden'  
    var node = document.getElementById("slide1title");
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
    var node = document.getElementById('amurinfo');
    node.style.visibility= 'visible'

    document.getElementById('exitbtn').setAttribute("class", "exitbtnshow");
    document.getElementById('amurinfo').setAttribute("class", "style1");
    document.getElementById('amurtitle').setAttribute("class", "style2");   
}

function change_imgtotext2() {
    var node = document.getElementById('svgcontainer2');
    node.style.visibility= 'hidden'
    var node = document.getElementById('exitbtn2');
    node.style.visibility= 'visible'
    var node = document.getElementById('amurinfo');
    node.style.visibility= 'visible'

    document.getElementById('amurinfo').setAttribute("class", "malayaninfo");
    document.getElementById("amurinfo").innerHTML="According to several groups, the Malayan tiger is most threatened by the illegal wildlife trade. Tiger parts are in high demand in many parts of Asia for traditional medicine and poaching has decimated the species for centuries across its wide range. The Malayan tiger is also threatened by the “loss and fragmentation of forests,” according to the groups. Indeed, Malaysia has the highest rate of forest loss in the world from 2000-2012, according to Global Forest Change. During those 12 years, the country lost 14.4 percent of its forest cover from a 2000 bench-line.";
    document.getElementById('amurtitle').setAttribute("class", "style2");   
    document.getElementById('exitbtn2').setAttribute("class", "newexitbtn");
    document.getElementById('exitbtn2').setAttribute( "onClick", "javascript: backtoimg2();" );   
}


function change_imgtotext3() {
   var node = document.getElementById('svgcontainer3');
    node.style.visibility= 'hidden'
    var node = document.getElementById('exitbtn2');
    node.style.visibility= 'visible'
    var node = document.getElementById('amurinfo');
    node.style.visibility= 'visible'

    document.getElementById('slide3title').setAttribute("class", "showslide3titleb");
    document.getElementById('amurinfo').setAttribute("class", "sumatraninfo");
    document.getElementById("amurinfo").innerHTML="The status of Sumatran Elephant has been escalated from endangered into critically endangered by International Union for Conservation of Nature (IUCN) Red List in 2012. This mostly because the Sumatran Elephants have significant reduction in population number as indicated by the loss of over 69% of its potential habitat in just one generation (the last 25 years). The greatest threats to Sumatran elephants are habitat loss, fragmentation, and degradation; illegal killing (e.g. for their ivory and other products or in retaliation for human-elephant conflicts); and the loss of genetic viability resulting from small population size and isolation.";
    document.getElementById('amurtitle').setAttribute("class", "style2");   
    document.getElementById('exitbtn2').setAttribute("class", "newexitbtn2");
    document.getElementById('exitbtn2').setAttribute( "onClick", "javascript: backtoimg3();" );   
}


function stattoimg(){
    var node = document.getElementById('svgcontainer');
    node.style.visibility= 'visible'
    var node = document.getElementById('amurgraph');
    node.style.visibility= 'hidden'
    var node = document.getElementById('exitbtn2');
    node.style.visibility= 'hidden'

    document.getElementById('amurtitle').setAttribute("class", "reset"); 
}

function backtoimg(){
    var node = document.getElementById('exitbtn');
    node.style.visibility= 'hidden'
    var node = document.getElementById('svgcontainer');
    node.style.visibility= 'visible'
    var node = document.getElementById('amurinfo');
    node.style.visibility= 'hidden'

    document.getElementById('amurtitle').setAttribute("class", "reset"); 
}


function backtoimg2(){
    var node = document.getElementById('exitbtn2');
    node.style.visibility= 'hidden'
    var node = document.getElementById('svgcontainer2');
    node.style.visibility= 'visible'
    var node = document.getElementById('amurinfo');
    node.style.visibility= 'hidden'
    var node = document.getElementById('amurgraph');
    node.style.visibility= 'hidden'

    document.getElementById('amurtitle').setAttribute("class", "reset"); 
}

function backtoimg3(){
    var node = document.getElementById('exitbtn2');
    node.style.visibility= 'hidden'
    var node = document.getElementById('svgcontainer3');
    node.style.visibility= 'visible'
    var node = document.getElementById('amurinfo');
    node.style.visibility= 'hidden'
    var node = document.getElementById('amurgraph');
    node.style.visibility= 'hidden'

    document.getElementById('slide3title').setAttribute("class", "showslide3title"); 
}


function change_imgtostats(){
    var node = document.getElementById('svgcontainer');
    node.style.visibility= 'hidden'
    var node = document.getElementById('amurgraph');
    node.style.visibility= 'visible'
    var node = document.getElementById('exitbtn2');
    node.style.visibility= 'visible'

    document.getElementById('amurgraph').setAttribute("class", "style3");
    document.getElementById('amurtitle').setAttribute("class", "style2");  
    document.getElementById('exitbtn2').setAttribute("class", "style4");   
}

function change_imgtostats2(){
    var node = document.getElementById('svgcontainer2');
    node.style.visibility= 'hidden'
    var node = document.getElementById('amurgraph');
    node.style.visibility= 'visible'
    var node = document.getElementById('exitbtn2');
    node.style.visibility= 'visible'

    document.getElementById("amurgraph").src = "malayantigergraph.jpg";
    document.getElementById('amurgraph').setAttribute("class", "style3b");
    document.getElementById('amurtitle').setAttribute("class", "style2b");  
    document.getElementById('exitbtn2').setAttribute("class", "style4b");  
    document.getElementById('exitbtn2').setAttribute( "onClick", "javascript: backtoimg2();" );    
}


function change_imgtostats3(){
    var node = document.getElementById('svgcontainer3');
    node.style.visibility= 'hidden'
    var node = document.getElementById('amurgraph');
    node.style.visibility= 'visible'
    var node = document.getElementById('exitbtn2');
    node.style.visibility= 'visible'

    document.getElementById("amurgraph").src = "sumatrangraph.jpg";
    document.getElementById('amurgraph').setAttribute("class", "style3c");
    document.getElementById('slide3title').setAttribute("class", "style2c");  
    document.getElementById('exitbtn2').setAttribute("class", "style4c");  
    document.getElementById('exitbtn2').setAttribute( "onClick", "javascript: backtoimg3();" );    
}

