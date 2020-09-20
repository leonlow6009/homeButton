<template lang="pug">
  v-container#Properties
    div.inner-container.mb-9
      v-row.h-100(no-gutters)
        div
          .font-black.text-subtitle-1.text-uppercase.mb-3.mb-md-6 Properties
          .body-1 Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.

    div.property_list
      div.property_item.mr-6(v-for="item in items")
        div.property_banner.d-inline-block
            div.font-black.text-h3 SOLD
            div.font-black.text-h3.text-subtitle-1 {{ item.description }}
        v-img.property_image(
          cover,
          :aspect-ratio="aspectRatio",
          :min-width="imageWidth",
          :src="item.image",
        )
          v-row.lightbox.white--text.fill-height(align='end', no-gutters)
            v-col.pa-0
              .property_description.text-subtitle-1.font-black.white--text.mb-0 {{ item.title }}


</template>

<script>
import { viewport } from '@/mixins';

export default {
  mixins: [viewport],
  data: () => ({
    items: [
      {
        title: 'Blk 196 Punggol (High floor)',
        description: 'In 1 viewings',
        image: '/images/Properties/blk106dPgHiFlr/106D-Punggol-Field-Hougang-Punggol-Sengkang-Singapore.jpg',
      },
      {
        title: 'Blk 106 Sergangoon North (Low floor)',
        description: 'In 3 viewings',
        image: '/images/Properties/blk106SrgnNrthLowFlr/106-Serangoon-North.jpg',
      },
      {
        title: 'Blk 131 Ang Mo Kio (Low floor)',
        description: 'In 2 viewings',
        image: '/images/Properties/blk131AmkLowFlr/131-Ang-Mo-Kio-Avenue-3-Ang-Mo-Kio-Bishan-Thomson-Singapore.jpg',
      },
      {
        title: 'Blk 157C Seng Keng (High floor)',
        description: 'In 3 viewings',
        image: '/images/Properties/blk157cSKHiFlr/157C-Rivervale-Crescent-Hougang-Punggol-Sengkang-Singapore.jpg',
      },
      {
        title: 'Blk 162B Punggol (High floor)',
        description: 'In 3 viewings',
        image: '/images/Properties/blk172bPGHiFlr/172B-Edgedale-Plains-Hougang-Punggol-Sengkang-Singapore.jpg',
      },
      {
        title: 'Blk 205 Toa Pa Yoh (Mid floor)',
        description: 'In 3 viewings',
        image: '/images/Properties/blk205TPYMidFlr/205-Toa-Payoh-North-Balestier.jpg',
      },
      {
        title: 'Blk 210 Jurong East (Mid floor)',
        description: 'In 3 viewings',
        image: '/images/Properties/blk210JEMidFlr/210-Jurong-East-Street-21-Boon-Lay-Jurong-Tuas-Singapore.jpg',
      },
      {
        title: 'Blk 256D Punggol (High floor)',
        description: 'In 3 viewings',
        image: '/images/Properties/blk256dPGHiFlr/256D-Sumang-Walk-Hougang-Punggol-Sengkang-Singapore.jpg',
      },
      {
        title: 'Blk 266C Seng Keng (High floor)',
        description: 'In 3 viewings',
        image: '/images/Properties/blk266cSKHiFlr/266C-Compassvale-Bow-Hougang-Punggol-Sengkang-Singapore.jpg',
      },
      {
        title: 'Blk 304 Sembawang (Mid floor)',
        description: 'In 3 viewings',
        image: '/images/Properties/blk304SBWMidFlr/304-Canberra-Road-Sembawang.jpg',
      },
      {
        title: 'Blk 312 Jurong East (Mid floor)',
        description: 'In 3 viewings',
        image: '/images/Properties/blk312JEMidFlr/312-Jurong-East-Street-32-Boon-Lay.jpg',
      },
      {
        title: 'Blk 401 Sembawang (Low floor)',
        description: 'In 3 viewings',
        image: '/images/Properties/blk401SBWLowFlr/401-Admiralty-Link-Sembawang-Yishun-Singapore.jpg',
      },
      {
        title: 'Blk 423 Yishun (High floor)',
        description: 'In 3 viewings',
        image: '/images/Properties/blk423YishunHiFlr/423-Yishun-Avenue-11-Sembawang-Yishun-Singapore.jpg',
      },
      {
        title: 'Blk 49 Whampoa (High floor)',
        description: 'In 3 viewings',
        image: '/images/Properties/blk49WhampoaHiFlr/49-Whampoa-South-Balestier-Toa-Payoh-Singapore.jpg',
      },
      {
        title: 'Blk 601 Ang Mo Kio (Mid floor)',
        description: 'In 3 viewings',
        image: '/images/Properties/blk601AmkMidFlr/601-Ang-Mo-Kio-Avenue-5-Ang-Mo-Kio-Bishan-Thomson-Singapore.jpg',
      },
      {
        title: 'Blk 653B Jurong West (High floor)',
        description: 'In 3 viewings',
        image: '/images/Properties/blk653bJWHiFlr/653B-Jurong-West-Street-61-Boon-Lay.jpg',
      },
      {
        title: 'Blk 681 Race Course Road (Low floor)',
        description: 'In 3 viewings',
        image: '/images/Properties/blk681RCLowFloor/681-Race-Course-Road-Farrer-Park-Serangoon-Rd-Singapore.jpg',
      },
      {
        title: 'Blk 75 Whampoa (Low floor)',
        description: 'In 3 viewings',
        image: '/images/Properties/blk75WhampoaLowFlr/75-Whampoa-Drive-Balestier-Toa-Payoh-Singapore.jpg',
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
  #Properties {
    margin-bottom: 64px;

    .property {
      &_item {
        position: relative;
        padding-left: 0.5rem;
      }

      &_list {
        display: flex;
        flex-direction: row;
        overflow-x: scroll;

        &::-webkit-scrollbar {
          display: none;
        }
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
        padding-left: 3rem;
        padding-bottom: 2rem;
      }

      &_item .col {
        padding: 35px 25px;
        margin: 0 auto;
      }
    }
  }
</style>
