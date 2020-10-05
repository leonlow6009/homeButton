<template lang="pug">
  v-container#Profile
    div.inner-container
      v-row.h-100(no-gutters)
        div
          .text-h3.d-inline Our vision is to build a great rapport with our clients by providing them guidance that are both
          .text-h3.d-inline.bold.primary--text {{ " sincere " }}
          .text-h3.d-inline and
          .text-h3.d-inline.bold.primary--text {{ " transparent" }}.
      v-row#ProfileDescription.h-100(no-gutters)
        v-col.my-auto(cols="12", sm="7")
          div.description
            .font-black.text-subtitle-1.text-uppercase.mb-5.mb-md-10.mt-7.mt-md-0 Profile
            .text-body-1.mb-2.mb-md-4 I started my property journey in 2015. My main focus is in transacting residential properties. I've helped over hundreds of clients in transacting their properties.
            .text-body-1.mb-7.mb-md-14 I am well verse with the process in buying and selling resale properties, always keeping up to date with the latest hdb rules & regulation. Contact me today if you have any doubts @ +65 8838-9441.

            v-btn.text-body-1.bold.ma-0.ml-n5(
              text,
              v-scroll-to="{ el: '#Achivements', duration: 800 }",
              color="primary",
              :ripple="false",
            )
              |  SEE ACHIVEMENTS
              v-icon.text-body-1(right) mdi-arrow-right
        v-col(cols="12", sm="5")
          v-img(:src="require('~/assets/images/profile-pic.png')")
</template>

<style lang="scss">
  #Profile {
    margin-top: 10rem;
    margin-bottom: 10rem;
  }

  #ProfileDescription {
    margin-top: 10rem;

    @media(max-width: 599px) {
      flex-direction: column-reverse;
    }

    .description {
      @media (orientation: landscape), (min-width: 600px) { 
        margin-right: 20%;
      }
    }
  }
</style>
