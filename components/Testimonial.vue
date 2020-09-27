<template lang="pug">
.testimonial(
  :style="{ 'min-width': testimonialWidth }",
  @mouseenter="hoverOn",
)
  .pa-0
    div.testimonial-designation.d-flex.align-center
      v-avatar(color="#EBEBEB")
        img(
          v-if="testimonial.image",
          :src="require(`~/assets/images/Testimonial/${testimonial.image}`)",
        )
        v-icon(
          dark,
          large,
          v-else,
        ) mdi-account
      div.testimonial-name
        div.text-uppercase.text-subtitle-1.font-black {{ testimonial.name }}
        div.text-subtitle-1.font-medium {{ testimonial.occupation }}
    div.testimonial-content(v-on:scroll.passive="onScroll")
      .text-body-1(
        :class="{ 'multi-line': !showContent }",
        @click="showContent = true"
      ) {{ testimonial.content }}
</template>

<script>
import { debounce, viewport } from '@/mixins';

export default {
  mixins: [debounce, viewport],

  props: {
    testimonial: {
      type: Object,
      required: true,
    },
    activeIndex: {
      type: Number,
      required: true,
    },
    testimonialIndex: {
      type: Number,
      required: true,
    },
  },

  data: () => ({
    showContent: false,
  }),

  methods: {
    hoverOn() {
      if (this.testimonialIndex !== this.activeIndex) {
        this.$emit('update:active-index', this.testimonialIndex);
      }
    },

    onScroll(e) {
      if (!this.showContent) {
        this.debounce(e, () => { this.showContent = true; }, 200);
      }
    }
  },

  computed: {
    testimonialWidth() {
      const containerWidth = this.$parent.$refs.container?.clientWidth;

      if (this.viewWidth < 600 || !containerWidth) {
        return '100%';
      }

      if (this.viewWidth < 960) {
        return `${(containerWidth - 16) / 2}px`;
      }

      return `${(containerWidth - 48) / 3}px`;
    }
  },
};
</script>

<style lang="scss" scoped>
  .testimonial {
    cursor: pointer;
    margin-right: 16px !important;
    border: 1px solid #AAAAAA;
    width: 32.5rem;
    padding: 2.5rem 2rem !important;

    &.active {
      background-color: #001E83 !important;
      color: white !important;
    }

    &-name {
      padding-left: 2rem;
    }

    &-content {
      padding-top: 2rem;
      overflow: scroll;
      -ms-overflow-style: none; // IE 11
      scrollbar-width: none !important; // Firefox

      &::-webkit-scrollbar {
        display: none;
      }

      max-height: 250px;
    }

    .v-avatar {
      height: 6rem !important;
      min-width: 6rem !important;
      img {
        width: 100%;
      }
      .mdi-account {
        font-size: 5rem !important;
      }
    }

    @media(min-width: 600px) {
      .v-avatar {
        height: 5.5rem !important;
        min-width: 5.5rem !important;
      }
      .mdi-account {
        font-size: 4.5rem !important;
      }
      &-name .text-subtitle-1{
        font-size: 1.2rem !important;
      }

      &-name { padding-left: 1.2rem; }
    }

    @media(min-width: 768px) {
      .v-avatar {
        height: 7rem !important;
        min-width: 7rem !important;
      }
      .mdi-account {
        font-size: 6rem !important;
      }
      &-name .text-subtitle-1{
        font-size: 1.5rem !important;
      }

      &-name { padding-left: 2rem; }
    }

    @media(min-width: 960px) {
      margin-right: 24px !important;
      &-name .text-subtitle-1{
        font-size: 1.3rem !important;
      }

      &-name { padding-left: 1.5rem; }
    }

    @media(min-width: 1440px) {
      &-content {
        max-height: 400px;
      }
    }

    @media(min-width: 1920px) {
      &-content {
        max-height: 250px;
      }
    }
  }
</style>