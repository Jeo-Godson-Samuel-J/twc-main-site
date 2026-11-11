import {defineField, defineType} from 'sanity'

export const websiteImages = defineType({
  name: 'websiteImages',
  title: 'Website Images',
  type: 'document',
  groups: [
    {name: 'global', title: '1. Global / Brand', default: true},
    {name: 'home', title: '2. Home Page (/)'},
    {name: 'about', title: '3. About Page (/about)'},
    {name: 'visit', title: '4. Visit Page (/visit)'},
    {name: 'watch', title: '5. Watch Page (/watch)'},
    {name: 'connect', title: '6. Connect Page (/connect)'},
  ],
  fields: [
    // =========================================================================
    // 1. GLOBAL / BRAND
    // =========================================================================
    defineField({
      name: 'brandLogo',
      title: 'Church Logo (Navbar & Footer)',
      description: 'Displayed in the top navigation capsule and footer. Defaults to /logo.png.',
      type: 'image',
      group: 'global',
      options: {hotspot: true},
    }),

    // =========================================================================
    // 2. HOME PAGE (/)
    // =========================================================================
    defineField({
      name: 'homeHeroPoster',
      title: 'Home Hero — Fallback Poster Image',
      description: 'Poster image behind the Home Hero background video (/hero-worship.png).',
      type: 'image',
      group: 'home',
      options: {hotspot: true},
    }),
    defineField({
      name: 'homePlanVisitImage',
      title: 'Home — Plan Your Visit Section Image',
      description: 'Right-side worship photo in the "Join Us On A Sunday / Plan Your Visit" section.',
      type: 'image',
      group: 'home',
      options: {hotspot: true},
    }),
    defineField({
      name: 'homeSparkzKidsImage',
      title: 'Home — Sparkz Kids Portrait Image',
      description: 'Portrait photo in the Sparkz Kids section on the Home page.',
      type: 'image',
      group: 'home',
      options: {hotspot: true},
    }),
    defineField({
      name: 'homeBeyondSundaySparkzKids',
      title: 'Home — Beyond Sunday Tile 1: Sparkz Kids',
      description: 'Background photo for the Sparkz Kids tile in the "Beyond Sunday" grid.',
      type: 'image',
      group: 'home',
      options: {hotspot: true},
    }),
    defineField({
      name: 'homeBeyondSundayTransitYouth',
      title: 'Home — Beyond Sunday Tile 2: Transit Youth',
      description: 'Background photo for the Transit Youth tile in the "Beyond Sunday" grid.',
      type: 'image',
      group: 'home',
      options: {hotspot: true},
    }),
    defineField({
      name: 'homeBeyondSundayYoungAdults',
      title: 'Home — Beyond Sunday Tile 3: Young Adults',
      description: 'Background photo for the Young Adults tile in the "Beyond Sunday" grid.',
      type: 'image',
      group: 'home',
      options: {hotspot: true},
    }),
    defineField({
      name: 'homeBeyondSundayMensFellowship',
      title: "Home — Beyond Sunday Tile 4: Men's Fellowship",
      description: "Background photo for the Men's Fellowship tile in the 'Beyond Sunday' grid.",
      type: 'image',
      group: 'home',
      options: {hotspot: true},
    }),
    defineField({
      name: 'homeBeyondSundayWomensFellowship',
      title: "Home — Beyond Sunday Tile 5: Women's Fellowship",
      description: "Background photo for the Women's Fellowship tile in the 'Beyond Sunday' grid.",
      type: 'image',
      group: 'home',
      options: {hotspot: true},
    }),
    defineField({
      name: 'homeBeyondSundayMidweekPrayer',
      title: 'Home — Beyond Sunday Tile 6: Midweek Prayer Service',
      description: 'Background photo for the Midweek Prayer Service tile in the "Beyond Sunday" grid.',
      type: 'image',
      group: 'home',
      options: {hotspot: true},
    }),
    defineField({
      name: 'homeMeetPastorsImage',
      title: 'Home — Meet Our Pastors Portrait Image',
      description: 'Right-side portrait photo in the "Meet Our Pastors" section on the Home page.',
      type: 'image',
      group: 'home',
      options: {hotspot: true},
    }),

    // =========================================================================
    // 3. ABOUT PAGE (/about)
    // =========================================================================
    defineField({
      name: 'aboutHeroCarouselImages',
      title: 'About Hero — Carousel Slideshow Images',
      description: 'Upload 1 or more images for the automatic crossfade slideshow in the About page hero.',
      type: 'array',
      group: 'about',
      of: [
        {
          type: 'image',
          options: {hotspot: true},
        },
      ],
    }),
    defineField({
      name: 'aboutOurStoryPortraitImage',
      title: 'About — Our Story: Founder / Portrait Image (Top Left)',
      description: 'Portrait photo in the "Our Story — From a Small Prayer Room to a Thriving Family" section.',
      type: 'image',
      group: 'about',
      options: {hotspot: true},
    }),
    defineField({
      name: 'aboutOurStoryWorshipImage',
      title: 'About — Our Story: Worship Gathering Image (Bottom Right)',
      description: 'Secondary overlapping worship photo in the "Our Story" section.',
      type: 'image',
      group: 'about',
      options: {hotspot: true},
    }),
    defineField({
      name: 'aboutLeadPastorsImage',
      title: 'About — Meet Our Lead Pastors Image',
      description: 'Portrait photo of Rev. & Mrs. D. K. Samuels on the About page.',
      type: 'image',
      group: 'about',
      options: {hotspot: true},
    }),
    defineField({
      name: 'aboutMissionImage',
      title: 'About — Mission & Vision Image',
      description: 'Community fellowship photo in the Mission & Vision section on the About page.',
      type: 'image',
      group: 'about',
      options: {hotspot: true},
    }),

    // =========================================================================
    // 4. VISIT PAGE (/visit)
    // =========================================================================
    defineField({
      name: 'visitHeroBgImage',
      title: 'Visit Hero — "Connect with Us" Background Image',
      description: 'Full-width hero background image on the /visit page.',
      type: 'image',
      group: 'visit',
      options: {hotspot: true},
    }),
    defineField({
      name: 'visitSparkzKidsImage',
      title: 'Visit — Sparkz Kids Section Image',
      description: 'Left-side Sparkz Kids portrait photo on the /visit page.',
      type: 'image',
      group: 'visit',
      options: {hotspot: true},
    }),

    // =========================================================================
    // 5. WATCH PAGE (/watch)
    // =========================================================================
    defineField({
      name: 'watchLatestThumbnail',
      title: 'Watch — Main Recent Sermon Video Thumbnail',
      description: 'Full-screen cover thumbnail for the main recent sermon on /watch.',
      type: 'image',
      group: 'watch',
      options: {hotspot: true},
    }),
    defineField({
      name: 'watchRecommendedThumb1',
      title: 'Watch — Recommended Sermon 1 Thumbnail',
      description: 'Thumbnail for the first recommended sermon card on /watch.',
      type: 'image',
      group: 'watch',
      options: {hotspot: true},
    }),
    defineField({
      name: 'watchRecommendedThumb2',
      title: 'Watch — Recommended Sermon 2 Thumbnail',
      description: 'Thumbnail for the second recommended sermon card on /watch.',
      type: 'image',
      group: 'watch',
      options: {hotspot: true},
    }),
    defineField({
      name: 'watchRecommendedThumb3',
      title: 'Watch — Recommended Sermon 3 Thumbnail',
      description: 'Thumbnail for the third recommended sermon card on /watch.',
      type: 'image',
      group: 'watch',
      options: {hotspot: true},
    }),

    // =========================================================================
    // 6. CONNECT PAGE (/connect)
    // =========================================================================
    defineField({
      name: 'connectSparkKidsImage',
      title: 'Connect — Spark Kids Card Background Image',
      description: 'Background image for the large Spark Kids card on /connect.',
      type: 'image',
      group: 'connect',
      options: {hotspot: true},
    }),
    defineField({
      name: 'connectCellGroupsImage',
      title: 'Connect — Cell Groups Card Background Image',
      description: 'Background image for the large Cell Groups card on /connect.',
      type: 'image',
      group: 'connect',
      options: {hotspot: true},
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Website Images',
        subtitle: 'Manage all section images across the Trinity Worship Center website',
      }
    },
  },
})

