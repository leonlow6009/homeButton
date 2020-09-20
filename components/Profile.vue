<template lang="pug">
  v-container#Profile
    div.inner-container
      v-row.h-100(no-gutters)
        div
          .text-h3.d-inline To give real service, you must add something cannot be bought or measured by money, and that is
          .text-h3.d-inline.bold.primary--text {{ " sincerity " }}
          .text-h3.d-inline and
          .text-h3.d-inline.bold.primary--text {{ " integrity" }}.
      v-row#ProfileDescription.h-100(no-gutters)
        v-col.my-auto(cols="12", sm="7")
          div.description
            .font-black.text-subtitle-1.text-uppercase.mb-5.mb-md-10.mt-7.mt-md-0 Profile
            .text-body-1.mb-2.mb-md-4 Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
            .text-body-1.mb-7.mb-md-14 Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.

            v-btn.text-body-1.bold.ma-0.ml-n5(
              text,
              v-scroll-to="{ el: '#GetInTouch', duration: 800 }",
              color="primary",
              :ripple="false",
            )
              |  SEE ACHIVEMENTS
              v-icon.text-body-1(right) mdi-arrow-right
        v-col(cols="12", sm="5")
           v-img(src="/images/profile-pic.png")
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
