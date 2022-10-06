<template>
  <main class=" bg-slate-300  ">
    <div class="md:flex w-full justify-center items-center md:min-h-screen relative   ">
      

<div class="  flex justify-center items-center min-h-screen h-full  relative left-28 top--1 z-10 w-3/5 flex-col">
  
  <div class="">
    <nav class="flex flex-row px-5 justify-center md:justify-end font-mono items-center mx-auto max-w-full gap-x-3 md:fixed top-0 right-40 left-96 text-white  bg-blue-800 rounded-sm h-1">
    <router-link class=" text-lg text-white font-medium active:text-white" to="/">Home</router-link>
    <router-link class=" text-lg text-white font-medium active:text-white" to="/about">About</router-link>
    <router-link class=" text-lg text-white font-medium active:text-white" to="/contact">contact</router-link>
    
    <div class=" text-white font-mono text-xl hidden  md:flex pl-32 justify-center items-center gap-x-2">  <span class=""> <img src="../assets/btn.png" class=" h-7 w-7 rounded-full bg-white p-1" alt=""></span> +254757733263</div>
  </nav>
    <img src="../assets/carousel-2.jpg" alt="" class=" h-full w-full">
  </div>

 <h1 class=" flex  text-center items-center justify-center font-extrabold text-3xl mt-4 uppercase font-mono p-1">projects</h1>
<div class=" bg-slate-100">
  <div class=" flex  flex-col md:flex-row justify-center items-center m-5 "> 

<div class="">
  <img src="@/assets/web.jpg" alt="" class="  md:mr-96">
</div>
  <p class=""> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum impedit nulla magnam, atque repellendus totam saepe. Ipsam reprehenderit dolores optio doloremque iste eius laborum, voluptate quae in animi aut libero.</p>

</div>


<div class=" flex  flex-col md:flex-row justify-center items-center m-5 "> 

<div class="">
<img src="@/assets/web.jpg" alt="" class="  md:mr-96">
</div>
<p class=""> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum impedit nulla magnam, atque repellendus totam saepe. Ipsam reprehenderit dolores optio doloremque iste eius laborum, voluptate quae in animi aut libero.</p>

</div>


<div class=" flex  flex-col md:flex-row justify-center items-center m-5 "> 

<div class="">
<img src="@/assets/web.jpg" alt="" class="  md:mr-96">
</div>
<p class=""> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum impedit nulla magnam, atque repellendus totam saepe. Ipsam reprehenderit dolores optio doloremque iste eius laborum, voluptate quae in animi aut libero.</p>

</div>
</div>
<div class=" flex  text-center items-center justify-center font-extrabold text-3xl mt-4 font-mono uppercase p-1">Programming languages</div>
 <Tools/>
</div>


    </div>
  </main>
</template>

<script>
import Tools from "./tools.vue";
export default {
    components: { Tools }
}
</script>

<style>

</style>