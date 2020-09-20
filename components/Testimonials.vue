<template lang="pug">
  v-container#Testimonials(ref="container")
    .text-center
      .text-subtitle-1.font-black.mb-6.text-uppercase Testimonials

    .testimonials
      testimonial(
        v-for="(testimonial, key) in testimonials",
        :activeIndex.sync="activeIndex",
        :key="'testimonial'+ key",
        :testimonialIndex="key",
        :testimonial="testimonial",
        :class="{ active: activeIndex === key }",
      )

</template>

<script>

export default {
  data: () => ({
    activeIndex: 0,
    testimonials: [{
      name: 'joseph teh',
      occupation: 'Art director',
      content: 'I am glad to have made a switch to Leon after trying to sell my unit in the market for 3-4 months by our previous agent. At our first meet up, he brought along a buyer and manage to seal the deal for us. His network of clients and agents really impressed us.',
    }, {
      name: 'jenny & guoming',
      occupation: 'Officer Workers',
      content: 'Leon is a wonderful agent to work with. We are blessed to have him by our side during the selling process. His dedication, patience, and understanding of our needs made the whole process easy and happy.',
    }, {
      name: 'Genevieve tan',
      occupation: 'Bank Manager',
      content: 'I am glad to have made a switch to Leon after trying to sell my unit in the market for 3-4 months by our previous agent. At our first meet up, he brought along a buyer and manage to seal the deal for us. His network of clients and agents really impressed us.',
    }],
  }),
};
</script>

<style lang="scss" scoped>
  #Testimonials {
    margin-bottom: 60px;
  }

  .testimonials {
    display: flex;
    flex-direction: row;
    overflow-x: scroll;

    -ms-overflow-style: none; // IE 11
    scrollbar-width: none !important; // Firefox

    &::-webkit-scrollbar {
      display: none;
    }
  }
</style>
