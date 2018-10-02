<template>
  <div class="AppAside">
    <h1 class="Title" v-text="title" />
    <div class="Content">
      <slot />
    </div>
    <div class="Footer" />
  </div>
</template>

<script src="./app-aside.js" />
<style src="./app-aside.styl" lang="stylus" scoped />
