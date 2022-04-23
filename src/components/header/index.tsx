import Image from "next/image"

export default  ()=>{
    return(
        <>
          <div className="header">
              <span><h2>Game of Trones</h2></span>
              <nav className="header_menu">
                 <ul>
                    <a>Home</a>
                 </ul>
                 <ul>
                    <a>Sobre</a>
                 </ul>
                 <ul>
                    <a>Contato</a>
                 </ul>
              </nav>
          </div>
          <div className="header_img">
            <Image 
            src="/teste.jpg"
            layout="responsive"
            height={30}
            width={100}
            />
          </div>
        </>
    )
}