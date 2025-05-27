"use client";

import Image from "next/image";

export default function MobileMockup() {
  return (
    <div className="relative flex justify-center items-center w-[390px] h-[426px] md:w-[666px] md:h-[679px]">
      <Image
        src="/images/phone-mockup.png"
        alt="Mobile App Mockup"
        fill
        sizes="(min-width: 768px) 666px, 390px"
        className="object-contain"
        priority={false}
      />
    </div>
  );
}
