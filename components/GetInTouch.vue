<template lang="pug">
div#GetInTouch
  .overlay(:style="{ 'background-image': `url(${require('~/assets/images/get-in-touch.png')})` }")
  v-container
    v-row(no-gutter)
      v-col.d-none.d-sm-flex(cols="12", sm="5", md="6")
        div.getInTouch-left
      v-col.my-auto(cols="12", sm="7", md="6")
        div.getInTouch-right
          .text-center.ma-2
            v-snackbar(
              outlined,
              rounded,
              v-model="snackbar",
              color="primary",
              :timeout=8000,
            )
              .text-subtitle-1.bold Thank you for your interest, I will get in touch with you soon!
              template(v-slot:action="")
                v-btn(
                  icon, text,
                  color="primary",
                  @click="snackbar = false",
                )
                  v-icon mdi-close

          .text-subtitle-1.font-black Get In Touch
          v-form(
            ref="form",
            v-model="valid"
            @submit.prevent="",
          )
            v-text-field(
              required,
              name="name",
              label="Name*",
              v-model="body.name",
              :disabled="isLoading",
              :rules="rules.name",
            )
            v-text-field(
              required,
              label="Email*",
              name="email",
              v-model="body.email",
              :disabled="isLoading",
              :rules="rules.email",
            )
            v-text-field(
              required,
              label="Mobile*",
              name="mobile",
              v-model="body.mobile",
              :disabled="isLoading",
              :rules="rules.mobile",
            )
            v-textarea(
              required,
              label="Message",
              name="message",
              v-model="body.message",
              :counter="1000",
              :disabled="isLoading",
              :rules="rules.message",
            )
            
            div.d-flex.justify-space-between.form-action
              v-btn.text-body-1.ma-0(
                large,
                color="primary",
                :loading="isLoading",
                :ripple="false",
                @click="submit",
              )
                |  Submit
                v-icon.text-body-1.mb-0(right) mdi-arrow-right
              div
                v-btn.social(
                  icon, text
                  target="_blank",
                  :href="socialMedia.facebook",
                )
                  v-icon(large) mdi-facebook
                v-btn.social.ml-3(
                  icon, text
                  target="_blank",
                  :href="socialMedia.instagram",
                )
                  v-icon(large) mdi-instagram


</template>

<script>
  export default {
    data: () => ({
      valid: true,
      rules: {
        name: [v => !!v || 'Name is required'],
        email: [
          v => !!v || 'E-mail is required',
          v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
        ],
        mobile: [
          v => !!v || 'Mobile number is required',
          v => /[+]65[689]\d{7}$/.test(v) || 'Mobile number must be valid',
        ],
        message: [
          v => !!v || 'Message is required',
          v => (v && v.length <= 1000) || 'Message cannot be more than 1000 characters',
        ],
      },
      body: {
        name: 'Thomas',
        email: 'thomas.leera@gmail.com',
        mobile: '+65',
        message: '',
      },
      snackbar: false,
      isLoading: false,
      socialMedia: {
        facebook: 'https://www.facebook.com/SEALeonLow',
        instagram: 'https://www.instagram.com/homebutton_resale_properties/',
      },
    }),

    mounted() {
      this.resetForm();
    },

    methods: {
      async submit () {
        if (this.$refs.form.validate()) {
          this.isLoading = true;
          const response = await fetch('https://usebasin.com/f/67d9ae068d17', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            redirect: 'follow',
            referrerPolicy: 'no-referrer',
            body: JSON.stringify(this.body),
          });

          this.isLoading = false;
          this.snackbar = true;
          this.resetForm();
        }
      },

      resetForm() {
        this.body = {
          name: '',
          email: '',
          mobile: '+65',
          message: '',
        };
        this.$refs.form.resetValidation();
      },
    },
  }
</script>

<style lang="scss" scoped>
#GetInTouch {
  position: relative;
  background-color: #F7F7F7;

  .overlay {
    display: none;

    @media(min-width: 600px) {
      display: block;
    }

    background-size: cover;
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    z-index: 0;

    @media (max-width: 959px) {
      right: 60%;
    }

    right: 50%;
  }

  .getInTouch-left {
    height: 100%;
  }

  .getInTouch-right {
    padding: 10% 0;
    @media (min-width: 600px) {
      padding-left: 3.125rem;
    }

    .font-black {
      margin-bottom: 4rem;
    }

    .form-action {
      margin-top: 4rem; 
    }

    .social {
      &:hover{
        color: #001E83;
      }
    }
  }
}
</style>