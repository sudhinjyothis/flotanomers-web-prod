export const navigationHover = () => {};
// Sticky nav
export const stickyNav = () => {
  let offset = window.scrollY;
  const sticky = document.querySelectorAll(".main-header");
  for (let i = 0; i < sticky.length; i++) {
    const stick = sticky[i];
    if (stick) {
      if (offset > 10) {
        stick.classList.add("fixed-header");
      } else {
        stick.classList.remove("fixed-header");
      }
    }
  }
};

// Animation with wowjs
export const animation = () => {
  if (typeof window !== "undefined") {
    window.WOW = require("wowjs");
  }
  new WOW.WOW().init();
};

// sidebar toggle
export const sideBarToggle = () => {
  const body = document.querySelector("body");
  body.classList.toggle("side-content-visible");
};

// change pagination and update pagination and content
export const pagination = (listClass, sort, active) => {
  let list = document.querySelectorAll(listClass);
  for (let i = 0; i < list.length; i++) {
    const element = list[i];
    if (active === 1) {
      if (i < sort) {
        element.classList.remove("d-none");
      } else {
        element.classList.add("d-none");
      }
    } else {
      if (i >= (active - 1) * sort && i < active * sort) {
        element.classList.remove("d-none");
      } else {
        element.classList.add("d-none");
      }
    }
  }
};

// Pagination
export const getPagination = (totalNumber, sort) => {
  let arr = new Array(Math.ceil(totalNumber / sort))
    .fill()
    .map((_, idx) => idx + 1);
  return arr;
};

export const blogData = [
  {
    id: "1",
    title: "5 Key Benefits of Drones",
    image: "assets/images/blog/blog1.webp",
    date: "17 August 2021",
    author: "Flotanomers",
    authorImage: "assets/images/logos/logo-four.png",
    content: `A Dynamic Remotely Operated Navigation Equipment or what we simply call a drone is an Unmanned Aerial Vehicle(UAV) that operates without the need of a human pilot.


    Even though drones were originally made to save lives at a faster rate without human aid, they also play a wide range of roles in performing tasks that are considered rather dangerous or inaccessible to humans.
    
    
    Whether you know everything there is to know about drones or you know nothing about them and yet, here are a few benefits of drones that are quite interesting,
    
    
    1. Save a lot of time
    
    
    Drones are ideal for flying over places that are less accessible and rather dangerous to assess ongoing threats without having to risk the safety of rescue teams and can also be used to search for lost children, suspect tracking, accident investigations, and monitor tracking. They can capture pictures of the situation and allow officers to figure out the best way to deal with the situation and save lives.
    
    
    2.  Enhance surveying
    
    
    The planning and designing of many civil engineering projects essentially require good topographical surveying and with the help of drones, we can process and deliver surveying data in a much more accurate and safe way.
    
    
    3. They are economical
    
    Recently a lot of companies such as DJI, Parrot, and amazon are mainly focusing on drone research and development. Since the current delivery system is time-consuming and not very accessible to many places such as hilly or rural areas using drones is an efficient way to overcome this problem of delivery and service issues.
    
    
    4. Enables significant development in the agricultural field
    
    Using drones allows farmers to have visual monitoring access to their fields through the sky.  Farmers can check in on various parameters such as crop health, vegetation indices, plant height, plant scouting, water needs, soil analysis, etc. By using precise tech tools, farmers do not have to toil too hard to optimize farm productivity and profitability.
    
    
    5.Recreational purposes
    
    Recreational uses of drones involve personal interests, hobbies, or enjoyment purposes. Various exciting activities like sports or tourism can use drones to not only get an aerial image or video of the event but also capture the most alluring moments of your life.
    
    
    The fame game of drones, with various sectors embracing them, continues to grow very significantly year after year. We see that drones are not only for our leisurely use but they also play important roles in many vital areas. These gadgets not only save time and money, but their versatility also enables them to do tasks that are rather deemed impossible.`,
  },
];
