(this["webpackJsonpbee-in-berlin"]=this["webpackJsonpbee-in-berlin"]||[]).push([[0],{22:function(e){e.exports=JSON.parse('[{"id":0,"question":"What\'s your name?","options":[]},{"id":1,"question":"How long will you stay in Berlin?","options":["Hours","Days","Months"]},{"id":2,"question":"How many hours will you stay?","options":[]},{"id":3,"question":"How many days will you stay?","options":[]},{"id":4,"question":"How many months will you stay?","options":[]},{"id":5,"question":"What types of transportation will you use?","options":["S-Bahns or/and underground","Trams or/and Buses","Conbined"]},{"id":6,"question":"Will you often travel during the stay?","options":["Yes","No"]},{"id":7,"question":"Will you visit multiple destinations with return?","options":["Yes","No"]},{"id":8,"question":"Does the trip using S-bahns or/and underground have less than 3 stations?","options":["Yes","No"]},{"id":9,"question":"Does the trip using Trams or/and Buses have less than 6 stations?","options":["Yes","No"]},{"id":10,"question":"How many destinations/trips will you have?","options":[]},{"id":11,"question":"How many trips per day will you have?","options":[]},{"id":12,"question":"Will you always travel after 10 AM?","options":["Yes","No"]},{"id":13,"question":"Are you an adult (greater than 14 years old)?","options":["Yes","No"]},{"id":14,"question":"Are you in a group of up to 5 persons?","options":["Yes","No"]},{"id":15,"question":"Do you want to buy a group ticket?","options":["Yes","No"]},{"id":16,"question":"Do you bring a bicycle?","options":["Yes","No"]},{"id":17,"question":"How many bicycles will your group bring?","options":[]},{"id":18,"question":"Which Berlin Zone is your trips in (AB, BC, ABC)?","options":["AB","BC","ABC"]}]')},23:function(e){e.exports=JSON.parse('[{"id":1,"type":"single-tickets","name_de":"Einzelfahrschein","name_en":"Single ticket","tickets":[{"zone":"AB","fares":{"normal":3,"reduced":1.9}},{"zone":"BC","fares":{"normal":3.5,"reduced":2.4}},{"zone":"ABC","fares":{"normal":3.8,"reduced":2.7}}]},{"id":2,"type":"short-tickets","name_de":"Kurzstrecke","name_en":"Short trip ticket","tickets":[{"zone":"","fares":{"normal":3.5,"reduced":2.4}}]},{"id":3,"type":"4-trip-tickets","name_de":"4-Fahrten-Karte","name_en":"4-trip ticket","tickets":[{"zone":"AB","fares":{"normal":9.4,"reduced":5.8}},{"zone":"BC","fares":{"normal":12.6,"reduced":8.6}},{"zone":"ABC","fares":{"normal":13.8,"reduced":9.8}}]},{"id":4,"type":"4-short-trip-tickets","name_de":"4-Fahrten-Karte Kurzstrecke","name_en":"4-short trip ticket","fares":{"normal":6,"reduced":4.6}},{"id":5,"type":"24-hour-tickets","name_de":"24-Stunden-Karte","name_en":"24-hour ticket","tickets":[{"zone":"AB","fares":{"normal":8.8,"reduced":5.6}},{"zone":"BC","fares":{"normal":9.2,"reduced":5.9}},{"zone":"ABC","fares":{"normal":10,"reduced":6.1}}]},{"id":6,"type":"24-hour-small-group-tickets","name_de":"24-Stunden-Karte","name_en":"24-hour small group ticket","tickets":[{"zone":"AB","fares":{"normal":25.5,"reduced":25.5}},{"zone":"BC","fares":{"normal":26,"reduced":26}},{"zone":"ABC","fares":{"normal":26.5,"reduced":26.5}}]},{"id":7,"type":"7-day-tickets","name_de":"7-Tage-Karte VBB-Umweltkarte","name_en":"7-day ticket VBB","tickets":[{"zone":"AB","fares":{"normal":36,"reduced":36}},{"zone":"BC","fares":{"normal":37,"reduced":37}},{"zone":"ABC","fares":{"normal":43,"reduced":43}}]},{"id":8,"type":"monthly-tickets","name_de":"Monatskarte","name_en":"Monthly ticket","tickets":[{"zone":"AB","fares":{"normal":86,"reduced":86}},{"zone":"BC","fares":{"normal":89,"reduced":89}},{"zone":"ABC","fares":{"normal":107,"reduced":107}}]},{"id":9,"type":"10am-monthly-tickets","name_de":"10-Uhr-Karte","name_en":"10 o\u2019clock ticket","tickets":[{"zone":"AB","fares":{"normal":63,"reduced":63}},{"zone":"BC","fares":{"normal":65,"reduced":65}},{"zone":"ABC","fares":{"normal":78,"reduced":78}}]}]')},34:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var r=n(1),s=n.n(r),a=n(12),i=n.n(a),o=n(4),c=n(11),u=n(21),d=n(6),l=n(7),p=n(3),f=n(9),h=n(8),m=n(22),y=n(23),b="FETCH_QUESTION_POOL",A="FETCH_TICKETS",B="UPDATE_USER_ANSWER_POOL",j="REMOVE_AN_ANSWER",k="RESTART_QUESTIONNAIRE",g=function(){return function(e){e({type:k})}},v=(n(34),n(0)),w=function(e){Object(f.a)(n,e);var t=Object(h.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this;return Object(v.jsx)("nav",{className:"relative  items-center shadow-xl mb-3",children:Object(v.jsxs)("div",{className:"  flex flex-wrap items-center justify-between w-full",children:[Object(v.jsx)("img",{src:"data:image/png;base64,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",className:"logo",alt:"bvg-logo"}),this.props.name?Object(v.jsxs)("div",{className:"text-2xl",children:["WELCOME TO BERLIN, ",this.props.name,"!"]}):null,Object(v.jsx)("div",{className:"items-center mr-8",children:Object(v.jsxs)("button",{className:"text-red-500 bg-transparent border border-solid border-red-500 hover:bg-red-500 hover:text-white active:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150",type:"button",onClick:function(){return e.props.toggleRestart(!0)},children:[Object(v.jsx)("i",{className:"fas fa-power-off"})," Reset Inputs"]})})]})})}}]),n}(r.Component),z=Object(o.b)((function(e){return{username:e.user}}),{restartQuestionnaire:g})(w),C=n(5),O=n.n(C),T=n(16),I=n(15),x=n(2);function N(e,t){var n=t[e];switch(e){case 0:return 1;case 1:return"Hours"===n?5:"Days"===n?3:12;case 3:return n>14?12:6;case 5:return"S-Bahns or/and underground"===n?8:"Trams or/and Buses"===n?9:7;case 6:return t[3]>14?12:n?13:11;case 7:return n?10:13;case 8:case 9:return n?13:7;case 10:case 11:case 12:return 13;case 13:return n&&(t[8]||t[9])?{ticketId:2,zone:"",fareType:"normal"}:n||!t[8]&&!t[9]?18:{ticketId:2,zone:"",fareType:"reduced"};case 18:if(t[13]&&"Hours"===t[1]){if(!t[7])return"AB"===n?{ticketId:1,zone:"AB",fareType:"normal"}:"BC"===n?{ticketId:1,zone:"BC",fareType:"normal"}:{ticketId:1,zone:"ABC",fareType:"normal"};if(t[7]&&t[10]>2)return"AB"===n?{ticketId:5,zone:"AB",fareType:"normal"}:"BC"===n?{ticketId:5,zone:"BC",fareType:"normal"}:{ticketId:5,zone:"ABC",fareType:"normal"};if(t[7]&&t[10]<=2)return"AB"===n?{ticketId:1,zone:"AB",fareType:"normal"}:"BC"===n?{ticketId:1,zone:"BC",fareType:"normal"}:{ticketId:1,zone:"ABC",fareType:"normal"}}if(!t[13]&&"Hours"===t[1]){if(!t[7])return"AB"===n?{ticketId:1,zone:"AB",fareType:"reduced"}:"BC"===n?{ticketId:1,zone:"BC",fareType:"reduced"}:{ticketId:1,zone:"ABC",fareType:"reduced"};if(t[7]&&t[10]>2)return"AB"===n?{ticketId:5,zone:"AB",fareType:"reduced"}:"BC"===n?{ticketId:5,zone:"BC",fareType:"reduced"}:{ticketId:5,zone:"ABC",fareType:"reduced"};if(t[7]&&t[10]<=2)return"AB"===n?{ticketId:1,zone:"AB",fareType:"reduced"}:"BC"===n?{ticketId:1,zone:"BC",fareType:"reduced"}:{ticketId:1,zone:"ABC",fareType:"reduced"}}if(t[13]&&"Days"===t[1]){if(t[3]<5){if(t[6]||t[11]>2)return"AB"===n?{ticketId:5,zone:"AB",fareType:"normal"}:"BC"===n?{ticketId:5,zone:"BC",fareType:"normal"}:{ticketId:5,zone:"ABC",fareType:"normal"};if(!t[6]&&t[11]<=2)return"AB"===n?{ticketId:1,zone:"AB",fareType:"normal"}:"BC"===n?{ticketId:1,zone:"BC",fareType:"normal"}:{ticketId:1,zone:"ABC",fareType:"normal"}}if(t[3]>=5&&t[3]<=14){if(t[6]||t[11]>2)return"AB"===n?{ticketId:7,zone:"AB",fareType:"normal"}:"BC"===n?{ticketId:7,zone:"BC",fareType:"normal"}:{ticketId:7,zone:"ABC",fareType:"normal"};if(!t[6]&&t[11]<=2)return"AB"===n?{ticketId:1,zone:"AB",fareType:"normal"}:"BC"===n?{ticketId:1,zone:"BC",fareType:"normal"}:{ticketId:1,zone:"ABC",fareType:"normal"}}if(t[3]>14)return t[12]?"AB"===n?{ticketId:9,zone:"AB",fareType:"normal"}:"BC"===n?{ticketId:9,zone:"BC",fareType:"normal"}:{ticketId:9,zone:"ABC",fareType:"normal"}:"AB"===n?{ticketId:8,zone:"AB",fareType:"normal"}:"BC"===n?{ticketId:8,zone:"BC",fareType:"normal"}:{ticketId:8,zone:"ABC",fareType:"normal"}}if(!t[13]&&"Days"===t[1]){if(t[3]<5){if(t[6]||t[11]>2)return"AB"===n?{ticketId:5,zone:"AB",fareType:"reduced"}:"BC"===n?{ticketId:5,zone:"BC",fareType:"reduced"}:{ticketId:5,zone:"ABC",fareType:"reduced"};if(!t[6]&&t[11]<=2)return"AB"===n?{ticketId:1,zone:"AB",fareType:"reduced"}:"BC"===n?{ticketId:1,zone:"BC",fareType:"reduced"}:{ticketId:1,zone:"ABC",fareType:"reduced"}}if(t[3]>=5&&t[3]<=14){if(t[6]||t[11]>2)return"AB"===n?{ticketId:7,zone:"AB",fareType:"reduced"}:"BC"===n?{ticketId:7,zone:"BC",fareType:"reduced"}:{ticketId:7,zone:"ABC",fareType:"reduced"};if(!t[6]&&t[11]<=2)return"AB"===n?{ticketId:1,zone:"AB",fareType:"reduced"}:"BC"===n?{ticketId:1,zone:"BC",fareType:"reduced"}:{ticketId:1,zone:"ABC",fareType:"reduced"}}if(t[3]>14)return t[12]?"AB"===n?{ticketId:9,zone:"AB",fareType:"reduced"}:"BC"===n?{ticketId:9,zone:"BC",fareType:"reduced"}:{ticketId:9,zone:"ABC",fareType:"reduced"}:"AB"===n?{ticketId:8,zone:"AB",fareType:"reduced"}:"BC"===n?{ticketId:8,zone:"BC",fareType:"reduced"}:{ticketId:8,zone:"ABC",fareType:"reduced"}}return"Months"===t[1]?t[12]?"AB"===n?{ticketId:9,zone:"AB",fareType:"reduced"}:"BC"===n?{ticketId:9,zone:"BC",fareType:"reduced"}:{ticketId:9,zone:"ABC",fareType:"reduced"}:"AB"===n?{ticketId:8,zone:"AB",fareType:"reduced"}:"BC"===n?{ticketId:8,zone:"BC",fareType:"reduced"}:{ticketId:8,zone:"ABC",fareType:"reduced"}:void 0;default:return}}n(37);var S={ticket:null,currentQuestionId:1,currentAnswerType:"select",inputValue:"",prevQuestionIds:[],prevInputs:[],prevAnswerTypes:[],isStart:!1,error:!1},P=function(e){Object(f.a)(n,e);var t=Object(h.a)(n);function n(e){var r;return Object(d.a)(this,n),(r=t.call(this,e)).state=Object(x.a)({},S),r.nextQuestion=r.nextQuestion.bind(Object(p.a)(r)),r.onChangeHandler=r.onChangeHandler.bind(Object(p.a)(r)),r.findNextQuestion=N,r.renderTicket=r.renderTicket.bind(Object(p.a)(r)),r.previousQuestion=r.previousQuestion.bind(Object(p.a)(r)),r.restartApplication=r.restartApplication.bind(Object(p.a)(r)),r}return Object(l.a)(n,[{key:"onChangeHandler",value:function(e){this.setState((function(){return{inputValue:e.target.value}}))}},{key:"renderTicket",value:function(e){return Object(v.jsxs)("div",{className:"ticket",children:[Object(v.jsx)("div",{className:"ticket-recommendation",children:"Ticket Recommendation:"}),Object(v.jsxs)("p",{children:["- Ticket name (German):"," ",Object(v.jsxs)("span",{style:{fontWeight:"bold"},children:[e.ticketNameDE," Berlin ",e.zone]})]}),Object(v.jsxs)("p",{children:["- Ticket name (English):"," ",Object(v.jsxs)("span",{style:{fontWeight:"bold"},children:[e.ticketNameEN," Berlin ",e.zone]})]}),Object(v.jsxs)("p",{children:["- Zone:"," ",Object(v.jsxs)("span",{style:{fontWeight:"bold"},children:["Berlin ",e.zone]})]}),Object(v.jsxs)("p",{children:["- Fare type:"," ",Object(v.jsx)("span",{style:{fontWeight:"bold"},children:"normal"===e.ticketType?"Normal (normal)":"Reduced (erm\xe4\xdfigt)"})]}),Object(v.jsxs)("p",{children:["- Price:"," ",Object(v.jsxs)("span",{style:{fontWeight:"bold"},children:[e.price.toFixed(2),"\u20ac"]})]}),Object(v.jsx)("hr",{className:"mt-6"}),Object(v.jsx)("div",{style:{textAlign:"center",fontSize:"20px",fontWeight:"bold"},children:"Happy Travelling!"})]})}},{key:"renderAllQuestionsAnswers",value:function(){var e=this,t=Object.keys(this.props.answerPool);return Object(v.jsxs)("div",{className:"questionnaire-questions-answers",children:[Object(v.jsx)("div",{className:"questionnaire-decisions",children:"Your decisions:"}),t.map((function(t){return Object(v.jsxs)("p",{children:["- ",e.props.questionPool[t].question," ",Object(v.jsx)("span",{className:"questionnaire-answer",children:"boolean"!==typeof e.props.answerPool[t]?e.props.answerPool[t]:e.props.answerPool[t]?"Yes":"No"})]},t)}))]})}},{key:"nextQuestion",value:function(){var e=Object(I.a)(O.a.mark((function e(){var t,n,r,s,a,i,o,c;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.state.inputValue){e.next=2;break}return e.abrupt("return",this.setState({error:!0}));case 2:return this.setState({error:!1}),e.next=5,this.props.updateUserAnswerPool(this.state.currentQuestionId,this.state.inputValue);case 5:if("object"!==typeof(t=this.findNextQuestion(this.state.currentQuestionId,this.props.answerPool))){e.next=17;break}return n=t,r=this.props.tickets.filter((function(e){return e.id===n.ticketId}))[0],s=r.type,a=r.name_de,i=r.name_en,o=r.tickets.filter((function(e){return e.zone===n.zone}))[0].fares[n.fareType],c={ticketType:s,zone:n.zone,fareType:n.fareType,price:o,ticketNameDE:a,ticketNameEN:i},this.setState((function(){return{ticket:c,isStart:!1}})),e.abrupt("return");case 17:this.setState((function(e,n){return{currentQuestionId:t,inputValue:"",prevQuestionIds:[].concat(Object(T.a)(e.prevQuestionIds),[e.currentQuestionId]),prevInputs:[].concat(Object(T.a)(e.prevInputs),[e.inputValue]),prevAnswerTypes:[].concat(Object(T.a)(e.prevAnswerTypes),[e.currentAnswerType]),isStart:!0}})),this.props.questionPool[t].options.length?this.setState((function(e,t){return{currentAnswerType:"select"}})):this.setState((function(){return{currentAnswerType:"input"}}));case 19:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"previousQuestion",value:function(){var e=Object(I.a)(O.a.mark((function e(){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.props.removeAnAnswerFromAnswerPool(this.state.currentQuestionId);case 2:this.setState((function(e,t){var n=e.prevQuestionIds.pop(),r=e.prevInputs.pop(),s=e.prevAnswerTypes.pop(),a=1!==e.prevQuestionId;return{currentQuestionId:n,inputValue:r,currentAnswerType:s,prevQuestionIds:e.prevQuestionIds,prevInputs:e.prevInputs,prevAnswerTypes:e.prevAnswerTypes,isStart:a}}));case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"restartApplication",value:function(){var e=Object(I.a)(O.a.mark((function e(){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState((function(){return Object(x.a)({},S)})),e.next=3,this.props.restartQuestionnaire();case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return this.props.questionPool?(this.props.isRestart&&(this.restartApplication(),this.props.toggleRestart(!1)),Object(v.jsxs)("div",{className:"component-questionnaire",children:[this.state.ticket?this.renderAllQuestionsAnswers():Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("div",{className:"questionnaire-question",children:this.props.questionPool[this.state.currentQuestionId].question}),Object(v.jsx)("div",{className:"select-field",children:"select"===this.state.currentAnswerType?this.props.questionPool[this.state.currentQuestionId].options.map((function(t){return Object(v.jsxs)(s.a.Fragment,{children:[Object(v.jsx)("input",{type:"radio",name:t,id:t,value:t,onChange:e.onChangeHandler,checked:e.state.inputValue===t}),Object(v.jsx)("label",{htmlFor:t,children:t})]},t)})):null}),Object(v.jsx)("div",{children:"input"===this.state.currentAnswerType?Object(v.jsx)("input",{type:"number",min:1,value:this.state.inputValue,onChange:this.onChangeHandler}):null})]}),this.state.ticket?this.renderTicket(this.state.ticket):null,this.state.error?Object(v.jsx)("div",{className:"questionaire-error",children:"You need to select or type your option!"}):null,Object(v.jsxs)("div",{className:"inline-flex mt-5 buttons",children:[this.state.isStart?Object(v.jsxs)("button",{className:"text-orange-500 bg-transparent border border-solid border-orange-500 hover:bg-orange-500 hover:text-white active:bg-orange-600 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mx-4 ease-linear transition-all duration-150",type:"button",onClick:this.previousQuestion,children:[Object(v.jsx)("i",{className:"fas fa-backward"})," Previous Step"]}):null,this.state.ticket?null:Object(v.jsxs)("button",{className:"text-emerald-500 bg-transparent border border-solid border-emerald-500 hover:bg-emerald-500 hover:text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mx-4  ease-linear transition-all duration-150",type:"button",onClick:this.nextQuestion,children:["Next Step ",Object(v.jsx)("i",{className:"fas fa-forward"})]}),this.state.ticket?Object(v.jsxs)("button",{className:"text-red-500 bg-transparent border border-solid border-red-500 hover:bg-red-500 hover:text-white active:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150",type:"button",onClick:this.restartApplication,children:[Object(v.jsx)("i",{className:"fas fa-power-off"})," Restart"]}):null]})]})):Object(v.jsx)("p",{children:"Loading!"})}}]),n}(r.Component),Q=Object(o.b)((function(e){var t=e.initialData;return{questionPool:t.questionPool,tickets:t.tickets,answerPool:e.answerPool}}),{updateUserAnswerPool:function(e,t){return function(n){"Yes"===t&&(t=!0),"No"===t&&(t=!1),n({type:B,payload:{questionId:e,answer:t}})}},removeAnAnswerFromAnswerPool:function(e){return function(t){t({type:j,payload:{questionId:e}})}},restartQuestionnaire:g})(P),W=n(19),q=(n(38),function(e){var t=e.setUserName,n=Object(r.useState)(""),s=Object(W.a)(n,2),a=s[0],i=s[1],o=Object(r.useState)(""),c=Object(W.a)(o,2),u=c[0],d=c[1];return Object(v.jsxs)("div",{className:"component-name-modal",children:[Object(v.jsx)("div",{className:"name-modal-question",children:"What's your name?"}),Object(v.jsx)("input",{type:"text",value:a,onChange:function(e){return i(e.target.value)}}),u&&Object(v.jsx)("div",{className:"name-modal-error",children:u}),Object(v.jsx)("button",{onClick:function(){a||d("Please enter your name!"),t(a.toUpperCase())},children:"Start"})]})}),Y=(n(39),function(e){Object(f.a)(n,e);var t=Object(h.a)(n);function n(e){var r;return Object(d.a)(this,n),(r=t.call(this,e)).state={isRestart:!1,name:""},r.toggleRestart=r.toggleRestart.bind(Object(p.a)(r)),r.setUserName=r.setUserName.bind(Object(p.a)(r)),r}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchQuestionPool(),this.props.fetchTickets()}},{key:"toggleRestart",value:function(e){this.setState((function(){return{isRestart:e}}))}},{key:"setUserName",value:function(e){this.setState({name:e})}},{key:"render",value:function(){return Object(v.jsxs)("div",{className:"App",children:[Object(v.jsx)(z,{toggleRestart:this.toggleRestart,name:this.state.name}),this.state.name?Object(v.jsx)(Q,{isRestart:this.state.isRestart,toggleRestart:this.toggleRestart}):Object(v.jsx)(q,{setUserName:this.setUserName}),Object(v.jsxs)("footer",{className:"py-5 bg-blue-400 text-center text-white bottom-0 left-0 absolute w-full",children:["Built by Hong Hai Nguyen with ",Object(v.jsx)("i",{className:"fas fa-heart"})," in Germany"]})]})}}]),n}(r.Component)),R=Object(o.b)(null,{fetchQuestionPool:function(){return function(e){e({type:b,payload:m})}},fetchTickets:function(){return function(e){e({type:A,payload:y})}}})(Y),E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:return Object(x.a)(Object(x.a)({},e),{},{questionPool:t.payload});case A:return Object(x.a)(Object(x.a)({},e),{},{tickets:t.payload});default:return e}},D=n(14),H=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case B:var n=t.payload,r=n.questionId,s=n.answer;return Object(x.a)(Object(x.a)({},e),{},Object(D.a)({},r,s));case j:var a=Object(x.a)({},e);return delete a[t.payload.questionId],a;case k:return{};default:return e}},F=Object(c.b)({initialData:E,answerPool:H}),V=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,42)).then((function(t){var n=t.getCLS,r=t.getFID,s=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),r(e),s(e),a(e),i(e)}))},L=(n(40),Object(c.c)(F,{},Object(c.a)(u.a)));i.a.render(Object(v.jsx)(o.a,{store:L,children:Object(v.jsx)(R,{})}),document.getElementById("root")),V()}},[[41,1,2]]]);
//# sourceMappingURL=main.d6310d16.chunk.js.map