<template>
  <div :class="active ? 'top-active' : '' " class="nav-desktop">
    <div class="nav-item">
      <img style="height:9vh;width:auto" src="@/static/images/awp.png" alt="">
    </div>
    <div class="nav-spacer-5"></div>
    <div class="nav-item">
      <nuxt-link class="link" to='/'>o mnie</nuxt-link>
    </div>
    <div class="nav-item">
      <nuxt-link class="link" to='/services'>usługi</nuxt-link>
    </div>
    <div class="nav-item">
      <nuxt-link class="link" to='/contact'>kontakt</nuxt-link>
    </div>
    <div class="nav-spacer-1"></div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      active: false
    }
  },
  mounted() {
    setTimeout(() => this.active = true, 100)
  }
}
</script>