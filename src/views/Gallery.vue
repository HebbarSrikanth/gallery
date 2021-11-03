<template></template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Gallery",
  methods: {
    ...mapActions(["fetchImages"]),
  },
  created() {
    this.fetchImages();
  },
};
</script>