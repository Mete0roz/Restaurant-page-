import doce2 from "../img/doce2.jpg";
import doce1 from "../img/doce1.jpg";
import doce3 from "../img/doce3.jpg";
import doce6 from "../img/doce6.jpg";
import doce5 from "../img/dcoe5.jpg";
import doce4 from "../img/doce4.jpg";
import doce7 from "../img/doce7.jpg";
import entry from "../img/entry.jpeg";
import cake from "../img/cake.jpg";
import logo2 from "../img/bar/logo2.jpeg";
  
export default function loadHome(){

    const container = document.querySelector("#container");
    container.innerHTML = `
    

    <div id="bar">
        <img src="${logo2}" alt="" id="logobar" />
        <h1 class = "title">Sweet & Cream</h1>
        <div id="choices">
        <a><p class="link-bar" id="homeBtn">Home</p></a>
        <a><p class="link-bar" id="menuBtn">Menu</p></a>
        <a><p class="link-bar" id="aboutBtn">About us</p></a>
        <a><p class="link-bar" id="locationBtn">Location</p></a>
        </div>
    </div>
    <!-------------------------------------------------------------------------->
    <div id="main">
        <div id="carrossel">
        <img src="${doce2}" alt="sweet" class="slide" />
        <img src="${doce1}" alt="sweet" class="slide" />
        <img src="${doce3}" alt="sweet" class="slide" />
        </div>

        <button class="pass prev">&lt;</button>
        <button class="pass next">&gt;</button>

        <div id="dots">
        <span class="dot started" data-index="0"></span>
        <span class="dot" data-index="1"></span>
        <span class="dot" data-index="2"></span>
    </div>
    </div>
    <!-------------------------------------------------------------------------->
    <div id="entry">
        
        <div id="entrytext">
        <div><h2>Toda a refeição tem <br>de ser Especial</h2><br>
        <p>
           Na Sweet & Cream, trazemos a verdadeira essência da confeitaria brasileira para o coração de Budapeste, com um ambiente acolhedor que convida você a relaxar e se deliciar. Nosso cardápio é cuidadosamente elaborado com ingredientes selecionados, e nossas criações artesanais — de bolos clássicos a sobremesas exclusivas — são o destaque de uma doçaria autêntica e criativa, inspirada nas raízes do Paraná. Em um espaço agradável e com um atendimento atencioso em cada detalhe, convidamos você para uma experiência única, seja para um café, uma celebração ou um doce momento a qualquer hora do dia.
        </p>
        </div>
        </div>
            <img src="${entry}" alt="img" id="entryimg">
    </div>
   <!-------------------------------------------------------------------------->
    <div id="reserve">
        <div id="text">
        <h1>Faça já sua reserva</h1>
        <p>Para garantir uma experiência ainda mais especial na Sweet & Cream, nossa sugestão é realizar sua reserva com antecedência. É simples: acesse nosso site, preencha o formulário de reserva e escolha a data e o horário que preferir. Estamos ansiosos para receber você com todo o carinho e os sabores que tornam a nossa confeitaria única.
        </p>
        <a href="https://bitcoinheiros.com/" target="_blank" rel="noopener noreferrer">
        <button>Reserve</button>
        </a>
        </div>
            <img src="${cake}" alt="img">
    </div>
   <!--------------------------------------------------------------------------> 
    <div id="bottom-carrosel">
       <div id="container-bottom"> 
       <img src="${doce7}" alt="img" class="slide2" id="img1">
       <img src="${doce6}" alt="img" class="slide2" id="img2">
        <img src="${doce5}" alt="img" class="slide2" id="img3">
        <img src="${doce1}" alt="img" class="slide2" id="img4">
        <img src="${doce2}" alt="img" class="slide2" id="img5">
        <img src="${doce3}" alt="img" class="slide2" id="img6">
        <img src="${doce4}" alt="img" class="slide2" id="img7">
       </div>

       <button class="pass2 prev2">&lt;</button>
       <button class="pass2 next2">&gt;</button>

        <div id="dots2">
            <span class="dot2 started" data-index="0"></span>
            <span class="dot2" data-index="1"></span>
            <span class="dot2" data-index="2"></span>
            <span class="dot2" data-index="3"></span>
            </div>
        </div>
    <div id="location">
        
        <h2>Nossa Localização</h2>
        <p>Você nos encontra facilmente junto à estátua de Satoshi Nakamoto, no Graphisoft Park, Budapeste.
Venha descobrir a confeitaria Sweet & Cream, onde a criatividade brasileira encontra a precisão europeia. Tradição, inovação e sabores inesquecíveis em um só lugar. Esperamos recebê-lo em breve para uma experiência doce e memorável.</p>
        
        <iframe
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2692.363366766302!2d19.049577791674185!3d47.56071811685782!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4741d93dcac0dd35%3A0x3c21d5b970a8c623!2sSatoshi%20Nakamoto%20szobra!5e0!3m2!1spt-BR!2sbr!4v1743891061012!5m2!1spt-BR!2sbr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </iframe>
    </div>
    <div id="bottom">
        <div>
        
        <stronger><h3 id="git">My GitHub</h3><stronger>
    
        </div>
    </div>

    `;


    function gettingStarted() {
    const slides = document.querySelectorAll(".slide");
    const carrossel = document.querySelector("#carrossel");
    const prev = document.querySelector(".prev");
    const next = document.querySelector(".next");
    const dots = document.querySelectorAll(".dot");

    if (slides.length > 0){

    let currentIndex = 0;
    const slideNumber = slides.length;

    function transformSlides(){
        carrossel.style.transform = `translateX(-${currentIndex * 100}%)`;

        dots.forEach((dot, index) => {
            if (index === currentIndex){
                dot.classList.add("started");
            } else {
                dot.classList.remove("started");
            }
        });
    };



    function nextSlide(){
        currentIndex = (currentIndex + 1) % slideNumber;
        transformSlides();
    };


    function prevSlide(){
        currentIndex = (currentIndex - 1 + slideNumber) % slideNumber;
        transformSlides();  
    };


    next.addEventListener("click", nextSlide);
    prev.addEventListener("click", prevSlide);

    dots.forEach(dot => {
        dot.addEventListener("click", ()=>{
            currentIndex = parseInt(dot.getAttribute('data-index'));
            transformSlides();
        });
    });

    transformSlides();
   };
 }

 gettingStarted();


    function secondCarrossel(){
    const slide = document.querySelectorAll(".slide2");
    const carrossel = document.querySelector("#container-bottom");
    const dots = document.querySelectorAll(".dot2");
    const prev = document.querySelector(".prev2");
    const next= document.querySelector(".next2");


    if(slide.length > 0){
    let currentIndex = 0;
    const slideNumber = dots.length;

    function transformSlides(){
        carrossel.style.transform = `translateX(-${currentIndex * 100}%)`;

        dots.forEach((dot, index2) =>{
            if (index2 === currentIndex){
                dot.classList.add("started");
            } else {
                dot.classList.remove("started");
            }
        });
    }

    function nextSlide(){
        currentIndex = (currentIndex + 1) % slideNumber;
        transformSlides();
    };


    function prevSlide(){
        currentIndex = (currentIndex - 1 + slideNumber) % slideNumber;  
        transformSlides();
    };

    next.addEventListener("click", nextSlide);
    prev.addEventListener("click", prevSlide);

    dots.forEach((dot, index) => {
        dot.addEventListener("click", () =>{

        currentIndex = index;
        transformSlides()
        });
    });
    transformSlides();
};
}

secondCarrossel();

}

