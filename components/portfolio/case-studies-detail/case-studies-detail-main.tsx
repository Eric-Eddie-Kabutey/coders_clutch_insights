"use client";
import Typography from "@/components/shared/typography";
import { CaseStudyProp } from "@/type";
import { ArrowLeft, AreaChart, Crown } from "lucide-react";
import Link from "next/link";
import React from "react";

interface CaseStudyDetailMainProps {
  case_study: CaseStudyProp;
}

function CaseStudiesDetailMain({ case_study }: CaseStudyDetailMainProps) {
  return (
    <div className="pops w-full flex flex-col">
      <div className="w-full h-[45vh] max-h-[500px] py-10 bg-[#e6f6d1]">
        <section className="max-container 2xl:w-[85%] md:w-[95%] w-[90%] h-full mx-auto flex flex-col justify-end gap-4">
          <Link
            href="/insights/casestudies"
            className="flex items-center gap-2 text-[#4fce37]"
          >
            <ArrowLeft />
            <span>Back to Case Studies</span>
          </Link>
          <Typography typo="header-1-medium" className="pops">
            {case_study.title} Case study
          </Typography>
        </section>
      </div>
      <div className="w-full py-16 bg-white">
        <section className="max-container 2xl:w-[85%] md:w-[95%] w-[90%] flex md:flex-row flex-col justify-between items-center xl:gap-32 lg:gap-20 gap-12">
          <div className="flex-1 flex flex-col gap-4">
            {case_study.industry && (
              <div className="flex items-center gap-2">
                <AreaChart fill="#33cc33" color="#fff" size={35} />
                <span className="font-medium">{case_study.industry}</span>
              </div>
            )}
            <div className="w-full h-[1px] bg-gray-200"></div>
            {case_study.services && (
              <div className="flex items-center gap-2">
                <Crown fill="#33cc33" color="#fff" size={35} />
                <span className="font-medium">
                  {case_study.services.join(", ")}
                </span>
              </div>
            )}
          </div>
          <div className="flex-1 p-8 border rounded-2xl bg-[#f5fced]">
            <Typography typo="body-small-regular">
              {case_study.description}
            </Typography>
          </div>
        </section>
      </div>
      <div className="w-full py-12 bg-gradient-to-r from-[#f7fff6] via-[#e8fae7] to-[#f7fff6]">
        <section className="max-container 2xl:w-[85%] md:w-[95%] w-[90%]">
          <iframe
            className="w-full xl:min-h-[600px] lg:min-h-[400px] min-h-[300px] h-full rounded-lg"
            src={`${case_study.youtube_url}?autoplay=0`}
            title="title here"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </section>
      </div>
    </div>
  );
}

export default CaseStudiesDetailMain;
