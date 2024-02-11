import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MasterService {
  userSignedIn = "";
  currentNavPos = "home";
  mode = "Dark Mode";
  rentCount = 0;
  wishlistCount = 0;

  bookDetails = [
    {
        "id":1,
        "title": "Eloquent JavaScript, Third Edition",
        "subtitle": "A Modern Introduction to Programming",
        "author": "Marijn Haverbeke",
        "description": "JavaScript lies at the heart of almost every modern web application, from social apps like Twitter to browser-based game frameworks like Phaser and Babylon. Though simple for beginners to pick up and play with, JavaScript is a flexible, complex language that you can use to build full-scale applications.",
        "rented" : "",
        "wishlist" : []
    },
    {
        "id":2,
        "title": "Practical Modern JavaScript",
        "subtitle": "Dive into ES6 and the Future of JavaScript",
        "author": "Nicolás Bevacqua",
        "description": "To get the most out of modern JavaScript, you need learn the latest features of its parent specification, ECMAScript 6 (ES6). This book provides a highly practical look at ES6, without getting lost in the specification or its implementation details.",
        "rented" : "",
        "wishlist" : []
    },
    {
        "id":3,
        "title": "Understanding ECMAScript 6",
        "subtitle": "The Definitive Guide for JavaScript Developers",
        "author": "Nicholas C. Zakas",
        "description": "ECMAScript 6 represents the biggest update to the core of JavaScript in the history of the language. In Understanding ECMAScript 6, expert developer Nicholas C. Zakas provides a complete guide to the object types, syntax, and other exciting changes that ECMAScript 6 brings to JavaScript.",
        "rented" : "",
        "wishlist" : []
    },
    {
        "id": 4,
        "title": "Speaking JavaScript",
        "subtitle": "An In-Depth Guide for Programmers",
        "author": "Axel Rauschmayer",
        "description": "Like it or not, JavaScript is everywhere these days -from browser to server to mobile- and now you, too, need to learn the language or dive deeper than you have. This concise book guides you into and through JavaScript, written by a veteran programmer who once found himself in the same position.",
        "rented" : "",
        "wishlist" : []
    },
    {
        "id": 5,
        "title": "Learning JavaScript Design Patterns",
        "subtitle": "A JavaScript and jQuery Developer's Guide",
        "author": "Addy Osmani",
        "description": "With Learning JavaScript Design Patterns, you'll learn how to write beautiful, structured, and maintainable JavaScript by applying classical and modern design patterns to the language. If you want to keep your code efficient, more manageable, and up-to-date with the latest best practices, this book is for you.",
        "rented" : "",
        "wishlist" : []
    },
    {
        "id": 6, 
        "title": "You Don't Know JS Yet",
        "subtitle": "Get Started",
        "author": "Kyle Simpson",
        "description": "The worldwide best selling You Don't Know JS book series is back for a 2nd edition: You Don't Know JS Yet. All 6 books are brand new, rewritten to cover all sides of JS for 2020 and beyond.",
        "rented" : "",
        "wishlist" : []
    },
    {
        "id": 7,
        "title": "Pro Git",
        "subtitle": "Everything you neeed to know about Git",
        "author": "Scott Chacon and Ben Straub",
        "description": "Pro Git (Second Edition) is your fully-updated guide to Git and its usage in the modern world. Git has come a long way since it was first developed by Linus Torvalds for Linux kernel development. It has taken the open source world by storm since its inception in 2005, and this book teaches you how to use it like a pro.",
        "rented" : "",
        "wishlist" : []
    },
    {
        "id": 8,
        "title": "Rethinking Productivity in Software Engineering",
        "subtitle": "Harsh Mishra",
        "author": "Caitlin Sadowski, Thomas Zimmermann",
        "description": "Get the most out of this foundational reference and improve the productivity of your software teams. This open access book collects the wisdom of the 2017 seminar on productivity in software engineering, a meeting of community leaders, who came together with the goal of rethinking traditional definitions and measures of productivity.",
        "rented" : "",
        "wishlist" : []
    }
]
  constructor() { this.userSignedIn = "";}
}
