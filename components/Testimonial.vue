<template lang="pug">
.testimonial
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
    div.testimonial-content
      .text-body-1 {{ testimonial.content }}
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
  },
};
</script>
