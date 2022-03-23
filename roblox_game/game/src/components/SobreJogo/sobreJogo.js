import "./sobreJogo.css";

export default function SobreJogo() {
  return (
    <section className="section-sobre">
      <div className="div-sobre">
        <h3 className="titulo-sobre">Sobre o Jogo</h3>
        <p className="descricao-sobre">
          A história se baseia no folclore brasileiro.
          <br />
          Ela se inicia, com um feitiço feito por uma tribo indígena, que dá
          errado, e liberta vários personagens folclóricos. <br />
          Assim, contratam uma pessoa, o índio Ana Jones, para lutar contra os
          personagnes e os aprisioná-los novamente. <br />E você será o índio
          Ana Jones.
        </p>
      </div>
      <img
        className="img"
        src="https://cdn.ome.lt/TOSlZmJWwzhpCbdYAq5hCFZVqzM=/1200x630/smart/extras/conteudos/New_Project_81_rrJDvGT.jpg"
        alt="imagem folclórica"
      />
    </section>
  );
}
