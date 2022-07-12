import { preferenciaModo, botonMode, bodyTag, setDark, setLight, persistirDark, persistirLight  } from "./modules/var_darkmode.js";

//revisa si hay un modo preferido guardado


window.onload = () => {
    preferenciaModo === "dark" ? setDark() : setLight();
}


//cambia entre modos y setea la preferencia
 botonMode.onclick = () => {
    let modo = bodyTag.getAttribute('class');
    modo === "light" ? persistirDark() : persistirLight();
 }



