<template>
 <div class="row align-items-center">
     <span class="text-secondary col-auto">{{ index +1  }}</span>
      <div class="progress my-2 col-8 p-0">
        <div
          class="progress-bar bg-secondary position-relative"
          role="progressbar"
          :style="{ width: progress.value + '%' }"
          :aria-valuenow="progress.value"
          aria-valuemin="0"
          aria-valuemax="100"
        >
        </div>
    </div>
    <span class="text-secondary col-auto"> {{ progress.value }}%</span>
 </div>
</template>

<script setup>

const props = defineProps({
  progress: Object,
  index: Number,
});

</script>


<style lang="scss" scoped></style>
