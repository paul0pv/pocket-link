<script lang="ts">
import LogoIcon from './icons/Logo.svelte';
import MenuIcon from './icons/Menu.svelte';
import RocketIcon from './icons/Rocket.svelte';
import ThemeButton from './ThemeButton.svelte';
</script>

<header class="sticky flex justify-center px-8 h-16">
    <nav class="flex justify-between items-center w-full lg:w-5/6 xl:w-3/4 2xl:w-1/2">
      <h1 class="flex items-center gap-1 font-bold text-2xl">
        <LogoIcon/><span class="text-transparent bg-clip-text bg-gradient-to-r from-midnight-blue to-steel-gray">PocketLink</span></h1>
      <ul class="fixed grid justify-between items-center list-style-none -right-full overflow-x-hidden overflow-y-scroll w-screen h-screen md:flex md:relative md:right-0 md:overflow-auto md:gap-5 md:w-auto">
        <li class="font-semibold"><ThemeButton/></li>
        <li class="font-semibold border-solid border-[1px] border-steel-gray py-1 px-4 rounded-lg hover:bg-teal-accent hover:border-teal-accent hover:text-light-gray">
            <a href="/home" class="flex gap-2">
              Start<RocketIcon/>
            </a>
          </li>
      </ul>
      <div class="flex items-center gap-4 md:hidden"> 
      <input type="checkbox" title="drawer-toogle" id="drawer-toogle" class="w-6 h-6 absolute opacity-0"/> 
      <label for="drawer-toggle" id="drawer-toogle-label">
        <MenuIcon/>
      </label>
      </div>
      
    </nav>
  </header>