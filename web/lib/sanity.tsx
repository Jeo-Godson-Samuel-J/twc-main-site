"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

export const SANITY_PROJECT_ID = "28l72ny4";
export const SANITY_DATASET = "production";
export const SANITY_API_VERSION = "2024-01-01";

export interface WebsiteImagesData {
  brandLogo?: string;
  homeHeroPoster?: string;
  homePlanVisitImage?: string;
  homeSparkzKidsImage?: string;
  homeBeyondSundaySparkzKids?: string;
  homeBeyondSundayTransitYouth?: string;
  homeBeyondSundayYoungAdults?: string;
  homeBeyondSundayMensFellowship?: string;
  homeBeyondSundayWomensFellowship?: string;
  homeBeyondSundayMidweekPrayer?: string;
  homeMeetPastorsImage?: string;
  aboutHeroCarouselImages?: string[];
  aboutOurStoryPortraitImage?: string;
  aboutOurStoryWorshipImage?: string;
  aboutLeadPastorsImage?: string;
  aboutMissionImage?: string;
  visitHeroBgImage?: string;
  visitSparkzKidsImage?: string;
  watchLatestThumbnail?: string;
  watchRecommendedThumb1?: string;
  watchRecommendedThumb2?: string;
  watchRecommendedThumb3?: string;
  connectSparkKidsImage?: string;
  connectCellGroupsImage?: string;
}

const WEBSITE_IMAGES_QUERY = `*[_type == "websiteImages"][0]{
  "brandLogo": brandLogo.asset->url,
  "homeHeroPoster": homeHeroPoster.asset->url,
  "homePlanVisitImage": homePlanVisitImage.asset->url,
  "homeSparkzKidsImage": homeSparkzKidsImage.asset->url,
  "homeBeyondSundaySparkzKids": homeBeyondSundaySparkzKids.asset->url,
  "homeBeyondSundayTransitYouth": homeBeyondSundayTransitYouth.asset->url,
  "homeBeyondSundayYoungAdults": homeBeyondSundayYoungAdults.asset->url,
  "homeBeyondSundayMensFellowship": homeBeyondSundayMensFellowship.asset->url,
  "homeBeyondSundayWomensFellowship": homeBeyondSundayWomensFellowship.asset->url,
  "homeBeyondSundayMidweekPrayer": homeBeyondSundayMidweekPrayer.asset->url,
  "homeMeetPastorsImage": homeMeetPastorsImage.asset->url,
  "aboutHeroCarouselImages": aboutHeroCarouselImages[].asset->url,
  "aboutOurStoryPortraitImage": aboutOurStoryPortraitImage.asset->url,
  "aboutOurStoryWorshipImage": aboutOurStoryWorshipImage.asset->url,
  "aboutLeadPastorsImage": aboutLeadPastorsImage.asset->url,
  "aboutMissionImage": aboutMissionImage.asset->url,
  "visitHeroBgImage": visitHeroBgImage.asset->url,
  "visitSparkzKidsImage": visitSparkzKidsImage.asset->url,
  "watchLatestThumbnail": watchLatestThumbnail.asset->url,
  "watchRecommendedThumb1": watchRecommendedThumb1.asset->url,
  "watchRecommendedThumb2": watchRecommendedThumb2.asset->url,
  "watchRecommendedThumb3": watchRecommendedThumb3.asset->url,
  "connectSparkKidsImage": connectSparkKidsImage.asset->url,
  "connectCellGroupsImage": connectCellGroupsImage.asset->url
}`;

export async function fetchWebsiteImages(): Promise<WebsiteImagesData> {
  try {
    const apiRes = await fetch("/api/website-images", { cache: "no-store" });
    if (apiRes.ok) {
      const apiJson = await apiRes.json();
      if (apiJson?.result) return apiJson.result;
    }

    const encodedQuery = encodeURIComponent(WEBSITE_IMAGES_QUERY);
    const url = `https://${SANITY_PROJECT_ID}.api.sanity.io/v${SANITY_API_VERSION}/data/query/${SANITY_DATASET}?query=${encodedQuery}`;
    const res = await fetch(url, { cache: "no-store" });
    if (!res.ok) return {};
    const json = await res.json();
    return json?.result || {};
  } catch {
    return {};
  }
}

const WebsiteImagesContext = createContext<WebsiteImagesData>({});

export function WebsiteImagesProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [images, setImages] = useState<WebsiteImagesData>({});

  useEffect(() => {
    fetchWebsiteImages().then((data) => {
      if (data) setImages(data);
    });
  }, []);

  return (
    <WebsiteImagesContext.Provider value={images}>
      {children}
    </WebsiteImagesContext.Provider>
  );
}

export function useWebsiteImages(): WebsiteImagesData {
  return useContext(WebsiteImagesContext);
}
