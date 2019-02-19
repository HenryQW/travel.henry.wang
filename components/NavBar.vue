<template>
  <nav class="navbar is-dark">
    <div class="navbar-brand">
      <a class="navbar-item" href="/">
        <span class="tag is-rounded is-white is-medium logo-span">
          <img src="logo.svg" width="28" height="28">
          Travel
        </span>
      </a>
      <div class="navbar-burger burger" data-target="navbarData"/>
    </div>

    <div id="navbarData" class="navbar-menu">
      <div class="navbar-start">
        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link" href="/documentation/overview/start/">
            More
          </a>
          <div class="navbar-dropdown is-boxed">
            <a class="navbar-item" href="https://henry.wang">
              Blog
            </a>
            <a class="navbar-item" href="https://api.henry.wang">
              API
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
