<template>
  <div>
    <h3>Home</h3>
    <button @click="toUsers">Usersのページに行く</button>
    <p>{{ doubleCount }}</p>
    <p>{{ tripleCount }}</p>
    <input type="text" v-model="messege">
    <p>{{messege}}</p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

  export default {
    computed: {
      ...mapGetters(["doubleCount", "tripleCount"]),
      messege: {
        get() {
          return this.$store.getters.messege;
        },
        set(value) {
          this.$store.dispatch("updateMessege", value);
        }
      }
    },
    methods: {
      toUsers() {
        this.$router.push({
          name: "users-id-profile",
          params: { id: 1 }
        });
      }
    }
  };
</script>