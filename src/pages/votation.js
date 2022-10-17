import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Photo from "../assets/images/photo.webp";

const Votation = () => {
  return (
    <>
      <Head>
        <title>Corsos - Villa Ascasubi</title>
      </Head>
      <header class="header">
        <Link href="/">
          <div class="logo"></div>
        </Link>
      </header>
      <section class="headline">
        <h1>Elige a tu participante favorito</h1>
      </section>
      <div>
        <form
          class="content"
          action="https://send.pageclip.co/DQiU5q6UbkJI6OwuIVbChwXB4lmKYJ2p/votation"
          id="form"
          method="post"
        >
          <div class="card">
            <div class="card__image">
              <Image layout="fill" class="" src={Photo} alt="" />
            </div>
            <div class="card__detail">
              <h3>Dragón Oriental</h3>
              <span>5 integrantes</span>
              <button class="button" id="card">
                Votar
              </button>
            </div>
          </div>
          <div class="card">
            <div class="card__image" style={{ overflow: "hidden" }}>
              <Image layout="fill" class="" src={Photo} alt="" />
            </div>
            <div class="card__detail">
              <h3>Carroza Invencible</h3>
              <span>35 integrantes</span>
              <button class="button" id="card">
                Votar
              </button>
            </div>
          </div>
          <div class="card">
            <div class="card__image" style={{ overflow: "hidden" }}>
              <Image layout="fill" class="" src={Photo} alt="" />
            </div>
            <div class="card__detail">
              <h3>Payasos</h3>
              <span>9 integrantes</span>
              <button class="button">Votar</button>
            </div>
          </div>
          <div class="card">
            <div class="card__image" style={{ overflow: "hidden" }}>
              <Image layout="fill" class="" src={Photo} alt="" />
            </div>
            <div class="card__detail">
              <h3>Lentejuelas y Rock sobre ruedas</h3>
              <span>6 integrantes</span>
              <button class="button">Votar</button>
            </div>
          </div>
          <div class="card">
            <div class="card__image" style={{ overflow: "hidden" }}>
              <Image layout="fill" class="" src={Photo} alt="" />
            </div>
            <div class="card__detail">
              <h3>El juego del Calamar</h3>
              <span>10 integrantes</span>
              <button class="button">Votar</button>
            </div>
          </div>
          <div class="card">
            <div class="card__image" style={{ overflow: "hidden" }}>
              <Image layout="fill" class="" src={Photo} alt="" />
            </div>
            <div class="card__detail">
              <h3>Murga "Caprichosos en movimiento"</h3>
              <span>30 integrantes</span>
              <button class="button">Votar</button>
            </div>
          </div>
          <div class="card">
            <div class="card__image" style={{ overflow: "hidden" }}>
              <Image layout="fill" class="" src={Photo} alt="" />
            </div>
            <div class="card__detail">
              <h3>Marionetas gigantes</h3>
              <span></span>
              <button class="button">Votar</button>
            </div>
          </div>
          <div class="card">
            <div class="card__image" style={{ overflow: "hidden" }}>
              <Image layout="fill" class="" src={Photo} alt="" />
            </div>
            <div class="card__detail">
              <h3>El Ritual</h3>
              <span>7 integrantes</span>
              <button class="button">Votar</button>
            </div>
          </div>
          <div class="card">
            <div class="card__image" style={{ overflow: "hidden" }}>
              <Image layout="fill" class="" src={Photo} alt="" />
            </div>
            <div class="card__detail">
              <h3>Pulpos Escurridizos</h3>
              <span>9 integrantes</span>
              <button class="button">Votar</button>
            </div>
          </div>
          <div class="card">
            <div class="card__image" style={{ overflow: "hidden" }}>
              <Image layout="fill" class="" src={Photo} alt="" />
            </div>
            <div class="card__detail">
              <h3>El rejunte alocado</h3>
              <span>12 integrantes</span>
              <button class="button">Votar</button>
            </div>
          </div>
          <div class="card">
            <div class="card__image" style={{ overflow: "hidden" }}>
              <Image layout="fill" class="" src={Photo} alt="" />
            </div>
            <div class="card__detail">
              <h3>Vacas</h3>
              <span>7 integrantes</span>
              <button class="button">Votar</button>
            </div>
          </div>
          <div class="card">
            <div class="card__image" style={{ overflow: "hidden" }}>
              <Image layout="fill" class="" src={Photo} alt="" />
            </div>
            <div class="card__detail">
              <h3>Arlequines</h3>
              <span>7 integrantes</span>
              <button class="button">Votar</button>
            </div>
          </div>
          <div class="card">
            <div class="card__image" style={{ overflow: "hidden" }}>
              <Image layout="fill" class="" src={Photo} alt="" />
            </div>
            <div class="card__detail">
              <h3>Comparsa Arayé de Porteña</h3>
              <span>150 integrantes</span>
              <button class="button">Votar</button>
            </div>
          </div>
          <div class="card">
            <div class="card__image" style={{ overflow: "hidden" }}>
              <Image layout="fill" class="" src={Photo} alt="" />
            </div>
            <div class="card__detail">
              <h3>Cruella de Vil / Fantasía</h3>
              <span></span>
              <button class="button">Votar</button>
            </div>
          </div>
        </form>
      </div>
      <footer class="footer">
        <div class="sponsors"></div>
      </footer>
    </>
  );
};

export default Votation;
