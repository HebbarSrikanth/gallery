<template>
  <header>
    <div class="ui secondary pointing menu">
      <router-link to="/" class="active item"> Image Gallery </router-link>
      <div v-if="isLoggedIn" class="right menu">
        <router-link to="/" class="ui item"> Gallery </router-link>
        <router-link to="/upload" class="ui item"> Upload </router-link>
        <a class="ui item" @click="logout"> Logout </a>
      </div>
      <div v-else class="right menu">
        <a class="ui item" @click="login"> Login </a>
      </div>
    </div>
  </header>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Header",
  methods: {
    ...mapActions(["login","logout"]),
  },
  computed: {
    ...mapGetters(["isLoggedIn"]),
  },
};
</script>

<style scoped>
.options {
  display: flex;
  flex-direction: row-reverse;
}
</style>
