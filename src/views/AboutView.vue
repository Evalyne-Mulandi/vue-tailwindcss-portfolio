<template>
  <main class=" min-h-screen bg-slate-300"> 
    <div class=""> 
   <nav class="flex border-b-2 border-slate-50 flex-row px-5 justify-center md:justify-end font-mono items-center mx-auto max-w-full gap-x-3 md:absolute top-0 right-40 left-96 text-white  bg-blue-800 rounded-sm h-1">
     <router-link class=" text-lg text-white font-medium active:text-white" to="/">Home</router-link>
     <router-link class=" text-lg text-white font-medium active:text-white" to="/about">About</router-link>
     <router-link class=" text-lg text-white font-medium active:text-white" to="/contact">contact</router-link>
     
     <div class=" text-white font-mono text-xl hidden   md:flex pl-32 justify-center items-center gap-x-2"> <span class=""> <img src="../assets/btn.png" class=" h-10 w-10 rounded-full bg-white p-1" alt=""></span> <button class="  ring-1   ring-white  px-5 py-2 rounded-full">+254757733263</button>  </div>
   
   </nav>
   <div class="flex flex-row px-5 justify-center md:justify-start md:ml-96 md:mr-40  h-40 bg-blue-800 font-mono items-center mx-auto max-w-full md:top-14  relative gap-x-3 z-30 rounded-sm ">
     <span class=" text-white"></span>
     <span class=" text-white bg-blue-800 font-bold  text-2xl"> HOME/CONTACT</span>
   </div> 
 </div>
  <div class="   "> 
  <div class="   bg-slate-100 w-3/5 flex     flex-col md:flex-row justify-start items-start  relative  left-96   mt-16 "> 

<div class="">
  <img src="@/assets/profile1.jpg" alt="" class=" rounded-md md:mr-96">
</div>
 
<p class=" text-start  font-mono  "> My name is Evalyne I specialize in building complex web applications,Graphic designing and carrying out research writing.
  I enjoy creating effortless user experience and designing delightful digital products. 
  The entire process of going from a concept to release and gathering user’s feedback on either client’s or my own products is what makes me wake up everyday!

I always seek new opportunities for cooperation on projects around interesting dashboards, design systems or landing pages. Let’s create something awesome together!
</p>
</div>
<div class="   bg-slate-100    flex  w-3/5 flex-col md:flex-row justify-start items-start  relative left-96">
  <p class=" font-mono">   A motivated, adaptable and responsible Computing IT person  
 with technical skills developed throughout the years. I have a focused approach to work, well developed communication skills, improved
ability to perform well in a team and a strong drive to see things throughout the completion.
Aspiration
I look forward to pursuing a career in a dynamic and challenging field that offers valuable
opportunity for growth and development. In all my endeavors, I hope to fulfil my destiny; to be
productive, diligent and innovative and to make a difference in my community, country and the
world as a whole.
 The following are some skills
 Excellent knowledge in web design and programming.
Experience in php, content management systems (wordpress,Joomla)
 Strong trouble shooting skills with software and hardware.
 Basic networking understanding
 Knowledge and experience in RDMS database; Mysql
 Excellent skills in excel and Microsoft office. 
  </p>
   
</div>
<div class="  bg-slate-100    flex  w-3/5 flex-col md:flex-row justify-start items-start  relative left-96">
  <button class=" bg-blue-800 text-white hover:bg-black rounded-md px-7 m-4 py-3"><a href="../assets/Evalyne CV.pdf" download="download">Download CV</a></button>

</div>
  


 
<div class="   flex flex-row px-3 justify-center md:justify-start md:ml-96 md:mr-40  bg-blue-800 font-mono items-center mx-auto max-w-full  relative gap-x-3 z-30  rounded-sm">
  <Footer/>
</div>
</div>
  
  </main>

</template>

<script>
import Footer from '@/components/footer.vue';
export default {
    components: { Footer }
}
</script>

<style>

</style>
