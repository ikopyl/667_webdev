(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{46:function(e,t,a){e.exports=a(97)},51:function(e,t,a){},92:function(e,t,a){},93:function(e,t,a){},94:function(e,t,a){},95:function(e,t,a){},96:function(e,t,a){},97:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(21),c=a.n(s),o=(a(51),a(3)),l=a(4),i=a(6),u=a(5),m=a(7),h=a(18),d=a(17),p=a(15),b=a(16),v=a(43),E=a(8),g={bandName:"",searchString:"",albums:[],btnSaveToDBHidden:!0,btnLoadFromDBHidden:!0,savedInDB:!1,savedRecordId:""},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SEARCH_ALBUMS":return console.log("reducer called on action: ".concat(t.type)),Object(E.a)({},e,{albums:t.payload,bandName:t.bandName.toLowerCase(),savedInDB:t.savedInDB,btnLoadFromDBHidden:t.btnLoadFromDBHidden,btnSaveToDBHidden:t.btnSaveToDBHidden});case"SAVE_ALBUMS":return Object(E.a)({},e,{bandName:t.bandName,savedInDB:t.savedInDB,savedRecordId:t.savedRecordId,btnSaveToDBHidden:t.savedInDB,btnLoadFromDBHidden:t.savedInDB});case"LOAD_ALBUMS":return Object(E.a)({},e,{albums:t.albums,bandName:t.bandName,savedInDB:t.savedInDB,btnSaveToDBHidden:t.savedInDB,btnLoadFromDBHidden:t.savedInDB});case"CHECK_IF_BAND_IN_DB":return Object(E.a)({},e,{savedInDB:t.savedInDB,savedRecordId:t.savedRecordId,btnLoadFromDBHidden:!t.savedInDB,btnSaveToDBHidden:t.btnSaveToDBHidden});case"UPDATE_SEARCH_STRING":return Object(E.a)({},e,{bandName:t.bandName.toLowerCase(),searchString:t.bandName});default:return e}},f={breweryWhat:"",byWhat:"",breweries:[]},w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SEARCH_BREWERIES":return console.log("reducer called action: ".concat(t.type)),console.log(t.payload),Object(E.a)({},e,{breweries:t.payload,breweryWhat:t.breweryWhat,byWhat:t.byWhat});default:return e}},S={weatherData:{consolidated_weather:["weather"]},searchCity:"",searchState:"",weather_icon_source:"https://www.metaweather.com/static/img/weather/s.svg"},_=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SEARCH_WEATHER":return console.log("reducer called on action: ".concat(t.type)),Object(E.a)({},e,{weatherData:t.payload,searchCity:t.searchCity,searchState:t.searchState,weather_icon_source:t.weather_icon_source});default:return e}},D=a(45),B={messages:[],text:""},N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_MESSAGES":return Object(E.a)({},e,{messages:t.messages});case"UPDATE_TEXT":return Object(E.a)({},e,{text:t.text});case"INSERT_MESSAGE":return Object(E.a)({},e,{messages:[].concat(Object(D.a)(e.messages),[t.message])});default:return e}},C=Object(b.c)({musicSearch:y,brewerySearch:w,searchWeather:_,messageReducer:N}),A=a(2),O=a.n(A),j=function(e){return{type:"UPDATE_TEXT",text:e}},I=[v.a];new WebSocket("ws://localhost:5000/websocket").onmessage=function(e){console.log(e),T.dispatch(function(e){return console.log("inserting message"),{type:"INSERT_MESSAGE",message:e}}(e.data))};var T=Object(b.e)(C,{},Object(b.d)(b.a.apply(void 0,I),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__())),x=T,k=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(i.a)(this,Object(u.a)(t).call(this))).state={locationData:[],weatherData:[],weather_state_abbr:"...",weather_icon_source:""},e}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;O.a.get("/location?format=json").then(function(t){return e.setState({locationData:t.data.response}),t}).then(function(e){return O.a.get("/weather/search?lattlong="+e.data.response.latitude+","+e.data.response.longitude)}).then(function(t){console.log(t.data.response.consolidated_weather[0]);var a=t.data.response.consolidated_weather[0].weather_state_abbr,n="https://www.metaweather.com/static/img/weather/"+t.data.response.consolidated_weather[0].weather_state_abbr+".svg";e.setState({weatherData:t.data.response,weather_state_abbr:a,weather_icon_source:n}),console.log("weather data",e.state.weather_state_abbr),console.log("weather icon source: ",e.state.weather_icon_source)}).catch(function(e){console.log(e)})}},{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"item"},this.state.locationData.city),r.a.createElement("div",{className:"item"},this.state.locationData.region_code),r.a.createElement("img",{className:"icon item",src:this.state.weather_icon_source,alt:""}))}}]),t}(n.Component),W=function(){return r.a.createElement("header",{className:"headerStyle"},r.a.createElement("span",{className:"columnStyle"},r.a.createElement("h1",{className:"header-left-align"},"My Dashboard"),r.a.createElement(h.b,{className:"linkStyle",to:"/"},"Home"),r.a.createElement("i",{className:"home icon white"}),r.a.createElement("span",null," | "),r.a.createElement(h.b,{className:"linkStyle",to:"/breweries"},"Breweries"),r.a.createElement("i",{className:"beer icon yellow"}),r.a.createElement("span",null," | "),r.a.createElement(h.b,{className:"linkStyle",to:"/weather"},"Weather"),r.a.createElement("i",{className:"sun icon gold"}),r.a.createElement("span",null," | "),r.a.createElement(h.b,{className:"linkStyle",to:"/lookupmusicband"},"Lookup Music Band"),r.a.createElement("i",{className:"headphones icon red"})),r.a.createElement("span",{className:"columnStyle"},r.a.createElement(k,null)))},H=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Authors"),r.a.createElement("p",null,r.a.createElement("a",{href:"mailto:ikopyl@mail.sfsu.edu"},"Ilya Kopyl")),r.a.createElement("p",null,r.a.createElement("a",{href:"mailto:jsamani1@mail.sfsu.edu"},"Joel Samaniego Campos")),r.a.createElement("p",null,r.a.createElement("a",{href:"mailto:nbesse@mail.sfsu.edu"},"Nick Besse")),r.a.createElement("p",null,r.a.createElement("a",{href:"mailto:ktruong8@mail.sfsu.edu"},"Kevin Truong")))},R=a(31),M=a.n(R),L=(a(92),function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(s)))).renderImage=function(e,t,a){var n="http://www.google.com/search?q=".concat(t+" album wiki","&btnI");return r.a.createElement("div",{style:F,key:a},r.a.createElement("a",{href:n,target:"_blank",rel:"noopener noreferrer"},r.a.createElement(M.a,{delayShow:500}),r.a.createElement("img",{src:e,alt:t,"data-tip":t})))},a.onSubmit=function(e){return function(t){t.preventDefault(),e(),a.props.updateSearchString("")}},a.onChange=function(e){return function(t){a.props.updateSearchString(t.target.value),e()}},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:{display:"flex",flexWrap:"nowrap"}},r.a.createElement("form",{onSubmit:this.onSubmit(this.props.searchAlbums),style:{display:"flex"}},r.a.createElement("input",{type:"text",name:"bandName",style:{flex:"10",padding:"5px"},placeholder:"Please enter a band name...",onChange:this.onChange(this.props.checkIfBandInDB),value:this.props.searchString}),r.a.createElement("input",{type:"submit",value:"Search iTunes API",className:"btn",style:{flex:"1"}})),!this.props.btnSaveToDBHidden&&r.a.createElement("form",{onSubmit:this.onSubmit(this.props.saveToDB),style:{display:"flex"}},r.a.createElement("input",{type:"submit",value:"Save to DB",className:"btn",style:{flex:"1",padding:"5px"}})),!this.props.btnLoadFromDBHidden&&r.a.createElement("form",{onSubmit:this.onSubmit(this.props.loadFromDB),style:{display:"flex"}},r.a.createElement("input",{type:"submit",value:"Load from DB",className:"btn",style:{flex:"1",padding:"5px"}})),r.a.createElement("div",{style:F,rendered:this.props.albums},this.props.albums&&this.props.albums.map(function(t,a){return e.renderImage(t.artworkUrlSmall,t.description,a)})))}}]),t}(n.Component)),F={display:"flex",flexWrap:"wrap"},U={searchAlbums:function(){return function(e,t){console.log("action called: searchAlbums");var a=t().musicSearch.bandName,n="/search?name=".concat(a);return O.a.get(n).then(function(n){var r=n.data.response;console.log(r),e({type:"SEARCH_ALBUMS",payload:r,bandName:a,savedInDB:t().musicSearch.savedInDB,btnLoadFromDBHidden:!0,btnSaveToDBHidden:t().musicSearch.savedInDB})}).catch(function(e){console.log(e)})}},saveToDB:function(){return function(e,t){console.log("action called: saveToDB");var a=t().musicSearch.bandName,n={query:a,musicAlbums:t().musicSearch.albums};return console.log(n),O.a.post("/search_result",n).then(function(n){console.log(n.data);var r=n.data._id;e({type:"SAVE_ALBUMS",bandName:a,payload:t().musicSearch.albums,savedInDB:!0,savedRecordId:r})}).catch(function(e){return console.log(e)})}},loadFromDB:function(){return function(e,t){console.log("action called: loadFromDB");var a=t().musicSearch.bandName,n="/search_result?name=".concat(a);return O.a.get(n).then(function(t){e({type:"LOAD_ALBUMS",bandName:a,albums:t.data.music_albums,savedInDB:!0})}).catch(function(e){console.log(e)})}},checkIfBandInDB:function(){return function(e,t){console.log("action called: checkIfBandInDB");var a=t().musicSearch.bandName;return O.a.get("/search_results").then(function(n){var r=n.data.find(function(e){return e.search_query===t().musicSearch.bandName}),s=!!r,c="";s&&(c=r._id),console.log("savedInDB: ".concat(s)),console.log("savedRecordId: ".concat(c)),e({type:"CHECK_IF_BAND_IN_DB",bandName:a,savedInDB:s,btnLoadFromDBHidden:!s,btnSaveToDBHidden:!0,savedRecordId:c})}).catch(function(e){console.log(e)})}},updateSearchString:function(e){return{type:"UPDATE_SEARCH_STRING",bandName:e}}},P=Object(p.b)(function(e){return{bandName:e.musicSearch.bandName,searchString:e.musicSearch.searchString,albums:e.musicSearch.albums,savedInDB:e.musicSearch.savedInDB,savedRecordId:e.musicSearch.savedRecordId,btnSaveToDBHidden:e.musicSearch.btnSaveToDBHidden,btnLoadFromDBHidden:e.musicSearch.btnLoadFromDBHidden}},U)(L),G=a(20),X=(a(93),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).onSubmit=function(e){e.preventDefault(),a.props.searchBrewery(a.state.byWhat,a.state.breweryWhat),a.setState({breweryWhat:"",byWhat:""})},a.onChange=function(e){a.setState(Object(G.a)({},e.target.name,e.target.value))},a.onChange2=function(e){a.setState({byWhat:e.target.value})},a.onFavorite=function(e){var t=a.state.favorite.slice(),n=e.target,r=n.name,s="checkbox"===n.type?n.checked:n.value;t[r]=s,a.setState({favorite:t})},a.state={breweryWhat:"",byWhat:"",breweries:[],favorite:[]},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:this.onSubmit,stlye:{display:"flex"}},r.a.createElement("select",{value:this.state.byWhat,onChange:this.onChange2},r.a.createElement("option",null,"Please Select a Value..."),r.a.createElement("option",{value:"by_city"},"By City"),r.a.createElement("option",{value:"by_name"},"By Name"),r.a.createElement("option",{value:"by_state"},"By State")),r.a.createElement("input",{type:"text",name:"breweryWhat",style:{flex:"10",padding:"5px"},placeholder:"Please enter a city name...",value:this.state.breweryWhat,onChange:this.onChange}),r.a.createElement("input",{type:"submit",value:"Submit",className:"btn",style:{flex:"1"}})),r.a.createElement("div",{className:"tabelsize"},r.a.createElement("table",null,r.a.createElement("tbody",null,r.a.createElement("tr",{className:"tableheader"},r.a.createElement("th",null,"Brewery Name"),r.a.createElement("th",null,"City"),r.a.createElement("th",null,"State"),r.a.createElement("th",null,"Address"),r.a.createElement("th",null,"Type of Brewery"),r.a.createElement("th",null,"Phone Number")),this.props.breweries.map(function(t,a){return r.a.createElement("tr",null,r.a.createElement("td",{className:"tableelement"},t.name),r.a.createElement("td",{className:"tableelement"},t.city),r.a.createElement("td",{className:"tableelement"},t.state),r.a.createElement("td",{className:"tableelement"},t.street),r.a.createElement("td",{className:"tableelement"},t.brewery_type),r.a.createElement("td",{className:"tableelement"},t.phone),r.a.createElement("td",null,r.a.createElement("input",{type:"checkbox",name:a,checked:e.state.favorite[a],onChange:e.onFavorite})))})))))}}]),t}(n.Component)),V={searchBrewery:function(e,t){return function(a){var n="/breweries?".concat(e,"=").concat(t);return O.a.get(n).then(function(n){var r=n.data.response;a({type:"SEARCH_BREWERIES",payload:r,breweryWhat:t,byWhat:e})}).catch(function(e){console.log(e)})}}},K=Object(p.b)(function(e){return{breweries:e.brewerySearch.breweries,byWhat:e.brewerySearch.byWhat,breweryWhat:e.brewerySearch.breweryWhat}},V)(X),q=a(27),J=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).onSubmit=function(e){e.preventDefault(),console.log("this.props.searchCity:"),console.log(a.state.searchCity),console.log("this.props.searchState:"),console.log(a.state.searchState),console.log("this.props.weatherData:"),console.log(a.props.weatherData),a.props.searchWeather(a.state.searchCity,a.state.searchState),a.setState({searchCity:"",searchState:""})},a.onChange=function(e){a.setState(Object(G.a)({},e.target.name,e.target.value))},a.state={locationData:[],weatherData:{consolidated_weather:[]},searchCity:"",searchState:"",weather_state_abbr:"hc",weather_icon_source:"https://www.metaweather.com/static/img/weather/s.svg",humidity:"Muggy",wind_direction_compass:"West",wind_speed:"Gusty",the_temp:"Hot"},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"container ui grid"},r.a.createElement("form",{className:"eight wide column row",onSubmit:this.onSubmit,style:{display:"flex"}},r.a.createElement("label",null,"City:",r.a.createElement("input",{type:"text",name:"searchCity",placeholder:"Please enter a City...",value:this.state.searchCity,onChange:this.onChange})),r.a.createElement("label",null,"State:",r.a.createElement("input",{type:"text",name:"searchState",placeholder:"Please enter a State...",value:this.state.searchState,onChange:this.onChange})),r.a.createElement("input",{type:"Submit",className:"btn"})),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"ui card"},r.a.createElement("div",{className:"image"},r.a.createElement("img",{src:this.props.weather_icon_source,alt:"weather state icon"})),r.a.createElement("div",{className:"content"},r.a.createElement("div",null,r.a.createElement("span",{className:"ui sub header"},"Humidity ",this.props.weatherData.consolidated_weather[0].humidity,"%")),r.a.createElement("div",null,r.a.createElement("span",{className:"ui sub header"},"Temperature ",this.props.weatherData.consolidated_weather[0].the_temp," \xa0 C")),r.a.createElement("div",null,r.a.createElement("span",{className:"ui sub header"},"Wind Direction ",this.props.weatherData.consolidated_weather[0].wind_direction_compass)),r.a.createElement("div",null,r.a.createElement("span",{className:"ui sub header"},"Wind Speed ",this.props.weatherData.consolidated_weather[0].wind_speed," \xa0 km")),r.a.createElement("div",null,r.a.createElement("span",{className:"ui sub header"},this.props.searchCity," \xa0 ",this.props.searchState))))))}}]),t}(n.Component),z={searchWeather:function(e,t){return function(a){console.log("action called: searchWeather",e,t);var n="/weather?city=".concat(e);return O.a.get(n).then(function(n){var r=n.data.response;console.log("weatherAction.js response from endpoint: ",r.consolidated_weather[0]),a({type:"SEARCH_WEATHER",payload:r,searchCity:e,searchState:t,weather_icon_source:"https://www.metaweather.com/static/img/weather/"+r.consolidated_weather[0].weather_state_abbr+".svg"})}).catch(function(e){console.log(e)})}}},$=Object(q.a)(function(e){return{searchCity:e.searchWeather.searchCity,searchState:e.searchWeather.searchState,weatherData:e.searchWeather.weatherData,weather_icon_source:e.searchWeather.weather_icon_source}},z)(J),Q=(a(94),function(e){var t=e.data;return r.a.createElement("div",null,t)}),Y=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).onSubmit=function(e){e.preventDefault(),a.props.submitMessage()},a.onChange=function(e){a.props.insertMessage()},a.handleTextChange=function(e){a.props.handlTextChange(e.target.value)},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;O.a.get("/messanger/getMessages").then(function(t){e.props.updateMessages(t.data)}).catch(function(e){console.log(e)})}},{key:"render",value:function(){return r.a.createElement("div",{className:"Messenger"},r.a.createElement("div",null,r.a.createElement("div",{className:"message-area"},this.props.messages.map(function(e,t){return r.a.createElement(Q,{key:t,data:e})}))),r.a.createElement("div",null,r.a.createElement("input",{type:"text",value:this.props.text,onChange:this.handleTextChange})),r.a.createElement("div",null,r.a.createElement("button",{onClick:this.onSubmit},"Submit")))}}]),t}(n.Component),Z={updateMessages:function(e){return{type:"UPDATE_MESSAGES",messages:e}},handlTextChange:j,submitMessage:function(){return function(e,t){O.a.post("/messanger/postMessage",{message:t().messageReducer.text}).then(function(){}).catch(function(e){return console.log(e)}),e(j(""))}}},ee=Object(p.b)(function(e){return{messages:e.messageReducer.messages,text:e.messageReducer.text}},Z)(Y),te=(a(95),a(96),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).AppSelector=function(e){switch(console.log(e),console.log(a.props.tileType),e){case"BreweriesApp":return r.a.createElement(K,null);case"LookUpMusicBand":return r.a.createElement(P,null);case"Weather Data":return r.a.createElement($,null);case"Messenger":return r.a.createElement(ee,null);case"":return"Select an App"}},a.state={app:""},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"appTiles"},r.a.createElement("select",{className:"selector",value:this.props.tileType,onChange:this.props.onChange},r.a.createElement("option",{value:""},"Please Select an App..."),r.a.createElement("option",{value:"BreweriesApp"},"Breweries"),r.a.createElement("option",{value:"LookUpMusicBand"},"Music artists"),r.a.createElement("option",{value:"Weather Data"},"Weather Data"),r.a.createElement("option",{value:"Messenger"},"Messenger")),this.AppSelector(this.props.tileType))}}]),t}(n.Component)),ae=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).onChange=function(e){a.setState({app:e.target.value})},a.addApp=function(){var e=a.state.indexApps.slice();e.push({key:e.length,tileType:null}),a.setState({indexApps:e})},a.removeApp=function(){var e=a.state.indexApps.slice();e.pop(),a.setState({indexApps:e})},a.state={indexApps:[]},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return console.log(this.state.indexApps),r.a.createElement(p.a,{store:x},r.a.createElement(h.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(W,null),r.a.createElement(d.a,{exact:!0,path:"/",component:H}),r.a.createElement(d.a,{path:"/lookupmusicband",component:P}),r.a.createElement(d.a,{path:"/breweries",component:K}),r.a.createElement(d.a,{path:"/weather",component:$}),r.a.createElement(d.a,{path:"/messenger",component:ee}))),r.a.createElement("button",{onClick:this.addApp},"Add an App"),r.a.createElement("button",{onClick:this.removeApp},"Remove an App"),r.a.createElement("div",{className:"masterDiv"},this.state.indexApps.map(function(t){return console.log(t),r.a.createElement("div",null,r.a.createElement(te,{key:t.key,tileType:t.tileType,onChange:function(a){var n=e.state.indexApps.slice();n[t.key].tileType=a.target.value,e.setState({indexApps:n})}}),r.a.createElement("div",null,t.key))})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(ae,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[46,1,2]]]);
//# sourceMappingURL=main.c3ed045d.chunk.js.map