import React from "react";
import ClearIcon from "@mui/icons-material/Clear";
import CheckIcon from "@mui/icons-material/Check";
import AddIcon from "@mui/icons-material/Add";
import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";
// Based on : https://flowbite.com/blocks/marketing/pricing/

const OffresAuteurs = () => {
  return (
    <section
      className="bg-white dark:bg-black font-quicksand"
      aria-label="Offre de services spécialisée pour les auteurs de livres"
    >
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-pinkDark dark:text-white">
            Mon offre spéciale auteurs
          </h2>
          <p className="mb-5 font-light text-black sm:text-xl dark:text-black">
            Tu écris des livres et tu souhaites avoir un site web professionnel
            dédié à ton activité ? <br /> Moi aussi, je suis auteure et suis
            passée par là.
            <br /> Alors cette offre est faite pour toi ! <br />
          </p>
        </div>
        <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
          {/* OFFRE 1 */}
          <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 duration-300 overflow-hidden flex flex-col p-6 text-center text-black bg-real rounded-md shadow-md dark:border-black xl:p-8 dark:bg-black dark:text-white">
            <h3 className="mb-4 text-2xl font-semibold">Basic</h3>
            <div className="flex justify-center items-baseline my-8">
              <span className="mr-2 text-5xl font-extrabold">60€</span>
            </div>
            <ul className="mb-8 space-y-4 text-left">
              <li className="flex items-center space-x-3">
                <CheckIcon style={{ color: "limegreen" }} />
                <span>1 en-tête/header</span>
              </li>
              <li className="flex items-center space-x-3">
                <CheckIcon style={{ color: "limegreen" }} />
                <span>1 section "A propos"</span>
              </li>
              <li className="flex items-center space-x-3">
                <CheckIcon style={{ color: "limegreen" }} />
                <span>1 section par livre paru</span>
              </li>
              <li className="flex items-center space-x-3">
                <CheckIcon style={{ color: "limegreen" }} />
                <span>1 pied-de-page/footer avec réseaux sociaux</span>
              </li>
              <li className="flex items-center space-x-3">
                <CheckIcon style={{ color: "limegreen" }} />
                <span>1 page de mentions légales aux normes RGPD </span>
              </li>
              <li className="flex items-center space-x-3">
                <CheckIcon style={{ color: "limegreen" }} />
                <span>
                  Site réactif{" "}
                  <span className="font-semibold">
                    (adapté aux différentes tailles d'écran)
                  </span>
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <CheckIcon style={{ color: "limegreen" }} />
                <span>Gestion de l'accessibilité</span>
              </li>
              <li className="flex items-center space-x-3">
                <CheckIcon style={{ color: "limegreen" }} />
                <span>Mise en avant sur mes réseaux sociaux</span>
              </li>
              <li className="flex items-center space-x-3">
                <ClearIcon style={{ color: "red" }} />
                <span>Pas de menu de navigation</span>
              </li>
              <li className="flex items-center space-x-3">
                <ClearIcon style={{ color: "red" }} />
                <span>Paramètres minimums de SEO</span>
              </li>
              <li className="flex items-center space-x-3">
                <ClearIcon style={{ color: "red" }} />
                <span>Pas d'hébergement du site</span>
              </li>

              <li className="flex items-center space-x-3">
                <ClearIcon style={{ color: "red" }} />
                <span>Pas de nom de domaine (url non personnalisable)</span>
              </li>
            </ul>
            <a
              href="#"
              className="text-white bg-pink hover:bg-pinkDark font-medium rounded-md shadow-md text-sm px-5 py-2.5 text-center dark:text-white"
            >
              C'est parti !
            </a>
          </div>
          {/* OFFRE 2 */}
          <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 duration-300 overflow-hidden flex flex-col p-16  max-w-xl text-center text-white bg-purpleDark rounded-md shadow-md shadow-xl dark:border-black xl:p-8 dark:bg-black dark:text-white">
            <h3 className="mb-4 text-2xl font-semibold text-real">Medium</h3>
            <p className="text-pink sm:text-lg font-bold dark:text-white">
              Formule la plus populaire !
            </p>

            <div className="flex justify-center items-baseline my-8">
              <span className="mr-2 text-5xl font-extrabold text-pink">
                90€
              </span>
            </div>
            <ul className="mb-8 space-y-4 text-left">
              <li className="flex items-center space-x-3">
                <CheckIcon style={{ color: "limegreen" }} />
                <span>1 en-tête/header</span>
              </li>
              <li className="flex items-center space-x-3">
                <CheckIcon style={{ color: "limegreen" }} />
                <span>1 section "A propos"</span>
              </li>
              <li className="flex items-center space-x-3">
                <CheckIcon style={{ color: "limegreen" }} />
                <span>1 section par livre paru</span>
              </li>
              <li className="flex items-center space-x-3">
                <CheckIcon style={{ color: "limegreen" }} />
                <span>
                  1 section au choix parmi :{" "}
                  <span className="font-semibold">
                    Avis des lecteurs, chroniques, lien vers le blog, flux
                    Instagram, vidéo, extraits du livre, actualité{" "}
                  </span>
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <CheckIcon style={{ color: "limegreen" }} />
                <span>1 pied-de-page/footer avec réseaux sociaux</span>
              </li>
              <li className="flex items-center space-x-3">
                <CheckIcon style={{ color: "limegreen" }} />
                <span>1 page de mentions légales aux normes RGPD </span>
              </li>
              <li className="flex items-center space-x-3">
                <CheckIcon style={{ color: "limegreen" }} />
                <span>
                  Site réactif{" "}
                  <span className="font-semibold">
                    (adapté aux différentes tailles d'écran)
                  </span>
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <CheckIcon style={{ color: "limegreen" }} />
                <span>
                  Animations au défilement, sur les boutons et les images
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <CheckIcon style={{ color: "limegreen" }} />
                <span>Gestion de l'accessibilité</span>
              </li>
              <li className="flex items-center space-x-3">
                <CheckIcon style={{ color: "limegreen" }} />
                <span>Mise en avant sur mes réseaux sociaux</span>
              </li>
              <li className="flex items-center space-x-3">
                <CheckIcon style={{ color: "limegreen" }} />
                <span>Mise en avant permanente sur mon site</span>
              </li>
              <li className="flex items-center space-x-3">
                <CheckIcon style={{ color: "limegreen" }} />
                <span>Modification gratuite 1x/an</span>
              </li>
              <li className="flex items-center space-x-3">
                <CheckIcon style={{ color: "limegreen" }} />
                <span>Mise en avant sur mes réseaux sociaux</span>
              </li>
              <li className="flex items-center space-x-3">
                <ClearIcon style={{ color: "red" }} />
                <span>Pas de menu de navigation</span>
              </li>
              <li className="flex items-center space-x-3">
                <ClearIcon style={{ color: "red" }} />
                <span>Paramètres minimums de SEO</span>
              </li>
              <li className="flex items-center space-x-3">
                <AddIcon style={{ color: "magenta" }} />
                <span>
                  Gestion de l'hébergement du site avec nom de domaine
                  personnalisé : <span className="font-semibold">+10€/an</span>
                </span>
              </li>
            </ul>
            <a
              href="#"
              className="text-purple bg-real hover:bg-white shadow-md rounded-md font-medium  text-sm px-5 py-2.5 text-center dark:text-white"
            >
              C'est parti !
            </a>
          </div>
          {/* OFFRE 3 */}
          <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 duration-300 overflow-hidden flex flex-col p-6 mx-auto max-w-lg text-center text-black bg-real rounded-md shadow-md shadow-md dark:border-black xl:p-8 dark:bg-black dark:text-white">
            <h3 className="mb-4 text-2xl font-semibold">Premium !</h3>
            <div className="flex justify-center items-baseline my-8">
              <span className="mr-2 text-5xl font-extrabold">160€</span>
            </div>
            <ul className="mb-8 space-y-4 text-left">
              <li className="flex items-center space-x-3">
                <CheckIcon style={{ color: "limegreen" }} />
                <span>1 en-tête/header</span>
              </li>
              <li className="flex items-center space-x-3">
                <CheckIcon style={{ color: "limegreen" }} />
                <span>1 section + 1 page "A propos"</span>
              </li>
              <li className="flex items-center space-x-3">
                <CheckIcon style={{ color: "limegreen" }} />
                <span>1 section + 1 page par livre paru</span>
              </li>
              <li className="flex items-center space-x-3">
                <CheckIcon style={{ color: "limegreen" }} />
                <span>
                  Nombre de sections et pages illimité parmi :{" "}
                  <span className="font-semibold">
                    Avis des lecteurs, chroniques, lien vers le blog, flux
                    Instagram, vidéo, extraits du livre, actualité{" "}
                  </span>
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <CheckIcon style={{ color: "limegreen" }} />
                <span>1 page de contact avec formulaire</span>
              </li>
              <li className="flex items-center space-x-3">
                <CheckIcon style={{ color: "limegreen" }} />
                <span>1 pied-de-page/footer avec réseaux sociaux</span>
              </li>
              <li className="flex items-center space-x-3">
                <CheckIcon style={{ color: "limegreen" }} />
                <span>1 page de mentions légales aux normes RGPD </span>
              </li>
              <li className="flex items-center space-x-3">
                <CheckIcon style={{ color: "limegreen" }} />
                <span>1 page d'erreur 404 avec redirection</span>
              </li>
              <li className="flex items-center space-x-3">
                <CheckIcon style={{ color: "limegreen" }} />
                <span>
                  Site réactif{" "}
                  <span className="font-semibold">
                    (adapté aux différentes tailles d'écran)
                  </span>
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <CheckIcon style={{ color: "limegreen" }} />
                <span>
                  Animations au défilement, sur les boutons et les images
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <CheckIcon style={{ color: "limegreen" }} />
                <span>Gestion de l'accessibilité</span>
              </li>
              <li className="flex items-center space-x-3">
                <CheckIcon style={{ color: "limegreen" }} />
                <span>Mise en avant sur mes réseaux sociaux</span>
              </li>
              <li className="flex items-center space-x-3">
                <CheckIcon style={{ color: "limegreen" }} />
                <span>Menu de navigation</span>
              </li>
              <li className="flex items-center space-x-3">
                <CheckIcon style={{ color: "limegreen" }} />
                <span>Mockups gratuits</span>
              </li>
              <li className="flex items-center space-x-3">
                <CheckIcon style={{ color: "limegreen" }} />
                <span>Optimisation des paramètres de SEO</span>
              </li>
              <li className="flex items-center space-x-3">
                <CheckIcon style={{ color: "limegreen" }} />
                <span>
                  Gestion de l'hébergement avec nom de domaine personnalisé,
                  gratuit pendant 1 an
                  <AddIcon style={{ color: "magenta" }} />
                  <span className="font-semibold">
                    reconductible pour 10€/an
                  </span>
                </span>
              </li>
            </ul>
            <a
              href="#"
              className="text-white bg-pink hover:bg-pinkDark font-medium rounded-md shadow-md text-sm px-5 py-2.5 text-center dark:text-white"
            >
              C'est parti !
            </a>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <button className="mb-12 border border-pinkDark bg-real font-bold rounded-md shadow-md mt-2 p-2 hover:bg-pinkDark">
          {" "}
          <AutoFixHighIcon />
          Je suis auteur.e et j'ai une demande spéciale
        </button>
      </div>
    </section>
  );
};

export default OffresAuteurs;
