import Image from "next/image"

export default  ()=>{
    return(
        <>
          <div className="header">
              <span className="header_title"><h2>Future</h2></span>
              <nav className="header_menu">
                 <ul>
                    <a className="header_menu_button" >Home</a>
                 </ul>
                 <ul>
                    <a className="header_menu_button">Menu</a>
                 </ul>
                 <ul>
                    <a className="header_menu_button">contact</a>
                 </ul>
              </nav>
          </div>
          <div className="header_img">
            <Image 
            src="/img_header.jpg"
            layout="responsive"
            height={30}
            width={100}
            />
          </div>
        </>
    )
}