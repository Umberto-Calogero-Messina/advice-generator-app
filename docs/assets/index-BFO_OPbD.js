(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&c(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const d=document.getElementById("button-generator"),l=document.getElementById("span-id"),a=document.getElementById("span-text"),i=async s=>{try{const r=await(await fetch(s)).json();l.textContent=r.slip.id,a.textContent=`"${r.slip.advice}"`}catch(o){console.log(o)}};i("https://api.adviceslip.com/advice");d.addEventListener("click",()=>i("https://api.adviceslip.com/advice"));
