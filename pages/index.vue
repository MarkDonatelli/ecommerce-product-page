<template>
  <header class="container">
    <nav
      class="flex justify-between border-b-2 py-10 border-grayLight items-center"
    >
      <div class="flex items-center">
        <NuxtLink class="mr-14" to="/">
          <img
            class="w-36"
            src="/images/logo.svg"
            width="144"
            height="21"
            alt="Brand Logo"
        /></NuxtLink>
        <ul class="flex text-grayDarkBlue gap-7">
          <li><NuxtLink to="/">Collections</NuxtLink></li>
          <li><NuxtLink to="/">Men</NuxtLink></li>
          <li><NuxtLink to="/">Women</NuxtLink></li>
          <li><NuxtLink to="/">About</NuxtLink></li>
          <li><NuxtLink to="/">Contact</NuxtLink></li>
        </ul>
      </div>

      <ul class="flex gap-7 text-grayDarkBlue">
        <li>cart</li>
        <li>avatar</li>
      </ul>
    </nav>
  </header>
</template>
