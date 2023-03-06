'use client'
import { Collections } from "@/utils/prisma";
import { portfolio } from "@prisma/client";
import MainTemplate from "../mainTemplate";

export default function PagePortfolio({ data }: { data: Collections }) {
    const preTags = data.portfolio?.map((ele:portfolio)=>ele.tag);
    const tags = preTags?.filter((item,index)=>preTags.indexOf(item)===index);
    console.log(tags);

    return (
        <MainTemplate
            show={{ opacity: 1, translateY: 0 }}
            hidden={{ opacity: 0, translateY: -300 }}
        >
            <div className="flex justify-center gap-5">
                {
                    tags?.map((ele:string,index)=>(
                        <button key={index} className="bg-gradient-to-r from-[#247BA0] via-[#70C1B3] to-[#B2DBBF] text-white p-3 rounded-full ">
                            {ele}
                        </button>
                    ))
                }
            </div>
        </MainTemplate>
    )
}