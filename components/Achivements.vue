<template lang="pug">
  div
    div#MidBanner
      v-container
        .mini-inner-container.text-center
          .text-h5.white--text.mb-7.mb-md-14.title-regular Want to sell your property in a most efficient way?
          .text-body-1.white--text.mb-5.mb-md-9.font-light Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata.
          v-btn.text-body-1(
            text,
            v-scroll-to="{ el: '#GetInTouch', duration: 800 }",
            color="white",
            :ripple="false",
          )
            |  Contact
            v-icon.text-body-1(right) mdi-arrow-right
    div#Achivements.text-center
      v-container
        div.inner-container
          .font-black.text-subtitle-1.text-uppercase Achivements
          v-row
            v-col(cols="12", sm="4")
              .text-h2.primary--text.title-bold 30
              .text-subtitle-1.font-roman Properties have been sold
            v-col(cols="12", sm="4")
              .text-h2.primary--text.title-bold TOP
              .text-subtitle-1.font-roman Achiever in Sep, Oct, and Dec 2019
            v-col(cols="12", sm="4")
              .text-h2.primary--text.title-bold 5
              .text-subtitle-1.font-roman Years of experience
    div#Needs
      v-container
        div.inner-container
          v-row.needs_main-row(no-gutter)
            v-col.my-auto(cols="12", md="5")
              div
                .text-subtitle-1.font-black.mb-5.mb-md-10.bold.text-uppercase Tailoring to your needs
                .text-body-1.mb-5.mb-md-10 Every client profile is unique, meaning sometimes the standard portfolio might not quite match. Let us plan according to your property needs - ensuring a smooth transition.
                v-btn.text-body-1.font-heavy.ma-0.ml-n4(
                  text,
                  v-scroll-to="{ el: '#GetInTouch', duration: 800 }",
                  color="primary",
                  :ripple="false",
                )
                  |  LET'S HAVE A TALK
                  v-icon.text-body-1(right) mdi-arrow-right
            v-col.needs_icons(cols="12", md="7")
              v-row
                v-col(
                  v-for="(need, index) in needs",
                  :key="'need' + index",
                  cols="6",
                  sm="4",
                )
                  div.needs-icon(
                    :class="{ 'needs-icon-desktop': isDesktop }",
                    @click="showDialog(index)",
                  )
                    div.needs-icon-image
                      img(:src="'svg/'+ need.image")
                    .needs_description.text-subtitle-1.font-roman {{ need.title }}

    v-dialog(
      v-model="dialog",
      content-class="needs-carousel",
    )
      v-carousel(
        hide-delimiters,
        :show-arrows='false',
        :value="value",
        @change="value = $event",
      )
        v-carousel-item(v-for='(need, index) in needs', :key="'carousel'+ index")
          template(v-slot:default="")
            v-row.text-center.text-md-left
              v-col.py-0.py-md-3(cols="12", md="3")
                img(:src="'svg/'+ need.image")
              v-col(cols="12", md="9")
                .font-black.text-subtitle-1 {{ need.title }}
                .text-body-1.text-left {{ need.description }}
      div.controls.d-flex.align-center.justify-center
        v-icon.arrows.selector(@click="navigate(false)") mdi-chevron-left-circle
        
        v-icon.selector(
          x-small,
          v-for='(need, index) in needs', 
          :key="'carouselControl'+ index"
          @click="value = index",
        ) {{ index === value ? 'mdi-checkbox-blank-circle' : 'mdi-checkbox-blank-circle-outline' }}

        v-icon.arrows(@click="navigate(true)") mdi-chevron-right-circle



</template>

<script>
import { viewport } from '@/mixins';

export default {
  mixins: [viewport],
  mounted() {
    this.isDesktop = this.$device.isDesktop;
  },

  data: () => ({
    value: 0,
    dialog: false,
    isDesktop: false,
    needs: [{
      image: 'cash-out.svg',
      title: 'Cash out',
      description: 'Stress free retirement , fully paid on the next property and achieve financial freedom.',
    }, {
      image: 'bigger-flat.svg',
      title: 'Bigger flat',
      description: 'Family planning to next ideal place like moving to closer to parents ($30,000 grant) or move to reputable school areas.',
    }, {
      image: 'condo-upgrade.svg',
      title: 'Condo upgrade',
      description: 'Status upgrade enjoy the condominium facilities to hold parties and events in own home vicinity.',
    }, {
      image: '2-properties.svg',
      title: 'Own 2 properties',
      description: 'Maximise investment for long term planning, leaving something behind for next generation with high capital appreciation.',
    }, {
      image: 'EC-upgrade.svg',
      title: 'EC Upgrade',
      description: 'Lower entry price 20-25% cheaper than private property, eligible for CPF housing grant and comes with condo facilities.',
    }, {
      image: 'passive-income.svg',
      title: 'Passive income',
      description: 'Early retirement with high rental yield, stable investment.',
    }],
  }),

  methods: {
    navigate(next) {
      if (next && this.value === (this.needs.length - 1)) {
        this.value = 0;
      }

      else if (!next && this.value === 0) {
        this.value = this.needs.length - 1;
      }

      else {
        this.value = next ? this.value + 1 : this.value - 1;
      }
    },

    showDialog(index) {
      this.value = index;
      this.dialog = true;
    },
  },
};
</script>

<style lang="scss">
  #Achivements {
    background-color: #F7F7F7;
    padding: 7.5% 0 6%;
  }
 #MidBanner {
    background-image: url('/images/middle-banner.png');
    background-size: cover;
    padding: 7.5% 0;
  }

  #Needs {
    padding: 2% 0;

    .needs_main-row {
      flex-direction: column-reverse;
    }

    .needs_icons {
      max-width: 100%;
      margin: auto;
    }

    @media(min-width: 600px) {
      .needs_icons {
        max-width: 90%;
        margin: auto;
      }
    }

    @media(min-width: 960px) {
      .needs_icons {
        max-width: 80%;
      }
      .needs_main-row {
        flex-direction: row;
      }
    }

    .needs_description {
      @media(min-width: 960px) and (max-width: 1680px){
        font-size: 1.2rem !important;
        line-height: 1.8rem !important;
      }
      min-height: 2.70em;
    }

    .needs-icon {
      cursor: pointer;
      text-align: center;
      display: flex;
      flex-direction: column;
      justify-content: center;

      &:not(.needs-icon-desktop) {
        box-shadow: 3px 8px 20px #0000001A;
        border-radius: 16px;
      }

      &-desktop {
        &:hover {
          box-shadow: 5px 10px 30px #00000021;
          border-radius: 28px;
        }
      }

      &-image {
        padding: 20px 30px 0 30px;
      }      
    }
  }

  .needs-carousel {
    background-color: white;
    padding: 40px;
    border-radius: 16px !important;

    @media(min-width: 500px) {
      padding: 60px;
      max-width: 450px;
    }

    @media(max-width: 768px) and (orientation: landscape) {
      padding-top: 20px;
      padding-bottom: 20px;
    }

    @media(min-width: 960px) {
      max-width: 640px;
      padding: 3.5rem 5rem;
    }

    @media(min-width: 1281px) {
      max-width: 856px;
      padding: 3.5rem 5rem;
    }

    .v-carousel {
      height: 240px !important;

      @media(min-width: 960px) {
        height: 140px !important;
      }

      @media(min-width: 1281px) {
        height: 160px !important;
      }
    }

    .row {
      color: #2F2F2F !important;

      img {
        width: 120px;

        @media(min-width: 960px) {
          padding-right: 1rem;
        }

        @media(min-width: 1281px) {
          padding-right: 0;
        }
      }
      .font-black {
        padding-bottom: 1.15rem;
      }
    }

    .controls {
      .arrows {
        color: #DBDBDB;

        &:hover{
          color: #001E83;
        }
      }

      .selector {
        margin-right: 1.2rem;
      }
    }
  }
</style>
