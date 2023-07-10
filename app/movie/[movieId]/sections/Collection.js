"use client";

import getCollection from "@/apis/getCollection";
import ShowCarousel from "@/components/ShowCarousel";
import React, { useEffect, useState } from "react";

export default function Collection({ collectionInfo }) {
  const [collection, setCollection] = useState(null);

  const handleCollection = async (collectionInfo) => {
    const res = await getCollection(collectionInfo.id);
    if (res.success === true) {
      setCollection(res.data);
    }
  };

  useEffect(() => {
    handleCollection(collectionInfo);
  }, [collectionInfo]);

  return (
    <>
      {collection && (
        <ShowCarousel
          heading={collectionInfo.name}
          textColor="text-white"
          textBefore="before:bg-white"
          backgroundImage={collectionInfo.backdrop_path ? `url(https://image.tmdb.org/t/p/w1440_and_h320_multi_faces${collectionInfo.backdrop_path})` : "transparent"}
          bgPosition="bg-center"
          bgSize="bg-cover"
          bgColor="bg-black/80"
          bgAttachment="bg-fixed"
          shows={collection.parts}
          showType="movie"
        />
      )}
    </>
  );
}