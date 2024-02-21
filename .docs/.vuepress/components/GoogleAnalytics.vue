<template>
  <div></div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/analytics";

export default {
  name: "GoogleAnalytics",
  created() {
    var firebaseConfig = {
      apiKey: "AIzaSyBDaQzT3P4Bt31QY11YQHku_QywT6dZ6h4",
      authDomain: "vuuri-92e4f.firebaseapp.com",
      projectId: "vuuri-92e4f",
      storageBucket: "vuuri-92e4f.appspot.com",
      messagingSenderId: "235427090827",
      appId: "1:235427090827:web:f2a775b0fdf15fe6159f8e",
      measurementId: "G-DYM43TSGSK"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
  }
}
</script>

<style scoped>

</style>