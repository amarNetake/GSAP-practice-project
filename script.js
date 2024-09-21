
let timelineTrain = gsap.timeline();

//The nav bar will be out of scree initially horizontally and then it will gradually remove below style to come back to it's initial position.
timelineTrain.from("#nav h3",{
     y: -42,
     // duration: 0.6,
     // delay: 0.5,
     stagger: 0.2 //This will make sure each h3 element inside the nav bar come at 0.2sec delay each. 
});

//The h1 elements inside main will be initially in final position meaning it will be having styles given below. Then it will remove this style to come back to it's initial position
timelineTrain.from("#main h1", {
     x: -1200,
     opacity: 0.3,
     stagger: 0.5 //This will make sure each h1 element inside #main comes one after the other and each h1 duration will be 0.4sec.
});

timelineTrain.from("#main img" , {
     opacity: 0,
     rotate: 180,
     scale: 0,
     stagger: 0.8 //This will make sure each image element inside #main comes one after the other and each img duration will be 0.8sec.
})


/*
In above we created a timeline train of 3 components. Each component will begin only after it's previous component finishes.

First component is all <h3> inside #main component. Now we set the stagger to 0.2s meaning all h3s in the order of their place in html will come one after the other and each h3 will animate for 0.2 sec.

Once First component finishes the second  then we are going to animate all <h1> inside #main component. Now again each h1 element inside #main will animate one after the other and each h1 will animate for 0.5s.

Similarly the last component will start will animate in similar fashion.
*/ 