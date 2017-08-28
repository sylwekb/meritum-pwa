<template>
    <div>
        <div v-if="user.isAuthenticated">

            <md-toolbar class="md-accent">
              <md-button class="md-icon-button">
                <md-icon>account_circle</md-icon>
              </md-button>

              <h2 class="md-title" style="flex: 1">Witaj {{ user.username }}</h2>

            </md-toolbar>
                <md-table>
                  <md-table-body>
                    <md-table-row>
                      <md-table-cell>Powiadomienia</md-table-cell>
                      <md-table-cell><md-switch v-model="user.push_notifications" id="my-test0" name="my-test0"></md-switch></md-table-cell>
                    </md-table-row>
                  </md-table-body>
                </md-table>
        </div>
        <div v-else class="content">
            <meritum-not-authenticated-user-page>
                Aby zobaczyć profil, zaloguj się.
            </meritum-not-authenticated-user-page>
        </div>
    </div>
</template>

<script>
import NotAuthenticatedUserPage from './NotAuthenticatedUserPage.vue'

export default {
    computed: {
        user() {
            return this.$store.getters.User;
        },
    },
    components: {
        meritumNotAuthenticatedUserPage: NotAuthenticatedUserPage,
    }
}
</script>

<style scoped>
.content {
    padding: 10px;
}
</style>
