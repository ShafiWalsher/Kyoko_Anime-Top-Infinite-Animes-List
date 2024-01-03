"use server";

import AnimeCard, { AnimeProp } from "@/components/AnimeCard";

export const fetchAnime = async (pageNo: number) => {
  try {
    const response = await fetch(
      `https://api.jikan.moe/v4/top/anime?page=${pageNo}&limit=12`
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch data. Status: ${response.status}`);
    }

    const responseData = await response.json();
    const data = responseData.data;

    return data.map((item: AnimeProp, index: number) => (
      <AnimeCard key={item.mal_id} anime={item} index={index} />
    ));
  } catch (error) {
    // console.error("Error fetching anime:", error.message);
    throw error;
  }
};
