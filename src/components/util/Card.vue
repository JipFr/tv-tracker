<template>
  <div class="card">
    <slot />
  </div>
</template>

<style lang="scss">
.card {
  border-radius: 4px;
  background: var(--content);

  .card-sect {
    padding: 15px;
  }

  h3 {
    color: var(--text-secondary);
    margin: 0;
    font-size: 1rem;
    font-weight: 400;
  }

  .bold {
    font-weight: 700;
  }
  .main-title {
    color: var(--text-harsh);
  }
}
</style>