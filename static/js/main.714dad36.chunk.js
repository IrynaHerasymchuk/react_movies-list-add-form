(this["webpackJsonpreact_movies-list-add-form"]=this["webpackJsonpreact_movies-list-add-form"]||[]).push([[0],{11:function(e){e.exports=JSON.parse('[{"title":"Inception","description":"Follows the lives of eight very different couples in dealing with their love lives in various loosely interrelated tales all set during a frantic month before Christmas in London, England.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg","imdbUrl":"https://www.imdb.com/title/tt1375666","imdbId":"tt1375666"},{"title":"Love Actually","description":"A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4NjQ5NDc0Nl5BMl5BanBnXkFtZTYwNjk5NDM3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0314331","imdbId":"tt0314331"},{"title":"The Day After Tomorrow","description":"Jack Hall, paleoclimatologist, must make a daring trek from Washington, D.C. to New York City to reach his son, trapped in the cross-hairs of a sudden international storm which plunges the planet into a new Ice Age.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4YWMzMTMtZjUyOS00OGY1LTljMGUtOWU5ZjYzMjc2ZTMwXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_SY1000_CR0,0,701,1000_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt0319262","imdbId":"tt0319262"},{"title":"Rogue One","description":"The daughter of an Imperial scientist joins the Rebel Alliance in a risky move to steal the Death Star plans.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SY1000_SX675_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt3748528","imdbId":"tt3748528"},{"title":"The Holiday","description":"Two women troubled with guy-problems swap homes in each other\'s countries, where they each meet a local guy and fall in love.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTI1MDk4MzA2OF5BMl5BanBnXkFtZTYwMjQ3NDc3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0457939","imdbId":"tt0457939"}]')},18:function(e,t,i){},19:function(e,t,i){},20:function(e,t,i){},22:function(e,t,i){},23:function(e,t,i){"use strict";i.r(t);var a=i(9),n=i.n(a),r=(i(17),i(12)),s=i(3),l=i(4),c=i(7),o=i(6),m=i(1),d=i.n(m),h=(i(18),i(2)),b=(i(19),i(20),i(0)),j=function(e){var t=e.title,i=e.description,a=e.imgUrl,n=e.imdbUrl;return Object(b.jsxs)("div",{className:"card",children:[Object(b.jsx)("div",{className:"card-image",children:Object(b.jsx)("figure",{className:"image is-4by3",children:Object(b.jsx)("img",{src:a,alt:"Film logo"})})}),Object(b.jsxs)("div",{className:"card-content",children:[Object(b.jsxs)("div",{className:"media",children:[Object(b.jsx)("div",{className:"media-left",children:Object(b.jsx)("figure",{className:"image is-48x48",children:Object(b.jsx)("img",{src:"images/imdb-logo.jpeg",alt:"imdb"})})}),Object(b.jsx)("div",{className:"media-content",children:Object(b.jsx)("p",{className:"title is-8",children:t})})]}),Object(b.jsxs)("div",{className:"content",children:[i,Object(b.jsx)("br",{}),Object(b.jsx)("a",{href:n,children:"IMDB"})]})]})]})},p=function(e){var t=e.movies;return Object(b.jsx)("div",{className:"movies",children:t.map((function(e){return Object(b.jsx)(j,Object(h.a)({},e),e.imdbId)}))})},u=i(5),g=(i(22),function(e){Object(c.a)(i,e);var t=Object(o.a)(i);function i(){var e;Object(s.a)(this,i);for(var a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={newMovie:{title:"",description:"",imgUrl:"",imdbUrl:"",imdbId:""}},e.handleChange=function(t){var i=t.target,a=i.name,n=i.value;e.setState((function(e){return{newMovie:Object(h.a)(Object(h.a)({},e.newMovie),{},Object(u.a)({},a,n))}}))},e.handleSubmit=function(t){t.preventDefault();var i=e.state.newMovie,a=i.title,n=i.description,r=i.imgUrl,s=i.imdbUrl,l=i.imdbId;e.props.onSubmit({title:a,description:n,imgUrl:r,imdbUrl:s,imdbId:l}),e.clearForm()},e.clearForm=function(){e.setState({newMovie:{title:"",description:"",imgUrl:"",imdbUrl:"",imdbId:""}})},e}return Object(l.a)(i,[{key:"render",value:function(){var e=this.state.newMovie,t=e.title,i=e.description,a=e.imgUrl,n=e.imdbUrl,r=e.imdbId;return Object(b.jsxs)("form",{className:"form__content",action:"POST",onSubmit:this.handleSubmit,children:[Object(b.jsx)("div",{className:"form__input-area",children:Object(b.jsxs)("label",{htmlFor:"title",children:["Name of the movie:",Object(b.jsx)("input",{type:"text",id:"title",name:"title",placeholder:"Enter the title",className:"form__input",required:!0,value:t,onChange:this.handleChange})]})}),Object(b.jsx)("div",{className:"form__input-area",children:Object(b.jsxs)("label",{htmlFor:"title",children:["Description:",Object(b.jsx)("input",{type:"text",id:"title",name:"description",placeholder:"Enter description",className:"form__input",required:!0,value:i,onChange:this.handleChange})]})}),Object(b.jsx)("div",{className:"form__input-area",children:Object(b.jsxs)("label",{htmlFor:"title",children:["imgUrl:",Object(b.jsx)("input",{type:"text",id:"title",name:"imgUrl",placeholder:"Enter image URL",className:"form__input",required:!0,value:a,onChange:this.handleChange})]})}),Object(b.jsx)("div",{className:"form__input-area",children:Object(b.jsxs)("label",{htmlFor:"title",children:["imdbUrl:",Object(b.jsx)("input",{type:"text",id:"title",name:"imdbUrl",placeholder:"Enter imdb URL",className:"form__input",required:!0,value:n,onChange:this.handleChange})]})}),Object(b.jsx)("div",{className:"form__input-area",children:Object(b.jsxs)("label",{htmlFor:"title",children:["imdbId:",Object(b.jsx)("input",{type:"text",id:"title",name:"imdbId",placeholder:"Enter imdb id",className:"form__input",required:!0,value:r,onChange:this.handleChange})]})}),Object(b.jsx)("button",{type:"submit",className:"form__button",children:"Add movie"})]})}}]),i}(m.Component)),v=i(11),O=function(e){Object(c.a)(i,e);var t=Object(o.a)(i);function i(){var e;Object(s.a)(this,i);for(var a=arguments.length,n=new Array(a),l=0;l<a;l++)n[l]=arguments[l];return(e=t.call.apply(t,[this].concat(n))).state={movies:v},e.addMovie=function(t){e.setState((function(e){return{movies:[].concat(Object(r.a)(e.movies),[t])}}))},e}return Object(l.a)(i,[{key:"render",value:function(){var e=this.state.movies;return Object(b.jsxs)("div",{className:"page",children:[Object(b.jsx)("div",{className:"page-content",children:Object(b.jsx)(p,{movies:e})}),Object(b.jsx)("div",{className:"sidebar",children:Object(b.jsx)(g,{onSubmit:this.addMovie})})]})}}]),i}(d.a.Component);n.a.render(Object(b.jsx)(O,{}),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.714dad36.chunk.js.map