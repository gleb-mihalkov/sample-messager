<template>
  <ul
    v-if="isFetched"
    class="UsersList"
    >
    <li
      v-for="user in list"
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
