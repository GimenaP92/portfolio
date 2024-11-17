"use client"
import ContactMeComponent from '@/components/ContactMeComponent';
import React, { useState } from 'react';

export default function Page() {
  const [showContactCard, setShowContactCard] = useState(true); 

  const handleClose = () => {
    setShowContactCard(false); 
  };

  return (
    <>
      {showContactCard && <ContactMeComponent onClose={handleClose} />} 
    </>
  );
}
