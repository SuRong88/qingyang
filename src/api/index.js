import Vue from 'vue';
// 本地模式
var ISLOCAL = 1;
var BASEURL = ISLOCAL ? '/api' : 'http://target.com/api/api';
const OPTIONS = {
	// 注释
	API01: BASEURL + '',
};
Vue.prototype.$API = {
	...OPTIONS
};
