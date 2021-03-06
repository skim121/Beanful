# Beanful
GA SEI Unit One Project: Create a game similar to "Tamagotchi" using HTML, CSS, JS, and Jquery

Click here to play: [Link](https://skim121.github.io/Beanful/)

#### Objective 
User picks a bean of their choice to grow and keep alive until harvest season. They can water the bean, put bug spray to keep insects away, or sweet talk them to keep them happy. If one of these metrics hits zero, the bean will be trashed. If the metrics remain satisfied until harvest season, the bean will be harvested.  

#### Wireframe
https://miro.com/app/board/o9J_lhtgu_0=/?invite_link_id=70839324010

![Wireframe](beanswireframe.jpg)

#### User Stories 

On the start screen: 

- As a user, I want to click the bean of my choice. 
- As a user, I want to type the name of my bean.
- As a user, I want to click “Play” to start playing.

On the play screen: 

- As a user, I want to click “water” to water my bean.
- As a user, I want to click “bug spray” to keep bugs away from my bean. 
- As a user, I want to click “sweet talk” to keep my bean happy. 
- As a user, I want to see the status of each bar changing at set intervals. 
- As a user, I want to be able to see the time status to the end of the bar (harvest). 

On the win screen: 

- As a user, I want to click “Play again” to go back to the start screen. 

On the lose screen: 

- As a user, I want to click “Try again” to go back to the start screen. 

#### Approach Taken 

Based on the wireframe, HTML contents were set up first, followed by the CSS design and Javascript functionality. JS structure is based off of one main class that includes methods for metric bars and winning conditions, along with dimming function and evolving function. A switch case is used for picking and building a character using specfic pictures. One unsolved problem was the buttons not working properly when put inside the class or the method, forcing them to be placed under the switch case. The different buttons on each page call on jquery to show and hide desired pages.    

