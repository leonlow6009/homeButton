<template lang="pug">
  div
    Main
    Profile
    Properties
    Achivements
    Testimonials
    GetInTouch
    v-snackbar.chatbar(
      rounded,
      v-model="showChatBar",
      color="#525252",
      :timeout=-1,
    )
      div.d-flex.align-center.chatbar_link(@click="showWhatsappChat")
        v-icon.left mdi-whatsapp
        .text-body-1.font-heavy Any question? Let’s have a chat!
      template(v-slot:action="")
        div.right(@click="showChatBar = false")
          v-icon(
            :ripple="false",
          ) mdi-minus-circle-outline
</template>
//mdiWhatsapp
<script>
  export default {
    data: () => ({
      showChatBar: true,
    }),

    methods: {
      showWhatsappChat() {
        const url = 'https://api.whatsapp.com/send?phone=6588389441';
        const win = window.open(url, '_blank');
        win.focus();
      },
    },
  }
</script>

<style lang="scss" scoped>
  .chatbar {
    @media(min-width: 600px) {
      justify-content: flex-start;
    }
    &_link {
      cursor: pointer;
      div {
        text-decoration: underline;
      }
    }

    .v-icon {
      font-size: 2.4rem;
    }

    .left {
      padding-right: 1rem;
      color: #25D366;
    }

    .right {
      margin-top: 2px;
      padding-left: 0.5rem;
      padding-right: 1rem;
      cursor: pointer;
    }
  }
</style>