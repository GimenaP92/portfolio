import React from 'react';
import Image from 'next/image';

const BackgroundImage = () => {
  return (
    <div className="relative w-full h-screen">
      <Image
        src="https://res.cloudinary.com/dbtfna8ev/image/upload/c_fill,w_2560,h_1440/v1728960769/andrew-neel-cckf4TsHAuw-unsplash_hctkwa.jpg"
        alt="Imagen de fondo"
        fill
        style={{ objectFit: 'cover', objectPosition: 'center' }}
        className="opacity-80"
      />
    </div>
  );
};

export default BackgroundImage;
