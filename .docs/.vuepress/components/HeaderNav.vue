<template>
  <div id="home-page-nav" class="topnav">
    <div class="float-left">
      <a href="javascript:void(0);">Vuuri</a>
    </div>
    <div class="float-right">
      <a is-icon href="javascript:void(0);">Home</a>
      <a is-icon href="/vuuri/guide/install">Docs</a>
      <a is-icon target="_blank" href="https://github.com/dannyyassine/vuuri">GitHub</a>
      <a is-hamburger href="javascript:void(0);" class="icon" @click="onHeaderClicked">
        &#9776;
      </a>
    </div>
  </div>
</template>

<script>
export default {
name: "HeaderNav",
  methods: {
    onHeaderClicked() {
      var x = document.getElementById("home-page-nav");
      if (x.className === "topnav") {
        x.className += " responsive";
      } else {
        x.className = "topnav";
      }
    }
  }
}
</script>

<style scoped lang="scss">

#home-page-nav.topnav {
  overflow: hidden;
  .float-right {
    float: right;
  }
  border-bottom: solid 1px rgba(0,0,0,0.1);
}

#home-page-nav.topnav a {
  float: left;
  display: block;
  color: rgba(0,0,0,0.6);
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

#home-page-nav.topnav a:hover {
  color: rgba(0,0,0);
}

#home-page-nav.topnav .icon {
  display: none;
}

[is-hamburger] {
  margin-right: 15px;
  cursor: pointer;
}

@media screen and (max-width: 600px) {
  #home-page-nav.topnav a:not(:first-child) {display: none;}
  #home-page-nav.topnav a.icon {
    float: right;
    display: block;
  }
}

@media screen and (max-width: 600px) {
  #home-page-nav.topnav.responsive {position: relative;}
  #home-page-nav.topnav.responsive .icon {
    position: absolute;
    right: 0;
    top: 0;
  }
  #home-page-nav.topnav.responsive a {
    float: none;
    display: block;
    text-align: left;
  }
  #home-page-nav.topnav [is-icon] {
    display: none;
  }
  #home-page-nav.topnav.responsive [is-icon] {
    display: block;
  }
}
</style>