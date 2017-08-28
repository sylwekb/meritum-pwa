<template>
    <md-layout md-align="center" md-vertical-align="center">
        <h2>Nie masz co tu oglądać</h2>
        <div><p><slot></slot></p></div>
        <md-button id="openLoginBtn" class="md-raised md-accent" @click="openDialog">Zaloguj się</md-button>

        <md-dialog md-open-from="#openLoginBtn" md-close-to="#openLoginBtn" ref="logInDialog">
          <md-dialog-title>Logowanie</md-dialog-title>

          <md-dialog-content>
            <form>

              <md-input-container>
                <label>E-mail</label>
                <md-textarea v-model="loginCredentials.email"></md-textarea>
              </md-input-container>

              <md-input-container md-has-password>
                <label>Hasło</label>
                <md-input v-model="loginCredentials.password" type="password"></md-input>
              </md-input-container>

            </form>
          </md-dialog-content>

          <md-dialog-actions>
            <md-button class="md-primary" @click="closeDialog">Anuluj</md-button>
            <md-button class="md-primary" @click="submit">Zaloguj</md-button>
          </md-dialog-actions>
        </md-dialog>
      <md-snackbar md-position="bottom center" ref="snackbar" md-duration="6000">
        <span>{{ errorMessage }}</span>
        <md-button class="md-accent" @click="$refs.snackbar.close()">OK</md-button>
      </md-snackbar>
    </md-layout>
</template>

<script>
export default {
    data() {
        return {
            loginCredentials: {
                email: '',
                password: '',
            },
            errorMessage: '',
        }
    },
    methods: {
        openDialog() {
            this.$refs['logInDialog'].open();
        },
        closeDialog() {
            this.$refs['logInDialog'].close();
        },
        onOpen() {
            console.log('Opened');
        },
        onClose(type) {
            console.log('Closed', type);
        },
        submit() {
            this.$store.dispatch('authenticate', this.loginCredentials)
                .catch(error => {
                    console.log(error);
                    this.errorMessage = error.response.data.message;
                    this.$refs.snackbar.open();
                });
        }
    },
}
</script>
