import ButtonEffect from "@/app/button/page";
import Link from "next/link";
import React from "react";
import { MdOutlineArrowRightAlt } from "react-icons/md";

const BotArmy = () => {
  return (
    <div>
      <div className="font-sora">
        <div className="grid gap-5 mb-8 sm:grid-cols-1 md:grid-cols-2">
          <div className="order-last md:order-first">
            <h1 className="text-2xl font-bold mt-1 md:text-3Xl lg:text-[48px] text-[#125b5c] mb-8">
              Living Brand&apos;s Bot Army
            </h1>
            <p className="text-[15px]">
              We strongly believe that AI won’t replace human beings but people
              using AI will certainly get ahead in the race. So we created an
              army of 20 custom AI Bots to help Living Brand&apos;s mine
              insights, brainstorm campaign ideas, and refine their content.
            </p>
            <br />
            <p className="text-[15px]">
              Our efficient super-assistants can help with everything from
              dissecting the target audience for your brand to writing captions
              and scripts for ads. They can also help with operational tasks
              like generating appropriate questions to help us get clearer
              briefs from clients and breaking down large projects into action
              plans that enable us to achieve results fast.
            </p>
            <br />
            <p className="text-[15px]">
              Fascinated by the possibilities? We&apos;re inviting you to take
              them for a spin now!
            </p>
            <div className="max-w-sm mt-10">
              <Link href={""}>
                <ButtonEffect>
                  <span className="flex gap-2">
                    Access Living Brand&apos;s Glossary
                    <MdOutlineArrowRightAlt className="text-xl" />
                  </span>
                </ButtonEffect>
              </Link>
            </div>
          </div>
          <div className="order-first md:order-last flex justify-center items-center">
            <img
              src="https://i.postimg.cc/vmVgb88X/the-edge-1.png"
              alt="Img"
              className="rounded-lg "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BotArmy;
