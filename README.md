
<h1 align="center" >Palm & Vine Recording Studio Website</h1>
<p align="center"> 
   <img src="https://raw.githubusercontent.com/naturalstrings/heirloom-recordings/main/public/palmvinelogo-no-bg.png" width="200" height="200" alt="studio logo" >
</p>

---
# Technologies


###  <img src="https://raw.githubusercontent.com/naturalstrings/heirloom-recordings/main/public/node-icon.png" width="150" height="50" alt="mode express typescript logo" > Node + Express + Typescript <img src="https://raw.githubusercontent.com/naturalstrings/heirloom-recordings/main/public/react-1-logo-png-transparent-removebg-preview.png" width="25" height="25" alt="react logo" > React <img src="https://raw.githubusercontent.com/naturalstrings/heirloom-recordings/main/public/vite-logo.png" width="25" height="25" alt="vite logo" > Vite <img src="https://raw.githubusercontent.com/naturalstrings/heirloom-recordings/main/public/elephant2.png" width="30" height="25" alt="postgresql logo" > PostgreSQL 

<details> 
<summary> About the Stack </summary> 
<p>
<ul>
<li>React is a JavaScript library for building user interfaces. It's known for its component-based architecture, declarative style, and efficient rendering capabilities. This project leverages React JS to create a dynamic and interactive web application. </li>

<li>Vite is an efficient and reliable real-time bundler.</li>
</ul>

</p>

</details>



  
## Run App
<p>This app is dockerized.<br>
To run, make sure you have Docker installed.<br>
You may be prompted for login credentials.Simply pull docker image from the repo with command:<br>

```
docker pull username/palm-and-vine-repo:v1
```

Then run the image in a new container instance:<br>

```
docker run -p 5173:5173 palm-and-vine-docker-image:v1
```
Alternatively, you can specify which port you'd like the site routed to and detach mode ( so the container runs in the background and leaves your terminal free for more commands )<br>

```
docker run -d -p 3000:5173 palm-and-vine-docker-image:v1
```

</p>
