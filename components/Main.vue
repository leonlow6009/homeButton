<template lang="pug">
  div#MainPage(ref="mainWrapper")
    v-container.fixed-element(v-resize="calculateContainerHeight")
      img.logo(ref="logo", :src="require('~/assets/images/logo.svg')")
      span.text-body-1.bold.contact.white--text.font-heavy +65 8838 9441
      div.controls(ref="controls")
        .line.mr-3.d-inline-block(
          v-for='(need, index) in slides',
          :class="{ active: index === value }",
          :key="'MainCarouselControl' + index",
        )
    v-carousel(
      hide-delimiters,
      cycle,
      interval="15000",
      :show-arrows='false',
      :value="value",
      :height="minHeight",
      @change="value = $event",
    )
      v-carousel-item(v-for='(slide, index) in slides', :key="'MainCarousel'+ index")
        template(v-slot:default="")
          div.carousel
            .overlay
            .carousel-background(
              :style="[slide.styles, { 'background-image': 'url(' + require(`~/assets/images/${slide.image}`) + ')' }]",
            )
            .carousel-background-mobile(
              :style="[slide.mobileStyle, { 'background-image': 'url(' + require(`~/assets/images/${slide.mobileImage}`) + ')' }]",
            )
            v-container.h-100
              v-row(
                no-gutters,
                :style="{ height: minHeight }",
              )
                v-col.carousel-content.h-100(cols="12", sm="6")
                  div.content(ref="content", :style="[viewWidth < 426 ? slide.mobileContentStyle : {}]")
                    .text-h3.mb-2.mb-md-3.title-regular {{ slide.title }}
                    .text-body-1.mb-5.mb-md-10.font-light {{ slide.description }}
                    v-btn.text-body-1.ma-0.ml-n4(
                      text,
                      color="white",
                      v-if="slide.showLink",
                      v-scroll-to="{ el: '#GetInTouch', duration: 800 }",
                      :ripple="false",
                    )
                      |  Discover
                      v-icon.text-body-1(right) mdi-arrow-right

</template>

<script>
import { viewport } from '@/mixins';

export default {
  mixins: [viewport],
  data: () => ({
    minHeight: '100vh',
    value: 0,
    resize_timeout: null,
    slides: [
      {
        image: 'banner2.png',
        mobileImage: 'banner2_M.png',
        title: 'Owning a home is a keystone of wealth',
        description: 'Housing is one of the most important assert we have in our life time. Contact me now, for a non-obligation discussion on your property queries.',
        styles: { 'background-position': 'right' },
        mobileStyle: { 'background-position': 'right' },
        mobileContentStyle: { 'margin-top': '10rem' },
        showLink: true,
      },
      {
        image: 'banner1.png',
        mobileImage: 'banner1.png',
        title: 'Find your next perfect place to live',
        description: "You can save alot of time and resources with the right property moves, we believe in adding values to every client's property needs.",
        styles: {},
        mobileStyle: {},
        mobileContentStyle: {},
        showLink: true,
      },
    ]
  }),
  mounted() {
    this.calculateContainerHeight();
  },

  methods: {
    calculateContainerHeight() {
      if (this.resize_timeout) {
        clearTimeout(this.resize_timeout);
      }

      this.resize_timeout = setTimeout(() => {
        const logoHeight = this.$refs.logo.clientHeight;
        const controlHeight = this.$refs.controls.clientHeight;
        const contentHeight = this.$refs.content[this.value].clientHeight;
        const wrapperHeight = this.$refs.mainWrapper.clientHeight;

        let dynamicHeight = 100;
        if (this.viewWidth > 959) {
          dynamicHeight = 150;
        }
        if (this.viewWidth > 1279) {
          dynamicHeight = 250;
        }

        const height = logoHeight + controlHeight + contentHeight + dynamicHeight;
        this.minHeight = height > this.viewHeight ? `${height}px` : '100vh';
      }, 100);
    },
  },
}
</script>

<style lang="scss">
  #MainPage {
    position: relative;
    .fixed-element {
      position: absolute !important;
      left: 0;
      right: 0;
      top: 4rem;
      height: 100%;
      .logo {
        width: 4rem;
        @media(min-width: 960px) {
          width: 5rem;
        }

        position: absolute;
        left: 0;
        z-index:1;
      }

      .contact {
        position: absolute;
        right: 0;
        z-index:1; 
      }

      .controls {
        position: absolute;
        left: 0;
        bottom: 6rem;
        z-index: 1;

        .line {
          width: 2rem;
          border-bottom: 2px solid #777777;

          &.active {
            width: 4rem;
            border-bottom: 2px solid white;
          }
        }
      }
    }

    .overlay {
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.7);
      z-index: 1;

      @media (max-width: 600px) {
        right: 0%;
      }

      @media (min-width: 500px) and (max-width: 1439px) {
        right: 30%; 
      }

      right: 50%;
    }

    .v-carousel {
      // height: 100vh !important;

      .v-carousel__item {
        // height: 100% !important;
      }
    }

    .carousel {
      .container {
        z-index: 2;
        position: relative;
        height: 100vh;
      }

      &-background {
        width: 100%;
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        z-index: 0; 
        background-size: cover;

        display: none;
        @media (min-width: 426px) {
          display: block;
        }
      }

      &-background-mobile {
        width: 100%;
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        z-index: 0; 
        background-size: cover;
        display: block;
        @media (min-width: 426px) {
          display: none;
        }
      }

      &-content {
        display: flex;
        justify-content: center;
        flex-direction: column;
        color: white !important;
        height: 100%;

        @media (min-width: 500px) and (max-width: 1439px) {
          max-width: 70% !important;
          flex: 0 0 70% !important;
        }

        @media (min-width: 500px) {
          padding-right: 5%;
        }

        margin-top: 5%;
      }
    }
  }
</style>
