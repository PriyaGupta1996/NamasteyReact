1. bundler  : bundles, packages, miniaturize, minify our app before it is deployed to the prod. Ex: webpack, parcel, wheat. 

2. dev dependencies : require only during the dev phase. -D

3. ~ : tilde : major version upgrade.
^ : caret : minor version upgrade.

4. package lock : keep the track of exact version. 

5. package json : config file which helps to install all the dependencies from npm.

6. node modules: code that we fetched from npm. ex parcel(ite code), but may be parcel is dependent on other dependencies as well, in that case it also downloads all of them and keep in node modules. Each folder in node modules have its own package.json. Hence its a collection of all the dependencies.

7. Should we push all this node modules in github : NO. 
hence we have git ignore, git will ignore them. 

8. Should we push lock and package.json to github : YES.

9. npm : used install a package 
npx : to execute a package.  ex. npx parcel index. html 
this will execute parcel, in the index.html which is our source. Parcel will go in index.html and create a build folder. and host that to localhost 1234. It creates a server for us. 

10. How to bring react in app:
a. using cdn : not a recommened way as we are always doing a network call to fetch react everytime. 
also we would need to update the cdn url with every version upgrade hence, npm react is a better way to have react in our code. 

11. Parcel:
    - dev-build
    - local server
    - HMR : hot module replacement
    - file watching algorithms - written in c++ code (which helps HMR)
    - caching - faster builds. 
    - image optimization
    - bundling
    - compress the file 
    - consistent hashing : read more.
    - code splitting
    - differential bundling : to support older browsers. 
    - good error handling
    - gives a way to host website on https
    - Tree shaking algorithm: remove the unused code.
    - different build for dev and prod. 

12. People think react app is fast because react is fast, a lot goes behind the scene one of them is bundler : like parcel.

13. In the build folder, one index.html, index.css and index.js is there, which is created by bundler during deployment. 

14. browserslist : we can give the list of browsers which we surely want our app to support. We can or can not include the very old versions of browsers. It depends on the use case. Adding the support of very old browsers make the app bit heavy, as bundler pus lot of extra code to do so. 










