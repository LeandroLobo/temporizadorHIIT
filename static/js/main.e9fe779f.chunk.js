(this["webpackJsonptemporizador-hiit"]=this["webpackJsonptemporizador-hiit"]||[]).push([[0],[,,,,,,,function(e,t,s){},,,,,,function(e,t,s){},function(e,t,s){},,function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){"use strict";s.r(t);var n=s(1),c=s.n(n),r=s(8),a=s.n(r),i=(s(13),s(2)),o=(s(14),s(0)),l=function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),s=t[0],c=t[1],r=Object(n.useState)(""),a=Object(i.a)(r,2),l=a[0],j=a[1];function b(){var e=new Date,t=-1;switch(e.getMonth()){case 0:t="enero";break;case 1:t="febrero";break;case 2:t="marzo";break;case 3:t="abril";break;case 4:t="mayo";break;case 5:t="junio";break;case 6:t="julio";break;case 7:t="agosto";break;case 8:t="septiembre";break;case 9:t="octubre";break;case 10:t="noviembre";break;case 11:t="diciembre"}var s=-1;switch(e.getDay()){case 0:s="Domingo";break;case 1:s="Lunes";break;case 2:s="Martes";break;case 3:s="Mi\xe9rcoles";break;case 4:s="Jueves";break;case 5:s="Viernes";break;case 6:s="S\xe1bado"}var n=e.getDate(),r=e.getFullYear();c("".concat(s,", ").concat(n," de ").concat(t," de ").concat(r)),console.log("Fecha formato britanico, zona UTC: ",e.toLocaleString("en-GB",{timeZone:"UTC"}))}return Object(n.useEffect)((function(){b(),setInterval((function(){var e=new Date;j(e.toLocaleTimeString("en-GB"))}),1e3)}),[]),Object(n.useEffect)((function(){"00:00:00"===l&&b()}),[l]),Object(o.jsxs)("div",{className:"reloj",children:[Object(o.jsxs)("p",{children:[Object(o.jsx)("span",{className:"icono-calendar"}),s]}),Object(o.jsxs)("p",{children:[Object(o.jsx)("span",{className:"icono-clock"}),Object(o.jsx)("strong",{children:l})]})]})},j=(s(16),function(){return Object(o.jsxs)("div",{className:"header",children:[Object(o.jsxs)("div",{className:"header-title",children:[Object(o.jsx)("h1",{children:"Temporizador HIIT"}),Object(o.jsx)("span",{})]}),Object(o.jsx)(l,{})]})}),b=(s(7),{play:document.getElementsByClassName("icono-play"),close:document.getElementsByClassName("icono-close"),github:document.getElementsByClassName("icono-github"),whatsapp:document.getElementsByClassName("icono-whatsapp"),linkedin:document.getElementsByClassName("icono-linkedin"),mail:document.getElementsByClassName("icono-mail"),clock:document.getElementsByClassName("icono-clock"),calendar:document.getElementsByClassName("icono-calendar"),trash:document.getElementsByClassName("icono-trash"),plus:document.getElementsByClassName("icono-plus")}),u={inicio:function(){for(var e=0;e<b.play.length;e++)b.play[e].innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 56 56"><path fill="currentColor" d="M 13.7851 49.5742 L 42.2382 49.5742 C 47.1366 49.5742 49.5743 47.1367 49.5743 42.3086 L 49.5743 13.6914 C 49.5743 8.8633 47.1366 6.4258 42.2382 6.4258 L 13.7851 6.4258 C 8.9101 6.4258 6.4257 8.8398 6.4257 13.6914 L 6.4257 42.3086 C 6.4257 47.1602 8.9101 49.5742 13.7851 49.5742 Z M 13.8554 45.8008 C 11.5117 45.8008 10.1992 44.5586 10.1992 42.1211 L 10.1992 13.8789 C 10.1992 11.4414 11.5117 10.1992 13.8554 10.1992 L 42.1679 10.1992 C 44.4882 10.1992 45.8007 11.4414 45.8007 13.8789 L 45.8007 42.1211 C 45.8007 44.5586 44.4882 45.8008 42.1679 45.8008 Z M 21.2617 20.3008 L 21.2617 35.6523 C 21.2617 36.7305 22.4335 37.1992 23.4648 36.5898 L 36.0039 29.1836 C 36.9179 28.6211 36.8944 27.3320 36.0039 26.8164 L 23.4648 19.3633 C 22.5039 18.8008 21.2617 19.2461 21.2617 20.3008 Z"/></svg>';for(var t=0;t<b.github.length;t++)b.github[t].innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 56 56"><path fill="currentColor" fill-rule="evenodd" d="M0,25.0007674 C0,36.0462261 7.1625894,45.4157586 17.0969029,48.7215691 C18.3477086,48.9517788 18.8035237,48.1798091 18.8035237,47.5168053 C18.8035237,46.9243992 18.7820375,45.3512999 18.7697597,43.2656005 C11.8158937,44.7757758 10.3486909,39.9137481 10.3486909,39.9137481 C9.21145523,37.0253845 7.57236256,36.2564842 7.57236256,36.2564842 C5.30249547,34.706406 7.74425243,34.7371006 7.74425243,34.7371006 C10.2535376,34.9135946 11.5734062,37.3139139 11.5734062,37.3139139 C13.8033703,41.1338592 17.4253353,40.0303877 18.8495657,39.3904049 C19.0767059,37.7758679 19.7228276,36.6739311 20.4364775,36.0492956 C14.8853556,35.4185211 9.04877375,33.2729672 9.04877375,23.6931766 C9.04877375,20.9644249 10.0233279,18.7313914 11.6225176,16.9848676 C11.3646828,16.3525584 10.5067682,13.8095092 11.8680745,10.3686424 C11.8680745,10.3686424 13.9660518,9.69643022 18.7421345,12.9316431 C20.73575,12.3760705 22.875165,12.0998189 25.0007674,12.0890758 C27.124835,12.0998189 29.2627152,12.3760705 31.2594002,12.9316431 C36.0324135,9.69643022 38.1273213,10.3686424 38.1273213,10.3686424 C39.4916971,13.8095092 38.6337825,16.3525584 38.3774824,16.9848676 C39.9797416,18.7313914 40.9466221,20.9644249 40.9466221,23.6931766 C40.9466221,33.2975229 35.1008318,35.4108475 29.5328279,36.0293441 C30.4291108,36.8013137 31.2287056,38.3268363 31.2287056,40.6596274 C31.2287056,44.0007367 31.198011,46.697259 31.198011,47.5168053 C31.198011,48.185948 31.6492219,48.9640566 32.9169097,48.7200344 C42.8435495,45.4065502 50,36.0431566 50,25.0007674 C50,11.1927929 38.8056724,0 24.9976979,0 C11.1943276,0 0,11.1927929 0,25.0007674 Z" transform="translate(3 3)"/></svg>';for(var s=0;s<b.close.length;s++)b.close[s].innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 56 56"><path fill="currentColor" d="M 13.7851 49.5742 L 42.2382 49.5742 C 47.1366 49.5742 49.5743 47.1367 49.5743 42.3086 L 49.5743 13.6914 C 49.5743 8.8633 47.1366 6.4258 42.2382 6.4258 L 13.7851 6.4258 C 8.9101 6.4258 6.4257 8.8398 6.4257 13.6914 L 6.4257 42.3086 C 6.4257 47.1602 8.9101 49.5742 13.7851 49.5742 Z M 13.8554 45.8008 C 11.5117 45.8008 10.1992 44.5586 10.1992 42.1211 L 10.1992 13.8789 C 10.1992 11.4414 11.5117 10.1992 13.8554 10.1992 L 42.1679 10.1992 C 44.4882 10.1992 45.8007 11.4414 45.8007 13.8789 L 45.8007 42.1211 C 45.8007 44.5586 44.4882 45.8008 42.1679 45.8008 Z M 18.1913 35.9336 C 18.1913 36.9649 19.0117 37.8086 20.0429 37.8086 C 20.5585 37.8086 21.0273 37.6211 21.3554 37.2696 L 27.9882 30.6133 L 34.6444 37.2696 C 34.9726 37.5977 35.4179 37.8086 35.9335 37.8086 C 36.9648 37.8086 37.8085 36.9649 37.8085 35.9336 C 37.8085 35.3945 37.5976 34.9727 37.2460 34.6211 L 30.6366 27.9883 L 37.2695 21.3320 C 37.6444 20.9571 37.8320 20.5352 37.8320 20.0430 C 37.8320 19.0118 37.0117 18.1680 35.9570 18.1680 C 35.4882 18.1680 35.0898 18.3555 34.7148 18.7305 L 27.9882 25.4102 L 21.3085 18.7539 C 20.9570 18.4258 20.5585 18.2149 20.0429 18.2149 C 19.0351 18.2149 18.1913 19.0352 18.1913 20.0664 C 18.1913 20.5586 18.4023 21.0039 18.7304 21.3555 L 25.3632 27.9883 L 18.7304 34.6445 C 18.4023 34.9961 18.1913 35.4180 18.1913 35.9336 Z"/></svg>';for(var n=0;n<b.whatsapp.length;n++)b.whatsapp[n].innerHTML='<svg height="22pt" viewBox="0 0 512 512" width="22pt" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="m435.921875 74.351562c-48.097656-47.917968-112.082031-74.3242182-180.179687-74.351562-67.945313 0-132.03125 26.382812-180.445313 74.289062-48.5 47.988282-75.234375 111.761719-75.296875 179.339844v.078125.046875c.0078125 40.902344 10.753906 82.164063 31.152344 119.828125l-30.453125 138.417969 140.011719-31.847656c35.460937 17.871094 75.027343 27.292968 114.933593 27.308594h.101563c67.933594 0 132.019531-26.386719 180.441406-74.296876 48.542969-48.027343 75.289062-111.71875 75.320312-179.339843.019532-67.144531-26.820312-130.882813-75.585937-179.472657zm-180.179687 393.148438h-.089844c-35.832032-.015625-71.335938-9.011719-102.667969-26.023438l-6.621094-3.59375-93.101562 21.175782 20.222656-91.90625-3.898437-6.722656c-19.382813-33.425782-29.625-70.324219-29.625-106.71875.074218-117.800782 96.863281-213.75 215.773437-213.75 57.445313.023437 111.421875 22.292968 151.984375 62.699218 41.175781 41.03125 63.84375 94.710938 63.824219 151.152344-.046875 117.828125-96.855469 213.6875-215.800781 213.6875zm0 0"/><path d="m186.152344 141.863281h-11.210938c-3.902344 0-10.238281 1.460938-15.597656 7.292969-5.363281 5.835938-20.476562 19.941406-20.476562 48.628906s20.964843 56.40625 23.886718 60.300782c2.925782 3.890624 40.46875 64.640624 99.929688 88.011718 49.417968 19.421875 59.476562 15.558594 70.199218 14.585938 10.726563-.96875 34.613282-14.101563 39.488282-27.714844s4.875-25.285156 3.414062-27.722656c-1.464844-2.429688-5.367187-3.886719-11.214844-6.800782-5.851562-2.917968-34.523437-17.261718-39.886718-19.210937-5.363282-1.941406-9.261719-2.914063-13.164063 2.925781-3.902343 5.828125-15.390625 19.3125-18.804687 23.203125-3.410156 3.894531-6.824219 4.382813-12.675782 1.464844-5.851562-2.925781-24.5-9.191406-46.847656-29.050781-17.394531-15.457032-29.464844-35.167969-32.878906-41.003906-3.410156-5.832032-.363281-8.988282 2.570312-11.898438 2.628907-2.609375 6.179688-6.179688 9.105469-9.582031 2.921875-3.40625 3.753907-5.835938 5.707031-9.726563 1.949219-3.890625.972657-7.296875-.488281-10.210937-1.464843-2.917969-12.691406-31.75-17.894531-43.28125h.003906c-4.382812-9.710938-8.996094-10.039063-13.164062-10.210938zm0 0"/></svg>';for(var c=0;c<b.linkedin.length;c++)b.linkedin[c].innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 56 56"><path fill="currentColor" fill-rule="evenodd" d="M42.608128,42.6067391 L35.1926442,42.6067391 L35.1926442,31.0022501 C35.1926442,28.2355065 35.1454207,24.6756854 31.3397594,24.6756854 C27.47993,24.6756854 26.8910248,27.691047 26.8910248,30.8050224 L26.8910248,42.6067391 L19.4838746,42.6067391 L19.4838746,18.7449651 L26.5924053,18.7449651 L26.5924053,22.0075558 L26.695186,22.0075558 C27.6841023,20.1311148 30.103614,18.153282 33.7106586,18.153282 C41.2205895,18.153282 42.608128,23.093697 42.608128,29.5202645 L42.608128,42.6067391 L42.608128,42.6067391 Z M11.1225312,15.4851524 C8.74052057,15.4851524 6.81963388,13.55871 6.81963388,11.183644 C6.81963388,8.80996694 8.74052057,6.88352454 11.1225312,6.88352454 C13.4948193,6.88352454 15.4198728,8.80996694 15.4198728,11.183644 C15.4198728,13.55871 13.4948193,15.4851524 11.1225312,15.4851524 L11.1225312,15.4851524 Z M7.40853913,42.6067391 L14.8323565,42.6067391 L14.8323565,18.7449651 L7.40853913,18.7449651 L7.40853913,42.6067391 Z M46.3012861,0 L3.68760243,0 C1.65282369,0 0,1.61393372 0,3.60565571 L0,46.3929554 C0,48.3846774 1.65282369,50.0013889 3.68760243,50.0013889 L46.3012861,50.0013889 C48.3402317,50.0013889 50,48.3846774 50,46.3929554 L50,3.60565571 C50,1.61393372 48.3402317,0 46.3012861,0 L46.3012861,0 Z" transform="translate(3 3)"/></svg>';for(var r=0;r<b.mail.length;r++)b.mail[r].innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="30" height="33" viewBox="0 0 56 56"><path fill="currentColor" d="M 9.4843 48.1914 L 47.2184 48.1914 C 51.4376 48.1914 53.8751 45.7539 53.8751 40.9258 L 53.8751 15.0508 C 53.8751 10.2461 51.4141 7.8086 46.5157 7.8086 L 8.7812 7.8086 C 4.5858 7.8086 2.1249 10.2227 2.1249 15.0508 L 2.1249 40.9258 C 2.1249 45.7773 4.6093 48.1914 9.4843 48.1914 Z M 25.2109 29.1836 L 7.5155 11.7227 C 8.0312 11.5117 8.6405 11.3945 9.3671 11.3945 L 46.6564 11.3945 C 47.3826 11.3945 48.0157 11.5117 48.5548 11.7696 L 30.8827 29.1836 C 29.8749 30.1914 28.9843 30.6367 28.0468 30.6367 C 27.1093 30.6367 26.2187 30.1914 25.2109 29.1836 Z M 5.7109 40.9258 L 5.7109 15.0508 C 5.7109 14.8867 5.7109 14.9570 5.7109 14.8164 L 19.1874 28.0352 L 5.7343 41.3242 C 5.7109 41.2070 5.7109 41.0664 5.7109 40.9258 Z M 50.2890 15.0742 L 50.2890 40.9492 C 50.2890 41.0430 50.2890 41.1602 50.2890 41.2539 L 36.9062 28.0352 L 50.2890 14.8867 C 50.2890 15.0742 50.2890 15.0742 50.2890 15.0742 Z M 9.3671 44.6055 C 8.6874 44.6055 8.1249 44.5117 7.6327 44.3008 L 21.6484 30.4492 L 23.1718 31.9492 C 24.8124 33.5664 26.3827 34.2461 28.0468 34.2461 C 29.6874 34.2461 31.2812 33.5664 32.9218 31.9492 L 34.4452 30.4492 L 48.4376 44.2773 C 47.9452 44.5117 47.3360 44.6055 46.6564 44.6055 Z"/></svg>';for(var a=0;a<b.clock.length;a++)b.clock[a].innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="20" height="28" viewBox="0 0 56 56"><path fill="currentColor" d="M 27.9999 51.9063 C 41.0546 51.9063 51.9063 41.0781 51.9063 28 C 51.9063 14.9453 41.0312 4.0937 27.9765 4.0937 C 14.8983 4.0937 4.0937 14.9453 4.0937 28 C 4.0937 41.0781 14.9218 51.9063 27.9999 51.9063 Z M 27.9999 47.9219 C 16.9374 47.9219 8.1014 39.0625 8.1014 28 C 8.1014 16.9609 16.9140 8.0781 27.9765 8.0781 C 39.0155 8.0781 47.8983 16.9609 47.9219 28 C 47.9454 39.0625 39.0390 47.9219 27.9999 47.9219 Z M 15.7187 30.5312 L 27.9765 30.5312 C 28.8905 30.5312 29.6171 29.8281 29.6171 28.8906 L 29.6171 13.0937 C 29.6171 12.1797 28.8905 11.4766 27.9765 11.4766 C 27.0624 11.4766 26.3593 12.1797 26.3593 13.0937 L 26.3593 27.2734 L 15.7187 27.2734 C 14.8046 27.2734 14.1014 27.9766 14.1014 28.8906 C 14.1014 29.8281 14.8046 30.5312 15.7187 30.5312 Z"/></svg>';for(var i=0;i<b.calendar.length;i++)b.calendar[i].innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="20" height="28" viewBox="0 0 56 56"><path fill="currentColor" d="M 11.9923 49.5742 L 44.0079 49.5742 C 48.9066 49.5742 51.3671 47.1367 51.3671 42.3086 L 51.3671 13.6914 C 51.3671 8.8633 48.9066 6.4258 44.0079 6.4258 L 11.9923 6.4258 C 7.1173 6.4258 4.6329 8.8398 4.6329 13.6914 L 4.6329 42.3086 C 4.6329 47.1602 7.1173 49.5742 11.9923 49.5742 Z M 11.6642 45.8008 C 9.5782 45.8008 8.4064 44.6992 8.4064 42.5195 L 8.4064 20.4180 C 8.4064 18.2617 9.5782 17.1367 11.6642 17.1367 L 44.3126 17.1367 C 46.3985 17.1367 47.5938 18.2617 47.5938 20.4180 L 47.5938 42.5195 C 47.5938 44.6992 46.3985 45.8008 44.3126 45.8008 Z M 23.4064 25.5508 L 24.7892 25.5508 C 25.6095 25.5508 25.8907 25.3164 25.8907 24.4961 L 25.8907 23.1133 C 25.8907 22.2930 25.6095 22.0352 24.7892 22.0352 L 23.4064 22.0352 C 22.5860 22.0352 22.3282 22.2930 22.3282 23.1133 L 22.3282 24.4961 C 22.3282 25.3164 22.5860 25.5508 23.4064 25.5508 Z M 31.2111 25.5508 L 32.5704 25.5508 C 33.4142 25.5508 33.6720 25.3164 33.6720 24.4961 L 33.6720 23.1133 C 33.6720 22.2930 33.4142 22.0352 32.5704 22.0352 L 31.2111 22.0352 C 30.3907 22.0352 30.1095 22.2930 30.1095 23.1133 L 30.1095 24.4961 C 30.1095 25.3164 30.3907 25.5508 31.2111 25.5508 Z M 38.9923 25.5508 L 40.3751 25.5508 C 41.1954 25.5508 41.4767 25.3164 41.4767 24.4961 L 41.4767 23.1133 C 41.4767 22.2930 41.1954 22.0352 40.3751 22.0352 L 38.9923 22.0352 C 38.1720 22.0352 37.8907 22.2930 37.8907 23.1133 L 37.8907 24.4961 C 37.8907 25.3164 38.1720 25.5508 38.9923 25.5508 Z M 15.6251 33.2149 L 17.0079 33.2149 C 17.8282 33.2149 18.1095 32.9805 18.1095 32.1602 L 18.1095 30.7774 C 18.1095 29.9571 17.8282 29.7227 17.0079 29.7227 L 15.6251 29.7227 C 14.8048 29.7227 14.5235 29.9571 14.5235 30.7774 L 14.5235 32.1602 C 14.5235 32.9805 14.8048 33.2149 15.6251 33.2149 Z M 23.4064 33.2149 L 24.7892 33.2149 C 25.6095 33.2149 25.8907 32.9805 25.8907 32.1602 L 25.8907 30.7774 C 25.8907 29.9571 25.6095 29.7227 24.7892 29.7227 L 23.4064 29.7227 C 22.5860 29.7227 22.3282 29.9571 22.3282 30.7774 L 22.3282 32.1602 C 22.3282 32.9805 22.5860 33.2149 23.4064 33.2149 Z M 31.2111 33.2149 L 32.5704 33.2149 C 33.4142 33.2149 33.6720 32.9805 33.6720 32.1602 L 33.6720 30.7774 C 33.6720 29.9571 33.4142 29.7227 32.5704 29.7227 L 31.2111 29.7227 C 30.3907 29.7227 30.1095 29.9571 30.1095 30.7774 L 30.1095 32.1602 C 30.1095 32.9805 30.3907 33.2149 31.2111 33.2149 Z M 38.9923 33.2149 L 40.3751 33.2149 C 41.1954 33.2149 41.4767 32.9805 41.4767 32.1602 L 41.4767 30.7774 C 41.4767 29.9571 41.1954 29.7227 40.3751 29.7227 L 38.9923 29.7227 C 38.1720 29.7227 37.8907 29.9571 37.8907 30.7774 L 37.8907 32.1602 C 37.8907 32.9805 38.1720 33.2149 38.9923 33.2149 Z M 15.6251 40.9024 L 17.0079 40.9024 C 17.8282 40.9024 18.1095 40.6445 18.1095 39.8242 L 18.1095 38.4414 C 18.1095 37.6211 17.8282 37.3867 17.0079 37.3867 L 15.6251 37.3867 C 14.8048 37.3867 14.5235 37.6211 14.5235 38.4414 L 14.5235 39.8242 C 14.5235 40.6445 14.8048 40.9024 15.6251 40.9024 Z M 23.4064 40.9024 L 24.7892 40.9024 C 25.6095 40.9024 25.8907 40.6445 25.8907 39.8242 L 25.8907 38.4414 C 25.8907 37.6211 25.6095 37.3867 24.7892 37.3867 L 23.4064 37.3867 C 22.5860 37.3867 22.3282 37.6211 22.3282 38.4414 L 22.3282 39.8242 C 22.3282 40.6445 22.5860 40.9024 23.4064 40.9024 Z M 31.2111 40.9024 L 32.5704 40.9024 C 33.4142 40.9024 33.6720 40.6445 33.6720 39.8242 L 33.6720 38.4414 C 33.6720 37.6211 33.4142 37.3867 32.5704 37.3867 L 31.2111 37.3867 C 30.3907 37.3867 30.1095 37.6211 30.1095 38.4414 L 30.1095 39.8242 C 30.1095 40.6445 30.3907 40.9024 31.2111 40.9024 Z"/></svg>';for(var o=0;o<b.trash.length;o++)b.trash[o].innerHTML='<svg width="18" height="18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M32 464a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128H32zm272-256a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zM432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z"></path></svg>';for(var l=0;l<b.plus.length;l++)b.plus[l].innerHTML='<svg width="18" height="18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path></svg>'}},d=function(e){var t=e.session,s=e.setTimerMount,c=e.sessions,r=e.setSessions,a=Object(n.useState)(!1),l=Object(i.a)(a,2),j=l[0],b=l[1];return Object(n.useEffect)((function(){return u.inicio()}),[]),Object(o.jsxs)("div",{className:"session",children:[Object(o.jsx)("ul",{children:t.sets.map((function(e){return Object(o.jsxs)("li",{children:[Object(o.jsx)("p",{className:"set-name",children:e.name}),Object(o.jsxs)("p",{children:["work: ",Object(o.jsxs)("strong",{children:[e.work,"s"]})," rest: ",Object(o.jsxs)("strong",{children:[e.rest,"s"]})]}),Object(o.jsxs)("p",{children:["reps: ",Object(o.jsx)("strong",{children:e.reps})]})]},e.name)}))}),Object(o.jsxs)("p",{children:["Duraci\xf3n: ",Object(o.jsx)("strong",{children:Math.floor(t.duration/60)})," min, ",Object(o.jsx)("strong",{children:t.duration%60})," seg"]}),Object(o.jsxs)("div",{className:"form-buttons",children:[Object(o.jsx)("button",{className:"btn-green",onClick:function(){s(!0)},children:"Comenzar"}),Object(o.jsxs)("button",{className:"btn-red",onClick:function(){return b(!0)},children:[Object(o.jsx)("span",{className:"icono-trash"}),Object(o.jsx)("p",{children:" Borrar sesi\xf3n"})]}),j&&Object(o.jsx)("button",{onClick:function(){var e=c.filter((function(e){return e!==t}));r(e)},children:Object(o.jsx)("h4",{children:"BORRAR"})})]})]})},h=(s(17),function(e,t,s){var c=Object(n.useState)(3),r=Object(i.a)(c,2),a=r[0],o=r[1],l=Object(n.useState)("Countdown"),j=Object(i.a)(l,2),b=j[0],u=j[1],d=Object(n.useState)("READY !"),h=Object(i.a)(d,2),C=h[0],O=h[1],m=Object(n.useState)("-----"),g=Object(i.a)(m,2),p=g[0],f=g[1],L=Object(n.useState)(!1),x=Object(i.a)(L,2),v=x[0],w=x[1],N=Object(n.useState)(!1),S=Object(i.a)(N,2),M=S[0],k=S[1],y=Object(n.useState)(0),Z=Object(i.a)(y,2),E=Z[0],T=Z[1],B=Object(n.useState)(0),H=Object(i.a)(B,2),R=H[0],I=H[1];return Object(n.useEffect)((function(){"WORKING..."!==C&&a<4&&a>0&&t.current.play();var n=setInterval((function(){o(a-1)}),1e3);if(!v&&!M)return 0===a&&("WORKING..."===C?(s.current.play(),R===e.sets[E].reps&&E+1===e.sets.length?(clearInterval(n),s.current.play(),setTimeout((function(){return k(!0)}),2500)):(O("REST"),o(e.sets[E].rest))):(O("WORKING..."),R===e.sets[E].reps?(u(e.sets[E+1].name),o(e.sets[E+1].work),I(1),f("Reps 1 de ".concat(e.sets[E+1].reps)),T(E+1)):(u(e.sets[E].name),o(e.sets[E].work),f("Reps ".concat(R+1," de ").concat(e.sets[E].reps)),I(R+1)))),function(){clearInterval(n)};clearInterval(n)}),[v,a,M,C,R,e.sets,E,t,s]),Object(n.useEffect)((function(){M&&(o(0),O("REST"),u("FIN"),f("-----"))}),[M]),[a,b,C,p,M,w]}),C=(s(18),s.p+"static/media/beep.ceb72c39.wav"),O=s.p+"static/media/bell.cade39a6.wav",m=function(e){var t=e.session,s=e.setTimerMount,c=Object(n.useRef)(),r=Object(n.useRef)(),a=Object(n.useRef)(),l=Object(n.useRef)(),j=Object(n.useRef)(),b=Object(n.useRef)(),u=h(t,r,a),d=Object(i.a)(u,6),m=d[0],g=d[1],p=d[2],f=d[3],L=d[4],x=d[5];return Object(n.useEffect)((function(){"WORKING..."===p?(j.current.style.color="lightseagreen",l.current.style.color="springgreen",b.current.style.color="springgreen"):(j.current.style.color="coral",l.current.style.color="deeppink",b.current.style.color="deeppink")}),[p,m]),Object(n.useEffect)((function(){s(!L)}),[L,s]),Object(o.jsxs)("div",{className:"modal-timer",children:[Object(o.jsxs)("div",{ref:j,className:"timer-container",children:[Object(o.jsxs)("fieldset",{children:[Object(o.jsx)("legend",{children:t.name}),Object(o.jsx)("h3",{ref:l,children:m}),Object(o.jsx)("h4",{children:g}),Object(o.jsx)("p",{ref:b,children:p}),Object(o.jsx)("h4",{children:f})]}),Object(o.jsxs)("div",{className:"timer-buttons",children:[Object(o.jsx)("button",{ref:c,onClick:function(){"PAUSE"===c.current.innerHTML?(x(!0),c.current.innerHTML="PLAY"):(x(!1),c.current.innerHTML="PAUSE")},children:"PAUSE"}),Object(o.jsx)("button",{onClick:function(){s(!1)},children:"CLEAR"})]})]}),Object(o.jsx)("audio",{ref:r,src:C}),Object(o.jsx)("audio",{ref:a,src:O})]})},g=s(5),p=(s(19),function(e){var t=e.setOpenNewSet,s=e.sets,c=e.setSets,r=Object(n.useState)(""),a=Object(i.a)(r,2),l=a[0],j=a[1],b=Object(n.useState)(0),d=Object(i.a)(b,2),h=d[0],C=d[1],O=Object(n.useState)(0),m=Object(i.a)(O,2),p=m[0],f=m[1],L=Object(n.useState)(0),x=Object(i.a)(L,2),v=x[0],w=x[1],N=Object(n.useState)(!1),S=Object(i.a)(N,2),M=S[0],k=S[1],y=Object(n.useState)(!1),Z=Object(i.a)(y,2),E=Z[0],T=Z[1],B=Object(n.useState)(!1),H=Object(i.a)(B,2),R=H[0],I=H[1],z=Object(n.useState)(!1),F=Object(i.a)(z,2),A=F[0],D=F[1];return Object(n.useEffect)((function(){return u.inicio()}),[]),Object(o.jsx)("div",{className:"modal-form",children:Object(o.jsxs)("form",{className:"form-container",onSubmit:function(e){e.preventDefault(),k(!l),T(!h),I(!p),D(!v),l&&h&&v&&(c([].concat(Object(g.a)(s),[{name:l,work:parseInt(h),rest:parseInt(p),reps:parseInt(v)}])),t(!1))},children:[Object(o.jsxs)("fieldset",{children:[Object(o.jsx)("legend",{children:"Nuevo Set"}),Object(o.jsxs)("div",{children:[Object(o.jsx)("label",{htmlFor:"set-name",children:"Nombre:"}),Object(o.jsx)("input",{type:"text",id:"set-name",name:"name",onChange:function(e){return j(e.target.value)},placeholder:"ejemplo: 'push-ups'"})]}),M&&Object(o.jsx)("p",{className:"form-error",children:"Campo Obligatorio"}),Object(o.jsxs)("div",{children:[Object(o.jsx)("label",{htmlFor:"set-work",children:"Work:"}),Object(o.jsx)("input",{type:"number",id:"set-work",name:"work",min:"1",step:"1",onChange:function(e){return C(e.target.value)}}),Object(o.jsx)("label",{children:"segundos"})]}),E&&Object(o.jsx)("p",{className:"form-error",children:"Campo Obligatorio"}),Object(o.jsxs)("div",{children:[Object(o.jsx)("label",{htmlFor:"set-rest",children:"Rest:"}),Object(o.jsx)("input",{type:"number",id:"set-rest",name:"rest",min:"0",step:"1",onChange:function(e){return f(e.target.value)}}),Object(o.jsx)("label",{children:"segundos"})]}),R&&Object(o.jsx)("p",{className:"form-error",children:"Campo Obligatorio"}),Object(o.jsxs)("div",{children:[Object(o.jsx)("label",{htmlFor:"set-reps",children:"Repetir:"}),Object(o.jsx)("input",{type:"number",id:"set-reps",name:"reps",min:"1",step:"1",onChange:function(e){return w(e.target.value)}}),Object(o.jsx)("label",{children:"veces"})]}),A&&Object(o.jsx)("p",{className:"form-error",children:"Campo Obligatorio"})]}),Object(o.jsxs)("div",{className:"form-buttons",children:[Object(o.jsx)("input",{className:"btn-green",type:"submit",name:"add",value:"Agregar a la sesi\xf3n"}),Object(o.jsx)("button",{className:"btn-red",onClick:function(){return t(!1)},children:"Cancelar"})]})]})})}),f=function(e){var t=e.sessions,s=e.setSessions,c=e.setOpenNewSession,r=Object(n.useState)("Nueva Sesi\xf3n"),a=Object(i.a)(r,2),l=a[0],j=a[1],b=Object(n.useState)([]),d=Object(i.a)(b,2),h=d[0],C=d[1],O=Object(n.useState)(null),m=Object(i.a)(O,2),f=m[0],L=m[1],x=Object(n.useState)(0),v=Object(i.a)(x,2),w=v[0],N=v[1];return Object(n.useEffect)((function(){N(h.reduce((function(e,t){return e+(t.work+t.rest)*t.reps}),0))}),[h]),Object(n.useEffect)((function(){return u.inicio()}),[]),Object(o.jsxs)("div",{className:"modal-form",children:[Object(o.jsx)("div",{className:"session new-session",children:Object(o.jsxs)("fieldset",{children:[Object(o.jsx)("legend",{children:l}),Object(o.jsxs)("ul",{children:[Object(o.jsx)("div",{children:Object(o.jsx)("input",{type:"text",name:"name",placeholder:"Cambiar Nombre",onChange:function(e){return j(e.target.value)}})}),0===h.length?Object(o.jsxs)("li",{children:[Object(o.jsx)("p",{className:"set-name",children:"Vac\xedo."}),Object(o.jsx)("p",{className:"set-name",children:"Prueba agregando algunos Sets a tu Sesi\xf3n de Trabajo."})]}):h.map((function(e){return Object(o.jsxs)("li",{children:[Object(o.jsx)("p",{className:"set-name",children:e.name}),Object(o.jsxs)("p",{children:["work: ",Object(o.jsxs)("strong",{children:[e.work,"s"]})," rest: ",Object(o.jsxs)("strong",{children:[e.rest,"s"]})]}),Object(o.jsxs)("p",{children:["reps: ",Object(o.jsx)("strong",{children:e.reps})]})]},e.name)}))]}),Object(o.jsxs)("p",{children:["Duraci\xf3n: ",Object(o.jsx)("strong",{children:Math.floor(w/60)})," min, ",Object(o.jsx)("strong",{children:w%60})," seg"]}),Object(o.jsxs)("div",{className:"form-buttons",children:[Object(o.jsx)("button",{className:"btn-green",onClick:function(){L(!0)},children:"Agregar Set"}),h.length>0&&Object(o.jsx)("button",{className:"btn-green",onClick:function(){var e={name:l,duration:w,sets:h};s([].concat(Object(g.a)(t),[e])),c(!1)},children:"Guardar Session"}),Object(o.jsx)("button",{className:"btn-red",onClick:function(){c(!1)},children:"Cancelar"})]})]})}),f&&Object(o.jsx)(p,{setOpenNewSet:L,sets:h,setSets:C})]})},L=function(e){var t=e.sessions,s=e.setSessions,c=Object(n.useState)(-1),r=Object(i.a)(c,2),a=r[0],l=r[1],j=Object(n.useState)(!1),b=Object(i.a)(j,2),u=b[0],h=b[1],C=Object(n.useState)(!1),O=Object(i.a)(C,2),g=O[0],p=O[1];return Object(o.jsxs)("div",{className:"table-box",children:[Object(o.jsx)("div",{className:"table-content",children:t.map((function(e,n){return Object(o.jsxs)("div",{children:[Object(o.jsx)("h3",{className:"session-name",onClick:function(){return l(a===n?-1:n)},children:e.name}),a===n&&!u&&Object(o.jsx)(d,{session:e,setTimerMount:h,sessions:t,setSessions:s})]},e.name)}))}),g&&Object(o.jsx)(f,{sessions:t,setSessions:s,setOpenNewSession:p}),Object(o.jsx)("nav",{children:Object(o.jsxs)("button",{className:"btn-new",onClick:function(){return p(!0)},children:[Object(o.jsx)("span",{className:"icono-plus"}),"Nueva Sesi\xf3n"]})}),u&&Object(o.jsx)(m,{session:t[a],setTimerMount:h})]})},x=function(){Object(n.useEffect)((function(){return u.inicio()}),[]);var e=Object(n.useState)([{name:"Sesi\xf3n Standard",duration:480,sets:[{name:"45/15",work:45,rest:15,reps:8}]},{name:"Sesi\xf3n Standard Heavy",duration:960,sets:[{name:"90/30",work:90,rest:30,reps:8}]}]),t=Object(i.a)(e,2),s=t[0],c=t[1];return Object(o.jsxs)(n.Fragment,{children:[Object(o.jsx)(j,{}),Object(o.jsx)(L,{sessions:s,setSessions:c})]})},v=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,21)).then((function(t){var s=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,a=t.getTTFB;s(e),n(e),c(e),r(e),a(e)}))};a.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(x,{})}),document.getElementById("root")),v()}],[[20,1,2]]]);
//# sourceMappingURL=main.e9fe779f.chunk.js.map