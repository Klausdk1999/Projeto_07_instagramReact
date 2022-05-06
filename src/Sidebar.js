import Sugestao from './Sugestao';
import Usuario from './Usuario';

const sugestoes =[{
  src:"assets/img/bad.vibes.memes.svg",
  user:"bad.vibes.memes"
},{
  src:"assets/img/chibirdart.svg",
  user:"chibirdart"
},{
  src:"assets/img/razoesparaacreditar.svg",
  user:"razoesparaacreditar"
},{
  src:"assets/img/adorable_animals.svg",
  user:"adorable_animals"
},{
  src:"assets/img/smallcutecats.svg",
  user:"smallcutecats"
}];

const usuario =[{
    src:"assets/img/catanacomics.svg",
    user:"catanacomics",
    name:"Klaus"
}];

export default function Sidebar() {
	return (
        <div class="sidebar">

        {usuario.map((usuario) => (<Usuario src={usuario.src} user={usuario.user}  name={usuario.name}/>))}
        
          <div class="sugestoes">
            <div class="titulo">
              Sugestões para você
              <div>Ver tudo</div>
            </div>

            {sugestoes.map((sugestoes) => (<Sugestao src={sugestoes.src} user={sugestoes.user}/>))}

          </div>

          <div class="links">
            Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
          </div>

          <div class="copyright">
            © 2021 INSTAGRAM DO FACEBOOK
          </div>
        </div>
    );
}