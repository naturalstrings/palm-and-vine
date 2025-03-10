
<h1 align="center" >Palm & Vine Recording Studio Website</h1>
<p align="center"> 
   <img src="https://raw.githubusercontent.com/naturalstrings/heirloom-recordings/main/public/palmvinelogo-no-bg.png" width="200" height="200" alt="studio logo" >
</p>

---
# Technologies


###  <img src="https://raw.githubusercontent.com/naturalstrings/heirloom-recordings/main/public/node-icon.png" width="150" height="50" alt="mode express typescript logo" > Node + Express + Typescript <img src="https://raw.githubusercontent.com/naturalstrings/heirloom-recordings/main/public/react-1-logo-png-transparent-removebg-preview.png" width="25" height="25" alt="react logo" > React <img src="https://raw.githubusercontent.com/naturalstrings/heirloom-recordings/main/public/vite-logo.png" width="25" height="25" alt="vite logo" > Vite <img src="https://raw.githubusercontent.com/naturalstrings/heirloom-recordings/main/public/elephant2.png" width="30" height="25" alt="postgresql logo" > PostgreSQL <img src="https://raw.githubusercontent.com/naturalstrings/heirloom-recordings/main/public/docker-icon.png" width="25" height="25" alt="docker logo"  > Docker


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
Make sure you have Docker installed and actively running before executing the following commands.<br>

You may be prompted for login credentials or you can run:

```
docker login
```

To get the latest version pull from the main branch.<br>

Build a new docker image locally :<br>

```
docker buildx build -t private-repo/palm-and-vine-docker-image:latest .
```

Run the image in a new container instance:<br>

```
docker run -p 5173:5173 private-repo/palm-and-vine-docker-image:latest
```
Alternatively, you can specify which port you'd like the site routed to on your local host. 
And you can specify detach mode ( so the container runs in the background and leaves your terminal free for more commands )<br>

```
docker run -d -p 3000:5173 private-repo/palm-and-vine-docker-image:latest
```

</p>

## Contributors

[Christina Walton](https://www.linkedin.com/in/christina-owens-walton/)

[Nansamba Ssensalo](https://www.linkedin.com/in/nssensalo/)  
