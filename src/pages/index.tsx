import style from "../styles/Home.module.css"

export default function index(){
  return(
    <>
      <main className={style.main}>
          <section className={style.main_section}>
            <h3>Ameca, o robô humanoide que chamou atenção na CES 2022</h3>
            <p>
              Projetada para hospedar inteligência artificial, a criação da Engineered Arts surpreendeu visitantes da maior feira de tecnologia do mundo por suas expressões realistas e capacidade de comunicação; veja vídeos
            </p>
            <img  style={{width:'50vw'}} src="https://classic.exame.com/wp-content/uploads/2022/01/amecaengineeredarts.jpg?quality=70&strip=info&w=1024"></img>
            <p>
              O futuro ao lado dos robôs humanoide está mais perto do que nunca. Após um vídeo seu viralizar em dezembro de 2021 (com direito a um "eca" de Elon Musk), o robô Ameca da britânica Engineered Arts foi um dos assuntos mais falados durante a CES 2022, maior feira de tecnologia e inovação do mundo, que aconteceu nesta última semana.
            </p>
            <p>
              Diferente de robôs como os da Boston Dynamics, que dançam coreografias completas, o Ameca não corre ou pula. Tampouco é um ajudante doméstico como os idealizados pela Toyota, Samsung e Amazon. Ameca chama atenção pelas suas expressões faciais realistas e capacidade de conversar sozinha — no estande da sua empresa, o próprio robô era responsável por explicar o que era.
            </p>
            <p>
              O corpo acinzentado de metal e plástico remove um pouco do aspecto humano, mas seu rosto traz expressões faciais extremamente vívidas (e até dentes).
            </p>
            <p>
              Para obter tal efeito, a Engineered Arts colocou 17 motores individuais na cabeça do robô, construídos a partir de scans 3D internos de pessoas reais. Assim, foi possível imitar não só as expressões humanas, como também a estrutura óssea e a textura da pele.
            </p>
            <p>
              O humanoide da Engineered Arts foi projetado como uma plataforma para hospedar inteligência artificial (IA), mas não há nada embutido ainda. Por enquanto, ele conta somente com essa série de movimentos pré-programados, feitos para simular o movimento humano.
            </p>
            <p>
              Outro fato interessante é que o Ameca foi projetado para ser modular, o que significa que a cabeça pode ser removida com um clique e sem ferramentas, permitindo que seja trocada por outra caso algo dê errado.
            </p>
            <p>
              Por enquanto, os planos da empresa Engineered Arts são de continuar desenvolvendo o robô humanoide. Ameca deve ter um IA em breve, e há planos de novas versões na qual ele é capaz de andar. Esperamos que não para muito longe.
            </p>
          </section>         
      </main>
    </>
  )
}