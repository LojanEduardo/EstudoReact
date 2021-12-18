import "./styles.css";
import HeaderImage from "./imgs/img123.jpg";

function Header(){
    return(
        <header>
            <h1>Meu Blog!!</h1>
            <img src={HeaderImage} alt="Imagem Header" />
        </header>
    );
}

export default Header;