<template>
  <main class="page pb-10">
    <slot name="top" />

    <Content class="prose mx-auto pt-24 px-10" />

    <PageEdit />

    <PageNav v-bind="{ sidebarItems }" />

    <slot name="bottom" />
  </main>
</template>

<script>
import PageEdit from "@theme/components/PageEdit.vue";
import PageNav from "@theme/components/PageNav.vue";

export default {
  components: { PageEdit, PageNav },
  props: ["sidebarItems"],
};
</script>

<style lang="stylus">
div[class*='language-'] {
  background-color: #f7fafc;
  -webkit-font-smoothing: subpixel-antialiased;
  -moz-osx-font-smoothing: subpixel-antialiased;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.05);
}

.theme-default-content pre, .theme-default-content pre[class*='language-'] {
  line-height: 1.7;
}

.theme-default-content pre code, .theme-default-content pre[class*='language-'] code {
  color: #666 !important;
}

div[class~='language-php']:before {
  content: 'php';
}

div[class*='language-']:before {
  color: rgba(0, 0, 0, 0.3);
}

.token.selector, .token.important, .token.atrule, .token.keyword, .token.builtin {
  color: #E53935 !important;
}

.token.class-name {
  color: #78909C !important;
}

.token.property, .token.constant, .token.symbol, .token.variable, .token.operator {
  color: #455A64 !important;
}

.token.function, .token.punctuation {
  color: #78909C !important;
}

.token.boolean, .token.number {
  color: #FF7043 !important;
}

.token.string, .token.char, .token.attr-value, .token.regex {
  color: #81C784 !important;
}

// Comments
.token.comment, .token.block-comment, .token.prolog, .token.doctype, .token.cdata {
  color: #B0BEC5 !important;
}

// Namespace
.prose pre code {
  color: #546E7A;
}

.prose code {
  background-color: rgba(247, 250, 252, 0.5);
  padding: 0.05rem 0.1rem;
}
</style>

<style lang="postcss">
.page-nav {
  @apply px-16;
}
</style>
