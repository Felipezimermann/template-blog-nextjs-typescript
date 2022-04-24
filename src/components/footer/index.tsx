import Image from "next/image"
export default function Footer(){

    return(
        <>
            <footer className="footer">
                <div className="footer_Contact">
                    <h4>Contact</h4>
                    <address >
                        <a href="mailto:Felipe-zimerman-n@hotmail.com">Email</a>
                    </address>
                </div>
                <div className="footer_fallow">
                    <h4>Fallow</h4>
                    <address >
                        <a href="https://github.com/Felipezimermann">Github</a>
                    </address>
                </div>
                <div className="footer_copyright">
                    <h4>Copyright © 2022</h4>
                </div>
            </footer>
        </>
    )
}