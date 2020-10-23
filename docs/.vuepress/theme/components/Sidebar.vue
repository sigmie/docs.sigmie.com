<template>
  <aside class="sidebar shadow-2xl md:shadow-none">
    <slot name="top" />

    <SidebarLinks :depth="0" :items="items" />
    <slot name="bottom" />
  </aside>
</template>

<script>
import SidebarLinks from "@theme/components/SidebarLinks.vue";
import NavLinks from "@theme/components/NavLinks.vue";

export default {
  name: "Sidebar",

  components: { SidebarLinks, NavLinks },

  props: ["items"],
};
</script>

<style lang="postcss">
.sidebar {
  @apply bg-gray-100 border-none pt-20 pb-6 flex justify-center;
}

@screen md {
  .sidebar {
    @apply pt-6;
  }
}

.sidebar-button {
  @apply text-gray-300;
}

.sidebar-links {
  @apply w-10/12;
}

.sidebar-links li {
  @apply py-1 pl-3;
}

.sidebar-group {
  @apply pb-3;
}

.sidebar-heading {
  @apply text-sm text-gray-500 font-semibold tracking-wide border-none;
}

a.sidebar-link {
  @apply sidebar-heading;
}

.sidebar-heading.open {
  @apply sidebar-heading text-gray-600 font-bold;
}

.sidebar-group-items a.sidebar-link {
  @apply py-1 relative block text-sm text-gray-500 font-semibold border-none;
}

.sidebar-group-items a.sidebar-link.active {
  @apply text-gray-600 border-none;
}

.sidebar-group-items a.sidebar-link:hover {
  @apply text-gray-600 border-none;
}
</style>
