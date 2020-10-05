<template lang="pug">
  v-container#Properties
    div.inner-container.mb-9
      v-row.h-100(no-gutters)
        div
          .font-black.text-subtitle-1.text-uppercase.mb-3.mb-md-6 Properties
          .body-1 Each and every property have it’s own selling point and challenges. With the right marketing strategy and network combined with our unique skill set, we are confident to sell for you - FAST and PROFITABLE!
    client-only
      VueSlickCarousel(
        v-bind='slickOptions'
      )
        div.slide-item.property_item.mr-6(v-for="item in items")
          div.property_banner.d-inline-block
              div.font-black.text-h3 SOLD
              div.font-black.text-h3.text-subtitle-1 {{ item.description }}
          v-img.property_image(
            cover,
            :aspect-ratio="aspectRatio",
            :src="require(`~/assets/images/Properties/${item.image}`)",
          )
            v-row.lightbox.white--text.fill-height(align='end', no-gutters)
              v-col.pa-0
                .property_description.text-subtitle-1.font-black.mb-0 {{ item.title }}

        template(#prevArrow="arrowOption")
          .custom-class
            v-icon mdi-arrow-left

        template(#nextArrow="arrowOption")
          .custom-class
            v-icon mdi-arrow-right


</template>

<script>
import { viewport } from '@/mixins';

export default {
  mixins: [viewport],
  data: () => ({
    slickOptions: {
      arrows: true,
      // autoplay: true,
      autoplaySpeed: 3000,
      dots: true,
      infinite: true,
      pauseOnFocus: true,
      slidesToShow: 3,
      speed: 1000,
      speed: 500,
      responsive: [
        {
          breakpoint: 1919,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            dots: false,
          },
        },
      ],
    },
    items: [
      {
        title: 'Blk 106D Punggol (High floor)',
        description: 'In 3 viewings',
        image: 'blk106dPgHiFlr/106D-Punggol-Field-Hougang-Punggol-Sengkang-Singapore.jpg',
      },
      {
        title: 'Blk 106 Sergangoon North (Low floor)',
        description: 'In 2 months',
        image: 'blk106SrgnNrthLowFlr/106-Serangoon-North.jpg',
      },
      {
        title: 'Blk 131 Ang Mo Kio (Low floor)',
        description: 'In 1 month',
        image: 'blk131AmkLowFlr/131-Ang-Mo-Kio-Avenue-3-Ang-Mo-Kio-Bishan-Thomson-Singapore.jpg',
      },
      {
        title: 'Blk 157C Sengkang (High floor)',
        description: 'In 2 weeks',
        image: 'blk157cSKHiFlr/157C-Rivervale-Crescent-Hougang-Punggol-Sengkang-Singapore.jpg',
      },
      {
        title: 'Blk 162B Punggol (High floor)',
        description: 'In 3 viewings',
        image: 'blk172bPGHiFlr/172B-Edgedale-Plains-Hougang-Punggol-Sengkang-Singapore.jpg',
      },
      {
        title: 'Blk 205 Toa Payoh (Mid floor)',
        description: 'In 1 viewings',
        image: 'blk205TPYMidFlr/205-Toa-Payoh-North-Balestier.jpg',
      },
      {
        title: 'Blk 210 Jurong East (Mid floor)',
        description: 'In 1 month',
        image: 'blk210JEMidFlr/210-Jurong-East-Street-21-Boon-Lay-Jurong-Tuas-Singapore.jpg',
      },
      {
        title: 'Blk 256D Punggol (High floor)',
        description: 'In 1 viewing',
        image: 'blk256dPGHiFlr/256D-Sumang-Walk-Hougang-Punggol-Sengkang-Singapore.jpg',
      },
      {
        title: 'Blk 266C Sengkang (High floor)',
        description: 'In 3 viewings',
        image: 'blk266cSKHiFlr/266C-Compassvale-Bow-Hougang-Punggol-Sengkang-Singapore.jpg',
      },
      {
        title: 'Blk 304 Sembawang (Mid floor)',
        description: 'In 2 months',
        image: 'blk304SBWMidFlr/304-Canberra-Road-Sembawang.jpg',
      },
      {
        title: 'Blk 312 Jurong East (Mid floor)',
        description: 'In 4 viewings',
        image: 'blk312JEMidFlr/312-Jurong-East-Street-32-Boon-Lay.jpg',
      },
      {
        title: 'Blk 401 Sembawang (Low floor)',
        description: 'In 1 month',
        image: 'blk401SBWLowFlr/401-Admiralty-Link-Sembawang-Yishun-Singapore.jpg',
      },
      {
        title: 'Blk 423 Yishun (High floor)',
        description: 'In 2 months',
        image: 'blk423YishunHiFlr/423-Yishun-Avenue-11-Sembawang-Yishun-Singapore.jpg',
      },
      {
        title: 'Blk 49 Whampoa (High floor)',
        description: 'In 2 weeks',
        image: 'blk49WhampoaHiFlr/49-Whampoa-South-Balestier-Toa-Payoh-Singapore.jpg',
      },
      {
        title: 'Blk 601 Ang Mo Kio (Mid floor)',
        description: 'In 2 months',
        image: 'blk601AmkMidFlr/601-Ang-Mo-Kio-Avenue-5-Ang-Mo-Kio-Bishan-Thomson-Singapore.jpg',
      },
      {
        title: 'Blk 653B Jurong West (High floor)',
        description: 'In 1 week',
        image: 'blk653bJWHiFlr/653B-Jurong-West-Street-61-Boon-Lay.jpg',
      },
      {
        title: 'Blk 681 Race Course Road (Low floor)',
        description: 'In 1 month',
        image: 'blk681RCLowFloor/681-Race-Course-Road-Farrer-Park-Serangoon-Rd-Singapore.jpg',
      },
      {
        title: 'Blk 75 Whampoa (Low floor)',
        description: 'In 1 viewing',
        image: 'blk75WhampoaLowFlr/75-Whampoa-Drive-Balestier-Toa-Payoh-Singapore.jpg',
      },
    ],
  }),

  computed: {
    imageWidth() {
      if (this.viewWidth < 960) {
        const width = this.viewWidth * 0.8;

        return width > 335 ? 335 : width;
      }

      return this.viewWidth * 0.42;
    },

    aspectRatio() {
      if (this.imageWidth < 335) {
        return 1;
      }

      return 1.4;
    },
  },
};
</script>

<style lang="scss">
  .slide-item {
    outline: none !important;
  }

  #Properties {
    margin-bottom: 64px;

    .property {
      &_item {
        position: relative;
        padding-left: 0.5rem;
      }

      &_banner {
        background-color: #001E83;
        box-shadow: 0px 3px 10px #00004D;
        color: white;
        padding: 1rem 3rem;
        position: absolute;
        margin-top: 1.25rem;
        margin-left: -0.5rem;
        z-index:1 ;
      }

      &_description {
        background-color: #001E83;
        color: white;
        padding: 1.5rem 0 1.5rem 3rem;
      }

      &_item .col {
        padding: 35px 25px;
        margin: 0 auto;
      }
    }
  }
</style>
