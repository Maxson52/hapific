<svelte:head>
  <title>Hapific</title>

  <!-- Meta tags -->
  <meta name="title" content="Hapific" />
  <meta name="description" content="Why wait for happiness to come to you?" />

  <meta property="og:site_name" content="Hapific" />
  <meta property="og:title" content="Hapific" />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://hapific.com/" />

  <meta name="twitter:card" content="summary_large_image" />
  <meta property="og:image" content="/banner.png" />
  <meta name="twitter:image" content="/banner.png" />
  <meta property="og:image:alt" content="Page image for Hapific" />
  <meta name="twitter:image:alt" content="Page image for Hapific" />

  <meta name="description" content="Why wait for happiness to come to you?" />
  <meta
    name="twitter:description"
    content="Why wait for happiness to come to you?"
  />
  <meta
    property="og:description"
    content="Why wait for happiness to come to you?"
  />
</svelte:head>

<main
  class="w-screen h-screen flex flex-col justify-center items-center overflow-hidden bg-whiteish-100"
>
  <div class="tracking-[-0.08em] w-3/4">
    <h1 class="mb-2 text-greenish-100">Hapific</h1>
    <h1>— Why wait for <br /> happy? Go get it.</h1>
  </div>

  <div class="flex flex-col gap-0.5 tracking-[-0.08em] w-3/4 mt-6">
    <a href="https://course.hapific.com" data-sveltekit-preload-data="off"
      >Our Course</a
    >
    <a href="https://simplist.hapific.com" data-sveltekit-preload-data="off"
      >Simplist</a
    >
  </div>
</main>

<style lang="postcss">
  h1 {
    @apply text-4xl md:text-6xl lg:text-7xl;
  }

  a {
    @apply underline underline-offset-[5px] decoration-2 text-base w-fit md:text-lg lg:text-xl;
  }
</style>
