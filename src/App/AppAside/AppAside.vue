<template>
  <div class="AppAside">
    <h1 class="Title" v-text="title" />
    <div class="Content">
      <slot />
    </div>
    <div class="Footer" />
  </div>
</template>

<script src="./AppAside.js" />
<style src="./AppAside.styl" lang="stylus" scoped />
