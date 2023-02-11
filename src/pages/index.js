import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState, useMemo, useEffect } from "react";
import cookie from "cookie";
import { getCookie, setCookie } from "cookies-next";
import Photo from "../assets/images/photo.webp";

export const getServerSideProps = async ({ req, query }) => {
  const cookies = cookie.parse(req.headers.cookie || "");
  return {
    props: {
      cookies: cookies,
    },
  };
};

const Votation = ({ cookies }) => {
  const [forms, setForms] = useState({
    "grupo-divertido": cookies["grupo-divertido"],
    "mejor-puesta": cookies["mejor-puesta"],
    "mejor-disfraz": cookies["mejor-disfraz"],
  });

  const [isSuccess, setIsSuccess] = useState(
    cookies["grupo-divertido"] &&
      cookies["mejor-puesta"] &&
      cookies["mejor-disfraz"]
  );
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (
      forms["grupo-divertido"] &&
      forms["mejor-puesta"] &&
      forms["mejor-disfraz"]
    )
      setIsSuccess(true);
    else setIsSuccess(false);
  }, [forms]);

  const getExpire = (days) => {
    var date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    return date;
  };

  const onSuccess = (category) => {
    setIsLoading(false);
    setCookie(category, true, {
      path: "/",
      expires: getExpire(30),
    });
    setForms((prev) => ({ ...prev, [category]: true }));
  };

  const onError = () => {
    setIsLoading(false);
    alert("Ha ocurrido un error, vuelva a intentarlo.");
  };

  const handleSubmit = async (category, data) => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `https://send.pageclip.co/DQiU5q6UbkJI6OwuIVbChwXB4lmKYJ2p/${category}`,
        {
          method: "POST",
          mode: "no-cors",
          body: JSON.stringify({ participante: data }),
        }
      ).then((data) => {
        onSuccess(category);
      });
      // if (response.ok) onSuccess(category);
      // if (!response.ok) onError();
    } catch (error) {
      onError();
    }
  };

  const cards = useMemo(() => [
    {
      title: "La granja de Chencho",
    },
    {
      title: "Las Rati Playa",
    },
    {
      title: "Yip Yip",
    },
    {
      title: "Aliens en acción y grillos",
    },
    {
      title: "La familia feliz llegó  para divertir",
    },
    {
      title: "The Crazy zombies",
    },
    {
      title: "Las Comadreja turrakas",
    },
    {
      title: "El Rejunte",
    },
    {
      title: "Selección Palomera",
    },
    {
      title: "Soldaditos Problemáticos",
    },
  ]);

  if (isSuccess)
    return (
      <>
        <Head></Head>
        <header className="header">
          <Link href="/">
            <div className="logo"></div>
          </Link>
        </header>
        <section
          className="headline"
          style={{
            padding: "1em",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <h1>Gracias por votar</h1>
        </section>
      </>
    );
  else if (isSuccess === false)
    return (
      <>
        <Head>
          <meta charset="UTF-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="description"
            content="Elegí tu participante favorito de los Corsos de la Villa 2023. Villa Ascasubi se prepara para compartir una de las fiestas más convocantes de la región que se celebrará entre el viernes 10 y el sábado 11 de febrero."
          />
          <meta property="og:title" content="Corsos de la Villa 2023" />
          <meta
            property="og:description"
            content="Viví la gran fiesta de los Corsos de la Villa 2023 🎭🎉"
          />
          <meta
            property="og:url"
            content="https://corsosvillaascasubi.com.ar/"
          />
          <meta property="og:image" content="/images/socials.jpg" />
          <meta name="twitter:title" content="Corsos de la Villa 2023" />
          <meta
            name="twitter:description"
            content="Viví la gran fiesta de los Corsos de la Villa 2023 🎭🎉"
          />
          <meta name="twitter:image" content="/images/socials.jpg" />
          <meta name="twitter:card" content="summary" />
          <link rel="canonical" href="https://corsosvillaascasubi.com.ar" />
          <meta
            name="apple-mobile-web-app-title"
            content="Votación - Corsos de la Villa 2023"
          />
          <meta
            name="application-name"
            content="Votación - Corsos de la Villa 2023"
          />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="theme-color" content="#ffffff" />
          <title>Votación - Corsos de la Villa 2023</title>
        </Head>
        {isLoading && (
          <div className="modal">
            <div className="lds-ring">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        )}
        <header className="header">
          <Link href="/">
            <div className="logo"></div>
          </Link>
        </header>
        {isSuccess ? (
          <section
            className="headline"
            style={{
              padding: "1em",
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <h1>Gracias por votar</h1>
          </section>
        ) : isSuccess === false ? (
          <>
            <section className="headline">
              <h1>Elige a tu participante favorito en cada categoría</h1>
            </section>
            {!forms["grupo-divertido"] && (
              <div>
                <>
                  <h2 className="form_header">Grupo más divertido</h2>
                  <form
                    onSubmit={(e) => e.preventDefault()}
                    className="content"
                    action="https://send.pageclip.co/DQiU5q6UbkJI6OwuIVbChwXB4lmKYJ2p/votation"
                    id="form"
                    method="post"
                  >
                    {cards &&
                      cards.map((card, i) => (
                        <div className="card" key={i}>
                          <div
                            className="card__image"
                            style={{ overflow: "hidden" }}
                          >
                            <Image
                              layout="fill"
                              className=""
                              src={Photo}
                              alt=""
                            />
                          </div>
                          <div className="card__detail">
                            <h3>{card.title}</h3>
                            <button
                              className="button"
                              id="card"
                              onClick={(e) =>
                                handleSubmit("grupo-divertido", card.title)
                              }
                            >
                              Votar
                            </button>
                          </div>
                        </div>
                      ))}
                  </form>
                </>
              </div>
            )}
            {!forms["mejor-puesta"] && (
              <div>
                <h2 className="form_header">Mejor puesta en escena</h2>
                <form
                  onSubmit={(e) => e.preventDefault()}
                  className="content"
                  action="https://send.pageclip.co/DQiU5q6UbkJI6OwuIVbChwXB4lmKYJ2p/votation"
                  id="form"
                  method="post"
                >
                  {cards &&
                    cards.map((card, i) => (
                      <div className="card" key={i}>
                        <div
                          className="card__image"
                          style={{ overflow: "hidden" }}
                        >
                          <Image
                            layout="fill"
                            className=""
                            src={Photo}
                            alt=""
                          />
                        </div>
                        <div className="card__detail">
                          <h3>{card.title}</h3>
                          <button
                            className="button"
                            id="card"
                            onClick={(e) => {
                              e.preventDefault();
                              handleSubmit("mejor-puesta", card.title);
                            }}
                          >
                            Votar
                          </button>
                        </div>
                      </div>
                    ))}
                </form>
              </div>
            )}
            {!forms["mejor-disfraz"] && (
              <div>
                <h2 className="form_header">Mejor disfraz grupal</h2>
                <form
                  onSubmit={(e) => e.preventDefault()}
                  className="content"
                  action="https://send.pageclip.co/DQiU5q6UbkJI6OwuIVbChwXB4lmKYJ2p/votation"
                  id="form"
                  method="post"
                >
                  {cards &&
                    cards.map((card, i) => (
                      <div className="card" key={i}>
                        <div
                          className="card__image"
                          style={{ overflow: "hidden" }}
                        >
                          <Image
                            layout="fill"
                            className=""
                            src={Photo}
                            alt=""
                          />
                        </div>
                        <div className="card__detail">
                          <h3>{card.title}</h3>
                          <button
                            className="button"
                            id="card"
                            onClick={(e) => {
                              e.preventDefault();
                              handleSubmit("mejor-disfraz", card.title);
                            }}
                          >
                            Votar
                          </button>
                        </div>
                      </div>
                    ))}
                </form>
              </div>
            )}
          </>
        ) : null}
        <footer className="footer">
          <div className="sponsors"></div>
        </footer>
      </>
    );
};

export default Votation;
