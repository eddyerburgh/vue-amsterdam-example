<template>
  <div v-if="visible" class="modal is-active">
    <div class="modal-background"></div>
    <div class="modal-content">
      <div class="box">
        <button
          @click="close"
          class="delete"
          aria-label="close"></button>
        <slot />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['visible', 'close']
}
</script>
