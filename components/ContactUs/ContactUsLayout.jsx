import React from "react";
import ContactUsRightPart from "./ContactUsRightPart";
import ContactUsImg from "./ContactUsImg";

const ContactUsLayout = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-52 px-[5%] lg:pl-[5%]">
      <ContactUsRightPart></ContactUsRightPart>
      <ContactUsImg></ContactUsImg>
    </div>
  );
};

export default ContactUsLayout;
