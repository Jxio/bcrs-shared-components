var tt=Object.defineProperty;var et=(h,e,t)=>e in h?tt(h,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):h[e]=t;var p=(h,e,t)=>(et(h,typeof e!="symbol"?e+"":e,t),t);import{V as P}from"./vue.esm-b1e57a2f.js";import{E as J,C as nt,P as C,n as at}from"./_plugin-vue2_normalizer-b11a0120.js";import{W as K}from"./Watch-62f8b699.js";import{c as ot}from"./_commonjsHelpers-de833af9.js";var Q={exports:{}};(function(h,e){(function(t,n){h.exports=n()})(ot,function(){return function(t){function n(s){if(a[s])return a[s].exports;var i=a[s]={i:s,l:!1,exports:{}};return t[s].call(i.exports,i,i.exports,n),i.l=!0,i.exports}var a={};return n.m=t,n.c=a,n.i=function(s){return s},n.d=function(s,i,c){n.o(s,i)||Object.defineProperty(s,i,{configurable:!1,enumerable:!0,get:c})},n.n=function(s){var i=s&&s.__esModule?function(){return s.default}:function(){return s};return n.d(i,"a",i),i},n.o=function(s,i){return Object.prototype.hasOwnProperty.call(s,i)},n.p=".",n(n.s=10)}([function(t,n){t.exports={"#":{pattern:/\d/},X:{pattern:/[0-9a-zA-Z]/},S:{pattern:/[a-zA-Z]/},A:{pattern:/[a-zA-Z]/,transform:function(a){return a.toLocaleUpperCase()}},a:{pattern:/[a-zA-Z]/,transform:function(a){return a.toLocaleLowerCase()}},"!":{escape:!0}}},function(t,n,a){function s(o){var r=document.createEvent("Event");return r.initEvent(o,!0,!0),r}var i=a(2),c=a(0),u=a.n(c);n.a=function(o,r){var l=r.value;if((Array.isArray(l)||typeof l=="string")&&(l={mask:l,tokens:u.a}),o.tagName.toLocaleUpperCase()!=="INPUT"){var m=o.getElementsByTagName("input");if(m.length!==1)throw new Error("v-mask directive requires 1 input, found "+m.length);o=m[0]}o.oninput=function(g){if(g.isTrusted){var b=o.selectionEnd,I=o.value[b-1];for(o.value=a.i(i.a)(o.value,l.mask,!0,l.tokens);b<o.value.length&&o.value.charAt(b-1)!==I;)b++;o===document.activeElement&&(o.setSelectionRange(b,b),setTimeout(function(){o.setSelectionRange(b,b)},0)),o.dispatchEvent(s("input"))}};var f=a.i(i.a)(o.value,l.mask,!0,l.tokens);f!==o.value&&(o.value=f,o.dispatchEvent(s("input")))}},function(t,n,a){var s=a(6),i=a(5);n.a=function(c,u){var o=!(arguments.length>2&&arguments[2]!==void 0)||arguments[2],r=arguments[3];return Array.isArray(u)?a.i(i.a)(s.a,u,r)(c,u,o,r):a.i(s.a)(c,u,o,r)}},function(t,n,a){function s(m){m.component(r.a.name,r.a),m.directive("mask",u.a)}Object.defineProperty(n,"__esModule",{value:!0});var i=a(0),c=a.n(i),u=a(1),o=a(7),r=a.n(o);a.d(n,"TheMask",function(){return r.a}),a.d(n,"mask",function(){return u.a}),a.d(n,"tokens",function(){return c.a}),a.d(n,"version",function(){return l});var l="0.11.1";n.default=s,typeof window<"u"&&window.Vue&&window.Vue.use(s)},function(t,n,a){Object.defineProperty(n,"__esModule",{value:!0});var s=a(1),i=a(0),c=a.n(i),u=a(2);n.default={name:"TheMask",props:{value:[String,Number],mask:{type:[String,Array],required:!0},masked:{type:Boolean,default:!1},tokens:{type:Object,default:function(){return c.a}}},directives:{mask:s.a},data:function(){return{lastValue:null,display:this.value}},watch:{value:function(o){o!==this.lastValue&&(this.display=o)},masked:function(){this.refresh(this.display)}},computed:{config:function(){return{mask:this.mask,tokens:this.tokens,masked:this.masked}}},methods:{onInput:function(o){o.isTrusted||this.refresh(o.target.value)},refresh:function(r){this.display=r;var r=a.i(u.a)(r,this.mask,this.masked,this.tokens);r!==this.lastValue&&(this.lastValue=r,this.$emit("input",r))}}}},function(t,n,a){function s(i,c,u){return c=c.sort(function(o,r){return o.length-r.length}),function(o,r){for(var l=!(arguments.length>2&&arguments[2]!==void 0)||arguments[2],m=0;m<c.length;){var f=c[m];m++;var g=c[m];if(!(g&&i(o,g,!0,u).length>f.length))return i(o,f,l,u)}return""}}n.a=s},function(t,n,a){function s(i,c){var u=!(arguments.length>2&&arguments[2]!==void 0)||arguments[2],o=arguments[3];i=i||"",c=c||"";for(var r=0,l=0,m="";r<c.length&&l<i.length;){var f=c[r],g=o[f],b=i[l];g&&!g.escape?(g.pattern.test(b)&&(m+=g.transform?g.transform(b):b,r++),l++):(g&&g.escape&&(r++,f=c[r]),u&&(m+=f),b===f&&l++,r++)}for(var I="";r<c.length&&u;){var f=c[r];if(o[f]){I="";break}I+=f,r++}return m+I}n.a=s},function(t,n,a){var s=a(8)(a(4),a(9),null,null);t.exports=s.exports},function(t,n){t.exports=function(a,s,i,c){var u,o=a=a||{},r=typeof a.default;r!=="object"&&r!=="function"||(u=a,o=a.default);var l=typeof o=="function"?o.options:o;if(s&&(l.render=s.render,l.staticRenderFns=s.staticRenderFns),i&&(l._scopeId=i),c){var m=l.computed||(l.computed={});Object.keys(c).forEach(function(f){var g=c[f];m[f]=function(){return g}})}return{esModule:u,exports:o,options:l}}},function(t,n){t.exports={render:function(){var a=this,s=a.$createElement;return(a._self._c||s)("input",{directives:[{name:"mask",rawName:"v-mask",value:a.config,expression:"config"}],attrs:{type:"text"},domProps:{value:a.display},on:{input:a.onInput}})},staticRenderFns:[]}},function(t,n,a){t.exports=a(3)}])})})(Q);var st=Q.exports,it=Object.defineProperty,rt=Object.getOwnPropertyDescriptor,v=(h,e,t,n)=>{for(var a=n>1?void 0:n?rt(e,t):e,s=h.length-1,i;s>=0;s--)(i=h[s])&&(a=(n?i(e,t,a):i(a))||a);return n&&a&&it(e,t,a),a};let d=class extends P{constructor(){super(...arguments);p(this,"$refs");p(this,"businessContact");p(this,"originalBusinessContact");p(this,"hasBusinessContactInfoChange");p(this,"contactLabel");p(this,"customMsg");p(this,"editLabel");p(this,"editedLabel");p(this,"disableActions");p(this,"disableActionTooltip");p(this,"invalidSection");p(this,"optionalPhone");p(this,"isEditing",!1);p(this,"contactInfo",null);p(this,"formValid",!1);p(this,"emailRules",[]);p(this,"confirmEmailRules",[]);p(this,"phoneRules",[]);p(this,"dropdown",null)}get phoneLabel(){let t="Phone Number ";return this.optionalPhone&&(t+="(Optional)"),t}updateContactInfo(){this.emitContactInfo(this.contactInfo),this.isEditing=!1}cancelEdit(){this.contactInfo={...this.businessContact},this.emitContactInfo(this.contactInfo),this.isEditing=!1}resetContactInfo(){this.contactInfo={...this.originalBusinessContact},this.emitContactInfo(this.contactInfo),this.isEditing=!1}async submitContact(){this.emailRules=[t=>!!t||"Email address is required",t=>/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(t)||"Valid email is required"],this.confirmEmailRules=[t=>!!t||"Confirm email address",t=>!t||t.toString()===(this.$refs.editContactForm&&this.$refs.editContactForm.$el[0].value)||"Email addresses must match"],this.phoneRules=this.optionalPhone?[]:[t=>!!t||"Phone number is required",t=>!t||t.length===0||t.length===14||"Phone number is invalid"],this.$refs.editContactForm.validate(),await P.nextTick(),this.formValid&&this.updateContactInfo()}initializeContactInfo(){this.contactInfo={...this.businessContact,confirmEmail:this.businessContact.email}}emitIsEditing(t){}emitContactInfo(t){}};v([C()],d.prototype,"businessContact",2);v([C()],d.prototype,"originalBusinessContact",2);v([C()],d.prototype,"hasBusinessContactInfoChange",2);v([C({default:"Registered Office"})],d.prototype,"contactLabel",2);v([C({default:null})],d.prototype,"customMsg",2);v([C()],d.prototype,"editLabel",2);v([C()],d.prototype,"editedLabel",2);v([C({default:!1})],d.prototype,"disableActions",2);v([C({default:!1})],d.prototype,"disableActionTooltip",2);v([C({default:!1})],d.prototype,"invalidSection",2);v([C({default:!1})],d.prototype,"optionalPhone",2);v([K("businessContact",{deep:!0,immediate:!0})],d.prototype,"initializeContactInfo",1);v([K("isEditing",{immediate:!0}),J("isEditingContact")],d.prototype,"emitIsEditing",1);v([J("contactInfoChange")],d.prototype,"emitContactInfo",1);d=v([nt({directives:{mask:st.mask}})],d);var ct=function(){var e=this,t=e._self._c;return e._self._setupProxy,t("div",{attrs:{id:"contact-info"}},[e.isEditing?[t("v-row",{staticClass:"summary-section",attrs:{"no-gutters":""}},[t("v-col",{attrs:{cols:"12",sm:"3"}},[t("label",{staticClass:"title-label",class:{"error-text":e.invalidSection}},[e._v(" "+e._s(e.contactLabel)+" Contact Information ")])]),e.customMsg?t("v-col",{attrs:{cols:"12",sm:"9"}},[e._v(" "+e._s(e.customMsg)+" ")]):t("v-col",{attrs:{cols:"12",sm:"9"}},[e._v(" There is no fee or filing to change "+e._s(e.contactLabel)+" Contact Information. Any changes made will be applied immediately. ")])],1),t("v-form",{ref:"editContactForm",staticClass:"business-contact-form pt-5",attrs:{name:"business-contact-form"},on:{submit:function(n){return n.preventDefault(),e.submitContact()}},model:{value:e.formValid,callback:function(n){e.formValid=n},expression:"formValid"}},[t("v-row",{attrs:{"no-gutters":""}},[t("v-col",{staticClass:"pr-4",attrs:{cols:"12",sm:"3"}},[t("label",{staticClass:"title-label"},[e._v("Email Address")])]),t("v-col",{attrs:{cols:"12",sm:"9"}},[t("v-text-field",{attrs:{id:"txt-email",filled:"",label:"Email Address",req:"","persistent-hint":"",rules:e.emailRules,"validate-on-blur":""},model:{value:e.contactInfo.email,callback:function(n){e.$set(e.contactInfo,"email",n)},expression:"contactInfo.email"}})],1)],1),t("v-row",{attrs:{"no-gutters":""}},[t("v-col",{staticClass:"pr-4",attrs:{cols:"12",sm:"3"}},[t("label",{staticClass:"title-label"},[e._v("Confirm Email")])]),t("v-col",{attrs:{cols:"12",sm:"9"}},[t("v-text-field",{attrs:{id:"txt-confirm-email",filled:"",label:"Confirm Email Address",req:"","persistent-hint":"",rules:e.confirmEmailRules,"validate-on-blur":""},model:{value:e.contactInfo.confirmEmail,callback:function(n){e.$set(e.contactInfo,"confirmEmail",n)},expression:"contactInfo.confirmEmail"}})],1)],1),t("v-row",{attrs:{"no-gutters":""}},[t("v-col",{staticClass:"pr-4",attrs:{cols:"12",sm:"3"}},[t("label",{staticClass:"title-label"},[e._v("Phone Number")])]),t("v-col",{staticClass:"pr-4",attrs:{cols:"6",sm:"5"}},[t("v-text-field",{directives:[{name:"mask",rawName:"v-mask",value:["(###) ###-####"],expression:"['(###) ###-####']"}],attrs:{id:"txt-phone",filled:"",label:e.phoneLabel,"persistent-hint":"",hint:"Example: (555) 555-5555",type:"tel",rules:e.phoneRules,"validate-on-blur":""},model:{value:e.contactInfo.phone,callback:function(n){e.$set(e.contactInfo,"phone",n)},expression:"contactInfo.phone"}})],1),t("v-col",{attrs:{cols:"6",sm:"4"}},[t("v-text-field",{directives:[{name:"mask",rawName:"v-mask",value:"#####",expression:"'#####'"}],attrs:{id:"txt-phone-extension",filled:"",label:"Extension (Optional)","persistent-hint":""},model:{value:e.contactInfo.extension,callback:function(n){e.$set(e.contactInfo,"extension",n)},expression:"contactInfo.extension"}})],1)],1),t("div",{staticClass:"action-btns d-flex justify-center justify-sm-end"},[t("v-btn",{attrs:{id:"contact-info-done-btn",large:"",color:"primary",type:"submit",value:"Submit"}},[t("span",[e._v("Save")])]),t("v-btn",{attrs:{id:"contact-info-cancel-btn",large:"",outlined:"",color:"primary"},on:{click:function(n){return e.cancelEdit()}}},[t("span",[e._v("Cancel")])])],1)],1)]:[t("v-row",{staticClass:"edit-section",attrs:{"no-gutters":""}},[t("v-col",{staticClass:"pr-4",attrs:{cols:"12",sm:"3"}},[t("label",{staticClass:"contact-info-label"},[t("div",[e._v(e._s(e.contactLabel)+" Contact Information")]),e.hasBusinessContactInfoChange?t("v-chip",{attrs:{"x-small":"",label:"",color:"primary","text-color":"white"}},[e._v(" "+e._s(e.editedLabel)+" ")]):e._e()],1)]),t("v-col",{staticClass:"pr-4",attrs:{cols:"12",sm:"4"}},[t("label",{staticClass:"item-label"},[e._v("Email Address")]),t("div",{attrs:{id:"lbl-email"}},[e._v(" "+e._s(e.businessContact.email?e.businessContact.email:"(Not entered)")+" ")])]),t("v-col",{staticClass:"pr-4",attrs:{cols:"6",sm:"3"}},[t("label",{staticClass:"item-label"},[e._v("Phone Number")]),e.businessContact.phone?t("div",{attrs:{id:"lbl-phone"}},[e._v(" "+e._s(e.businessContact.phone)+" "),e.businessContact.extension?t("span",[e._v("Ext: "+e._s(e.businessContact.extension))]):e._e()]):t("div",{attrs:{id:"lbl-no-phone"}},[e._v(" (Not entered) ")])]),e.disableActions?e._e():t("v-col",{attrs:{cols:"6",sm:"2"}},[t("div",{staticClass:"d-flex justify-end align-end align-sm-start"},[e.hasBusinessContactInfoChange?t("v-btn",{attrs:{id:"contact-info-undo-btn",text:"",color:"primary"},on:{click:function(n){return e.resetContactInfo()}}},[t("v-icon",{attrs:{small:""}},[e._v(" mdi-undo ")]),t("span",[e._v("Undo")])],1):t("v-tooltip",{attrs:{top:"","content-class":"top-tooltip",transition:"fade-transition","nudge-right":"3",disabled:e.disableActionTooltip},scopedSlots:e._u([{key:"activator",fn:function({on:n}){return[t("v-btn",e._g({attrs:{id:"contact-info-edit-btn",text:"",color:"primary"},on:{click:function(a){e.isEditing=!0}}},n),[t("v-icon",{attrs:{small:""}},[e._v(" mdi-pencil ")]),t("span",[e._v(e._s(e.editLabel))])],1)]}}],null,!1,4118078089)},[t("span",[e._v("No fee to change")])]),e.hasBusinessContactInfoChange?t("span",{staticClass:"more-actions"},[t("v-menu",{attrs:{"offset-y":"",left:"","nudge-bottom":"4"},scopedSlots:e._u([{key:"activator",fn:function({on:n}){return[t("v-btn",e._g({attrs:{id:"btn-more-actions",text:"",small:"",color:"primary"}},n),[t("v-icon",[e._v(e._s(e.dropdown?"mdi-menu-up":"mdi-menu-down"))])],1)]}}],null,!1,3051082093),model:{value:e.dropdown,callback:function(n){e.dropdown=n},expression:"dropdown"}},[t("v-list",[t("v-list-item",{staticClass:"v-list-item",attrs:{id:"btn-more-actions-edit"},on:{click:function(n){e.isEditing=!0,e.dropdown=!1}}},[t("v-list-item-subtitle",[t("v-icon",{attrs:{small:"",color:"primary"}},[e._v("mdi-pencil")]),t("span",{staticClass:"drop-down-action ml-1"},[e._v("Change")])],1)],1)],1)],1)],1):e._e()],1)])],1)]],2)},lt=[],Y=at(d,ct,lt,!1,null,"7088e7de",null,null);const ut=Y.exports;Y.exports.__docgenInfo={exportName:"default",displayName:"ContactInfo",description:"",tags:{},props:[{name:"businessContact",tags:{},description:"The current business contact information.",type:{name:"ContactPointIF"}},{name:"originalBusinessContact",tags:{},description:"The baseline contact information.",type:{name:"ContactPointIF"}},{name:"hasBusinessContactInfoChange",tags:{},description:"Flag for identifying changes.",type:{name:"boolean"}},{name:"contactLabel",tags:{},description:"Contact information label.",type:{name:"string"},defaultValue:{func:!1,value:"'Registered Office'"}},{name:"customMsg",tags:{},description:"Custom contact info msg.",type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"editLabel",tags:{},description:"Edit label name (ie 'Change' or 'Correct').",type:{name:"string"}},{name:"editedLabel",tags:{},description:"Edited label name (ie 'Changed' or 'Corrected').",type:{name:"string"}},{name:"disableActions",tags:{},description:"Option to disable the edit actions.",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"disableActionTooltip",tags:{},description:"Option to disable the action tooltip.",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"invalidSection",tags:{},description:"Prompt error handling.",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"optionalPhone",tags:{},description:"Option to disable phone requirement.",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"contactInfoChange"}],sourceFiles:["/home/severin/repos/bcrs-shared-components/src/components/contact-info/ContactInfo.vue"]};const ht={title:"component/ContactInfo"},_=(h,{argTypes:e})=>({props:Object.keys(e),components:{ContactInfo:ut},template:'<contact-info v-bind="$props" />'}),y={email:"mock@email.com",confirmEmail:"mock@email.com",phone:"2501234567",extension:null},T={email:"newMock@email.com",confirmEmail:"newMock@email.com",phone:"2509876543",extension:123},$={email:"mock@email.com",confirmEmail:"mock@email.com",phone:"",extension:null},x=_.bind({});x.args={businessContact:y,originalBusinessContact:y,hasBusinessContactInfoChange:!1,editLabel:"Change",editedLabel:"Changed"};const k=_.bind({});k.args={businessContact:T,originalBusinessContact:T,hasBusinessContactInfoChange:!0,editLabel:"Change",editedLabel:"Changes Saved"};const E=_.bind({});E.args={businessContact:y,originalBusinessContact:y,hasBusinessContactInfoChange:!1,editLabel:"Correct",editedLabel:"Corrected"};const w=_.bind({});w.args={contactLabel:"Business",disableActionTooltip:!0,businessContact:y,originalBusinessContact:y,hasBusinessContactInfoChange:!1,editLabel:"Change",editedLabel:"Changes Saved"};const L=_.bind({});L.args={contactLabel:"Business",disableActionTooltip:!0,businessContact:T,originalBusinessContact:y,hasBusinessContactInfoChange:!0,editLabel:"Change",editedLabel:"Changes Saved"};const A=_.bind({});A.args={contactLabel:"Business",disableActionTooltip:!0,businessContact:$,originalBusinessContact:$,hasBusinessContactInfoChange:!1,editLabel:"Change",editedLabel:"Changes Saved",optionalPhone:!0};var O,B,S;x.parameters={...x.parameters,docs:{...(O=x.parameters)==null?void 0:O.docs,source:{originalSource:`(args, {
  argTypes
}) => ({
  props: Object.keys(argTypes),
  components: {
    ContactInfo
  },
  template: '<contact-info v-bind="$props" />' // $props comes from args below
})`,...(S=(B=x.parameters)==null?void 0:B.docs)==null?void 0:S.source}}};var j,F,V;k.parameters={...k.parameters,docs:{...(j=k.parameters)==null?void 0:j.docs,source:{originalSource:`(args, {
  argTypes
}) => ({
  props: Object.keys(argTypes),
  components: {
    ContactInfo
  },
  template: '<contact-info v-bind="$props" />' // $props comes from args below
})`,...(V=(F=k.parameters)==null?void 0:F.docs)==null?void 0:V.source}}};var R,M,N;E.parameters={...E.parameters,docs:{...(R=E.parameters)==null?void 0:R.docs,source:{originalSource:`(args, {
  argTypes
}) => ({
  props: Object.keys(argTypes),
  components: {
    ContactInfo
  },
  template: '<contact-info v-bind="$props" />' // $props comes from args below
})`,...(N=(M=E.parameters)==null?void 0:M.docs)==null?void 0:N.source}}};var z,q,D;w.parameters={...w.parameters,docs:{...(z=w.parameters)==null?void 0:z.docs,source:{originalSource:`(args, {
  argTypes
}) => ({
  props: Object.keys(argTypes),
  components: {
    ContactInfo
  },
  template: '<contact-info v-bind="$props" />' // $props comes from args below
})`,...(D=(q=w.parameters)==null?void 0:q.docs)==null?void 0:D.source}}};var Z,U,W;L.parameters={...L.parameters,docs:{...(Z=L.parameters)==null?void 0:Z.docs,source:{originalSource:`(args, {
  argTypes
}) => ({
  props: Object.keys(argTypes),
  components: {
    ContactInfo
  },
  template: '<contact-info v-bind="$props" />' // $props comes from args below
})`,...(W=(U=L.parameters)==null?void 0:U.docs)==null?void 0:W.source}}};var G,X,H;A.parameters={...A.parameters,docs:{...(G=A.parameters)==null?void 0:G.docs,source:{originalSource:`(args, {
  argTypes
}) => ({
  props: Object.keys(argTypes),
  components: {
    ContactInfo
  },
  template: '<contact-info v-bind="$props" />' // $props comes from args below
})`,...(H=(X=A.parameters)==null?void 0:X.docs)==null?void 0:H.source}}};const bt=["FiledAlteration","ChangedAlteration","FiledCorrection","ChangeFirm","ChangedFirm","OptionalPhone"];export{w as ChangeFirm,k as ChangedAlteration,L as ChangedFirm,x as FiledAlteration,E as FiledCorrection,A as OptionalPhone,bt as __namedExportsOrder,ht as default};
//# sourceMappingURL=ContactInfo.stories-02f9bd7d.js.map
