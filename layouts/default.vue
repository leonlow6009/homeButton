<template lang="pug">
 v-app(dark)
  v-main
    nuxt
  v-footer
    v-container
      span.text-body-2 © {{ new Date().getFullYear() }} Leon property
</template>

<style lang="scss">
footer {
  padding: 1rem 0 !important;
  background-color: #2F2F2F !important;
  color: #AAAAAA !important;
}
</style>
