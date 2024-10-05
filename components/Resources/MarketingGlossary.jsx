import ButtonEffect from "@/app/button/page";
import React from "react";
import { MdOutlineArrowRightAlt } from "react-icons/md";

const MarketingGlossary = () => {
  return (
    <div>
      {" "}
      <div className="mt-16 md:mt-32 font-sora">
        <div className="grid gap-5 mb-8 sm:grid-cols-1 md:grid-cols-2 ">
          <div className="flex justify-center items-center">
            <img
              src="https://cdn.prod.website-files.com/64081b3f2fda69c80b5566e5/6478761f1963c3bee625bc80_the%20Edge-Marketing%20Glossary-p-1080.png"
              alt="Img2"
              className="rounded-lg "
            />
          </div>
          <div>
            <h1 className="text-2xl font-bold mt-1  md:text-3Xl lg:text-[48px] text-[#125b5c] mb-8">
              Living Brand&apos;s Marketing Glossary
            </h1>
            <p className="text-[15px]	">
              We work in a constantly changing field. As both consumers and the
              platforms they interact with evolve at a rapid pace, there are new
              concepts and theories coming up every day. It can feel
              intimidating to keep track of what things actually mean,
              especially for young joineees.
            </p>
            <br />
            <p className="text-[15px]	">
              So we created this Marketing Glossary to familiarize you with the
              most important terms that you’ll regularly hear and use in the
              field. It includes industry jargon and terminologies from all
              branches, including copywriting, social media, graphic design,
              SEO, paid media, video editing, animation and more.
            </p>

            {/* <button className="border  hidden md:block p-3 px-14 rounded-full overflow-hidden transition-transform duration-300 hover:cursor-pointer   text-sm hover:bg-white hover:text-black border-black text-white  bg-[#125b5c] mt-5">
              Access Living Brand&apos;s Glossary →
            </button> */}
            <div className="max-w-sm mt-10">
              <ButtonEffect>
                <span className="flex gap-2">
                  Access Living Brand&apos;s Glossary
                  <MdOutlineArrowRightAlt className="text-xl" />
                </span>
              </ButtonEffect>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketingGlossary;
