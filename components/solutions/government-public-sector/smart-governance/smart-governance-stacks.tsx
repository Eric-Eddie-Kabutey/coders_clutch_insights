"use client";
import Typography from "@/components/shared/typography";
import { Button } from "@/components/ui/button";
import { governance_tech_stacks } from "@/constant";
import { ArrowRight, CheckCircle } from "lucide-react";
import React, { useState } from "react";

function SmartGovernanceStacks() {
  const [showAll, setShowAll] = useState(false);
  const displayedChoices = showAll
    ? governance_tech_stacks
    : governance_tech_stacks.slice(0, 3);
  const hasMoreChoices = governance_tech_stacks.length > 3;
  return (
    <div className="w-full md:py-32 py-20 bg-app-gray-bg">
      <section className="max-container 2xl:w-[85%] md:w-[95%] w-[90%] mx-auto">
        <div className="inter xl:pb-12 pb-6 flex flex-col gap-2">
          <Typography typo="header-3-light">Technology</Typography>
          <Typography typo="header-3-semibold" className="!font-bold">
            Stack & Integration
          </Typography>
        </div>
        <div className="w-full flex flex-col border border-dashed border-black rounded-2xl">
          {displayedChoices.map((tech) => (
            <div
              key={tech.id}
              className="w-full py-10 md:px-12 sm:px-8 px-4 flex md:flex-row flex-col gap-6 border-b border-dashed border-black"
            >
              <Typography
                typo="body-large-semibold"
                className="md:w-[25%] w-full"
              >
                {tech.title}
              </Typography>
              <div className="md:flex-1 w-full flex items-center gap-4 flex-wrap">
                {tech.contents.map((data) => (
                  <div
                    key={data}
                    className={`py-2 px-4 flex items-center gap-2 ${
                      tech.id % 2 === 0 ? "bg-[#A2E5CB]" : "bg-white"
                    } rounded-md shadow-md`}
                  >
                    <CheckCircle size={16} />
                    <div>{data}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        {hasMoreChoices && (
          <div className="w-fit mx-auto flex flex-col justify-center mt-4">
            <Button
              variant="ghost"
              className="!p-0 flex items-center gap-2 !text-base text-app-green-text font-semibold"
              onClick={() => setShowAll(!showAll)}
            >
              {showAll ? "View less" : "View more"}
              <ArrowRight size={22} />
            </Button>
            <div className="w-full h-[2px] bg-app-green-text"></div>
          </div>
        )}
      </section>
    </div>
  );
}

export default SmartGovernanceStacks;
