const s=e=>{if(document.querySelector(".esNotification"))return!1;const t=document.createElement("div");t.innerHTML='<div class="inner"><h2>'+e.title+"</h2><p>"+e.message+"</p></div>",t.classList.add("esNotification"),t.classList.add(e.type),document.body.appendChild(t),setTimeout(()=>{const i=document.querySelector(".esNotification");i.classList.add("out"),setTimeout(()=>{i.remove()},200)},2e3)},o=e=>{if(navigator.share)navigator.share({title:document.title,text:document.title,url:e.url});else{let t;switch(e.socialMedia){case"Facebook":t="https://facebook.com/sharer.php?u="+e.url;break;case"Line":t="https://social-plugins.line.me/lineit/share?url="+e.url+"&amp;via=esdesign";break;case"Twitter":t="https://twitter.com/intent/tweet?url="+e.url+"&amp;via=esdesign"}window.open(t,"shareWindow","menubar=0,location=0,toolbar=0,status=0,scrollbars=1,width=800,height=600")}};export{s as a,o as e};