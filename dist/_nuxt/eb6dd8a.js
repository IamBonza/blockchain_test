(window.webpackJsonp=window.webpackJsonp||[]).push([[5,4],{295:function(e,t,r){var content=r(301);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(68).default)("67a26672",content,!0,{sourceMap:!1})},296:function(e,t,r){"use strict";r.r(t);r(292);var n=r(294),c=r(293);c.Chart.register(c.Title,c.Tooltip,c.Legend,c.LineElement,c.LinearScale,c.CategoryScale,c.PointElement);var o={name:"LineChart",components:{LineChartGenerator:n.Line},props:{data:{type:Array,default:function(){return[]}},chartId:{type:String,default:"line-chart"},datasetIdKey:{type:String,default:"label"},width:{type:Number,default:400},height:{type:Number,default:400},cssClasses:{default:"",type:String},styles:{type:Object,default:function(){}},plugins:{type:Array,default:function(){return[]}}},computed:{chartData:function(){return{labels:["Day 1","Day 2","Day 3","Day 4","Day 5","Day 6","Day 7","Day 8","Day 9","Day 10","Day 11","Day 12","Day 13","Day 14"],datasets:[{label:"График изменения цены за 14 дней",backgroundColor:"rgb(16,112,224)",data:this.data}]}},chartOptions:function(){return{responsive:!0,maintainAspectRatio:!1}}}},l=r(25),component=Object(l.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("LineChartGenerator",{attrs:{"chart-options":e.chartOptions,"chart-data":e.chartData,"chart-id":e.chartId,"dataset-id-key":e.datasetIdKey,plugins:e.plugins,"css-classes":e.cssClasses,styles:e.styles,width:e.width,height:e.height}})],1)}),[],!1,null,null,null);t.default=component.exports},298:function(e,t,r){"use strict";var n=r(3),c=r(0),o=r(4),l=r(56),d=r(297),f=r(200),h=r(5),v=c.RangeError,y=c.String,C=Math.floor,m=o(f),x=o("".slice),w=o(1..toFixed),S=function(e,t,r){return 0===t?r:t%2==1?S(e,t-1,r*e):S(e*e,t/2,r)},k=function(data,e,t){for(var r=-1,n=t;++r<6;)n+=e*data[r],data[r]=n%1e7,n=C(n/1e7)},_=function(data,e){for(var t=6,r=0;--t>=0;)r+=data[t],data[t]=C(r/e),r=r%e*1e7},D=function(data){for(var e=6,s="";--e>=0;)if(""!==s||0===e||0!==data[e]){var t=y(data[e]);s=""===s?t:s+m("0",7-t.length)+t}return s};n({target:"Number",proto:!0,forced:h((function(){return"0.000"!==w(8e-5,3)||"1"!==w(.9,0)||"1.25"!==w(1.255,2)||"1000000000000000128"!==w(0xde0b6b3a7640080,0)}))||!h((function(){w({})}))},{toFixed:function(e){var t,r,n,c,o=d(this),f=l(e),data=[0,0,0,0,0,0],h="",C="0";if(f<0||f>20)throw v("Incorrect fraction digits");if(o!=o)return"NaN";if(o<=-1e21||o>=1e21)return y(o);if(o<0&&(h="-",o=-o),o>1e-21)if(r=(t=function(e){for(var t=0,r=e;r>=4096;)t+=12,r/=4096;for(;r>=2;)t+=1,r/=2;return t}(o*S(2,69,1))-69)<0?o*S(2,-t,1):o/S(2,t,1),r*=4503599627370496,(t=52-t)>0){for(k(data,0,r),n=f;n>=7;)k(data,1e7,0),n-=7;for(k(data,S(10,n,1),0),n=t-1;n>=23;)_(data,1<<23),n-=23;_(data,1<<n),k(data,1,1),_(data,2),C=D(data)}else k(data,0,r),k(data,1<<-t,0),C=D(data)+m("0",f);return C=f>0?h+((c=C.length)<=f?"0."+m("0",f-c)+C:x(C,0,c-f)+"."+x(C,c-f)):h+C}})},299:function(e,t,r){"use strict";var n=r(3),c=r(84).find,o=r(138),l="find",d=!0;l in[]&&Array(1).find((function(){d=!1})),n({target:"Array",proto:!0,forced:d},{find:function(e){return c(this,e,arguments.length>1?arguments[1]:void 0)}}),o(l)},300:function(e,t,r){"use strict";r(295)},301:function(e,t,r){var n=r(67)(!1);n.push([e.i,"*{box-sizing:border-box}.select-width{width:120px}.select-width select,.select-width span{width:100%}select{width:100px}.converter-container{width:100%;display:flex}.converter{background:#d2d0d0;padding:24px;border-radius:6px;min-height:20px;margin:20px auto;border:0;flex:0 0 66.666667%;max-width:80%}.converter>div:not(:last-child){margin-bottom:20px}.ammount-block{display:flex;flex-direction:row;align-items:center;justify-content:center}.ammount>input{background-color:#fff;border:1px solid #cfd6e4;border-radius:4px;box-sizing:border-box;color:#000;max-width:100%;outline:0;padding:0 16px;width:100%;font-size:14px;height:40px;line-height:21px}.ammount-block>div:nth-child(2){width:50px}.ammount-block>div:first-child,.ammount-block>div:last-child{width:calc(50% - 25px)}.currencies-block{display:flex;justify-content:center;align-items:center}.currency>input{background:#fff;color:#495057;border:1px solid #ddd;box-shadow:inset 0 1px 1px rgba(0,0,0,.08);width:100%;height:36px;min-height:36px;font-size:13px;border-radius:3px;transition:all .2s ease-in-out 0s;overflow:visible;margin:0;outline:none;cursor:pointer}.switcher{margin:0 16px}.switcher-btn{transition:background .2s ease-in-out 0s;border-radius:8px;font-weight:400;display:inline-block;border:1px solid transparent;margin:0;text-align:center;white-space:nowrap;cursor:pointer;padding:.375rem .75rem;font-size:14px;line-height:1.5;background:#1070e0;color:#fff;text-decoration:none!important;outline:none!important}.result-block{display:flex;flex-direction:row;justify-content:center;align-items:center}.result-block>div:nth-child(2){width:50px}.result-block>div:first-child,.result-block>div:last-child{width:calc(50% - 25px)}.loading-block{width:120px;height:40px;background-color:#fff;border-radius:4px}@media (max-width:800px){.currencies-block{flex-direction:column}.currencies-block>div:not(:last-child){margin-bottom:16px}}",""]),e.exports=n},302:function(e,t,r){"use strict";r.r(t);r(36),r(26),r(54),r(55);var n=r(9),c=r(22),o=(r(53),r(14),r(31),r(32),r(35),r(298),r(299),r(57),r(201),r(30),r(52));function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function d(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){Object(c.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var f={data:function(){return{loading:!0,amount:1,chartData:null,availableCurencies:["bitcoin","ethereum","tether"],vsCurrenciesShorts:{bitcoin:"btc",ethereum:"eth",tether:"usd"},firstSelectedCurencyId:"bitcoin",secondSelectedCurencyId:"tether",currentPrice:0}},components:{Chart:function(){return Promise.resolve().then(r.bind(null,296))}},computed:{vsAvailableCruncies:function(){var e=this;return"string"==typeof this.availableCurencies[0]?[]:this.availableCurencies.filter((function(t){return t.id!==e.firstSelectedCurencyId}))},fisrtSelectorAvailableCurrencies:function(){var e=this;return"string"==typeof this.availableCurencies[0]?[]:this.availableCurencies.filter((function(t){return t.id!==e.secondSelectedCurencyId}))},currentAmount:function(){var e=this.amount*this.currentPrice;return e.toFixed(4)},firstSelectedCurrency:function(){var e=this;if("string"==typeof this.availableCurencies[0])return[];var t=this.availableCurencies.find((function(t){return t.id===e.firstSelectedCurencyId})),r=t.symbol.toUpperCase();return t.symbol=r,t},secondSelectedCurrency:function(){var e=this;return"string"==typeof this.availableCurencies[0]?[]:this.availableCurencies.find((function(t){return t.id===e.secondSelectedCurencyId}))}},methods:d(d({},Object(o.b)("coingecko",["getChartDataByTwoCurrencies","getCurencyDataById","getCurrentPriceOfCurrencyPair"])),{},{getChartData:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r,n,c,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.firstSelectedCurencyId,n=e.vsCurrenciesShorts[e.secondSelectedCurencyId],t.next=4,e.getChartDataByTwoCurrencies({currencyId:r,vsCurrency:n});case 4:c=t.sent,(o=c.map((function(element){return element[1]}))).splice(-2,1),e.chartData=o;case 8:case"end":return t.stop()}}),t)})))()},getDataOfCurencies:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.availableCurencies.forEach(function(){var t=Object(n.a)(regeneratorRuntime.mark((function t(r,n){var c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.getCurencyDataById(r);case 2:c=t.sent,e.$set(e.availableCurencies,n,c);case 4:case"end":return t.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}());case 1:case"end":return t.stop()}}),t)})))()},switchCurrencies:function(){var e=this.firstSelectedCurencyId;this.firstSelectedCurencyId=this.secondSelectedCurencyId,this.secondSelectedCurencyId=e,this.onCurrenciesPairChange()},onCurrenciesPairChange:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.loading=!0,t.next=3,e.getCurrentPriceOfCurrencyPair({currencyId:e.firstSelectedCurencyId,vsCurrency:e.vsCurrenciesShorts[e.secondSelectedCurencyId]});case 3:return e.currentPrice=t.sent,t.next=6,e.getChartData();case 6:e.loading=!1;case 7:case"end":return t.stop()}}),t)})))()}}),mounted:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.getDataOfCurencies();case 2:return t.next=4,e.getChartData();case 4:return t.next=6,e.getCurrentPriceOfCurrencyPair({currencyId:e.firstSelectedCurencyId,vsCurrency:e.vsCurrenciesShorts[e.secondSelectedCurencyId]});case 6:e.currentPrice=t.sent,e.loading=!1;case 8:case"end":return t.stop()}}),t)})))()}},h=f,v=(r(300),r(25)),component=Object(v.a)(h,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{staticClass:"converter-container"},[r("div",{staticClass:"converter"},[r("div",{staticClass:"ammount-block"},[r("div",{staticClass:"ammount"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.amount,expression:"amount"}],attrs:{type:"number"},domProps:{value:e.amount},on:{input:function(t){t.target.composing||(e.amount=t.target.value)}}})])]),e._v(" "),r("div",{staticClass:"currencies-block"},[r("div",{staticClass:"currency"},[e.loading?[r("div",{staticClass:"loading-block"})]:[e.loading?e._e():r("b-select",{staticClass:"select-width",on:{input:e.onCurrenciesPairChange},model:{value:e.firstSelectedCurencyId,callback:function(t){e.firstSelectedCurencyId=t},expression:"firstSelectedCurencyId"}},e._l(e.fisrtSelectorAvailableCurrencies,(function(t){return r("option",{key:t.id,domProps:{value:t.id}},["tether"===t.id?[e._v("\n                    USD\n                ")]:[e._v("\n                    "+e._s(t.name)+"\n                ")]],2)})),0)]],2),e._v(" "),r("div",{staticClass:"switcher"},[r("button",{staticClass:"switcher-btn",on:{click:e.switchCurrencies}},[r("span",{staticStyle:{display:"flex","align-items":"center"}},[r("svg",{staticClass:"sc-16r8icm-0 coGWQa",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",height:"16px",width:"16px",viewBox:"0 0 24 24"}},[r("path",{attrs:{d:"M6 16H20M20 16L17 19M20 16L17 13",stroke:"currentColor","stroke-width":"2","stroke-miterlimit":"10","stroke-linecap":"round","stroke-linejoin":"round"}}),r("path",{attrs:{d:"M18 8H4M4 8L7 11M4 8L7 5",stroke:"currentColor","stroke-width":"2","stroke-miterlimit":"10","stroke-linecap":"round","stroke-linejoin":"round"}})])])])]),e._v(" "),r("div",{staticClass:"currency"},[e.loading?[r("div",{staticClass:"loading-block"})]:[e.loading?e._e():r("b-select",{staticClass:"select-width",on:{input:e.onCurrenciesPairChange},model:{value:e.secondSelectedCurencyId,callback:function(t){e.secondSelectedCurencyId=t},expression:"secondSelectedCurencyId"}},e._l(e.vsAvailableCruncies,(function(t){return r("option",{key:t.id,domProps:{value:t.id}},["tether"===t.id?[e._v("\n                    USD\n                ")]:[e._v("\n                    "+e._s(t.name)+"\n                ")]],2)})),0)]],2)]),e._v(" "),r("client-only",[r("div",{staticClass:"result-block"},[e.firstSelectedCurrency?r("div",{staticClass:"result",staticStyle:{"text-align":"right"}},[e._v("\n              "+e._s(e.amount)+"\n               "),"Tether"===e.firstSelectedCurrency.name?[r("span",[e._v("Usd")])]:[r("span",[e._v(e._s(e.firstSelectedCurrency.name))])],e._v(" "),"Tether"===e.firstSelectedCurrency.name?[r("span",[e._v("(USD)")])]:[r("span",[e._v("("+e._s(e.firstSelectedCurrency.symbol)+")")])]],2):e._e(),e._v(" "),r("div",{staticStyle:{"text-align":"center"}},[e._v("=")]),e._v(" "),e.secondSelectedCurrency?r("div",{staticClass:"result",staticStyle:{"text-align":"left"}},[e._v("\n              "+e._s(e.currentAmount)+"\n              "),"Tether"===e.secondSelectedCurrency.name?[r("span",[e._v("Usd")])]:[r("span",[e._v(e._s(e.secondSelectedCurrency.name))])],e._v(" "),"Tether"===e.secondSelectedCurrency.name?[r("span",[e._v("(USD)")])]:[r("span",[e._v("("+e._s(e.secondSelectedCurrency.symbol)+")")])]],2):r("div",[e._v("\n              Nothing is selected\n            ")])])])],1)]),e._v(" "),r("client-only",[r("chart",{attrs:{data:e.chartData,secondData:e.firstSelectedCurrency}})],1)],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Chart:r(296).default})}}]);