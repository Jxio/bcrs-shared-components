var c=Object.defineProperty;var v=(t,e,o)=>e in t?c(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o;var s=(t,e,o)=>(v(t,typeof e!="symbol"?e+"":e,o),o);import{V as b}from"./vue.esm-b1e57a2f.js";import{C as F,P as u,E as f,n as h}from"./_plugin-vue2_normalizer-b11a0120.js";import{W as d}from"./Watch-62f8b699.js";var N=Object.defineProperty,_=Object.getOwnPropertyDescriptor,r=(t,e,o,i)=>{for(var a=i>1?void 0:i?_(e,o):e,n=t.length-1,m;n>=0;n--)(m=t[n])&&(a=(i?m(e,o,a):m(a))||a);return i&&a&&N(e,o,a),a};let l=class extends b{constructor(){super(...arguments);s(this,"$refs");s(this,"validate");s(this,"folioNumber");s(this,"disabled");s(this,"folioFormValid",!1)}get folioNumberRules(){return[o=>!o||!this.validate||o.length<=50||"Cannot exceed 50 characters"]}emitValid(){return this.folioFormValid}emitFocus(o){}emitFolioNumber(o){}validateField(){this.validate&&(this.validateFolioNumber(),this.emitValid())}resetFolioNumber(){this.$refs.folioForm.reset()}resetFolioNumberValidation(){this.$refs.folioForm.resetValidation()}validateFolioNumber(){return this.$refs.folioForm.validate()}};r([u({default:!1})],l.prototype,"validate",2);r([u({default:null})],l.prototype,"folioNumber",2);r([u({default:!1})],l.prototype,"disabled",2);r([f("valid")],l.prototype,"emitValid",1);r([f("focus")],l.prototype,"emitFocus",1);r([f("emitFolioNumber")],l.prototype,"emitFolioNumber",1);r([d("folioFormValid"),d("validate")],l.prototype,"validateField",1);l=r([F({})],l);var V=function(){var e=this,o=e._self._c;return e._self._setupProxy,o("v-form",{ref:"folioForm",attrs:{id:"folio-number-form"},model:{value:e.folioFormValid,callback:function(i){e.folioFormValid=i},expression:"folioFormValid"}},[o("v-text-field",{attrs:{id:"folio-number-textfield",filled:"",label:"Folio Number (Optional)",value:e.folioNumber,rules:e.folioNumberRules,disabled:e.disabled,autocomplete:"chrome-off",name:Math.random()},on:{input:function(i){return e.emitFolioNumber(i)},focus:function(i){return e.emitFocus(i)}}})],1)},y=[],p=h(l,V,y,!1,null,null,null,null);const E=p.exports;p.exports.__docgenInfo={exportName:"default",displayName:"FolioNumberInput",description:"",tags:{},props:[{name:"validate",tags:{},description:"Whether to validate the fields.",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"folioNumber",tags:{},description:"Folio Number prop.",type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"disabled",tags:{},description:"Disabled prop.",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"valid",description:"Emits an event indicating whether or not this component is valid."},{name:"focus",description:"Emits an event indicating whether or not this component is focused."},{name:"emitFolioNumber",description:"Emits an event to update the Folio Number."}],sourceFiles:["/home/severin/repos/bcrs-shared-components/src/components/folio-number-input/FolioNumberInput.vue"]};export{E as F};
//# sourceMappingURL=FolioNumberInput-d9d8b85a.js.map
