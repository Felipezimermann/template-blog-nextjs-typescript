export default function Menu(){

    return(
        <>
            <section className="main_section_menu_busca">
                <input className="main_section_menu_busca_input" type="text" />
                <button>Search</button>
            </section>
            <section className="main_section_menu_post">
                <span className="main_section_menu_post_title">Recent post</span>
                <nav className="main_section_menu_post_nav">
                    <li className="main_section_menu_post_menu">
                        <a>Post 1</a>
                    </li>   
                    <li className="main_section_menu_post_menu">
                        <a>Post 2</a>
                    </li> 
                    <li className="main_section_menu_post_menu">
                        <a>Post 3</a>
                    </li> 
                    <li className="main_section_menu_post_menu">
                        <a>Post 4</a>
                    </li>   
                </nav>
            </section>
        </>
    )
}