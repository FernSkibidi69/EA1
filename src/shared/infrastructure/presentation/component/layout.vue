<script setup>

</script>

<template>

  <pv-toolbar class="bg-primary">
    <template #start>
      <pv-button class="p-button-text" icon="pi pi-bars" @click="toggleDrawer"/>
      <h3>Astara Retail Peru</h3>
    </template>
    <template #end>
      <div class="flex-column mr-3">
        <pv-button v-for="item in items" :key="item.label" as-child v-slot="slotProps">
          <router-link :to="item.to" :class="slotProps['class']">{{ t(item.label) }}</router-link>
        </pv-button>
      </div>
      <!-- To add when IAM is implemented -->
      <!--<authentication-section/>-->
      <language-switcher/>
    </template>
  </pv-toolbar>
  <pv-drawer v-model:visible="drawer"/>

</template>
