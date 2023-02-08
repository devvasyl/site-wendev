import React from "react";
// import Airtable from "../components/AirtableForm";
import Calendly from "../components/Calendly";
import JotformContact from "../components/JotformContact";

const Contact = () => {
  return (
    <div className="lg:grid grid-cols-2 gap-2">
      {/* <Airtable /> */}
      <JotformContact />
      <div className="flex flex-col ">
        <Calendly />
        <button className="w-96 mb-6 self-center	 text-white bg-pink hover:bg-pinkDark font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white">
          <a href="" alt="Redirection vers le formulaire de demande de devis">
            Demande un devis sans prendre de rendez-vous
          </a>
        </button>
      </div>
    </div>
  );
};

export default Contact;
