"use client";

import Image from "next/image";
import { useState } from "react";
import { Triangle } from "react-loader-spinner";

export default function ProjectImage({
  ProjectImage,
  ProjectName,
  ProjectClassification,
}: {
  ProjectImage: string;
  ProjectName: string;
  ProjectClassification: string;
}) {
  const [loading, setLoading] = useState(true);

  return (
    <div className="aspect-square bg-gray-900 mb-3  overflow-hidden relative">
        <div style={loading ? {} : { opacity: 0 }} className="w-full h-full grid place-content-center transition-opacity duration-500 bg-cyan-100 absolute top-0 left-0 z-10">
          <Triangle
            height="60"
            width="60"
            color="#22d3ee"
            ariaLabel="triangle-loading"
            visible={true}
          />
        </div>
      <Image
        src={ProjectImage}
        alt={ProjectName}
        fill
        className="object-cover w-full h-full group-hover:scale-101 transition-transform"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        onLoad={() => {
          setLoading(false);
          console.log("loaded");
        }}
      />
      <div className="absolute inset-0 bg-linear-to-r from-cyan-400/20 via-purple-500/10 to-transparent" />
      <div className="absolute top-2 right-2 text-xs text-cyan-400 bg-black/50 px-2 py-1 rounded">
        IMG_{String(ProjectName).substring(0, 10)}
      </div>
      <div className="absolute bottom-2 left-2 text-xs text-yellow-400 bg-black/50 px-2 py-1 rounded">
        {ProjectClassification}
      </div>
    </div>
  );
}
