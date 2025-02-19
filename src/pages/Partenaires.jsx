import React from "react";
import { Helmet } from "react-helmet";
import { Fade } from "react-awesome-reveal";

const Partenaires = () => {
  const partenaires = [
    {
      id: 1,
      name: "Philomène Frébault",
      title: "Philomène Frébault - MasterAutoédition",
      descr:
        "Romancière autoéditée, j’ai créé fin 2023 ma newsletter sur LinkedIn™ afin de guider les auteurs indépendants dans leur aventure éditoriale et entrepreneuriale. La newsletter MasterAutoédition, fondée sur la quête de l’excellence, vous délivre deux fois par mois des clés pour mettre tous les atouts de votre côté et devenir un maître en autoédition. Les démarches administratives, le marketing, le design graphique, le networking et le mindset positif n’auront désormais plus de secrets pour vous !",
      img: "https://i.goopics.net/qrtq6r.png",
      link: "https://www.linkedin.com/newsletters/masterauto%C3%A9dition-7122599472240447488/",
    },
    {
      id: 2,
      name: "GraphArt's",
      title: "GraphArt's - Infographiste metteur en page",
      descr:
        "Je m'appelle Cindy, je suis infographiste metteur en page, je travaille pour toutes les femmes artistes et créatrices fait main. Petit ou gros budget, j'ai à coeur de vous aider à gagner plus de clients et plus de visibilité grâce à des visuels de qualités.",
      offer: "Remise immédiate de 15% pour votre première commande.",
      img: "https://i.goopics.net/968zt6.png",
      link: "https://ccgrapharts.wixsite.com/graphart-s?fbclid=PAAabS0o9R4h8O6PcPrk3b9wd_7fRuM6R12Dk906-KLgD2JXXNW0E9TEtvHr8",
    },
    {
      id: 3,
      name: "Farah D.",
      title:
        "Farah D - Lecture finale, booktrailer et mise en relation",
      descr:
        "Auteure en autoédition, bénéficiez des conseils de Farah sur vos écrits, d'une relecture finale et d'une mise en relation avec l'ensemble de son réseaux de professionnels du livre pour donner vie à votre roman !",
      img: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=144,h=144,fit=crop/mv0LN7ebOPipRqNq/logo_noir-removebg-preview-AMq27aX1WwFE7DKJ.png",
      link: "https://www.farahdauteure.com/prestations-auteurs",
    },
    {
      id: 4,
      name: "Bookstannuaire",
      title: "Répertoire des auteurs et des livres en auto-édition",
      descr:
        "Ce site a été créé dans le but de référencer les auteurs auto-édités, afin de leur donner un peu plus de visibilité. Vous y trouverez des fiches auteurs ainsi que des fiches livres que vous pourrez noter et commenter. Vous pourrez aussi gérer votre collection de livres d’auteurs auto-édités.",
      offer:
        "10% de réduction sur mes offres de services aux auteurs en étant référencé sur ce site.",
      img: "https://annuaire-auto-edites.johnlucas.fr/wp-content/uploads/2024/06/logo-annuaire.png",
      link: "https://annuaire-auto-edites.johnlucas.fr/",
    },
    {
      id: 5,
      name: "François Vanhille - Métavers facile",
      title: "François Vanhille - Métavers facile",
      descr:
        "Architecte métavers 2d, créateur de bureaux et événements virtuels pour le télétravail et les loisirs. Bureau et libraire virtuelle pour les auteurs et artistes autoproduits.",
      offer:
        "10% de réduction à partir de 100€ de commande, sans plafond de vente.",
      img: "https://vanhille.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F7c817013-9bb3-4026-8b4d-2412233dcbfe%2Fprofile-pic4.png?table=block&id=71b7aa7d-9127-4e53-ae63-2af2a669dcb3&spaceId=e4a3b1de-7a81-4268-95d9-73d0920f3acc&width=250&userId=&cache=v2",
      link: "https://www.vanhille.fr",
    },
    {
      id: 6,
      name: "Franck J. Matthews",
      title: "Franck J. Matthews - Coach littéraire",
      descr:
        "Écrivain à plein temps depuis 2020, je publie en moyenne 4 romans par an dans tous les genres de l'imaginaire. En 2023, j'ai décidé de mettre mon expérience à profit pour lancer mon activité de coaching littéraire. Les séances sont destinées aux auteurs.ices débutants ou plus confirmés, aussi bien pour les phases d'écriture et de relecture que pour les étapes de publication et de vente du livre. N'hésitez pas à me contacter si vous souhaitez que je vous accompagne dans votre aventure littéraire, la première séance est gratuite !",
      offer: "Les 3 premières séances de 1h à 30€/heure au lieu de 40€/heure.",
      img: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=534,h=400,fit=crop/AoPZ2xegaQt8NqLy/biographie-m2WBNjpe2buQRBO6.jpg",
      link: "https://www.franckjmatthews.com/coaching-litteraire",
    },
    {
      id: 7,
      name: "Emilie David - ED Multiservices (en langue française)",
      title: "Emilie David - ED Multiservices (en langue française)",
      descr:
        "• Correction : romans, nouvelles, recueils... • Transcription : sous-titres, interviews, enquêtes... • Rédaction : articles, mails, courriers... • Prête-plume : panne d'inspiration, besoin de mettre des idées en ordre, j'écris pour vous à partir de votre idée originale ou de la mienne.",
      offer:
        "5% de réduction sont offerts sur la première prestation en passant par WenDev. Offre non cumulable avec d'autres promotions en cours.",
      img: "https://jimdo-storage.freetls.fastly.net/image/440839526/6e276933-a6a2-4ef8-b865-da9a0b5d4b38.jpg?format=pjpg&quality=80,90&auto=webp&disable=upscale&width=1024&height=1024&trim=67,208,645,204",
      link: "https://ed-multi-services.jimdosite.com/",
    },
    {
      id: 8,
      name: "Fabien Dedieu - CARDEBOOK",
      title: "Fabien Dedieu - CARDEBOOK",
      descr:
        "Cartes personnalisées avec un QR code pour télécharger votre livre au format numérique et audio. Découvrez les Cardebooks !",
      offer: "20% de réduction sur tous les services complet auteurs.",
      img: "https://i.goopics.net/t5h0ss.jpg",
      link: "https://www.cardebook.net",
    },
  ];
  return (
    <div className="font-quicksand">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Partenaires | WenDev</title>
        <link href="https://www.wendev.fr/Partenaires" />
      </Helmet>
      <section aria-label="Bannière de présentation du déroulement d'un projet avec WenDev.">
        <div
          className="relative overflow-hidden bg-no-repeat bg-cover"
          style={{
            backgroundPosition: "50%",
            backgroundImage: "url('https://i.goopics.net/ay4x9z.png')",
            height: "600px",
          }}
        >
          <div
            className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.65)" }}
          >
            <div className="flex justify-center items-center h-full">
              <div className="text-center text-white px-6 md:px-12">
                <h2 className="font-quicksand text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12">
                  Mes partenaires professionnels <br />
                  <strong className="text-pinkDark"> à votre service</strong>
                </h2>
                <p className="pb-10 m-10 tracking-tight text-white sm:text-xl">
                  Chez <strong>Wendev</strong>, j'ai à coeur de travailler avec
                  des personnes de confiance, avec des compétences proches et
                  variées. <br /> Voici la crème de la crème à votre service !
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Fade>
        <div className="font-quicksand max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-2">
          <section className="lg:grid grid-cols-2 gap-4">
            {partenaires.map((partenaire) => (
              <div
                key={partenaire.id}
                className="mt-6 lg:flex items-center	transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 duration-300 overflow-hidden flex flex-col mx-auto max-w-lg text-black bg-real rounded-lg shadow-lg"
              >
                <img
                  src={partenaire.img}
                  alt="Logo du partenaire"
                  className="h-56 mt-6 rounded-lg"
                />
                <h4 className="font-bold text-pinkDark text-xl p-6">
                  {partenaire.title}
                </h4>
                <p className="p-6 tracking-tight text-xl">{partenaire.descr}</p>
                <p className="p-6 font-bold tracking-tight">
                  {partenaire.offer}
                </p>
                <button
                  className="mt-4 mb-6 border shadow-lg bg-real text-pinkDark border-pinkDark font-bold rounded-md p-2 hover:bg-pinkDark hover:text-white"
                  alt="Redirection vers la page du partenaire"
                >
                  <a href={partenaire.link} target="_blank" rel="noreferrer">
                    Visiter son site et découvrir ses prestations
                  </a>
                </button>
              </div>
            ))}
          </section>
        </div>
      </Fade>
    </div>
  );
};

export default Partenaires;
