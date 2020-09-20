<template lang="pug">
  div#MainPage
    v-container.fixed-element
      img.logo(src="/images/logo.png")
      span.text-body-1.bold.contact.white--text.font-heavy +65 9169 6009
      div.controls
        .line.mr-3.d-inline-block(
          v-for='(need, index) in slides',
          :key="'MainCarouselControl' + index",
          :class="{ active: index === value }",
        )
    v-carousel(
      hide-delimiters,
      cycle,
      interval="800000",
      :value="value",
      @change="value = $event",
    )
      v-carousel-item(v-for='(slide, index) in slides', :key="'MainCarousel'+ index")
        template(v-slot:default="")
          div.carousel.h-100
            .overlay
            .carousel-background(
              :style="{ 'background-image': 'url(' + slide.image + ')' }",
            )
            v-container.h-100
              v-row.h-100(no-gutters)
                v-col.carousel-content.h-100(cols="12", sm="6")
                  div.content
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
export default {
  data: () => ({
    value: 0,
    slides: [{
      image: '/images/banner1.png',
      title: 'Find your next perfect place to live',
      description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut.',
      showLink: true,
    }, {
      image: '/images/banner1.png',
      title: 'Find your next perfect place to live',
      description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut.',
    }, {
      image: '/images/banner1.png',
      title: 'Find your next perfect place to live',
      description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut.',
      showLink: true,
    }]
  }),
}
</script>

<style lang="scss">
  #MainPage {
    position: relative;
    height: 100vh;
    .fixed-element {
      position: absolute !important;
      left: 0;
      right: 0;
      top: 4rem;
      height: 100%;
      .logo {
        width: 8rem;
        @media(min-width: 600px) {
          width: 10rem;
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
      height: 100vh !important;

      .v-carousel__item {
        height: 100% !important;
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

        @media (orientation: landscape) and (max-width: 767px) {
          margin-top: 5%;
        }
      }
    }
  }
</style>
