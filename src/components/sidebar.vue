<template>
  <main class=" bg-slate-300 dark:bg-slate-900 ">
    <div class="md:flex w-full justify-center items-center md:min-h-screen relative   ">
      

<div class="  flex justify-center items-center min-h-screen h-full  relative left-28 top--1 z-10 w-3/5 flex-col">
  
  <div class="">
    <nav class="flex flex-row px-5 justify-center md:justify-end font-mono items-center mx-auto max-w-full gap-x-3 md:fixed top-0 z-20 right-40 left-96 text-white  bg-blue-800  dark:bg-slate-900 rounded-sm h-1">
      <ToggleMode/>
    <router-link class=" text-lg text-white font-medium active:text-white" to="/">Home</router-link>
    <router-link class=" text-lg text-white font-medium active:text-white" to="/about">About</router-link>
    <router-link class=" text-lg text-white font-medium active:text-white" to="/contact">contact</router-link>
    
    <div class=" text-white font-mono text-xl hidden  md:flex pl-32 justify-center items-center gap-x-2">  <span class=""> <img src="../assets/btn.png" class=" h-7 w-7 rounded-full bg-white p-1" alt=""></span> +254757733263</div>
  </nav>

 



    <img src="../assets/carousel-2.jpg" alt="" class=" h-full w-full">
  </div>

 <h1 class=" flex  text-center items-center justify-center font-extrabold text-3xl mt-4 uppercase font-mono p-1  dark:text-slate-100">projects</h1>
<div class=" bg-slate-100  dark:bg-slate-900">
  <div class=" flex  flex-col md:flex-row justify-center items-center m-5 "> 

<div class=" transition-all duration-500 transform hover:opacity-90 pt-1 hover:pb-1 hover:scale-105">
  <img src="@/assets/vue.jpeg" alt="" class="  md:mr-96">
</div>
  <p class="   dark:text-gray-300"> Builds on top of standard HTML, CSS and JavaScript with intuitive API and world-class documentation. A rich, incrementally adoptable ecosystem that scales between a library and a full-featured framework.</p>

</div>


<div class=" flex  flex-col md:flex-row justify-center items-center m-5 "> 

<div class=" transition-all duration-500 transform hover:opacity-90 pt-1 hover:pb-1 hover:scale-105">
<img src="@/assets/node.png" alt="" class="  w-96 md:mr-96">
</div>
<p class="   dark:text-gray-300">  The no One Js runtime used for making servers Apps.A rich, incrementally adoptable ecosystem that scales between a library and a full-featured framework</p>

</div>


<div class=" flex  flex-col md:flex-row justify-center items-center m-5 "> 

<div class=" transition-all duration-500 transform hover:opacity-90 pt-1 hover:pb-1 hover:scale-105">
<img src="@/assets/mongodb.jpg" alt="" class=" bg-white w-96 md:mr-96">
</div>
<p class="   dark:text-gray-300">  The no One Js runtime used for making databases.A rich, incrementally adoptable ecosystem that scales between a library and a full-featured framework.</p>
</div>


<div class=" flex  flex-col md:flex-row justify-center items-center m-5 "> 

<div class="transition-all duration-500 transform hover:opacity-90 pt-1 hover:pb-1 hover:scale-105">
<img src="@/assets/vue2.jpg" alt="" class=" w-96 md:mr-96">
</div>
<p class="   dark:text-gray-300">  The no One Js runtime used for styling websites.A rich, incrementally adoptable ecosystem that scales between a library and a full-featured framework.</p>
</div>

<div class=" flex  flex-col md:flex-row justify-center items-center m-5 "> 

<div class=" transition-all duration-500 transform hover:opacity-90 pt-1 hover:pb-1 hover:scale-105">
<img src="@/assets/html.png" alt="" class=" bg-white w-96 md:mr-96">
</div>
<p class="   dark:text-gray-300">  The no One Js runtime used for making websites.A rich, incrementally adoptable ecosystem that scales between a library and a full-featured framework.</p>
</div>


 




</div>

<div class=" md:flex hidden text-center items-center justify-center font-extrabold text-3xl mt-4 font-mono uppercase p-1  dark:text-slate-100">Programming languages</div>
 <Tools/>
</div>


    </div>
  </main>
</template>

<script>
import Tools from "./tools.vue";
import ToggleMode from "./toggleMode.vue";
export default {
    components: { Tools, ToggleMode }
}
</script>

<style>

</style>