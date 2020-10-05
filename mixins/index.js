  export const viewport = {
  data: () => ({
    viewWidth: null,
    viewHeight: null,
  }),

  mounted() {
    this.$nextTick(() => {
      this.onResize();
      window.addEventListener('resize', this.onResize);
    })
  },

  beforeDestroy() { 
    window.removeEventListener('resize', this.onResize); 
  },

  methods: {  
    onResize() {
      this.viewWidth = window.innerWidth;
      this.viewHeight = window.innerHeight;
    },
  },
};

export const debounce = {
  data() {
    return {
      debounceTimeout: null,
    };
  },

  methods: {
    debounce(event, fn, delay) {
      if (this.debounceTimeout) {
        clearTimeout(this.debounceTimeout);
      }

      this.debounceTimeout = setTimeout(() => {
        fn(event);
      }, delay);
    },
  },
};
