import React from "react";
import ClearIcon from "@mui/icons-material/Clear";
import CheckIcon from "@mui/icons-material/Check";
import AddIcon from "@mui/icons-material/Add";
// import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";

// Based on : https://flowbite.com/blocks/marketing/pricing/

const OffresSite = () => {
  return (
    <section aria-label="Offre de services de création et de refonte de site web">
      <div className="py-8 px-4 lg:py-16 lg:px-6">
        <Fade>
          <div className="space-y-8 lg:grid lg:grid-cols-4 sm:gap-4 xl:gap-4 lg:space-y-0">
            {/* OFFRE 1 */}
            <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 duration-300 overflow-hidden flex flex-col p-6 text-center text-black bg-real rounded-md shadow-lg xl:p-8">
              <h3 className="mb-4 text-2xl font-semibold">
                Site vitrine no-code
              </h3>
              <div className="flex justify-center items-baseline my-8">
                <span className="mr-2 text-5xl font-extrabold text-pinkDark">
                  250€
                </span>
              </div>
              <ul className="mb-8 space-y-4 text-left">
                <li className="flex items-center space-x-3">
                  <CheckIcon style={{ color: "limegreen" }} />
                  <span>Personnalisation avec votre contenu (à fournir)</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckIcon style={{ color: "limegreen" }} />
                  <span>
                    Nombre de pages : <span className="font-bold">1 à 3</span>
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                    <CheckIcon style={{ color: "limegreen" }} />
                    <span>
                      1 page ou section de contact avec formulaire et redirection
                      automatique des messages sur votre boîte mail
                    </span>
                  </li>
                <li className="flex items-center space-x-3">
                  <CheckIcon style={{ color: "limegreen" }} />
                  <span>
                    Site réactif (adapté aux différentes tailles d'écran)
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckIcon style={{ color: "limegreen" }} />
                  <span>
                    Gestion de l'accessibilité (Site web accessible aux
                    personnes atteintes de handicap)
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckIcon style={{ color: "limegreen" }} />
                  <span>
                    Mise en place des paramètres de référencement (SEO) de base
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckIcon style={{ color: "limegreen" }} />
                  <span>Page de mentions légales/RGPD</span>
                </li>
                <li className="flex items-center space-x-3">
                  <ClearIcon style={{ color: "red" }} />
                  <span>Pas de page d'erreur 404 avec redirection</span>
                </li>

                <li className="flex items-center space-x-3">
                  <CheckIcon style={{ color: "limegreen" }} />
                  <span>Mise en avant sur mes réseaux sociaux</span>
                </li>
                <li className="flex items-center space-x-3">
                  <ClearIcon style={{ color: "red" }} />
                  <span>Pas de maquette</span>
                </li>
                <li className="flex items-center space-x-3">
                  <ClearIcon style={{ color: "red" }} />
                  <span>Pas de code source</span>
                </li>
                <li>
                  <AddIcon style={{ color: "magenta" }} />
                  <span>
                    Nom de domaine personnalisé et hébergement pour 1 an,
                    renouvelable : 15€/an, en supplément. Sinon, url non
                    personnalisable, par défaut.
                  </span>
                </li>
                {/* <li className="flex items-center space-x-3">
                  <AccessTimeIcon style={{ color: "magenta" }} />
                  <span>
                    Délai de création :{" "}
                    <span className="font-bold">3 jours</span>
                  </span>
                </li> */}
              </ul>
              <Link
                to="/Contact"
                className="mt-10 border shadow-lg bg-real text-pinkDark border-pinkDark font-bold rounded-md p-2 hover:bg-pinkDark hover:text-white"
              >
                C'est parti !
              </Link>
            </div>
            {/* OFFRE 2 */}
            <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 duration-300 overflow-hidden flex flex-col p-6 text-center text-black bg-real rounded-md shadow-lg xl:p-8">
              <h3 className="mb-4 text-2xl font-semibold">Basique</h3>
              <div className="flex justify-center items-baseline my-8">
                <span className="text-pinkDark mr-2 text-5xl font-extrabold">
                  650€
                </span>
              </div>
              <ul className="mb-8 space-y-4 text-left">
                <li className="flex items-center space-x-3">
                  <CheckIcon style={{ color: "limegreen" }} />
                  <span>Personnalisation avec votre contenu (à fournir)</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckIcon style={{ color: "limegreen" }} />
                  <span>
                    Nombre de pages : <span className="font-bold">3 à 5</span>
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckIcon style={{ color: "limegreen" }} />
                  <span>
                    Site réactif (adapté aux différentes tailles d'écran)
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckIcon style={{ color: "limegreen" }} />
                  <span>
                    Gestion de l'accessibilité (Site web accessible aux
                    personnes atteintes de handicap)
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <ClearIcon style={{ color: "red" }} />
                  <span>
                    Mise en place des paramètres de référencement (SEO){" "}
                    <span className="font-semibold">de base</span>
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckIcon style={{ color: "limegreen" }} />
                  <span>Page de mentions légales/RGPD</span>
                </li>
                <li className="flex items-center space-x-3">
                  <ClearIcon style={{ color: "red" }} />
                  <span>Pas de page d'erreur 404 avec redirection</span>
                </li>

                <li className="flex items-center space-x-3">
                  <CheckIcon style={{ color: "limegreen" }} />
                  <span>Mise en avant sur mes réseaux sociaux</span>
                </li>
                <li className="flex items-center space-x-3">
                  <ClearIcon style={{ color: "red" }} />
                  <span>Pas de maquette</span>
                </li>
                <li className="flex items-center space-x-3">
                  <ClearIcon style={{ color: "red" }} />
                  <span>Pas de code source</span>
                </li>
                <li>
                  <AddIcon style={{ color: "magenta" }} />
                  <span>
                    Nom de domaine personnalisé et hébergement pour 1 an,
                    renouvelable : 15€/an, en supplément{" "}
                  </span>
                </li>
                {/* <li className="flex items-center space-x-3">
                  <AccessTimeIcon style={{ color: "magenta" }} />
                  <span>
                    Délai de création :{" "}
                    <span className="font-bold">5 jours</span>
                  </span>
                </li> */}
              </ul>
              <Link
                to="/Contact"
                className="mt-10 border shadow-lg bg-real text-pinkDark border-pinkDark font-bold rounded-md p-2 hover:bg-pinkDark hover:text-white"
              >
                C'est parti !
              </Link>
            </div>
            {/* OFFRE 3 */}
            <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 duration-300 overflow-hidden flex flex-col p-6 text-center text-black bg-real rounded-md shadow-lg xl:p-8">
              <h3 className="mb-4 text-2xl font-semibold">Standard</h3>
              <div className="flex justify-center items-baseline my-8">
                <span className="text-pinkDark mr-2 text-5xl font-extrabold">
                  2000€
                </span>
              </div>
              <ul className="mb-8 space-y-4 text-left">
                <li className="flex items-center space-x-3">
                  <CheckIcon style={{ color: "limegreen" }} />
                  <span>Personnalisation avec votre contenu (à fournir)</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckIcon style={{ color: "limegreen" }} />
                  <span>
                    Nombre de pages : <span className="font-bold">5 à 10</span>
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckIcon style={{ color: "limegreen" }} />
                  <span>
                    Site réactif (adapté aux différentes tailles d'écran)
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckIcon style={{ color: "limegreen" }} />
                  <span>
                    Gestion de l'accessibilité (Site web accessible aux
                    personnes atteintes de handicap)
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <ClearIcon style={{ color: "red" }} />
                  <span>
                    Mise en place des paramètres de référencement (SEO){" "}
                    <span className="font-semibold">de base</span>
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckIcon style={{ color: "limegreen" }} />
                  <span>Page de mentions légales/RGPD</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckIcon style={{ color: "limegreen" }} />
                  <span>Page d'erreur 404 avec redirection</span>
                </li>

                <li className="flex items-center space-x-3">
                  <CheckIcon style={{ color: "limegreen" }} />
                  <span>Mise en avant sur mes réseaux sociaux</span>
                </li>
                <li className="flex items-center space-x-3">
                  <ClearIcon style={{ color: "red" }} />
                  <span>Pas de maquette</span>
                </li>
                <li className="flex items-center space-x-3">
                  <ClearIcon style={{ color: "red" }} />
                  <span>Pas de code source</span>
                </li>
                <li>
                  <AddIcon style={{ color: "magenta" }} />
                  <span>
                    Nom de domaine personnalisé et hébergement pour 1 an,
                    renouvelable : 15€/an, en supplément{" "}
                  </span>
                </li>
                {/* <li className="flex items-center space-x-3">
                  <AccessTimeIcon style={{ color: "magenta" }} />
                  <span>
                    Délai de création :{" "}
                    <span className="font-bold">7 à 10 jours jours</span>
                  </span>
                </li> */}
              </ul>
              <Link
                to="/Contact"
                className="mt-10 border shadow-lg bg-real text-pinkDark border-pinkDark font-bold rounded-md p-2 hover:bg-pinkDark hover:text-white"
              >
                C'est parti !
              </Link>
            </div>
            {/* OFFRE 4 */}
            <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 duration-300 overflow-hidden flex flex-col p-6 text-center text-black bg-real rounded-md shadow-lg">
              <h3 className="mb-4 text-2xl font-semibold">Premium</h3>
              <div className="flex justify-center items-baseline my-8">
                <span className="text-pinkDark mr-2 text-5xl font-extrabold">
                  3500€
                </span>
              </div>
              <ul className="mb-8 space-y-4 text-left">
                <li className="flex items-center space-x-3">
                  <CheckIcon style={{ color: "limegreen" }} />
                  <span>Personnalisation avec votre contenu (à fournir)</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckIcon style={{ color: "limegreen" }} />
                  <span>
                    Nombre de pages :{" "}
                    <span className="font-bold">Illimité</span>
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                    <CheckIcon style={{ color: "limegreen" }} />
                    <span>
                      1 page de contact avec formulaire et redirection
                      automatique des messages sur votre boîte mail
                    </span>
                  </li>
                <li className="flex items-center space-x-3">
                  <CheckIcon style={{ color: "limegreen" }} />
                  <span>
                    Site réactif (adapté aux différentes tailles d'écran)
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckIcon style={{ color: "limegreen" }} />
                  <span>
                    Gestion de l'accessibilité (Site web accessible aux
                    personnes atteintes de handicap)
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckIcon style={{ color: "limegreen" }} />
                  <span>
                    Mise en place des paramètres de référencement (SEO) de base
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckIcon style={{ color: "limegreen" }} />
                  <span>Page de mentions légales/RGPD</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckIcon style={{ color: "limegreen" }} />
                  <span>Page d'erreur 404 avec redirection</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckIcon style={{ color: "limegreen" }} />
                  <span>
                    Modules et widgets en fonction de vos besoins (ex : prise de
                    rendez-vous, cookies, carte, etc.)
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckIcon style={{ color: "limegreen" }} />
                  <span>Mise en avant sur mes réseaux sociaux</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckIcon style={{ color: "limegreen" }} />
                  <span>Maquette</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckIcon style={{ color: "limegreen" }} />
                  <span>Code source</span>
                </li>
                <li>
                  <AddIcon style={{ color: "magenta" }} />
                  <span>
                    Nom de domaine personnalisé et hébergement pour 1 an,
                    renouvelable : 15€/an, en supplément{" "}
                  </span>
                </li>
                {/* <li className="flex items-center space-x-3">
                  <AccessTimeIcon style={{ color: "magenta" }} />
                  <span>
                    Délai de création :{" "}
                    <span className="font-bold">En fonction de la demande</span>
                  </span>
                </li> */}
              </ul>
              <Link
                to="/Contact"
                className="mt-10 border shadow-lg bg-real text-pinkDark border-pinkDark font-bold rounded-md p-2 hover:bg-pinkDark hover:text-white"
              >
                C'est parti !
              </Link>
            </div>
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default OffresSite;
