<template>
  <div>
    <v-app-bar color="deep-purple accent-4" dark>
      <v-app-bar-nav-icon @click.stop="isOpenDrawer = !isOpenDrawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Example - EDF 4</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn to="/" icon>
        <v-icon>mdi-home</v-icon>
      </v-btn>
    </v-app-bar>
    <v-navigation-drawer v-model="isOpenDrawer" absolute temporary>
      <v-list density="compact" nav>

        <v-list-group value="Examples">
          <template v-slot:activator>
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-text</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>Examples</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </template>
          <v-list-item to="/example/1">
            <v-list-item-title>Examples - 1</v-list-item-title>
          </v-list-item>
        </v-list-group>

        <v-divider></v-divider>
        <v-list-item href="https://efiller.netlify.app/" target="_blank">
          <v-list-item-icon>
            <v-icon>mdi-download</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Download Extension</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <div class="main">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data: () => ({
    isOpenDrawer: false
  }),
};
</script>