import React from "react";
import { Helmet } from "react-helmet";

const PageOffreMysql = () => {
  return (
    <div className="flex flex-col justify-center justify-items-center">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Offre base de données | WenDev</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <section className="mb-20" aria-label="Titre et présentation du service">
        <div
          className="relative overflow-hidden bg-no-repeat bg-cover"
          style={{
            backgroundPosition: "50%",
            backgroundImage:
              "url('https://images.pexels.com/photos/10325707/pexels-photo-10325707.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
            height: "500px",
          }}
        >
          <div
            className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.65)" }}
          >
            <div className="flex justify-center items-center h-full">
              <div className="text-center text-white px-6 md:px-12">
                <h2 className="font-quicksand text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12">
                  Création, paramétrage et modélisation de
                  <br />
                  <span className="text-pink">
                    bases de données personnalisées avec MySQL
                  </span>
                </h2>
                <p className="font-light text-white sm:text-xl dark:text-black">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Optio, praesentium. Minus quis sapiente, a assumenda nemo
                  saepe error magni provident omnis. Quaerat quod fuga ea porro
                  hic facilis accusantium cumque?
                  <br /> Alors cette offre est faite pour toi ! <br />
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <h3 className="text-pink text-2xl text-center mb-6">Tarifs</h3>
      <section></section>
    </div>
  );
};

export default PageOffreMysql;
