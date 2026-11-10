import {defineField, defineType} from 'sanity'

export const websiteImages = defineType({
  name: 'websiteImages',
  title: 'Website Images',
  type: 'document',
  groups: [
    {name: 'global', title: '1. Global / Brand', default: true},
    {name: 'home', title: '2. Home Page'},
    {name: 'about', title: '3. About Page'},
    {name: 'visit', title: '4. Visit Page'},
    {name: 'watch', title: '5. Watch Page'},
    {name: 'connect', title: '6. Connect Page'},
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Panel Title',
      type: 'string',
      initialValue: 'Website Images',
      readOnly: true,
      hidden: true,
    }),

    // ==========================================
    // 1. GLOBAL / BRAND
    // ==========================================
    defineField({
      name: 'brandLogo',
      title: 'Website Logo (Navbar & Footer)',
      description: 'Circular logo displayed in the top Navbar and bottom Footer.',
      type: 'image',
      group: 'global',
      options: {hotspot: true},
    }),

    // ==========================================
    // 2. HOME PAGE (/)
    // ==========================================
    defineField({
      name: 'homeHeroPoster',
      title: 'Home — Hero Video Poster Image',
      description: 'Fallback/poster image for the Home page Hero background video.',
      type: 'image',
      group: 'home',
      options: {hotspot: true},
    }),
    defineField({
      name: 'homePlanVisitImage',
      title: 'Home — Plan Your Visit ("Everyone Is Welcome Here" Portrait)',
      description: 'Portrait photo in Section 2 of the Home page.',
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
      title: 'Home — Beyond Sunday Tile 01: Sparkz Kids',
      description: 'Tile image for Sparkz Kids in the Beyond Sunday grid.',
      type: 'image',
      group: 'home',
      options: {hotspot: true},
    }),
    defineField({
      name: 'homeBeyondSundayTransitYouth',
      title: 'Home — Beyond Sunday Tile 02: Transit Youth',
      description: 'Tile image for Transit Youth in the Beyond Sunday grid.',
      type: 'image',
      group: 'home',
      options: {hotspot: true},
    }),
    defineField({
      name: 'homeBeyondSundayYoungAdults',
      title: 'Home — Beyond Sunday Tile 03: Young Adults',
      description: 'Tile image for Young Adults in the Beyond Sunday grid.',
      type: 'image',
      group: 'home',
      options: {hotspot: true},
    }),
    defineField({
      name: 'homeBeyondSundayMensFellowship',
      title: 'Home — Beyond Sunday Tile 04: Men’s Fellowship',
      description: 'Tile image for Men’s Fellowship in the Beyond Sunday grid.',
      type: 'image',
      group: 'home',
      options: {hotspot: true},
    }),
    defineField({
      name: 'homeBeyondSundayWomensFellowship',
      title: 'Home — Beyond Sunday Tile 05: Women’s Fellowship',
      description: 'Tile image for Women’s Fellowship in the Beyond Sunday grid.',
      type: 'image',
      group: 'home',
      options: {hotspot: true},
    }),
    defineField({
      name: 'homeBeyondSundayMidweekPrayer',
      title: 'Home — Beyond Sunday Tile 06: Midweek Prayer',
      description: 'Tile image for Midweek Prayer in the Beyond Sunday grid.',
      type: 'image',
      group: 'home',
      options: {hotspot: true},
    }),
    defineField({
      name: 'homeMeetPastorsImage',
      title: 'Home — Meet Our Pastors Portrait Image',
      description: 'Portrait photo of Pastors Praveen & Pratima David on the Home page.',
      type: 'image',
      group: 'home',
      options: {hotspot: true},
    }),

    // ==========================================
    // 3. ABOUT PAGE (/about)
    // ==========================================
    defineField({
      name: 'aboutHeroCarouselImages',
      title: 'About — Hero Curved-Arc Carousel Images (Up to 6 Photos)',
      description: 'Photos scrolling in the curved-arc carousel at the top of the /about page.',
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
      title: 'About — Our Story So Far Portrait Image',
      description: 'Portrait photo in the "Our Story So Far" section on /about.',
      type: 'image',
      group: 'about',
      options: {hotspot: true},
    }),
    defineField({
      name: 'aboutOurStoryWorshipImage',
      title: 'About — Called to Love Mogappair Landscape Image',
      description: 'Landscape worship photo in the second half of the Our Story section on /about.',
      type: 'image',
      group: 'about',
      options: {hotspot: true},
    }),
    defineField({
      name: 'aboutLeadPastorsImage',
      title: 'About — Lead Pastors Portrait Image',
      description: 'Portrait photo in the "Lead Pastors" section on /about.',
      type: 'image',
      group: 'about',
      options: {hotspot: true},
    }),
    defineField({
      name: 'aboutMissionImage',
      title: 'About — Mission CTA Landscape Image',
      description: 'Landscape community photo in the bottom "Evangelize, Empower, Educate" card on /about.',
      type: 'image',
      group: 'about',
      options: {hotspot: true},
    }),

    // ==========================================
    // 4. VISIT PAGE (/visit)
    // ==========================================
    defineField({
      name: 'visitHeroBgImage',
      title: 'Visit — Hero Background Image ("Connect with Us")',
      description: 'Full-screen hero background image on the /visit page.',
      type: 'image',
      group: 'visit',
      options: {hotspot: true},
    }),
    defineField({
      name: 'visitSparkzKidsImage',
      title: 'Visit — Sparkz Kids Portrait Image',
      description: 'Portrait photo in the Sparkz Kids section on the /visit page.',
      type: 'image',
      group: 'visit',
      options: {hotspot: true},
    }),

    // ==========================================
    // 5. WATCH PAGE (/watch)
    // ==========================================
    defineField({
      name: 'watchLatestThumbnail',
      title: 'Watch — Main Recent Sermon Video Thumbnail',
      description: 'Full-screen thumbnail image for the main recent sermon on /watch.',
      type: 'image',
      group: 'watch',
      options: {hotspot: true},
    }),
    defineField({
      name: 'watchRecommendedThumb1',
      title: 'Watch — Recommended Sermon 1 Thumbnail',
      description: 'Thumbnail image for the 1st recommended sermon video on /watch.',
      type: 'image',
      group: 'watch',
      options: {hotspot: true},
    }),
    defineField({
      name: 'watchRecommendedThumb2',
      title: 'Watch — Recommended Sermon 2 Thumbnail',
      description: 'Thumbnail image for the 2nd recommended sermon video on /watch.',
      type: 'image',
      group: 'watch',
      options: {hotspot: true},
    }),
    defineField({
      name: 'watchRecommendedThumb3',
      title: 'Watch — Recommended Sermon 3 Thumbnail',
      description: 'Thumbnail image for the 3rd recommended sermon video on /watch.',
      type: 'image',
      group: 'watch',
      options: {hotspot: true},
    }),

    // ==========================================
    // 6. CONNECT PAGE (/connect)
    // ==========================================
    defineField({
      name: 'connectSparkKidsImage',
      title: 'Connect — Spark Kids Card Image',
      description: 'Background image for the Spark Kids card on /connect.',
      type: 'image',
      group: 'connect',
      options: {hotspot: true},
    }),
    defineField({
      name: 'connectCellGroupsImage',
      title: 'Connect — Cell Groups Card Image',
      description: 'Background image for the Cell Groups card on /connect.',
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

