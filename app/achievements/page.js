import React from "react";
import ButtonEffect from "../button/page";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import Link from "next/link";

const Achievement = () => {
  return (
    <div className="bg-white relative z-[110] grid grid-cols-1 lg:gap-y-20 py-10 lg:py-20 font-sora">
      <div className="grid gap-5 mb-8 sm:grid-cols-1 md:grid-cols-2 px-[5%]">
        <div className="order-last md:order-first">
          <h1 className="text-2xl font-bold mt-1 md:text-3Xl lg:text-[48px] text-[#125b5c] mb-8">
            Flames Awards Asia 2024
          </h1>
          <p className="text-[18px]   text-justify">
            An unprecedented victory at the renowned FLAME Awards Asia 2024,
            with an impressive haul of Fourteen awards: Five Golds, Three
            Silvers, Two Bronzes, and Four Certificates of Merit. This
            extraordinary feat showcases the company&apos;s exceptional talent,
            innovative strategies, and unwavering commitment to excellence.
          </p>
          <br />
          <p className="text-[18px]  text-justify">
            The FLAME Awards Asia, a globally recognized platform honoring
            outstanding achievements in marketing, advertising, and digital
            media, attracted a competitive pool of entries from across the
            continent.
          </p>
          <br />
          <p className="text-[18px]  text-justify">
            An unprecedented victory at the renowned FLAME Awards Asia 2024,
            with an impressive haul of Fourteen awards: Five Golds, Three
            Silvers, Two Bronzes, and Four Certificates of Merit. This
            extraordinary feat showcases the company&apos;s exceptional talent,
            innovative strategies, and unwavering commitment to excellence.
          </p>
          <br />
          <p className="text-[18px]  text-justify">
            The FLAME Awards Asia, a globally recognized platform honoring
            outstanding achievements in marketing, advertising, and digital
            media, attracted a competitive pool of entries from across the
            continent.
          </p>
          {/* <button className="border hidden md:block p-3 px-14 rounded-full overflow-hidden transition-transform duration-300 text-sm hover:bg-white hover:text-black border-black text-white bg-[#125b5c] mt-5">
            Access Living Brand&apos;s Bots →
          </button> */}
          <Link href={""}>
            <div className="max-w-sm mt-10">
              <ButtonEffect>
                <span className="flex gap-2">
                  Access Living Brand&apos;s Bots{" "}
                  <MdOutlineArrowRightAlt className="text-xl" />
                </span>
              </ButtonEffect>
            </div>
          </Link>
        </div>
        <div className="order-first md:order-last flex justify-center items-center">
          <img
            src="https://i.postimg.cc/ydkH14dY/award.jpg"
            alt="Img"
            className="rounded-lg "
          />
        </div>
      </div>
      <div className="grid gap-16 mb-8 sm:grid-cols-1 md:grid-cols-2 px-[5%] ">
        <div className="order-first md:order-last flex justify-center items-center">
          <img
            src="https://i.postimg.cc/65D5bPWK/achievement1.png"
            alt="Img"
            className="rounded-lg "
          />
        </div>
        <div className="flex items-center order-last">
          <div className="order-last">
            <h1 className="text-2xl font-bold mt-1 md:text-3Xl lg:text-[48px] text-[#125b5c] mb-8">
              Digital Marketing Awards 2022
            </h1>
            <p className="text-[18px]  text-justify">
              A DMA Silver win in the &apos;Best Digital Campaign by New
              Agency&apos; category at the Digital Marketing Award 2022 for our
              innovative project, Pusti Home Chef.
            </p>
            <br />
            <p className="text-[18px]  text-justify">
              The Digital Marketing Awards Bangladesh (DMA), organized by
              Bangladesh Brand Forum, is a prestigious platform that recognizes
              and celebrates excellence in the digital marketing industry in
              Bangladesh. The awards are a testament to the creativity,
              innovation, and strategic thinking that drive successful digital
              campaigns.
            </p>
            <br />

            <p className="text-[18px]  text-justify">
              A DMA Silver win in the &apos;Best Digital Campaign by New
              Agency&apos; category at the Digital Marketing Award 2022 for our
              innovative project, Pusti Home Chef.
            </p>
            <br />
            <p className="text-[18px]  text-justify">
              The Digital Marketing Awards Bangladesh (DMA), organized by
              Bangladesh Brand Forum, is a prestigious platform that recognizes
              and celebrates excellence in the digital marketing industry in
              Bangladesh. The awards are a testament to the creativity,
              innovation, and strategic thinking that drive successful digital
              campaigns.
            </p>

            <Link href={""}>
              <div className="max-w-sm mt-10">
                <ButtonEffect>
                  <span className="flex gap-2">
                    Access Living Brand&apos;s Bots{" "}
                    <MdOutlineArrowRightAlt className="text-xl" />
                  </span>
                </ButtonEffect>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="grid gap-5 mb-8 sm:grid-cols-1 md:grid-cols-2 px-[5%]">
        <div className="order-last md:order-first">
          <h1 className="text-2xl font-bold mt-1 md:text-3Xl lg:text-[48px] text-[#125b5c] mb-8">
            Commwards 2022
          </h1>
          <p className="text-justify text-[18px]">
            At Commwards 2022, a recognition in the &apos;Outdoor&apos; category
            for the successful launch of the PUMA Dhanmondi Store. Commwards,
            organized by Bangladesh Brand Forum, is a prestigious platform that
            recognizes and celebrates excellence in the field of communications
            in Bangladesh. The Commwards recognition not only validates the
            success of the PUMA Dhanmondi Store launch but also showcases the
            agency&apos;s expertise in outdoor advertising. This achievement
            serves as an inspiration for other brands and agencies to leverage
            outdoor advertising as a powerful tool to reach and engage their
            target audience.
          </p>
          <Link href={""}>
            <div className="max-w-sm mt-10">
              <ButtonEffect>
                <span className="flex gap-2">
                  Access Living Brand&apos;s Bots{" "}
                  <MdOutlineArrowRightAlt className="text-xl" />
                </span>
              </ButtonEffect>
            </div>
          </Link>
        </div>
        {/* <div className="order-first md:order-last flex justify-center items-center">
          <img
            src="https://i.postimg.cc/ydkH14dY/award.jpg"
            alt="Img"
            className="rounded-lg "
          />
        </div> */}
      </div>
    </div>
  );
};

export default Achievement;
