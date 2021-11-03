import React from "react";
import ContactHeader from "../components/contact/ContactHeader";
import ContactBody from "../components/contact/ContactBody";
export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <ContactHeader />
      <ContactBody />
    </div>
  );
}
