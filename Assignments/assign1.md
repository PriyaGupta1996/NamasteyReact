# _Assignment 1_

## 1. What is Emmet?
- A web development tool which simplifies the process of writing HTML and CSS.
- Example: It gives the boiler plate code for HTML on typing HTML:5 and pressing enter. 

## 2. What is difference between library and framework ?
- Libraries are piece of code which we can include and start using. Its easy to use and does not require us to structure our code in a specific way.
- Framework are the structured software environment which creates foundation for building applications. It dictates the overall flow of the control, design patterns etc. 

## What is CDN ? Why do we use it ?

- Content Delivery Network. They are the network of servers which are strategically placed at different geographical locations. The purpose of CDN is to deliver the content like images, files, scripts, stylesheet quickly and more effectively. 
- When the end user requests for the the content, the request is routed to the nearest CDN server instead of website's origin.This proximity helps to reduce latency and improves overall performance. 

## Why is React known as React ?

- React signifies the reactive and declarative nature of library. This allows efficient UI updates and simplified development process for developers. 

## What is cross origin in script tags ?

- The origin is formed with the combination of protocol,domains and port. Th browser by default restrict the execution of the script which originates from different origin. It helps to protect user from executing malicious scripts which can potentially manipulate or access sensitive information.
- This checks happen at client side/browser wheather to execute the script or not. To enable cross origin access, server side configuration is required. 
-The server hosting the resource can implement Cross-Origin Resource Sharing (CORS) by sending specific headers in the server response.


## What is the difference between REACT and REACTDOM?

- Both are react packages. React is core library used for building UI using components while REACTDOM is used for rendering the components within browser's DOM. 
- React focuses on component architecture and managing updates while REACTDOM handles interaction between react components and actual HTML document structure. 

## Differnce between async and defer ?

- When we load webpage two major things happen: one is HTML parsing and other is script loading and their execution.
- normally, when browser encounters the script tag, it stops html parsing and then loads scripts and executes them. Post that it again starts the html parsing, hence blocking the rendering of HTML.
- With async keyword, html parsing and loading of scripts happens simultaneously, once scripts are loaded, html parsing stops and scripts are executed. Thr order of script execution is not guaranteed
- With defer keyword, script execution happens in the end, after the HTML parsing is completed. This gauranties the order of script execution.
