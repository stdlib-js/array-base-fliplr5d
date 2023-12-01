// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function r(r){var n,t,u,e,f;for(n=[],e=0;e<r.length;e++){for(u=[],f=(t=r[e]).length-1;f>=0;f--)u.push(t[f]);n.push(u)}return n}function n(n){var t,u;for(t=[],u=0;u<n.length;u++)t.push(r(n[u]));return t}function t(r){var t,u;for(t=[],u=0;u<r.length;u++)t.push(n(r[u]));return t}function u(r){var n,u;for(n=[],u=0;u<r.length;u++)n.push(t(r[u]));return n}export{u as default};
//# sourceMappingURL=mod.js.map
