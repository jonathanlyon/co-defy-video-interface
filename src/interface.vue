<template>
  <div class="youtube-video-interface">
    <label for="video-id-input">YouTube Video ID</label>
    <input
      id="video-id-input"
      v-model="videoId"
      @input="update"
      placeholder="Enter YouTube Video ID"
    />
    <div v-if="videoId" class="video-preview">
      <iframe
        :src="`https://www.youtube.com/embed/${videoId}`"
        width="560"
        height="315"
        frameborder="0"
        allowfullscreen
      ></iframe>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';

const videoId = ref<string>('');

watch(videoId, (newVal) => {
  // Update the parent component when videoId changes
  update(newVal);
});

function update(value: string) {
  // Emit the updated value (YouTube ID) to the parent component
  emit('input', value);
}
</script>

<style scoped>
.youtube-video-interface {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.video-preview {
  margin-top: 20px;
}
</style>
