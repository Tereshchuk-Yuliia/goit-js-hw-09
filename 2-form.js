import"./assets/modulepreload-polyfill-B5Qt9EMX.js";const e={email:"",message:""},t=document.querySelector(".feedback-form"),o=document.querySelector(".input-email");document.querySelector(".message");const s="feedback-form-state";o.value;const l=localStorage.getItem(s);if(l){const a=JSON.parse(l);e.email=a.email||"",e.message=a.message||"",input.value=e.email,textarea.value=e.message}t.addEventListener("input",r);function r(a){e[a.target.name]=a.target.value.trim();const m=JSON.stringify(e);localStorage.setItem(s,m)}t.addEventListener("submit",n);function n(a){if(a.preventDefault(),!e.email||!e.message){alert("Fill please all fields");return}else console.log(e);localStorage.removeItem(s),t.reset(),e.email="",e.message=""}
//# sourceMappingURL=2-form.js.map
