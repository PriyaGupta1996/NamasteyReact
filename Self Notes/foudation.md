1. React.createElement returns an object. 
2. When I render it is when it becomes HTML object. 
3. But react developer realized that React.createElement is becoming very clumsy. Hence JSX was introduced. 
4. JSX is not part of react. We can use react without JSX, but it just become very clumsy. 
5. Before react : HTML, JavaScript files. We used to create skeleton in HTMl and logic in javascript. 
6. JSX is not HTML. Its not HTML inside javascript. Its HTML/XML like syntax. 
7. The code is written for both human and machine. If only machine then it would have been only 0 and 1. Hence always make the code very readable. 
## JSX
1. It is not a valid javascript. 
2. It is not understandable by JS engine. Hence Babel comes in. 
3. Babel is a package that comes in use to transpile and JS compiler the code in a form which is understandable by the JS Engine. Hence, in terms of JSX, it coverts the JSX to JS Object, by make it so as if created by React.createElement function
4. Babel also transform the new JS code to a code which is understandable by js engine.
5. Its mostly installed by parcel(bundler).
6. Attributes in JSX are given in camel case. 
7. If my JSX is in multiple line, then I have to wrap inside in round brackets. 
8. root.render(), it take react element in the brackets. When i say <Title/> , its basically executed and giving react element in the end. 

## React Component
1. class based components and functional components. 
2. Class based : Old way. 
3. Functional based : New way of writing components.  

## Functional Component. 
1. normal js function which returns some JSX. OR, a function which return react element. 
2. If I create a react element ex. title I can just add it as  {title}, and it will behave same as  <Title>
3. {} inside the JSX, it sanatizes the data before rendering it to prevent cross site attacks as in {} javascript can be run and hacker can fetch cookies, local storage and session storage etc from user's laptop. Hence malacious data can not come up im UI.
