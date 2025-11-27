/**
 * File scrollTo.js.
 *
 * Scroll to a specific element with smooth animation.
 */

import { gsap } from "gsap";

import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Flip } from "gsap/Flip";

gsap.registerPlugin(Flip, ScrollToPlugin, ScrollTrigger);

// Only get links with data-scroll-to attribute
const links = gsap.utils.toArray("[data-scroll-to]");
const marker = document.querySelector(".marker");

// Get sections based on data-scroll-to values from links
const sections = links
  .map((link) => {
    const target = link.getAttribute("data-scroll-to");
    // Support both ID selectors (#id) and class selectors (.class)
    const selector =
      target.startsWith("#") || target.startsWith(".") ? target : `#${target}`;
    return document.querySelector(selector);
  })
  .filter((section) => section !== null); // Remove null entries if target not found

const stArray = [];
let activeSection = 0;

const doFlip = () => {
  if (!marker) return;
  const state = Flip.getState(marker);
  const link = links[activeSection];
  if (link) {
    link.appendChild(marker);
    Flip.from(state);
  }
};

sections.forEach((section, index) => {
  if (!section) return;

  const st = ScrollTrigger.create({
    trigger: section,
    start: "top 64",
    end: "end -64",
    onEnter: () => {
      if (links[activeSection]) {
        links[activeSection].classList.remove("active");
      }
      activeSection = index;

      if (links[activeSection]) {
        links[activeSection].classList.add("active");
        doFlip();
      }
    },
    onEnterBack: () => {
      if (links[activeSection]) {
        links[activeSection].classList.remove("active");
      }
      activeSection = index;

      if (links[activeSection]) {
        links[activeSection].classList.add("active");
        doFlip();
      }
    },

    id: index + 1,
  });
  stArray.push(st);
});

links.forEach((link, index) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    if (stArray[index]) {
      gsap.to(window, {
        scrollTo: {
          y: stArray[index].start + 64,
        },
        ease: "power2.inOut",
      });
    }
  });
});
