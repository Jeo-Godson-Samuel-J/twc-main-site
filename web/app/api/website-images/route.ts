import { NextResponse } from "next/server";

const SANITY_PROJECT_ID = "28l72ny4";
const SANITY_DATASET = "production";
const SANITY_API_VERSION = "2024-01-01";

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

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const encodedQuery = encodeURIComponent(WEBSITE_IMAGES_QUERY);
    const url = `https://${SANITY_PROJECT_ID}.api.sanity.io/v${SANITY_API_VERSION}/data/query/${SANITY_DATASET}?query=${encodedQuery}`;
    const res = await fetch(url, { cache: "no-store" });
    if (!res.ok) {
      return NextResponse.json({ result: {} }, { status: 200 });
    }
    const json = await res.json();
    return NextResponse.json({ result: json?.result || {} }, { status: 200 });
  } catch {
    return NextResponse.json({ result: {} }, { status: 200 });
  }
}

