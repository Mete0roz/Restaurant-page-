import logo2 from "../img/bar/logo2.jpeg";
import cooks from "../img-about/cooks.png";

export default function loadAbout() {
    const container = document.querySelector("#container");
    container.innerHTML = `
        <div id="bar">
        <img src="${logo2}" alt="" id="logobar">
        <h1>Sweet & Cream</h1>
        <div id="choices">
        <p class="link-bar" id="homeBtn">Home</p>
        <p class="link-bar" id="menuBtn">Menu</p>
        <p class="link-bar" id="aboutBtn">About us</p>
        <p class="link-bar">Location</p>
        </div>
        </div>



        <div id="cooks">
        <img src="${cooks}" alt="">
        </div>
        <div id="history">
        <h1> About Us </h1>
        <h2>Sobre a Sweet & Cream</h2>
    <p>
      A <strong>Sweet & Cream</strong> nasceu da união de cinco mulheres paranaenses que transformaram suas origens e saberes locais em uma confeitaria internacionalmente reconhecida. Clara Monteiro (Maringá), Helena Rocha (Londrina), Beatriz Camargo (Ponta Grossa), Irene Vasques (Foz do Iguaçu) e Júlia Ferreira (Curitiba) fundaram a empresa em 2015, na Europa, após anos de dedicação à confeitaria artesanal no Brasil.
    </p>
    <p>
      O projeto começou com o objetivo claro de apresentar ao mundo uma confeitaria autoral, que unisse a tradição brasileira às técnicas clássicas europeias. Cada uma das fundadoras trouxe uma especialidade própria, que passou a compor a identidade única da marca:
    </p>
    <ul>
      <li><strong>Clara Monteiro</strong> é responsável pelas estruturas e decoração dos bolos, com foco em estética floral e design de andares;</li>
      <li><strong>Helena Rocha</strong> desenvolve os recheios, explorando combinações tropicais com ingredientes típicos do Brasil;</li>
      <li><strong>Beatriz Camargo</strong> lidera a produção de chocolates artesanais e trufas, com técnicas refinadas de temperagem e acabamento;</li>
      <li><strong>Irene Vasques</strong> cuida das receitas tradicionais de biscoitos, com base em fórmulas familiares e uso de especiarias;</li>
      <li><strong>Júlia Ferreira</strong> coordena a criação de doces finos, com ênfase em apresentações sofisticadas e equilíbrio de sabores.</li>
    </ul>
    <p>
      A confeitaria teve sua primeira sede na região da Alsácia, França, e rapidamente se destacou por sua proposta original, recebendo visitantes de diversos países. Atualmente, a <strong>Sweet & Cream</strong> é considerada uma das maiores confeitarias do mundo, com sedes em 17 países, mantendo a produção artesanal e a essência brasileira em todos os produtos.
    </p>
    <p>
      A marca é reconhecida por sua capacidade de traduzir memórias afetivas em receitas, respeitando a simplicidade das raízes brasileiras e valorizando a cultura regional do Paraná. Todos os doces são desenvolvidos com base em ingredientes selecionados, técnicas modernas e uma filosofia de trabalho que prioriza afeto, memória e excelência.
    </p>
    <p>
      A <strong>Sweet & Cream</strong> é, antes de tudo, o resultado do talento, da coragem e da visão de cinco mulheres que escolheram levar a doçura da terra vermelha do sul do Brasil para o mundo.
    </p>
        </div>

    <div id="bottom">
        <div>
        
        <stronger><h3 >My GitHub</h3><stronger>
    
        </div>
    </div>
                     


    `;
}

