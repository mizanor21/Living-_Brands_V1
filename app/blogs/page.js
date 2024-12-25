// import Items from "@/components/Items/Items";
import React from "react";
import BlogItems from "../blog-items/page";

const Blogs = () => {
  return (
    <div className="font-sora px-[5%] bg-white relative z-[110] rounded-b-[20px] lg:rounded-b-[40px] py-2 lg:pb-10 xl:pb-14 2xl:pb-20">
      <h1 className="text-2xl lg:text-[48px] font-bold text-[#135c58] text-center mb-10 lg:my-20">
        Blogs
      </h1>
      <BlogItems />
    </div>
  );
};

export default Blogs;
