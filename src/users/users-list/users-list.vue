<template>
  <ul class="UsersList">
    <li
      v-for="user in users"
      :key="user.id"
      class="Item"
      >
      <a
        v-text="user.email"
        :href="`/chat/${user.id}`"
        class="Link"
        />
    </li>
  </ul>
</template>

<script src="./users-list.js" />
<style src="./users-list.styl" lang="stylus" scoped />
