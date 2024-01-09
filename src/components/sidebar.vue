<template>
  <main class=" bg-slate-200 dark:bg-slate-900 ">
    <div class="md:flex w-full justify-center items-center md:min-h-screen relative   ">
      

<div class=" mt-20 flex justify-center items-center min-h-screen h-full  relative left-28 top--1 z-10 w-3/5 flex-col">
  
  <div class="">
    <nav class="flex flex-row px-5 justify-center md:justify-end font-mono items-center mx-auto max-w-full gap-x-3 md:fixed top-0 z-20 right-40 left-96 text-white  bg-teal-500  dark:bg-slate-900 rounded-sm h-1">
      <ToggleMode/>
    <router-link class=" text-lg text-white font-medium active:text-white" to="/">Home</router-link>
    <router-link class=" text-lg text-white font-medium active:text-white" to="/about">About</router-link>
    <router-link class=" text-lg text-white font-medium active:text-white" to="/contact">contact</router-link>
    
    <div class=" text-white font-mono text-xl hidden  md:flex pl-32 justify-center items-center gap-x-2">  <span class=""> <img src="../assets/btn.png" class=" h-7 w-7 rounded-full bg-white p-1" alt=""></span> +254757733263</div>
  </nav>


  </div>
  
  <img src="../assets/world.png" alt="" class="h-auto max-h-96 w-full ">

 <h1 class=" flex  text-teal-500 text-center items-center justify-center font-extrabold text-3xl mt-4 uppercase font-mono p-1  dark:text-slate-100">Sample Work Projects</h1>
<div class=" bg-slate-100  dark:bg-slate-900">
  
  <div class=" flex  flex-col md:flex-row justify-center items-center m-5 "> 

<div class=" transition-all duration-500 transform hover:opacity-90 pt-1 hover:pb-1 hover:scale-105">
<img src="@/assets/courses.png" alt="" class="  w-96 md:mr-96">
</div>  <div>
  <p class="font-bold">Courses Recommendation system</p>
<div class="flex justify-center items-center flex-row " > <!-- Updated this line -->
    <div>
      <button class="dark:bg-slate-700 dark:text-gray-300 bg-teal-500 text-white hover:bg-black rounded-md px-7 m-4 py-3 flex justify-center items-center flex-row gap-x-1">
        <span class=""><svg class="w-6 h-6 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z"></path></svg></span>
        <a href="https://youtube-courses-jekn-g67ox1yv7-evalyne-mulandi.vercel.app/home">Preview</a>
      </button>
    </div>

    <div>
      <button class="dark:bg-slate-700 dark:text-gray-300 bg-teal-500 text-white hover:bg-black rounded-md px-7 m-4 py-3 flex justify-center items-center flex-row gap-x-1">
        <span class=""><svg class="w-6 h-6 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z"></path></svg></span>
        <a href="https://github.com/Evalyne-Mulandi/youtube-course-recommendation">Code</a>
      </button>
    </div>
  </div>
 </div>
</div>

<div class=" flex  flex-col md:flex-row justify-center items-center m-5 "> 

<div class=" transition-all duration-500 transform hover:opacity-90 pt-1 hover:pb-1 hover:scale-105">
<img src="@/assets/chat.png" alt="" class="  w-96 md:mr-96">
</div>  <div>
  <p class="font-bold">Student Inquiry Chatbot</p>
<div class="flex justify-center items-center flex-row " > <!-- Updated this line -->
    <div>
      <button class="dark:bg-slate-700 dark:text-gray-300 bg-teal-500 text-white hover:bg-black rounded-md px-7 m-4 py-3 flex justify-center items-center flex-row gap-x-1">
        <span class=""><svg class="w-6 h-6 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z"></path></svg></span>
        <a href="https://evalyne-mulandi.github.io/chatbot/">Preview</a>
      </button>
    </div>

    <div>
      <button class="dark:bg-slate-700 dark:text-gray-300 bg-teal-500 text-white hover:bg-black rounded-md px-7 m-4 py-3 flex justify-center items-center flex-row gap-x-1">
        <span class=""><svg class="w-6 h-6 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z"></path></svg></span>
        <a href="https://github.com/Evalyne-Mulandi/chatbot">Code</a>
      </button>
    </div>
  </div>
 </div>
</div>


<div class=" flex  flex-col md:flex-row justify-center items-center m-5 "> 

<div class=" transition-all duration-500 transform hover:opacity-90 pt-1 hover:pb-1 hover:scale-105">
<img src="@/assets/app.png" alt="" class=" bg-white w-96 md:mr-96">
</div>
<div>
  <p class="font-bold">Nuntium News Android App</p>
<div class="flex justify-center items-center flex-row " > <!-- Updated this line -->
    <div>
      <button class="dark:bg-slate-700 dark:text-gray-300 bg-teal-500 text-white hover:bg-black rounded-md px-7 m-4 py-3 flex justify-center items-center flex-row gap-x-1">
        <span class=""><svg class="w-6 h-6 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z"></path></svg></span>
        <a href="https://github.com/Evalyne-Mulandi/Nuntium-News-Android-App">Preview</a>
      </button>
    </div>

    <div>
      <button class="dark:bg-slate-700 dark:text-gray-300 bg-teal-500 text-white hover:bg-black rounded-md px-7 m-4 py-3 flex justify-center items-center flex-row gap-x-1">
        <span class=""><svg class="w-6 h-6 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z"></path></svg></span>
        <a href="https://github.com/Evalyne-Mulandi/Nuntium-News-Android-App">Code</a>
      </button>
    </div>
  </div>
 </div>
</div>


<div class=" flex  flex-col md:flex-row justify-center items-center m-5 "> 

<div class="transition-all duration-500 transform hover:opacity-90 pt-1 hover:pb-1 hover:scale-105">
<img src="@/assets/coffee.png" alt="" class=" w-96 md:mr-96">
</div>
<div>
  <p class="font-bold">Coffee App UI&UX design</p>
<div class="flex justify-center items-center flex-row " > <!-- Updated this line -->
    <div>
      <button class="dark:bg-slate-700 dark:text-gray-300 bg-teal-500 text-white hover:bg-black rounded-md px-7 m-4 py-3 flex justify-center items-center flex-row gap-x-1">
        <span class=""><svg class="w-6 h-6 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z"></path></svg></span>
        <a href="https://www.figma.com/file/5tsmtEdxufCapqPP2VXKgs/COFFEE-APP?type=design&mode=design">Preview</a>
      </button>
    </div>

    <div>
      <button class="dark:bg-slate-700 dark:text-gray-300 bg-teal-500 text-white hover:bg-black rounded-md px-7 m-4 py-3 flex justify-center items-center flex-row gap-x-1">
        <span class=""><svg class="w-6 h-6 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z"></path></svg></span>
        <a href="https://www.figma.com/file/5tsmtEdxufCapqPP2VXKgs/COFFEE-APP?type=design&mode=design">Code</a>
      </button>
    </div>
  </div>
 </div>
</div>

<div class=" flex  flex-col md:flex-row justify-center items-center m-5 "> 

<div class=" transition-all duration-500 transform hover:opacity-90 pt-1 hover:pb-1 hover:scale-105">
<img src="@/assets/learn.png" alt="" class=" bg-white w-96 md:mr-96">
</div>
<div>
  <p class="font-bold">Learning system </p>
<div class="flex justify-center items-center flex-row " > <!-- Updated this line -->
    <div>
      <button class="dark:bg-slate-700 dark:text-gray-300 bg-teal-500 text-white hover:bg-black rounded-md px-7 m-4 py-3 flex justify-center items-center flex-row gap-x-1">
        <span class=""><svg class="w-6 h-6 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z"></path></svg></span>
        <a href="https://vue-template-umber.vercel.app/">Preview</a>
      </button>
    </div>

    <div>
      <button class="dark:bg-slate-700 dark:text-gray-300 bg-teal-500 text-white hover:bg-black rounded-md px-7 m-4 py-3 flex justify-center items-center flex-row gap-x-1">
        <span class=""><svg class="w-6 h-6 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z"></path></svg></span>
        <a href="https://github.com/Evalyne-Mulandi/Client-work-project-with-nodejs">Code</a>
      </button>
    </div>
  </div>
 </div>
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