(()=>{"use strict";const e=document.querySelector(".burger"),t=document.querySelector(".dropdown-btn");e.addEventListener("click",(function(){e.classList.toggle("active"),document.querySelector(".burger span").classList.toggle("active"),document.querySelector(".burger").classList.toggle("-active"),document.querySelector(".menu").classList.toggle("active")})),t.addEventListener("mouseover",(function(){document.querySelector(".dropdown-content").classList.add("show")})),t.addEventListener("mouseout",(function(){document.querySelector(".dropdown-content").classList.remove("show")}));const o=document.querySelector(".btn-add");document.querySelector("input"),o.addEventListener("click",(function(){let e=document.createElement("li"),t=document.getElementById("to-do-value").value,o=document.createTextNode(t);e.appendChild(o),""!==t?document.getElementById("list").appendChild(e):alert("Поле не должно быть пустым"),document.getElementById("to-do-value").value="";let c=document.createElement("span"),n=document.createTextNode("X");c.className="close",c.appendChild(n),e.appendChild(c)})),document.querySelector(".wrapper__todo").addEventListener("click",(function(e){"LI"===e.target.tagName?e.target.classList.toggle("checked"):"SPAN"===e.target.tagName&&e.target.parentNode.remove()}))})();