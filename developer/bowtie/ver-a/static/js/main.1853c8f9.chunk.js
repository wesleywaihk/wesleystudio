(this.webpackJsonpbowtie=this.webpackJsonpbowtie||[]).push([[0],[,function(e,t,a){e.exports={DoctorDetail:"DoctorDetails_DoctorDetail___pOzJ",DoctorDetailInner:"DoctorDetails_DoctorDetailInner__2aVPi",HasIcon:"DoctorDetails_HasIcon__gkLKm",Ico:"DoctorDetails_Ico__3GyEV",Name:"DoctorDetails_Name__2EC8b",ServicesTypes:"DoctorDetails_ServicesTypes__tWGMO",Seq:"DoctorDetails_Seq__2viSk",SeqItem:"DoctorDetails_SeqItem__1YGV_",Key:"DoctorDetails_Key__3CE1N",Time:"DoctorDetails_Time__QZxdV"}},function(e,t,a){e.exports={TextSearch:"TextSearch_TextSearch__3-TTC",Container:"TextSearch_Container__DgaAM",Title:"TextSearch_Title__1b0Pv",SearchInput:"TextSearch_SearchInput__17OcH",CloseBtn:"TextSearch_CloseBtn__SvgL5",CloseBtnDisabled:"TextSearch_CloseBtnDisabled__2BQMv",KeywordTagContainer:"TextSearch_KeywordTagContainer__2-ngY",KeywordTag:"TextSearch_KeywordTag__3basg"}},,,,,,,function(e,t,a){e.exports={DrDetailsSection:"DoctorsDetails_DrDetailsSection__3LlXr",Container:"DoctorsDetails_Container__BQATV",TotalRecords:"DoctorsDetails_TotalRecords__3p1MX"}},,,,,function(e,t,a){e.exports=a.p+"static/media/logo.4f8064a2.png"},function(e,t,a){e.exports={Loader:"Spinner_Loader__3DF5b",load3:"Spinner_load3__17PFq"}},,function(e,t,a){e.exports={Btn:"LoadMoreBtn_Btn__Z3FtK"}},function(e,t,a){e.exports={scrollTopBtn:"ScrollTopBtn_scrollTopBtn__3bukg"}},function(e,t,a){e.exports=a.p+"static/media/doctors.cbd40459.csv"},,,,function(e,t,a){e.exports=a(38)},,,,,function(e,t,a){},,function(e,t,a){},,,,,,,,function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(6),r=a.n(c),l=(a(28),a(3)),i=(a(29),a(30),function(e){for(var t=0,a=(e=e.trim().split(" ")).length;t<a;t++)if(e[t]=e[t][0].toUpperCase()+e[t].substr(1).toLowerCase(),e[t].includes("-")){for(var n=e[t].split("-"),o=1,c=n.length;o<c;o++)n[o]=n[o][0].toUpperCase()+n[o].substr(1).toLowerCase();e[t]=n.join("-")}return e.join(" ")}),s=a(37),m=function(e,t){s.csv(e).then((function(e){t(e)}))},u=function(e){return e.filter((function(e,t,a){return a.indexOf(e)===t}))},d=a(14),f=a.n(d),p=a(15),g=a.n(p),_=function(){return o.a.createElement("div",{className:g.a.Loader},o.a.createElement("div",null,"Loading..."))},h=a(16),v=a(2),E=a.n(v),D=a(13),T=function(e){var t=e.locList,a=(e.resultNum,e.updated),c=e.locTag,r=Object(n.useState)(""),i=Object(l.a)(r,2),s=i[0],m=i[1],u=function(){m("")};Object(n.useEffect)((function(){a(s)}),[s]);var d=null;s.length&&(d=t.map((function(e){return o.a.createElement("option",{value:e,key:e})})));var f=null;return c.length&&(1===c.length&&c[0].toLowerCase()===s.toLowerCase()?f=o.a.createElement("div",{className:E.a.KeywordTag,onClick:u},c[0]," ",o.a.createElement("i",{className:"fas fa-times"})):c.length>0&&(f=c.map((function(e){return o.a.createElement("div",{className:E.a.KeywordTag,onClick:function(){return m(e)},key:e},e)})))),o.a.createElement("section",{className:E.a.TextSearch},o.a.createElement("div",{className:D(E.a.Container,"container")},o.a.createElement("h1",{className:E.a.Title},"Search Doctors by Locations"),o.a.createElement("div",null,o.a.createElement("input",{className:E.a.SearchInput,type:"text",id:"search",name:"search",placeholder:"Type here to search",list:"locList",value:s,onChange:function(e){m(e.target.value)}}),o.a.createElement("datalist",{id:"locList"},d),o.a.createElement("div",{className:D(E.a.CloseBtn,Object(h.a)({},E.a.CloseBtnDisabled,!s.length)),onClick:u},o.a.createElement("i",{className:"fas fa-times"})))),o.a.createElement("div",{className:D(E.a.KeywordTagContainer,"container")},f))},S=a(9),N=a.n(S),y=a(21),w=a(20),L=a(1),C=a.n(L),b=a(13),k=function(e){var t=e.details,a=function(e){return o.a.createElement("div",{className:C.a.Ico},o.a.createElement("i",{className:e}))},n=o.a.createElement("div",{className:C.a.Name},t.Name),c=o.a.createElement("div",{className:C.a.ServicesTypes},t["Service Type"].map((function(e){return o.a.createElement("div",{key:e},e)}))),r="https://www.google.com/maps/search/".concat(encodeURIComponent(t.Address2)),l=o.a.createElement("div",{className:C.a.HasIcon},a("fas fa-map-marker-alt"),o.a.createElement("a",{href:r,target:"_blank",rel:"noopener noreferrer"},t.Address1," - ",t.Address2)),i=o.a.createElement("div",{className:C.a.HasIcon},a("fas fa-phone-alt"),o.a.createElement("div",null,[t.Telephone1,t.Telephone2].map((function(e){return e.length?o.a.createElement("a",{href:"tel:".concat(e),key:e},e):null})))),s=o.a.createElement("div",{className:C.a.HasIcon},a("fas fa-dollar-sign"),o.a.createElement("div",null,t.Price.length?t.Price.replace(/,+$/,"").replace(/,/g,", "):"/")),m=[{seq:t["Day Seq 1"],time:t["Day Seq 1 time"]},{seq:t["Day Seq 2"],time:t["Day Seq 2 time"]},{seq:t["Day Seq 3"],time:t["Day Seq 3 time"]},{seq:t["Day Seq 4"],time:t["Day Seq 4 time"]}],u=o.a.createElement("div",{className:C.a.Seq},m.map((function(e){var t=e.seq,a=e.time;return t&&a?o.a.createElement("div",{className:C.a.SeqItem,key:"".concat(t,"-").concat(a)},o.a.createElement("div",{className:C.a.Key},t," :"),o.a.createElement("div",{className:"time"},a)):null})));return o.a.createElement("div",{className:b(C.a.DoctorDetail,"col-12","col-lg-6")},o.a.createElement("div",{className:C.a.DoctorDetailInner},n,c,l,i,s,u))},K=a(17),x=a.n(K),I=function(e){var t=e.loadMore;return o.a.createElement("div",{onClick:t,className:x.a.Btn},"Load More")},q=a(31),O=function(e){var t=e.doctors,a=e.fullListLength,c=Object(n.useState)(10),r=Object(l.a)(c,2),i=r[0],s=r[1];Object(n.useEffect)((function(){s(10)}),[t]);var m=t.length<a?"".concat(q("record",t.length,!0)," found in this search"):"".concat(q("record",a,!0)," in total"),u=null;t.length&&(u=t.map((function(e,t){if(t>=i)return null;var a="".concat(t,"-").concat(e["Doctor ID"],"-").concat(e.Name,"-").concat(e["Service Type"],"-").concat(e.Address1,"-").concat(e.Price,"-").concat(e.Region,"-").concat(e.Location);return o.a.createElement(w.a,{key:a,classNames:"fade",timeout:500},o.a.createElement(k,{details:e}))})));var d=null;return t.length&&t.length>i&&(d=o.a.createElement(I,{loadMore:function(){s(i+10)}})),o.a.createElement("section",{className:N.a.DrDetailsSection},o.a.createElement("div",{className:"".concat(N.a.Container," container")},o.a.createElement("div",{className:N.a.TotalRecords},m),o.a.createElement(y.a,{component:"div",className:"row"},u),d))},j=a(18),B=a.n(j),H=a(11),R=a.n(H),M=function(){return o.a.createElement("div",{onClick:function(){R()("html, body").stop().animate({scrollTop:0},"500")},className:B.a.scrollTopBtn},o.a.createElement("i",{className:"fas fa-chevron-up"}))},P=a(19),A=a.n(P);a(34);var V=function(){var e=Object(n.useState)(null),t=Object(l.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(null),s=Object(l.a)(r,2),d=s[0],p=s[1],g=Object(n.useState)([]),h=Object(l.a)(g,2),v=h[0],E=h[1],D=Object(n.useState)([]),S=Object(l.a)(D,2),N=S[0],y=S[1];Object(n.useEffect)((function(){m(A.a,(function(e){e.forEach((function(e){var t=e.Region;t=t.replace("New Terriroties","New Territories").replace("Hong Kong Island","Hong Kong").replace("Hong Kong","Hong Kong Island"),e.Region=i(t);var a=e.Location;a=a.replace("hunghom","Hung Hom").replace("Hunghom","Hung Hom").replace("Kenndy Town","Kennedy Town").replace("Kennedy Twon","Kennedy Town").replace("MongKok","Mong Kok").replace("Mongkok","Mong Kok").replace("Ngan Tau Kok","Ngau Tau Kok").replace("Prinece Edward","Prince Edward").replace("Shatin","Sha Tin"),e.Location=i(a),e["Service Type"]=e["Service Type"].split("/")})),e.sort((function(e,t){return e.Region!==t.Region?e.Region<t.Region?-1:1:e.Location!==t.Location?e.Location<t.Location?-1:1:e.Name!==t.Name?e.Name<t.Name?-1:1:0})),c(e);var t=e.map((function(e){return e.Region})),a=e.map((function(e){return e.Location})),n=t.concat(a);(n=u(n)).sort(),p(n)}))}),[]);var w=o.a.createElement(_,null);return a&&d&&(w=o.a.createElement(o.a.Fragment,null,o.a.createElement(T,{locList:d,updated:function(e){e=e.trim().toLowerCase();var t=[];if(e.length){var n=a.filter((function(t){return[t.Location.toLowerCase(),t.Region.toLowerCase()].includes(e)}));if(n.length)y([i(e)]),E(n);else{var o=function(e,t){return e=e.toLowerCase().split(" "),t=t.toLowerCase().split(" "),e.filter((function(e){return t.includes(e)}))},c=a.filter((function(a){var n=o(e,a.Region);n.length&&t.push(i(a.Region));var c=o(e,a.Location);return c.length&&t.push(i(a.Location)),c.concat(n).length>0}));y(u(t).sort()),E(c)}}else y([]),E(a)},resultNum:v.length,locTag:N}),o.a.createElement(O,{doctors:v,fullListLength:a.length}),o.a.createElement(M,null))),o.a.createElement("div",{className:"App"},o.a.createElement("header",null,o.a.createElement("div",{className:"container"},o.a.createElement("img",{src:f.a,alt:"bowtiego",className:"logo"}))),w)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(V,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[23,1,2]]]);
//# sourceMappingURL=main.1853c8f9.chunk.js.map