<template>
  <header>
    <div class="ui secondary pointing menu">
      <a href="/" class="active item"> Image Gallery </a>
      <div class="right menu">
        <a class="ui item" @click="login"> Login </a>
      </div>
    </div>
  </header>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Header",
  methods: {
    ...mapActions(["login"]),
  },
};
</script>
