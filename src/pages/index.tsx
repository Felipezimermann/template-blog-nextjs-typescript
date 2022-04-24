import style from "../styles/Home.module.css"

export default function index(){
  return(
    <>
      <main className={style.main}>
          <section className={style.main_section}>
            <h3>Ameca, the humanoid robot that drew attention at CES 2022</h3>
            <p>
            Designed to host artificial intelligence, Engineered Arts' creation surprised visitors to the world's largest technology fair for its realistic expressions and communication skills; watch videos
            </p>
            <img  style={{width:'50vw'}} src="https://classic.exame.com/wp-content/uploads/2022/01/amecaengineeredarts.jpg?quality=70&strip=info&w=1024"></img>
            <p>
              The future alongside humanoid robots is closer than ever. After a video of it went viral in December 2021 (with an "yuck" from Elon Musk), the British Engineered Arts robot Ameca was one of the most talked about subjects during CES 2022, the largest technology and innovation fair in the world, which happened this last week.
            </p>
            <p>
              Unlike robots like Boston Dynamics, which dance full-length choreographies, Ameca doesn't run or jump. Nor is it a domestic helper like those envisioned by Toyota, Samsung and Amazon. Ameca stands out for its realistic facial expressions and ability to talk to itself — in her company's booth, the robot itself was responsible for explaining what it was.
            </p>
            <p>
              The grayish metal and plastic body removes some of the human aspect, but his face brings out extremely vivid facial expressions (and even teeth).
            </p>
            <p>
              To achieve this effect, Engineered Arts placed 17 individual motors in the robot's head, built from internal 3D scans of real people. Thus, it was possible to imitate not only human expressions, but also bone structure and skin texture.
            </p>
            <p>
              Engineered Arts' humanoid was designed as a platform to host artificial intelligence (AI), but there's nothing built in yet. For now, he has only this series of pre-programmed movements, designed to simulate human movement.
            </p>
            <p>
              Another interesting fact is that the Ameca is designed to be modular, which means that the head can be removed with a click and without tools, allowing it to be swapped out in case something goes wrong.
            </p>
            <p>
             
              For now, Engineered Arts plans to continue developing the humanoid robot. Ameca should have an AI soon, and there are plans for new versions of it that he's capable of riding on. We hope it doesn't go too far.
            </p>
          </section>         
      </main>
    </>
  )
}