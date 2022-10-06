<template>
    <main class="  overflow-x-hidden overflow-y-auto min-h-screen bg-slate-300"> 
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
  
 <div class="   relative  left-48 flex  flex-row justify-center  gap-x-36 items-center"> 
 <div class=" relative  top-24  right-24   flex flex-col justify-center items-center">
     <img src="https://img.icons8.com/ios/50/000000/order-delivered.png"  />
  <h1 class=" text-2xl  font-bold  text-black  font-mono ">Address</h1>
  <span class="   text-black font-mono" >Nairobi,kenya</span> 
 </div>
 
 
 <div class=" relative  top-24  right-24   flex flex-col justify-center items-center">
     <img src="../assets/btn.png" class="  h-12 w-12 " alt="">
  <h1 class=" text-2xl  font-bold  text-black  font-mono ">Phone</h1>
  <span class="   text-black font-mono" >+254757733263</span> 
 </div>
 
 <div class=" relative  top-24  right-24   flex flex-col justify-center items-center">
     <img src="https://img.icons8.com/ios/50/000000/secured-letter--v1.png" class=" "/>
  <h1 class=" text-2xl font-bold  text-black  font-mono ">Email</h1>
  <span class="   text-black font-mono" >eva.nthenya.mulandi@gmail.com</span> 
 </div>
 </div>
 <div class="relative md:ml-96  top-28 flex  flex-col max-w-3xl">
 <form action="" class="    gap-3 p-4  flex  flex-col max-w-3xl  " >
 
 <input type="text" class=" px-10 py-3  rounded-md " placeholder="Full name">
 <input type="text" class=" px-10 py-3   rounded-md " placeholder="Email">
 <input type="text" class=" px-10 py-3   rounded-md " placeholder="Subject"> 
  <textarea name="" id="" cols="10" rows="7" placeholder="Message"></textarea>
 
 </form>
  
 <div class="   flex justify-center items-center max-h-screen">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.801278217325!2d35.962801314454005!3d-0.167464635475366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1829f6f367bba6d9%3A0x363c14244dccdde!2sKabarak%20university!5e0!3m2!1sen!2ske!4v1665070492855!5m2!1sen!2ske" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
 </div>

 </div>
 
 
 
 
 <div class="   flex flex-row px-3 justify-center md:justify-start md:ml-96 md:mr-40  bg-blue-800 font-mono items-center mx-auto max-w-full  relative gap-x-3 z-30  rounded-sm">
  <Footer/>
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