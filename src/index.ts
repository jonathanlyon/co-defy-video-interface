import { defineInterface } from '@directus/extensions-sdk';
import InterfaceComponent from './interface.vue';

export default defineInterface({
  id: 'co-defy-video-interface',
  name: 'YouTube Video Interface',
  description: 'Select and display a YouTube video by its ID',
  icon: 'smart_display',
  component: InterfaceComponent,
  options: null,
  types: ['string'],
  preview: (value) => {
    const youtubeUrl = `https://www.youtube.com/embed/${value}`;
    return `<iframe width="560" height="315" src="${youtubeUrl}" frameborder="0" allowfullscreen></iframe>`;
  },
});
