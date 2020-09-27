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
      image: 'KenChelseaFamily.jpeg',
      occupation: 'Art director',
      content: 'I am glad to have made a switch to Leon after trying to sell my unit in the market for 3-4 months by our previous agent. At our first meet up, he brought along a buyer and manage to seal the deal for us. His network of clients and agents really impressed us.',
    }, {
      name: 'Syafiq',
      image: null,
      occupation: 'HR Manager',
      content: "Leon was a close friend from primary school, so there was no doubt I engaged him to help me sell my dad's house after he passed away. The house was an old flat with no renovation and had alot of old flat issues, after telling him my base price, I was prepared to receive offer at a much lesser value, but within 1 viewing - he SOLD it at 10% HIGHER then what I've asked for.",
    }, {
      name: 'jenny & guoming',
      image: 'KennethGrace.jpg',
      occupation: 'Officer Workers',
      content: 'Leon is a wonderful agent to work with. We are blessed to have him by our side during the selling process. His dedication, patience, and understanding of our needs made the whole process easy and happy.',
    }, {
      name: 'Genevieve tan',
      image: 'EddieFamily.jpg',
      occupation: 'Bank Manager',
      content: 'I am glad to have made a switch to Leon after trying to sell my unit in the market for 3-4 months by our previous agent. At our first meet up, he brought along a buyer and manage to seal the deal for us. His network of clients and agents really impressed us.',
    }, {
      name: 'Thomas Lee',
      image: 'ThomasNorah.jpg',
      occupation: 'Software programmer',
      content: "My journey with Leon was really hassle free, I didn't had to do anything and the flat received 4 offers within 2 weeks! What I liked most about Leon is that he realy priorities our interest, instead of selling the flat when we receive our first offer - at a price higher than our base price, he pursaded us to reject it and assured a better deal if we gave him time, a week later another offer came in for an additional 20,000. I couldn't imagine selling my flat at this price if not for him.",
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
