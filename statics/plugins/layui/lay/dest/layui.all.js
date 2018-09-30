/** layui-v1.0.8 MIT License By http://www.layui.com */ ;
! function(e) {
	"use strict";
	var t = function() {
		this.v = "1.0.8"
	};
	t.fn = t.prototype;
	var n = document,
		o = t.fn.cache = {},
		i = function() {
			var e = n.scripts,
				t = e[e.length - 1].src;
			return t.substring(0, t.lastIndexOf("/") + 1)
		}(),
		r = function(t) {
			e.console && console.error && console.error("Layui hint: " + t)
		},
		l = "undefined" != typeof opera && "[object Opera]" === opera.toString(),
		a = {
			layer: "modules/layer",
			laydate: "modules/laydate",
			laypage: "modules/laypage",
			laytpl: "modules/laytpl",
			layim: "modules/layim",
			layedit: "modules/layedit",
			form: "modules/form",
			upload: "modules/upload",
			tree: "modules/tree",
			slide: "modules/slide",
			table: "modules/table",
			element: "modules/element",
			util: "modules/util",
			flow: "modules/flow",
			code: "modules/code",
			jquery: "modules/jquery",
			mobile: "modules/mobile",
			"layui.all": "dest/layui.all"
		};
	o.modules = {}, o.status = {}, o.timeout = 10, o.event = {}, t.fn.define = function(e, t) {
		var n = this,
			i = "function" == typeof e,
			r = function() {
				return "function" == typeof t && t(function(e, t) {
					layui[e] = t, o.status[e] = !0
				}), this
			};
		return i && (t = e, e = []), layui["layui.all"] || !layui["layui.all"] && layui["layui.mobile"] ? r.call(n) : (n.use(e, r), n)
	}, t.fn.use = function(e, t, u) {
		function s(e, t) {
			var n = "PLaySTATION 3" === navigator.platform ? /^complete$/ : /^(complete|loaded)$/;
			("load" === e.type || n.test((e.currentTarget || e.srcElement).readyState)) && (o.modules[m] = t, y.removeChild(p), function i() {
				return ++v > 1e3 * o.timeout / 4 ? r(m + " is not a valid module") : void(o.status[m] ? c() : setTimeout(i, 4))
			}())
		}

		function c() {
			u.push(layui[m]), e.length > 1 ? f.use(e.slice(1), t, u) : "function" == typeof t && t.apply(layui, u)
		}
		var f = this,
			d = o.dir = o.dir ? o.dir : i,
			y = n.getElementsByTagName("head")[0];
		e = "string" == typeof e ? [e] : e, window.jQuery && jQuery.fn.on && (f.each(e, function(t, n) {
			"jquery" === n && e.splice(t, 1)
		}), layui.jquery = jQuery);
		var m = e[0],
			v = 0;
		if (u = u || [], o.host = o.host || (d.match(/\/\/([\s\S]+?)\//) || ["//" + location.host + "/"])[0], 0 === e.length || layui["layui.all"] && a[m] || !layui["layui.all"] && layui["layui.mobile"] && a[m]) return c(), f;
		var p = n.createElement("script"),
			h = (a[m] ? d + "lay/" : o.base || "") + (f.modules[m] || m) + ".js";
		return p.async = !0, p.charset = "utf-8", p.src = h + function() {
			var e = o.version === !0 ? o.v || (new Date).getTime() : o.version || "";
			return e ? "?v=" + e : ""
		}(), o.modules[m] ? ! function g() {
			return ++v > 1e3 * o.timeout / 4 ? r(m + " is not a valid module") : void("string" == typeof o.modules[m] && o.status[m] ? c() : setTimeout(g, 4))
		}() : (y.appendChild(p), !p.attachEvent || p.attachEvent.toString && p.attachEvent.toString().indexOf("[native code") < 0 || l ? p.addEventListener("load", function(e) {
			s(e, h)
		}, !1) : p.attachEvent("onreadystatechange", function(e) {
			s(e, h)
		})), o.modules[m] = h, f
	}, t.fn.getStyle = function(t, n) {
		var o = t.currentStyle ? t.currentStyle : e.getComputedStyle(t, null);
		return o[o.getPropertyValue ? "getPropertyValue" : "getAttribute"](n)
	}, t.fn.link = function(e, t, i) {
		var l = this,
			a = n.createElement("link"),
			u = n.getElementsByTagName("head")[0];
		"string" == typeof t && (i = t);
		var s = (i || e).replace(/\.|\//g, ""),
			c = a.id = "layuicss-" + s,
			f = 0;
		a.rel = "stylesheet", a.href = e + (o.debug ? "?v=" + (new Date).getTime() : ""), a.media = "all", n.getElementById(c) || u.appendChild(a), "function" == typeof t && ! function d() {
			return ++f > 1e3 * o.timeout / 100 ? r(e + " timeout") : void(1989 === parseInt(l.getStyle(n.getElementById(c), "width")) ? function() {
				t()
			}() : setTimeout(d, 100))
		}()
	}, t.fn.addcss = function(e, t, n) {
		layui.link(o.dir + "css/" + e, t, n)
	}, t.fn.img = function(e, t, n) {
		var o = new Image;
		return o.src = e, o.complete ? t(o) : (o.onload = function() {
			o.onload = null, t(o)
		}, void(o.onerror = function(e) {
			o.onerror = null, n(e)
		}))
	}, t.fn.config = function(e) {
		e = e || {};
		for (var t in e) o[t] = e[t];
		return this
	}, t.fn.modules = function() {
		var e = {};
		for (var t in a) e[t] = a[t];
		return e
	}(), t.fn.extend = function(e) {
		var t = this;
		e = e || {};
		for (var n in e) t[n] || t.modules[n] ? r("模块名 " + n + " 已被占用") : t.modules[n] = e[n];
		return t
	}, t.fn.router = function(e) {
		for (var t, n = (e || location.hash).replace(/^#/, "").split("/") || [], o = {
				dir: []
			}, i = 0; i < n.length; i++) t = n[i].split("="), /^\w+=/.test(n[i]) ? function() {
			"dir" !== t[0] && (o[t[0]] = t[1])
		}() : o.dir.push(n[i]), t = null;
		return o
	}, t.fn.data = function(t, n) {
		if (t = t || "layui", e.JSON && e.JSON.parse) {
			if (null === n) return delete localStorage[t];
			n = "object" == typeof n ? n : {
				key: n
			};
			try {
				var o = JSON.parse(localStorage[t])
			} catch (i) {
				var o = {}
			}
			return n.value && (o[n.key] = n.value), n.remove && delete o[n.key], localStorage[t] = JSON.stringify(o), n.key ? o[n.key] : o
		}
	}, t.fn.device = function(t) {
		var n = navigator.userAgent.toLowerCase(),
			o = function(e) {
				var t = new RegExp(e + "/([^\\s\\_\\-]+)");
				return e = (n.match(t) || [])[1], e || !1
			},
			i = {
				os: function() {
					return /windows/.test(n) ? "windows" : /linux/.test(n) ? "linux" : /iphone|ipod|ipad|ios/.test(n) ? "ios" : void 0
				}(),
				ie: function() {
					return !!(e.ActiveXObject || "ActiveXObject" in e) && ((n.match(/msie\s(\d+)/) || [])[1] || "11")
				}(),
				weixin: o("micromessenger")
			};
		return t && !i[t] && (i[t] = o(t)), i.android = /android/.test(n), i.ios = "ios" === i.os, i
	}, t.fn.hint = function() {
		return {
			error: r
		}
	}, t.fn.each = function(e, t) {
		var n, o = this;
		if ("function" != typeof t) return o;
		if (e = e || [], e.constructor === Object) {
			for (n in e)
				if (t.call(e[n], n, e[n])) break
		} else
			for (n = 0; n < e.length && !t.call(e[n], n, e[n]); n++);
		return o
	}, t.fn.stope = function(t) {
		t = t || e.event, t.stopPropagation ? t.stopPropagation() : t.cancelBubble = !0
	}, t.fn.onevent = function(e, t, n) {
		return "string" != typeof e || "function" != typeof n ? this : (o.event[e + "." + t] = [n], this)
	}, t.fn.event = function(e, t, n) {
		var i = this,
			r = null,
			l = t.match(/\(.*\)$/) || [],
			a = (t = e + "." + t).replace(l, ""),
			u = function(e, t) {
				var o = t && t.call(i, n);
				o === !1 && null === r && (r = !1)
			};
		return layui.each(o.event[a], u), l[0] && layui.each(o.event[t], u), r
	}, e.layui = new t
}(window);
layui.define(function(a) {
	var i = layui.cache;
	layui.config({
		dir: i.dir.replace(/lay\/dest\/$/, "")
	}), a("layui.all", layui.v)
});
layui.define(function(e) {
	"use strict";
	var r = {
			open: "{{",
			close: "}}"
		},
		n = {
			exp: function(e) {
				return new RegExp(e, "g")
			},
			query: function(e, n, t) {
				var o = ["#([\\s\\S])+?", "([^{#}])*?"][e || 0];
				return c((n || "") + r.open + o + r.close + (t || ""))
			},
			escape: function(e) {
				return String(e || "").replace(/&(?!#?[a-zA-Z0-9]+;)/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/'/g, "&#39;").replace(/"/g, "&quot;")
			},
			error: function(e, r) {
				var n = "Laytpl Error：";
				return "object" == typeof console && console.error(n + e + "\n" + (r || "")), n + e
			}
		},
		c = n.exp,
		t = function(e) {
			this.tpl = e
		};
	t.pt = t.prototype, window.errors = 0, t.pt.parse = function(e, t) {
		var o = this,
			p = e,
			a = c("^" + r.open + "#", ""),
			l = c(r.close + "$", "");
		e = e.replace(/\s+|\r|\t|\n/g, " ").replace(c(r.open + "#"), r.open + "# ").replace(c(r.close + "}"), "} " + r.close).replace(/\\/g, "\\\\").replace(/(?="|')/g, "\\").replace(n.query(), function(e) {
			return e = e.replace(a, "").replace(l, ""), '";' + e.replace(/\\/g, "") + ';view+="'
		}).replace(n.query(1), function(e) {
			var n = '"+(';
			return e.replace(/\s/g, "") === r.open + r.close ? "" : (e = e.replace(c(r.open + "|" + r.close), ""), /^=/.test(e) && (e = e.replace(/^=/, ""), n = '"+_escape_('), n + e.replace(/\\/g, "") + ')+"')
		}), e = '"use strict";var view = "' + e + '";return view;';
		try {
			return o.cache = e = new Function("d, _escape_", e), e(t, n.escape)
		} catch (u) {
			return delete o.cache, n.error(u, p)
		}
	}, t.pt.render = function(e, r) {
		var c, t = this;
		return e ? (c = t.cache ? t.cache(e, n.escape) : t.parse(t.tpl, e), r ? void r(c) : c) : n.error("no data")
	};
	var o = function(e) {
		return "string" != typeof e ? n.error("Template not found") : new t(e)
	};
	o.config = function(e) {
		e = e || {};
		for (var n in e) r[n] = e[n]
	}, o.v = "1.2.0", e("laytpl", o)
});
layui.define(function(a) {
	"use strict";

	function t(a) {
		new p(a)
	}
	var e = document,
		r = "getElementById",
		n = "getElementsByTagName",
		s = 0,
		p = function(a) {
			var t = this,
				e = t.config = a || {};
			e.item = s++, t.render(!0)
		};
	p.on = function(a, t, e) {
		return a.attachEvent ? a.attachEvent("on" + t, function() {
			e.call(a, window.even)
		}) : a.addEventListener(t, e, !1), p
	}, p.prototype.type = function() {
		var a = this.config;
		if ("object" == typeof a.cont) return void 0 === a.cont.length ? 2 : 3
	}, p.prototype.view = function() {
		var a = this,
			t = a.config,
			e = [],
			r = {};
		if (t.pages = 0 | t.pages, t.curr = 0 | t.curr || 1, t.groups = "groups" in t ? 0 | t.groups : 5, t.first = "first" in t ? t.first : "&#x9996;&#x9875;", t.last = "last" in t ? t.last : "&#x672B;&#x9875;", t.prev = "prev" in t ? t.prev : "&#x4E0A;&#x4E00;&#x9875;", t.next = "next" in t ? t.next : "&#x4E0B;&#x4E00;&#x9875;", t.pages <= 1) return "";
		for (t.groups > t.pages && (t.groups = t.pages), r.index = Math.ceil((t.curr + (t.groups > 1 && t.groups !== t.pages ? 1 : 0)) / (0 === t.groups ? 1 : t.groups)), t.curr > 1 && t.prev && e.push('<a href="javascript:;" class="layui-laypage-prev" data-page="' + (t.curr - 1) + '">' + t.prev + "</a>"), r.index > 1 && t.first && 0 !== t.groups && e.push('<a href="javascript:;" class="laypage_first" data-page="1"  title="&#x9996;&#x9875;">' + t.first + "</a><span>&#x2026;</span>"), r.poor = Math.floor((t.groups - 1) / 2), r.start = r.index > 1 ? t.curr - r.poor : 1, r.end = r.index > 1 ? function() {
				var a = t.curr + (t.groups - r.poor - 1);
				return a > t.pages ? t.pages : a
			}() : t.groups, r.end - r.start < t.groups - 1 && (r.start = r.end - t.groups + 1); r.start <= r.end; r.start++) r.start === t.curr ? e.push('<span class="layui-laypage-curr"><em class="layui-laypage-em" ' + (/^#/.test(t.skin) ? 'style="background-color:' + t.skin + ';"' : "") + "></em><em>" + r.start + "</em></span>") : e.push('<a href="javascript:;" data-page="' + r.start + '">' + r.start + "</a>");
		return t.pages > t.groups && r.end < t.pages && t.last && 0 !== t.groups && e.push('<span>&#x2026;</span><a href="javascript:;" class="layui-laypage-last" title="&#x5C3E;&#x9875;"  data-page="' + t.pages + '">' + t.last + "</a>"), r.flow = !t.prev && 0 === t.groups, (t.curr !== t.pages && t.next || r.flow) && e.push(function() {
			return r.flow && t.curr === t.pages ? '<span class="layui-laypage-nomore" title="&#x5DF2;&#x6CA1;&#x6709;&#x66F4;&#x591A;">' + t.next + "</span>" : '<a href="javascript:;" class="layui-laypage-next" data-page="' + (t.curr + 1) + '">' + t.next + "</a>"
		}()), '<div class="layui-box layui-laypage layui-laypage-' + (t.skin ? function(a) {
			return /^#/.test(a) ? "molv" : a
		}(t.skin) : "default") + '" id="layui-laypage-' + a.config.item + '">' + e.join("") + function() {
			return t.skip ? '<span class="layui-laypage-total">&#x5230;&#x7B2C; <input type="number" min="1" onkeyup="this.value=this.value.replace(/\\D/, \'\');" value="' + t.curr + '" class="layui-laypage-skip"> &#x9875; <button type="button" class="layui-laypage-btn">&#x786e;&#x5b9a;</button></span>' : ""
		}() + "</div>"
	}, p.prototype.jump = function(a) {
		if (a) {
			for (var t = this, e = t.config, r = a.children, s = a[n]("button")[0], i = a[n]("input")[0], u = 0, o = r.length; u < o; u++) "a" === r[u].nodeName.toLowerCase() && p.on(r[u], "click", function() {
				var a = 0 | this.getAttribute("data-page");
				e.curr = a, t.render()
			});
			s && p.on(s, "click", function() {
				var a = 0 | i.value.replace(/\s|\D/g, "");
				a && a <= e.pages && (e.curr = a, t.render())
			})
		}
	}, p.prototype.render = function(a) {
		var t = this,
			n = t.config,
			s = t.type(),
			p = t.view();
		2 === s ? n.cont.innerHTML = p : 3 === s ? n.cont.html(p) : e[r](n.cont).innerHTML = p, n.jump && n.jump(n, a), t.jump(e[r]("layui-laypage-" + n.item)), n.hash && !a && (location.hash = "!" + n.hash + "=" + n.curr)
	}, a("laypage", t)
});
layui.define(function(e) {
	"use strict";
	var t = window,
		a = {
			path: "",
			skin: "default",
			format: "YYYY-MM-DD",
			min: "1900-01-01 00:00:00",
			max: "2099-12-31 23:59:59",
			isv: !1,
			init: !0
		},
		n = {},
		s = document,
		i = "createElement",
		o = "getElementById",
		l = "getElementsByTagName",
		d = ["laydate_box", "laydate_void", "laydate_click", "LayDateSkin", "skins/", "/laydate.css"];
	t.laydate = function(e) {
		return e = e || {}, n.run(e), laydate
	}, laydate.v = "1.1", n.trim = function(e) {
		return e = e || "", e.replace(/^\s|\s$/g, "").replace(/\s+/g, " ")
	}, n.digit = function(e) {
		return e < 10 ? "0" + (0 | e) : e
	}, n.stopmp = function(e) {
		return e = e || t.event, e.stopPropagation ? e.stopPropagation() : e.cancelBubble = !0, this
	}, n.each = function(e, t) {
		for (var a = 0, n = e.length; a < n && t(a, e[a]) !== !1; a++);
	}, n.hasClass = function(e, t) {
		return e = e || {}, new RegExp("\\b" + t + "\\b").test(e.className)
	}, n.addClass = function(e, t) {
		return e = e || {}, n.hasClass(e, t) || (e.className += " " + t), e.className = n.trim(e.className), this
	}, n.removeClass = function(e, t) {
		if (e = e || {}, n.hasClass(e, t)) {
			var a = new RegExp("\\b" + t + "\\b");
			e.className = e.className.replace(a, "")
		}
		return this
	}, n.removeCssAttr = function(e, t) {
		var a = e.style;
		a.removeProperty ? a.removeProperty(t) : a.removeAttribute(t)
	}, n.shde = function(e, t) {
		e.style.display = t ? "none" : "block"
	}, n.query = function(e) {
		if (e && 1 === e.nodeType) {
			if ("input" !== e.tagName.toLowerCase()) throw new Error("选择器elem错误");
			return e
		}
		var t, e = n.trim(e).split(" "),
			a = s[o](e[0].substr(1));
		if (a) {
			if (e[1]) {
				if (/^\./.test(e[1])) {
					var i, d = e[1].substr(1),
						r = new RegExp("\\b" + d + "\\b");
					return t = [], i = s.getElementsByClassName ? a.getElementsByClassName(d) : a[l]("*"), n.each(i, function(e, a) {
						r.test(a.className) && t.push(a)
					}), t[0] ? t : ""
				}
				return t = a[l](e[1]), t[0] ? a[l](e[1]) : ""
			}
			return a
		}
	}, n.on = function(e, a, s) {
		return e.attachEvent ? e.attachEvent("on" + a, function() {
			s.call(e, t.even)
		}) : e.addEventListener(a, s, !1), n
	}, n.stopMosup = function(e, t) {
		"mouseup" !== e && n.on(t, "mouseup", function(e) {
			n.stopmp(e)
		})
	}, n.run = function(e) {
		var t = (n.query, e.elem);
		t && (d.elemv = /textarea|input/.test(t.tagName.toLocaleLowerCase()) ? "value" : "innerHTML", ("init" in e ? e.init : a.init) && !t[d.elemv] && (t[d.elemv] = laydate.now(null, e || a)), n.view(t, e), n.reshow())
	}, n.scroll = function(e) {
		return e = e ? "scrollLeft" : "scrollTop", s.body[e] | s.documentElement[e]
	}, n.winarea = function(e) {
		return document.documentElement[e ? "clientWidth" : "clientHeight"]
	}, n.isleap = function(e) {
		return e % 4 === 0 && e % 100 !== 0 || e % 400 === 0
	}, n.checkVoid = function(e, t, a) {
		var s = [];
		return e = 0 | e, t = 0 | t, a = 0 | a, e < n.mins[0] ? s = ["y"] : e > n.maxs[0] ? s = ["y", 1] : e >= n.mins[0] && e <= n.maxs[0] && (e == n.mins[0] && (t < n.mins[1] ? s = ["m"] : t == n.mins[1] && a < n.mins[2] && (s = ["d"])), e == n.maxs[0] && (t > n.maxs[1] ? s = ["m", 1] : t == n.maxs[1] && a > n.maxs[2] && (s = ["d", 1]))), s
	}, n.timeVoid = function(e, t) {
		if (n.ymd[1] + 1 == n.mins[1] && n.ymd[2] == n.mins[2]) {
			if (0 === t && e < n.mins[3]) return 1;
			if (1 === t && e < n.mins[4]) return 1;
			if (2 === t && e < n.mins[5]) return 1
		} else if (n.ymd[1] + 1 == n.maxs[1] && n.ymd[2] == n.maxs[2]) {
			if (0 === t && e > n.maxs[3]) return 1;
			if (1 === t && e > n.maxs[4]) return 1;
			if (2 === t && e > n.maxs[5]) return 1
		}
		if (e > (t ? 59 : 23)) return 1
	}, n.check = function() {
		var e = n.options.format.replace(/YYYY|MM|DD|hh|mm|ss/g, "\\d+\\").replace(/\\$/g, ""),
			t = new RegExp(e),
			a = n.elem[d.elemv],
			s = a.match(/\d+/g) || [],
			i = n.checkVoid(s[0], s[1], s[2]);
		if ("" !== a.replace(/\s/g, "")) {
			if (!t.test(a)) return n.elem[d.elemv] = "", n.msg("日期不符合格式，请重新选择。"), 1;
			if (i[0]) return n.elem[d.elemv] = "", n.msg("日期不在有效期内，请重新选择。"), 1;
			i.value = n.elem[d.elemv].match(t).join(), s = i.value.match(/\d+/g), s[1] < 1 ? (s[1] = 1, i.auto = 1) : s[1] > 12 ? (s[1] = 12, i.auto = 1) : s[1].length < 2 && (i.auto = 1), s[2] < 1 ? (s[2] = 1, i.auto = 1) : s[2] > n.months[(0 | s[1]) - 1] ? (s[2] = 31, i.auto = 1) : s[2].length < 2 && (i.auto = 1), s.length > 3 && (n.timeVoid(s[3], 0) && (i.auto = 1), n.timeVoid(s[4], 1) && (i.auto = 1), n.timeVoid(s[5], 2) && (i.auto = 1)), i.auto ? n.creation([s[0], 0 | s[1], 0 | s[2]], 1) : i.value !== n.elem[d.elemv] && (n.elem[d.elemv] = i.value)
		}
	}, n.months = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], n.viewDate = function(e, t, a) {
		var s = (n.query, {}),
			i = new Date;
		e < (0 | n.mins[0]) && (e = 0 | n.mins[0]), e > (0 | n.maxs[0]) && (e = 0 | n.maxs[0]), i.setFullYear(e, t, a), s.ymd = [i.getFullYear(), i.getMonth(), i.getDate()], n.months[1] = n.isleap(s.ymd[0]) ? 29 : 28, i.setFullYear(s.ymd[0], s.ymd[1], 1), s.FDay = i.getDay(), s.PDay = n.months[0 === t ? 11 : t - 1] - s.FDay + 1, s.NDay = 1, n.each(d.tds, function(e, t) {
			var a, i = s.ymd[0],
				o = s.ymd[1] + 1;
			t.className = "", e < s.FDay ? (t.innerHTML = a = e + s.PDay, n.addClass(t, "laydate_nothis"), 1 === o && (i -= 1), o = 1 === o ? 12 : o - 1) : e >= s.FDay && e < s.FDay + n.months[s.ymd[1]] ? (t.innerHTML = a = e - s.FDay + 1, e - s.FDay + 1 === s.ymd[2] && (n.addClass(t, d[2]), s.thisDay = t)) : (t.innerHTML = a = s.NDay++, n.addClass(t, "laydate_nothis"), 12 === o && (i += 1), o = 12 === o ? 1 : o + 1), n.checkVoid(i, o, a)[0] && n.addClass(t, d[1]), n.options.festival && n.festival(t, o + "." + a), t.setAttribute("y", i), t.setAttribute("m", o), t.setAttribute("d", a), i = o = a = null
		}), n.valid = !n.hasClass(s.thisDay, d[1]), n.ymd = s.ymd, d.year.value = n.ymd[0] + "年", d.month.value = n.digit(n.ymd[1] + 1) + "月", n.each(d.mms, function(e, t) {
			var a = n.checkVoid(n.ymd[0], (0 | t.getAttribute("m")) + 1);
			"y" === a[0] || "m" === a[0] ? n.addClass(t, d[1]) : n.removeClass(t, d[1]), n.removeClass(t, d[2]), a = null
		}), n.addClass(d.mms[n.ymd[1]], d[2]), s.times = [0 | n.inymd[3] || 0, 0 | n.inymd[4] || 0, 0 | n.inymd[5] || 0], n.each(new Array(3), function(e) {
			n.hmsin[e].value = n.digit(n.timeVoid(s.times[e], e) ? 0 | n.mins[e + 3] : 0 | s.times[e])
		}), n[n.valid ? "removeClass" : "addClass"](d.ok, d[1])
	}, n.festival = function(e, t) {
		var a;
		switch (t) {
			case "1.1":
				a = "元旦";
				break;
			case "3.8":
				a = "妇女";
				break;
			case "4.5":
				a = "清明";
				break;
			case "5.1":
				a = "劳动";
				break;
			case "6.1":
				a = "儿童";
				break;
			case "9.10":
				a = "教师";
				break;
			case "10.1":
				a = "国庆"
		}
		a && (e.innerHTML = a), a = null
	}, n.viewYears = function(e) {
		var t = n.query,
			a = "";
		n.each(new Array(14), function(t) {
			a += 7 === t ? "<li " + (parseInt(d.year.value) === e ? 'class="' + d[2] + '"' : "") + ' y="' + e + '">' + e + "年</li>" : '<li y="' + (e - 7 + t) + '">' + (e - 7 + t) + "年</li>"
		}), t("#laydate_ys").innerHTML = a, n.each(t("#laydate_ys li"), function(e, t) {
			"y" === n.checkVoid(t.getAttribute("y"))[0] ? n.addClass(t, d[1]) : n.on(t, "click", function(e) {
				n.stopmp(e).reshow(), n.viewDate(0 | this.getAttribute("y"), n.ymd[1], n.ymd[2])
			})
		})
	}, n.initDate = function() {
		var e = (n.query, new Date),
			t = n.elem[d.elemv].match(/\d+/g) || [];
		t.length < 3 && (t = n.options.start.match(/\d+/g) || [], t.length < 3 && (t = [e.getFullYear(), e.getMonth() + 1, e.getDate()])), n.inymd = t, n.viewDate(t[0], t[1] - 1, t[2])
	}, n.iswrite = function() {
		var e = n.query,
			t = {
				time: e("#laydate_hms")
			};
		n.shde(t.time, !n.options.istime), n.shde(d.oclear, !("isclear" in n.options ? n.options.isclear : 1)), n.shde(d.otoday, !("istoday" in n.options ? n.options.istoday : 1)), n.shde(d.ok, !("issure" in n.options ? n.options.issure : 1))
	}, n.orien = function(e, t) {
		var a, s = n.elem.getBoundingClientRect();
		e.style.left = s.left + (t ? 0 : n.scroll(1)) + "px", a = s.bottom + e.offsetHeight / 1.5 <= n.winarea() ? s.bottom - 1 : s.top > e.offsetHeight / 1.5 ? s.top - e.offsetHeight + 1 : n.winarea() - e.offsetHeight, e.style.top = Math.max(a + (t ? 0 : n.scroll()), 1) + "px"
	}, n.follow = function(e) {
		n.options.fixed ? (e.style.position = "fixed", n.orien(e, 1)) : (e.style.position = "absolute", n.orien(e))
	}, n.viewtb = function() {
		var e, t = [],
			a = ["日", "一", "二", "三", "四", "五", "六"],
			o = {},
			d = s[i]("table"),
			r = s[i]("thead");
		return r.appendChild(s[i]("tr")), o.creath = function(e) {
			var t = s[i]("th");
			t.innerHTML = a[e], r[l]("tr")[0].appendChild(t), t = null
		}, n.each(new Array(6), function(a) {
			t.push([]), e = d.insertRow(0), n.each(new Array(7), function(n) {
				t[a][n] = 0, 0 === a && o.creath(n), e.insertCell(n)
			})
		}), d.insertBefore(r, d.children[0]), d.id = d.className = "laydate_table", e = t = null, d.outerHTML.toLowerCase()
	}(), n.view = function(e, t) {
		var o, l = n.query,
			r = {};
		t = t || e, n.elem = e, n.options = t, n.options.format || (n.options.format = a.format), n.options.start = n.options.start || "", n.mm = r.mm = [n.options.min || a.min, n.options.max || a.max], n.mins = r.mm[0].match(/\d+/g), n.maxs = r.mm[1].match(/\d+/g), n.box ? n.shde(n.box) : (o = s[i]("div"), o.id = d[0], o.className = d[0], o.style.cssText = "position: absolute;", o.setAttribute("name", "laydate-v" + laydate.v), o.innerHTML = r.html = '<div class="laydate_top"><div class="laydate_ym laydate_y" id="laydate_YY"><a class="laydate_choose laydate_chprev laydate_tab"><cite></cite></a><input id="laydate_y" readonly><label></label><a class="laydate_choose laydate_chnext laydate_tab"><cite></cite></a><div class="laydate_yms"><a class="laydate_tab laydate_chtop"><cite></cite></a><ul id="laydate_ys"></ul><a class="laydate_tab laydate_chdown"><cite></cite></a></div></div><div class="laydate_ym laydate_m" id="laydate_MM"><a class="laydate_choose laydate_chprev laydate_tab"><cite></cite></a><input id="laydate_m" readonly><label></label><a class="laydate_choose laydate_chnext laydate_tab"><cite></cite></a><div class="laydate_yms" id="laydate_ms">' + function() {
			var e = "";
			return n.each(new Array(12), function(t) {
				e += '<span m="' + t + '">' + n.digit(t + 1) + "月</span>"
			}), e
		}() + "</div></div></div>" + n.viewtb + '<div class="laydate_bottom"><ul id="laydate_hms"><li class="laydate_sj">时间</li><li><input readonly>:</li><li><input readonly>:</li><li><input readonly></li></ul><div class="laydate_time" id="laydate_time"></div><div class="laydate_btn"><a id="laydate_clear">清空</a><a id="laydate_today">今天</a><a id="laydate_ok">确认</a></div>' + (a.isv ? '<a href="http://sentsin.com/layui/laydate/" class="laydate_v" target="_blank">laydate-v' + laydate.v + "</a>" : "") + "</div>", s.body.appendChild(o), n.box = l("#" + d[0]), n.events(), o = null), n.follow(n.box), t.zIndex ? n.box.style.zIndex = t.zIndex : n.removeCssAttr(n.box, "z-index"), n.stopMosup("click", n.box), n.initDate(), n.iswrite(), n.check()
	}, n.reshow = function() {
		return n.each(n.query("#" + d[0] + " .laydate_show"), function(e, t) {
			n.removeClass(t, "laydate_show")
		}), this
	}, n.close = function() {
		n.reshow(), n.shde(n.query("#" + d[0]), 1), n.elem = null
	}, n.parse = function(e, t, s) {
		return e = e.concat(t), s = s || (n.options ? n.options.format : a.format), s.replace(/YYYY|MM|DD|hh|mm|ss/g, function(t, a) {
			return e.index = 0 | ++e.index, n.digit(e[e.index])
		})
	}, n.creation = function(e, t) {
		var a = (n.query, n.hmsin),
			s = n.parse(e, [a[0].value, a[1].value, a[2].value]);
		n.elem[d.elemv] = s, t || (n.close(), "function" == typeof n.options.choose && n.options.choose(s))
	}, n.events = function() {
		var e = n.query,
			a = {
				box: "#" + d[0]
			};
		n.addClass(s.body, "laydate_body"), d.tds = e("#laydate_table td"), d.mms = e("#laydate_ms span"), d.year = e("#laydate_y"), d.month = e("#laydate_m"), n.each(e(a.box + " .laydate_ym"), function(e, t) {
			n.on(t, "click", function(t) {
				n.stopmp(t).reshow(), n.addClass(this[l]("div")[0], "laydate_show"), e || (a.YY = parseInt(d.year.value), n.viewYears(a.YY))
			})
		}), n.on(e(a.box), "click", function() {
			n.reshow()
		}), a.tabYear = function(e) {
			0 === e ? n.ymd[0]-- : 1 === e ? n.ymd[0]++ : 2 === e ? a.YY -= 14 : a.YY += 14, e < 2 ? (n.viewDate(n.ymd[0], n.ymd[1], n.ymd[2]), n.reshow()) : n.viewYears(a.YY)
		}, n.each(e("#laydate_YY .laydate_tab"), function(e, t) {
			n.on(t, "click", function(t) {
				n.stopmp(t), a.tabYear(e)
			})
		}), a.tabMonth = function(e) {
			e ? (n.ymd[1]++, 12 === n.ymd[1] && (n.ymd[0]++, n.ymd[1] = 0)) : (n.ymd[1]--, n.ymd[1] === -1 && (n.ymd[0]--, n.ymd[1] = 11)), n.viewDate(n.ymd[0], n.ymd[1], n.ymd[2])
		}, n.each(e("#laydate_MM .laydate_tab"), function(e, t) {
			n.on(t, "click", function(t) {
				n.stopmp(t).reshow(), a.tabMonth(e)
			})
		}), n.each(e("#laydate_ms span"), function(e, t) {
			n.on(t, "click", function(e) {
				n.stopmp(e).reshow(), n.hasClass(this, d[1]) || n.viewDate(n.ymd[0], 0 | this.getAttribute("m"), n.ymd[2])
			})
		}), n.each(e("#laydate_table td"), function(e, t) {
			n.on(t, "click", function(e) {
				n.hasClass(this, d[1]) || (n.stopmp(e), n.creation([0 | this.getAttribute("y"), 0 | this.getAttribute("m"), 0 | this.getAttribute("d")]))
			})
		}), d.oclear = e("#laydate_clear"), n.on(d.oclear, "click", function() {
			n.elem[d.elemv] = "", n.close()
		}), d.otoday = e("#laydate_today"), n.on(d.otoday, "click", function() {
			var e = new Date;
			n.creation([e.getFullYear(), e.getMonth() + 1, e.getDate()])
		}), d.ok = e("#laydate_ok"), n.on(d.ok, "click", function() {
			n.valid && n.creation([n.ymd[0], n.ymd[1] + 1, n.ymd[2]])
		}), a.times = e("#laydate_time"), n.hmsin = a.hmsin = e("#laydate_hms input"), a.hmss = ["小时", "分钟", "秒数"], a.hmsarr = [], n.msg = function(t, s) {
			var i = '<div class="laydte_hsmtex">' + (s || "提示") + "<span>×</span></div>";
			"string" == typeof t ? (i += "<p>" + t + "</p>", n.shde(e("#" + d[0])), n.removeClass(a.times, "laydate_time1").addClass(a.times, "laydate_msg")) : (a.hmsarr[t] ? i = a.hmsarr[t] : (i += '<div id="laydate_hmsno" class="laydate_hmsno">', n.each(new Array(0 === t ? 24 : 60), function(e) {
				i += "<span>" + e + "</span>"
			}), i += "</div>", a.hmsarr[t] = i), n.removeClass(a.times, "laydate_msg"), n[0 === t ? "removeClass" : "addClass"](a.times, "laydate_time1")), n.addClass(a.times, "laydate_show"), a.times.innerHTML = i
		}, a.hmson = function(t, a) {
			var s = e("#laydate_hmsno span"),
				i = n.valid ? null : 1;
			n.each(s, function(e, s) {
				i ? n.addClass(s, d[1]) : n.timeVoid(e, a) ? n.addClass(s, d[1]) : n.on(s, "click", function(e) {
					n.hasClass(this, d[1]) || (t.value = n.digit(0 | this.innerHTML))
				})
			}), n.addClass(s[0 | t.value], "laydate_click")
		}, n.each(a.hmsin, function(e, t) {
			n.on(t, "click", function(t) {
				n.stopmp(t).reshow(), n.msg(e, a.hmss[e]), a.hmson(this, e)
			})
		}), n.on(s, "mouseup", function() {
			var t = e("#" + d[0]);
			t && "none" !== t.style.display && (n.check() || n.close())
		}).on(s, "keydown", function(e) {
			e = e || t.event;
			var a = e.keyCode;
			13 === a && n.elem && n.creation([n.ymd[0], n.ymd[1] + 1, n.ymd[2]])
		})
	}, laydate.reset = function() {
		n.box && n.elem && n.follow(n.box)
	}, laydate.now = function(timestamp, options) {
		// var a = new Date(0 | e ? function(e) {
		// 	return e < 864e5 ? +new Date + 864e5 * e : e
		// }(parseInt(e)) : +new Date);
		// return n.parse([a.getFullYear(), a.getMonth() + 1, a.getDate()], [a.getHours(), a.getMinutes(), a.getSeconds()], t)
		var De = new Date((timestamp | 0) ? function(tamp) {
			return tamp < 86400000 ? (+new Date + tamp * 86400000) : tamp;
		}(parseInt(timestamp)) : +new Date);
		var hms = options.lqhms ? options.lqhms.split(':') : [De.getHours(), De.getMinutes(), De.getSeconds()];
		return n.parse(
			[De.getFullYear(), De.getMonth() + 1, De.getDate()], hms,
			options.format
		);
	}, layui.addcss("modules/laydate/laydate.css", function() {}, "laydatecss"), e("laydate", laydate)
});
! function(e, t) {
	"object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
		if (!e.document) throw new Error("jQuery requires a window with a document");
		return t(e)
	} : t(e)
}("undefined" != typeof window ? window : this, function(e, t) {
	function n(e) {
		var t = !!e && "length" in e && e.length,
			n = pe.type(e);
		return "function" !== n && !pe.isWindow(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
	}

	function r(e, t, n) {
		if (pe.isFunction(t)) return pe.grep(e, function(e, r) {
			return !!t.call(e, r, e) !== n
		});
		if (t.nodeType) return pe.grep(e, function(e) {
			return e === t !== n
		});
		if ("string" == typeof t) {
			if (Ce.test(t)) return pe.filter(t, e, n);
			t = pe.filter(t, e)
		}
		return pe.grep(e, function(e) {
			return pe.inArray(e, t) > -1 !== n
		})
	}

	function i(e, t) {
		do e = e[t]; while (e && 1 !== e.nodeType);
		return e
	}

	function o(e) {
		var t = {};
		return pe.each(e.match(De) || [], function(e, n) {
			t[n] = !0
		}), t
	}

	function a() {
		re.addEventListener ? (re.removeEventListener("DOMContentLoaded", s), e.removeEventListener("load", s)) : (re.detachEvent("onreadystatechange", s), e.detachEvent("onload", s))
	}

	function s() {
		(re.addEventListener || "load" === e.event.type || "complete" === re.readyState) && (a(), pe.ready())
	}

	function u(e, t, n) {
		if (void 0 === n && 1 === e.nodeType) {
			var r = "data-" + t.replace(_e, "-$1").toLowerCase();
			if (n = e.getAttribute(r), "string" == typeof n) {
				try {
					n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : qe.test(n) ? pe.parseJSON(n) : n)
				} catch (i) {}
				pe.data(e, t, n)
			} else n = void 0
		}
		return n
	}

	function l(e) {
		var t;
		for (t in e)
			if (("data" !== t || !pe.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
		return !0
	}

	function c(e, t, n, r) {
		if (He(e)) {
			var i, o, a = pe.expando,
				s = e.nodeType,
				u = s ? pe.cache : e,
				l = s ? e[a] : e[a] && a;
			if (l && u[l] && (r || u[l].data) || void 0 !== n || "string" != typeof t) return l || (l = s ? e[a] = ne.pop() || pe.guid++ : a), u[l] || (u[l] = s ? {} : {
				toJSON: pe.noop
			}), "object" != typeof t && "function" != typeof t || (r ? u[l] = pe.extend(u[l], t) : u[l].data = pe.extend(u[l].data, t)), o = u[l], r || (o.data || (o.data = {}), o = o.data), void 0 !== n && (o[pe.camelCase(t)] = n), "string" == typeof t ? (i = o[t], null == i && (i = o[pe.camelCase(t)])) : i = o, i
		}
	}

	function f(e, t, n) {
		if (He(e)) {
			var r, i, o = e.nodeType,
				a = o ? pe.cache : e,
				s = o ? e[pe.expando] : pe.expando;
			if (a[s]) {
				if (t && (r = n ? a[s] : a[s].data)) {
					pe.isArray(t) ? t = t.concat(pe.map(t, pe.camelCase)) : t in r ? t = [t] : (t = pe.camelCase(t), t = t in r ? [t] : t.split(" ")), i = t.length;
					for (; i--;) delete r[t[i]];
					if (n ? !l(r) : !pe.isEmptyObject(r)) return
				}(n || (delete a[s].data, l(a[s]))) && (o ? pe.cleanData([e], !0) : fe.deleteExpando || a != a.window ? delete a[s] : a[s] = void 0)
			}
		}
	}

	function d(e, t, n, r) {
		var i, o = 1,
			a = 20,
			s = r ? function() {
				return r.cur()
			} : function() {
				return pe.css(e, t, "")
			},
			u = s(),
			l = n && n[3] || (pe.cssNumber[t] ? "" : "px"),
			c = (pe.cssNumber[t] || "px" !== l && +u) && Me.exec(pe.css(e, t));
		if (c && c[3] !== l) {
			l = l || c[3], n = n || [], c = +u || 1;
			do o = o || ".5", c /= o, pe.style(e, t, c + l); while (o !== (o = s() / u) && 1 !== o && --a)
		}
		return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i
	}

	function p(e) {
		var t = ze.split("|"),
			n = e.createDocumentFragment();
		if (n.createElement)
			for (; t.length;) n.createElement(t.pop());
		return n
	}

	function h(e, t) {
		var n, r, i = 0,
			o = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : void 0;
		if (!o)
			for (o = [], n = e.childNodes || e; null != (r = n[i]); i++) !t || pe.nodeName(r, t) ? o.push(r) : pe.merge(o, h(r, t));
		return void 0 === t || t && pe.nodeName(e, t) ? pe.merge([e], o) : o
	}

	function g(e, t) {
		for (var n, r = 0; null != (n = e[r]); r++) pe._data(n, "globalEval", !t || pe._data(t[r], "globalEval"))
	}

	function m(e) {
		Be.test(e.type) && (e.defaultChecked = e.checked)
	}

	function y(e, t, n, r, i) {
		for (var o, a, s, u, l, c, f, d = e.length, y = p(t), v = [], x = 0; x < d; x++)
			if (a = e[x], a || 0 === a)
				if ("object" === pe.type(a)) pe.merge(v, a.nodeType ? [a] : a);
				else if (Ue.test(a)) {
			for (u = u || y.appendChild(t.createElement("div")), l = (We.exec(a) || ["", ""])[1].toLowerCase(), f = Xe[l] || Xe._default, u.innerHTML = f[1] + pe.htmlPrefilter(a) + f[2], o = f[0]; o--;) u = u.lastChild;
			if (!fe.leadingWhitespace && $e.test(a) && v.push(t.createTextNode($e.exec(a)[0])), !fe.tbody)
				for (a = "table" !== l || Ve.test(a) ? "<table>" !== f[1] || Ve.test(a) ? 0 : u : u.firstChild, o = a && a.childNodes.length; o--;) pe.nodeName(c = a.childNodes[o], "tbody") && !c.childNodes.length && a.removeChild(c);
			for (pe.merge(v, u.childNodes), u.textContent = ""; u.firstChild;) u.removeChild(u.firstChild);
			u = y.lastChild
		} else v.push(t.createTextNode(a));
		for (u && y.removeChild(u), fe.appendChecked || pe.grep(h(v, "input"), m), x = 0; a = v[x++];)
			if (r && pe.inArray(a, r) > -1) i && i.push(a);
			else if (s = pe.contains(a.ownerDocument, a), u = h(y.appendChild(a), "script"), s && g(u), n)
			for (o = 0; a = u[o++];) Ie.test(a.type || "") && n.push(a);
		return u = null, y
	}

	function v() {
		return !0
	}

	function x() {
		return !1
	}

	function b() {
		try {
			return re.activeElement
		} catch (e) {}
	}

	function w(e, t, n, r, i, o) {
		var a, s;
		if ("object" == typeof t) {
			"string" != typeof n && (r = r || n, n = void 0);
			for (s in t) w(e, s, n, r, t[s], o);
			return e
		}
		if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), i === !1) i = x;
		else if (!i) return e;
		return 1 === o && (a = i, i = function(e) {
			return pe().off(e), a.apply(this, arguments)
		}, i.guid = a.guid || (a.guid = pe.guid++)), e.each(function() {
			pe.event.add(this, t, i, r, n)
		})
	}

	function T(e, t) {
		return pe.nodeName(e, "table") && pe.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
	}

	function C(e) {
		return e.type = (null !== pe.find.attr(e, "type")) + "/" + e.type, e
	}

	function E(e) {
		var t = it.exec(e.type);
		return t ? e.type = t[1] : e.removeAttribute("type"), e
	}

	function N(e, t) {
		if (1 === t.nodeType && pe.hasData(e)) {
			var n, r, i, o = pe._data(e),
				a = pe._data(t, o),
				s = o.events;
			if (s) {
				delete a.handle, a.events = {};
				for (n in s)
					for (r = 0, i = s[n].length; r < i; r++) pe.event.add(t, n, s[n][r])
			}
			a.data && (a.data = pe.extend({}, a.data))
		}
	}

	function k(e, t) {
		var n, r, i;
		if (1 === t.nodeType) {
			if (n = t.nodeName.toLowerCase(), !fe.noCloneEvent && t[pe.expando]) {
				i = pe._data(t);
				for (r in i.events) pe.removeEvent(t, r, i.handle);
				t.removeAttribute(pe.expando)
			}
			"script" === n && t.text !== e.text ? (C(t).text = e.text, E(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), fe.html5Clone && e.innerHTML && !pe.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && Be.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
		}
	}

	function S(e, t, n, r) {
		t = oe.apply([], t);
		var i, o, a, s, u, l, c = 0,
			f = e.length,
			d = f - 1,
			p = t[0],
			g = pe.isFunction(p);
		if (g || f > 1 && "string" == typeof p && !fe.checkClone && rt.test(p)) return e.each(function(i) {
			var o = e.eq(i);
			g && (t[0] = p.call(this, i, o.html())), S(o, t, n, r)
		});
		if (f && (l = y(t, e[0].ownerDocument, !1, e, r), i = l.firstChild, 1 === l.childNodes.length && (l = i), i || r)) {
			for (s = pe.map(h(l, "script"), C), a = s.length; c < f; c++) o = l, c !== d && (o = pe.clone(o, !0, !0), a && pe.merge(s, h(o, "script"))), n.call(e[c], o, c);
			if (a)
				for (u = s[s.length - 1].ownerDocument, pe.map(s, E), c = 0; c < a; c++) o = s[c], Ie.test(o.type || "") && !pe._data(o, "globalEval") && pe.contains(u, o) && (o.src ? pe._evalUrl && pe._evalUrl(o.src) : pe.globalEval((o.text || o.textContent || o.innerHTML || "").replace(ot, "")));
			l = i = null
		}
		return e
	}

	function A(e, t, n) {
		for (var r, i = t ? pe.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || pe.cleanData(h(r)), r.parentNode && (n && pe.contains(r.ownerDocument, r) && g(h(r, "script")), r.parentNode.removeChild(r));
		return e
	}

	function D(e, t) {
		var n = pe(t.createElement(e)).appendTo(t.body),
			r = pe.css(n[0], "display");
		return n.detach(), r
	}

	function j(e) {
		var t = re,
			n = lt[e];
		return n || (n = D(e, t), "none" !== n && n || (ut = (ut || pe("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = (ut[0].contentWindow || ut[0].contentDocument).document, t.write(), t.close(), n = D(e, t), ut.detach()), lt[e] = n), n
	}

	function L(e, t) {
		return {
			get: function() {
				return e() ? void delete this.get : (this.get = t).apply(this, arguments)
			}
		}
	}

	function H(e) {
		if (e in Et) return e;
		for (var t = e.charAt(0).toUpperCase() + e.slice(1), n = Ct.length; n--;)
			if (e = Ct[n] + t, e in Et) return e
	}

	function q(e, t) {
		for (var n, r, i, o = [], a = 0, s = e.length; a < s; a++) r = e[a], r.style && (o[a] = pe._data(r, "olddisplay"), n = r.style.display, t ? (o[a] || "none" !== n || (r.style.display = ""), "" === r.style.display && Re(r) && (o[a] = pe._data(r, "olddisplay", j(r.nodeName)))) : (i = Re(r), (n && "none" !== n || !i) && pe._data(r, "olddisplay", i ? n : pe.css(r, "display"))));
		for (a = 0; a < s; a++) r = e[a], r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[a] || "" : "none"));
		return e
	}

	function _(e, t, n) {
		var r = bt.exec(t);
		return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
	}

	function F(e, t, n, r, i) {
		for (var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; o < 4; o += 2) "margin" === n && (a += pe.css(e, n + Oe[o], !0, i)), r ? ("content" === n && (a -= pe.css(e, "padding" + Oe[o], !0, i)), "margin" !== n && (a -= pe.css(e, "border" + Oe[o] + "Width", !0, i))) : (a += pe.css(e, "padding" + Oe[o], !0, i), "padding" !== n && (a += pe.css(e, "border" + Oe[o] + "Width", !0, i)));
		return a
	}

	function M(t, n, r) {
		var i = !0,
			o = "width" === n ? t.offsetWidth : t.offsetHeight,
			a = ht(t),
			s = fe.boxSizing && "border-box" === pe.css(t, "boxSizing", !1, a);
		if (re.msFullscreenElement && e.top !== e && t.getClientRects().length && (o = Math.round(100 * t.getBoundingClientRect()[n])), o <= 0 || null == o) {
			if (o = gt(t, n, a), (o < 0 || null == o) && (o = t.style[n]), ft.test(o)) return o;
			i = s && (fe.boxSizingReliable() || o === t.style[n]), o = parseFloat(o) || 0
		}
		return o + F(t, n, r || (s ? "border" : "content"), i, a) + "px"
	}

	function O(e, t, n, r, i) {
		return new O.prototype.init(e, t, n, r, i)
	}

	function R() {
		return e.setTimeout(function() {
			Nt = void 0
		}), Nt = pe.now()
	}

	function P(e, t) {
		var n, r = {
				height: e
			},
			i = 0;
		for (t = t ? 1 : 0; i < 4; i += 2 - t) n = Oe[i], r["margin" + n] = r["padding" + n] = e;
		return t && (r.opacity = r.width = e), r
	}

	function B(e, t, n) {
		for (var r, i = ($.tweeners[t] || []).concat($.tweeners["*"]), o = 0, a = i.length; o < a; o++)
			if (r = i[o].call(n, t, e)) return r
	}

	function W(e, t, n) {
		var r, i, o, a, s, u, l, c, f = this,
			d = {},
			p = e.style,
			h = e.nodeType && Re(e),
			g = pe._data(e, "fxshow");
		n.queue || (s = pe._queueHooks(e, "fx"), null == s.unqueued && (s.unqueued = 0, u = s.empty.fire, s.empty.fire = function() {
			s.unqueued || u()
		}), s.unqueued++, f.always(function() {
			f.always(function() {
				s.unqueued--, pe.queue(e, "fx").length || s.empty.fire()
			})
		})), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], l = pe.css(e, "display"), c = "none" === l ? pe._data(e, "olddisplay") || j(e.nodeName) : l, "inline" === c && "none" === pe.css(e, "float") && (fe.inlineBlockNeedsLayout && "inline" !== j(e.nodeName) ? p.zoom = 1 : p.display = "inline-block")), n.overflow && (p.overflow = "hidden", fe.shrinkWrapBlocks() || f.always(function() {
			p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
		}));
		for (r in t)
			if (i = t[r], St.exec(i)) {
				if (delete t[r], o = o || "toggle" === i, i === (h ? "hide" : "show")) {
					if ("show" !== i || !g || void 0 === g[r]) continue;
					h = !0
				}
				d[r] = g && g[r] || pe.style(e, r)
			} else l = void 0;
		if (pe.isEmptyObject(d)) "inline" === ("none" === l ? j(e.nodeName) : l) && (p.display = l);
		else {
			g ? "hidden" in g && (h = g.hidden) : g = pe._data(e, "fxshow", {}), o && (g.hidden = !h), h ? pe(e).show() : f.done(function() {
				pe(e).hide()
			}), f.done(function() {
				var t;
				pe._removeData(e, "fxshow");
				for (t in d) pe.style(e, t, d[t])
			});
			for (r in d) a = B(h ? g[r] : 0, r, f), r in g || (g[r] = a.start, h && (a.end = a.start, a.start = "width" === r || "height" === r ? 1 : 0))
		}
	}

	function I(e, t) {
		var n, r, i, o, a;
		for (n in e)
			if (r = pe.camelCase(n), i = t[r], o = e[n], pe.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), a = pe.cssHooks[r], a && "expand" in a) {
				o = a.expand(o), delete e[r];
				for (n in o) n in e || (e[n] = o[n], t[n] = i)
			} else t[r] = i
	}

	function $(e, t, n) {
		var r, i, o = 0,
			a = $.prefilters.length,
			s = pe.Deferred().always(function() {
				delete u.elem
			}),
			u = function() {
				if (i) return !1;
				for (var t = Nt || R(), n = Math.max(0, l.startTime + l.duration - t), r = n / l.duration || 0, o = 1 - r, a = 0, u = l.tweens.length; a < u; a++) l.tweens[a].run(o);
				return s.notifyWith(e, [l, o, n]), o < 1 && u ? n : (s.resolveWith(e, [l]), !1)
			},
			l = s.promise({
				elem: e,
				props: pe.extend({}, t),
				opts: pe.extend(!0, {
					specialEasing: {},
					easing: pe.easing._default
				}, n),
				originalProperties: t,
				originalOptions: n,
				startTime: Nt || R(),
				duration: n.duration,
				tweens: [],
				createTween: function(t, n) {
					var r = pe.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
					return l.tweens.push(r), r
				},
				stop: function(t) {
					var n = 0,
						r = t ? l.tweens.length : 0;
					if (i) return this;
					for (i = !0; n < r; n++) l.tweens[n].run(1);
					return t ? (s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l, t])) : s.rejectWith(e, [l, t]), this
				}
			}),
			c = l.props;
		for (I(c, l.opts.specialEasing); o < a; o++)
			if (r = $.prefilters[o].call(l, e, c, l.opts)) return pe.isFunction(r.stop) && (pe._queueHooks(l.elem, l.opts.queue).stop = pe.proxy(r.stop, r)), r;
		return pe.map(c, B, l), pe.isFunction(l.opts.start) && l.opts.start.call(e, l), pe.fx.timer(pe.extend(u, {
			elem: e,
			anim: l,
			queue: l.opts.queue
		})), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
	}

	function z(e) {
		return pe.attr(e, "class") || ""
	}

	function X(e) {
		return function(t, n) {
			"string" != typeof t && (n = t, t = "*");
			var r, i = 0,
				o = t.toLowerCase().match(De) || [];
			if (pe.isFunction(n))
				for (; r = o[i++];) "+" === r.charAt(0) ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
		}
	}

	function U(e, t, n, r) {
		function i(s) {
			var u;
			return o[s] = !0, pe.each(e[s] || [], function(e, s) {
				var l = s(t, n, r);
				return "string" != typeof l || a || o[l] ? a ? !(u = l) : void 0 : (t.dataTypes.unshift(l), i(l), !1)
			}), u
		}
		var o = {},
			a = e === Qt;
		return i(t.dataTypes[0]) || !o["*"] && i("*")
	}

	function V(e, t) {
		var n, r, i = pe.ajaxSettings.flatOptions || {};
		for (r in t) void 0 !== t[r] && ((i[r] ? e : n || (n = {}))[r] = t[r]);
		return n && pe.extend(!0, e, n), e
	}

	function Y(e, t, n) {
		for (var r, i, o, a, s = e.contents, u = e.dataTypes;
			"*" === u[0];) u.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
		if (i)
			for (a in s)
				if (s[a] && s[a].test(i)) {
					u.unshift(a);
					break
				}
		if (u[0] in n) o = u[0];
		else {
			for (a in n) {
				if (!u[0] || e.converters[a + " " + u[0]]) {
					o = a;
					break
				}
				r || (r = a)
			}
			o = o || r
		}
		if (o) return o !== u[0] && u.unshift(o), n[o]
	}

	function J(e, t, n, r) {
		var i, o, a, s, u, l = {},
			c = e.dataTypes.slice();
		if (c[1])
			for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
		for (o = c.shift(); o;)
			if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift())
				if ("*" === o) o = u;
				else if ("*" !== u && u !== o) {
			if (a = l[u + " " + o] || l["* " + o], !a)
				for (i in l)
					if (s = i.split(" "), s[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
						a === !0 ? a = l[i] : l[i] !== !0 && (o = s[0], c.unshift(s[1]));
						break
					}
			if (a !== !0)
				if (a && e["throws"]) t = a(t);
				else try {
					t = a(t)
				} catch (f) {
					return {
						state: "parsererror",
						error: a ? f : "No conversion from " + u + " to " + o
					}
				}
		}
		return {
			state: "success",
			data: t
		}
	}

	function G(e) {
		return e.style && e.style.display || pe.css(e, "display")
	}

	function K(e) {
		for (; e && 1 === e.nodeType;) {
			if ("none" === G(e) || "hidden" === e.type) return !0;
			e = e.parentNode
		}
		return !1
	}

	function Q(e, t, n, r) {
		var i;
		if (pe.isArray(t)) pe.each(t, function(t, i) {
			n || rn.test(e) ? r(e, i) : Q(e + "[" + ("object" == typeof i && null != i ? t : "") + "]", i, n, r)
		});
		else if (n || "object" !== pe.type(t)) r(e, t);
		else
			for (i in t) Q(e + "[" + i + "]", t[i], n, r)
	}

	function Z() {
		try {
			return new e.XMLHttpRequest
		} catch (t) {}
	}

	function ee() {
		try {
			return new e.ActiveXObject("Microsoft.XMLHTTP")
		} catch (t) {}
	}

	function te(e) {
		return pe.isWindow(e) ? e : 9 === e.nodeType && (e.defaultView || e.parentWindow)
	}
	var ne = [],
		re = e.document,
		ie = ne.slice,
		oe = ne.concat,
		ae = ne.push,
		se = ne.indexOf,
		ue = {},
		le = ue.toString,
		ce = ue.hasOwnProperty,
		fe = {},
		de = "1.12.3",
		pe = function(e, t) {
			return new pe.fn.init(e, t)
		},
		he = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
		ge = /^-ms-/,
		me = /-([\da-z])/gi,
		ye = function(e, t) {
			return t.toUpperCase()
		};
	pe.fn = pe.prototype = {
		jquery: de,
		constructor: pe,
		selector: "",
		length: 0,
		toArray: function() {
			return ie.call(this)
		},
		get: function(e) {
			return null != e ? e < 0 ? this[e + this.length] : this[e] : ie.call(this)
		},
		pushStack: function(e) {
			var t = pe.merge(this.constructor(), e);
			return t.prevObject = this, t.context = this.context, t
		},
		each: function(e) {
			return pe.each(this, e)
		},
		map: function(e) {
			return this.pushStack(pe.map(this, function(t, n) {
				return e.call(t, n, t)
			}))
		},
		slice: function() {
			return this.pushStack(ie.apply(this, arguments))
		},
		first: function() {
			return this.eq(0)
		},
		last: function() {
			return this.eq(-1)
		},
		eq: function(e) {
			var t = this.length,
				n = +e + (e < 0 ? t : 0);
			return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
		},
		end: function() {
			return this.prevObject || this.constructor()
		},
		push: ae,
		sort: ne.sort,
		splice: ne.splice
	}, pe.extend = pe.fn.extend = function() {
		var e, t, n, r, i, o, a = arguments[0] || {},
			s = 1,
			u = arguments.length,
			l = !1;
		for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == typeof a || pe.isFunction(a) || (a = {}), s === u && (a = this, s--); s < u; s++)
			if (null != (i = arguments[s]))
				for (r in i) e = a[r], n = i[r], a !== n && (l && n && (pe.isPlainObject(n) || (t = pe.isArray(n))) ? (t ? (t = !1, o = e && pe.isArray(e) ? e : []) : o = e && pe.isPlainObject(e) ? e : {}, a[r] = pe.extend(l, o, n)) : void 0 !== n && (a[r] = n));
		return a
	}, pe.extend({
		expando: "jQuery" + (de + Math.random()).replace(/\D/g, ""),
		isReady: !0,
		error: function(e) {
			throw new Error(e)
		},
		noop: function() {},
		isFunction: function(e) {
			return "function" === pe.type(e)
		},
		isArray: Array.isArray || function(e) {
			return "array" === pe.type(e)
		},
		isWindow: function(e) {
			return null != e && e == e.window
		},
		isNumeric: function(e) {
			var t = e && e.toString();
			return !pe.isArray(e) && t - parseFloat(t) + 1 >= 0
		},
		isEmptyObject: function(e) {
			var t;
			for (t in e) return !1;
			return !0
		},
		isPlainObject: function(e) {
			var t;
			if (!e || "object" !== pe.type(e) || e.nodeType || pe.isWindow(e)) return !1;
			try {
				if (e.constructor && !ce.call(e, "constructor") && !ce.call(e.constructor.prototype, "isPrototypeOf")) return !1
			} catch (n) {
				return !1
			}
			if (!fe.ownFirst)
				for (t in e) return ce.call(e, t);
			for (t in e);
			return void 0 === t || ce.call(e, t)
		},
		type: function(e) {
			return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? ue[le.call(e)] || "object" : typeof e
		},
		globalEval: function(t) {
			t && pe.trim(t) && (e.execScript || function(t) {
				e.eval.call(e, t)
			})(t)
		},
		camelCase: function(e) {
			return e.replace(ge, "ms-").replace(me, ye)
		},
		nodeName: function(e, t) {
			return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
		},
		each: function(e, t) {
			var r, i = 0;
			if (n(e))
				for (r = e.length; i < r && t.call(e[i], i, e[i]) !== !1; i++);
			else
				for (i in e)
					if (t.call(e[i], i, e[i]) === !1) break;
			return e
		},
		trim: function(e) {
			return null == e ? "" : (e + "").replace(he, "")
		},
		makeArray: function(e, t) {
			var r = t || [];
			return null != e && (n(Object(e)) ? pe.merge(r, "string" == typeof e ? [e] : e) : ae.call(r, e)), r
		},
		inArray: function(e, t, n) {
			var r;
			if (t) {
				if (se) return se.call(t, e, n);
				for (r = t.length, n = n ? n < 0 ? Math.max(0, r + n) : n : 0; n < r; n++)
					if (n in t && t[n] === e) return n
			}
			return -1
		},
		merge: function(e, t) {
			for (var n = +t.length, r = 0, i = e.length; r < n;) e[i++] = t[r++];
			if (n !== n)
				for (; void 0 !== t[r];) e[i++] = t[r++];
			return e.length = i, e
		},
		grep: function(e, t, n) {
			for (var r, i = [], o = 0, a = e.length, s = !n; o < a; o++) r = !t(e[o], o), r !== s && i.push(e[o]);
			return i
		},
		map: function(e, t, r) {
			var i, o, a = 0,
				s = [];
			if (n(e))
				for (i = e.length; a < i; a++) o = t(e[a], a, r), null != o && s.push(o);
			else
				for (a in e) o = t(e[a], a, r), null != o && s.push(o);
			return oe.apply([], s)
		},
		guid: 1,
		proxy: function(e, t) {
			var n, r, i;
			if ("string" == typeof t && (i = e[t], t = e, e = i), pe.isFunction(e)) return n = ie.call(arguments, 2), r = function() {
				return e.apply(t || this, n.concat(ie.call(arguments)))
			}, r.guid = e.guid = e.guid || pe.guid++, r
		},
		now: function() {
			return +new Date
		},
		support: fe
	}), "function" == typeof Symbol && (pe.fn[Symbol.iterator] = ne[Symbol.iterator]), pe.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
		ue["[object " + t + "]"] = t.toLowerCase()
	});
	var ve = function(e) {
		function t(e, t, n, r) {
			var i, o, a, s, u, l, f, p, h = t && t.ownerDocument,
				g = t ? t.nodeType : 9;
			if (n = n || [], "string" != typeof e || !e || 1 !== g && 9 !== g && 11 !== g) return n;
			if (!r && ((t ? t.ownerDocument || t : B) !== H && L(t), t = t || H, _)) {
				if (11 !== g && (l = ye.exec(e)))
					if (i = l[1]) {
						if (9 === g) {
							if (!(a = t.getElementById(i))) return n;
							if (a.id === i) return n.push(a), n
						} else if (h && (a = h.getElementById(i)) && R(t, a) && a.id === i) return n.push(a), n
					} else {
						if (l[2]) return Q.apply(n, t.getElementsByTagName(e)), n;
						if ((i = l[3]) && w.getElementsByClassName && t.getElementsByClassName) return Q.apply(n, t.getElementsByClassName(i)), n
					}
				if (w.qsa && !X[e + " "] && (!F || !F.test(e))) {
					if (1 !== g) h = t, p = e;
					else if ("object" !== t.nodeName.toLowerCase()) {
						for ((s = t.getAttribute("id")) ? s = s.replace(xe, "\\$&") : t.setAttribute("id", s = P), f = N(e), o = f.length, u = de.test(s) ? "#" + s : "[id='" + s + "']"; o--;) f[o] = u + " " + d(f[o]);
						p = f.join(","), h = ve.test(e) && c(t.parentNode) || t
					}
					if (p) try {
						return Q.apply(n, h.querySelectorAll(p)), n
					} catch (m) {} finally {
						s === P && t.removeAttribute("id")
					}
				}
			}
			return S(e.replace(se, "$1"), t, n, r)
		}

		function n() {
			function e(n, r) {
				return t.push(n + " ") > T.cacheLength && delete e[t.shift()], e[n + " "] = r
			}
			var t = [];
			return e
		}

		function r(e) {
			return e[P] = !0, e
		}

		function i(e) {
			var t = H.createElement("div");
			try {
				return !!e(t)
			} catch (n) {
				return !1
			} finally {
				t.parentNode && t.parentNode.removeChild(t), t = null
			}
		}

		function o(e, t) {
			for (var n = e.split("|"), r = n.length; r--;) T.attrHandle[n[r]] = t
		}

		function a(e, t) {
			var n = t && e,
				r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || V) - (~e.sourceIndex || V);
			if (r) return r;
			if (n)
				for (; n = n.nextSibling;)
					if (n === t) return -1;
			return e ? 1 : -1
		}

		function s(e) {
			return function(t) {
				var n = t.nodeName.toLowerCase();
				return "input" === n && t.type === e
			}
		}

		function u(e) {
			return function(t) {
				var n = t.nodeName.toLowerCase();
				return ("input" === n || "button" === n) && t.type === e
			}
		}

		function l(e) {
			return r(function(t) {
				return t = +t, r(function(n, r) {
					for (var i, o = e([], n.length, t), a = o.length; a--;) n[i = o[a]] && (n[i] = !(r[i] = n[i]))
				})
			})
		}

		function c(e) {
			return e && "undefined" != typeof e.getElementsByTagName && e
		}

		function f() {}

		function d(e) {
			for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
			return r
		}

		function p(e, t, n) {
			var r = t.dir,
				i = n && "parentNode" === r,
				o = I++;
			return t.first ? function(t, n, o) {
				for (; t = t[r];)
					if (1 === t.nodeType || i) return e(t, n, o)
			} : function(t, n, a) {
				var s, u, l, c = [W, o];
				if (a) {
					for (; t = t[r];)
						if ((1 === t.nodeType || i) && e(t, n, a)) return !0
				} else
					for (; t = t[r];)
						if (1 === t.nodeType || i) {
							if (l = t[P] || (t[P] = {}), u = l[t.uniqueID] || (l[t.uniqueID] = {}), (s = u[r]) && s[0] === W && s[1] === o) return c[2] = s[2];
							if (u[r] = c, c[2] = e(t, n, a)) return !0
						}
			}
		}

		function h(e) {
			return e.length > 1 ? function(t, n, r) {
				for (var i = e.length; i--;)
					if (!e[i](t, n, r)) return !1;
				return !0
			} : e[0]
		}

		function g(e, n, r) {
			for (var i = 0, o = n.length; i < o; i++) t(e, n[i], r);
			return r
		}

		function m(e, t, n, r, i) {
			for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)(o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s)));
			return a
		}

		function y(e, t, n, i, o, a) {
			return i && !i[P] && (i = y(i)), o && !o[P] && (o = y(o, a)), r(function(r, a, s, u) {
				var l, c, f, d = [],
					p = [],
					h = a.length,
					y = r || g(t || "*", s.nodeType ? [s] : s, []),
					v = !e || !r && t ? y : m(y, d, e, s, u),
					x = n ? o || (r ? e : h || i) ? [] : a : v;
				if (n && n(v, x, s, u), i)
					for (l = m(x, p), i(l, [], s, u), c = l.length; c--;)(f = l[c]) && (x[p[c]] = !(v[p[c]] = f));
				if (r) {
					if (o || e) {
						if (o) {
							for (l = [], c = x.length; c--;)(f = x[c]) && l.push(v[c] = f);
							o(null, x = [], l, u)
						}
						for (c = x.length; c--;)(f = x[c]) && (l = o ? ee(r, f) : d[c]) > -1 && (r[l] = !(a[l] = f))
					}
				} else x = m(x === a ? x.splice(h, x.length) : x), o ? o(null, a, x, u) : Q.apply(a, x)
			})
		}

		function v(e) {
			for (var t, n, r, i = e.length, o = T.relative[e[0].type], a = o || T.relative[" "], s = o ? 1 : 0, u = p(function(e) {
					return e === t
				}, a, !0), l = p(function(e) {
					return ee(t, e) > -1
				}, a, !0), c = [function(e, n, r) {
					var i = !o && (r || n !== A) || ((t = n).nodeType ? u(e, n, r) : l(e, n, r));
					return t = null, i
				}]; s < i; s++)
				if (n = T.relative[e[s].type]) c = [p(h(c), n)];
				else {
					if (n = T.filter[e[s].type].apply(null, e[s].matches), n[P]) {
						for (r = ++s; r < i && !T.relative[e[r].type]; r++);
						return y(s > 1 && h(c), s > 1 && d(e.slice(0, s - 1).concat({
							value: " " === e[s - 2].type ? "*" : ""
						})).replace(se, "$1"), n, s < r && v(e.slice(s, r)), r < i && v(e = e.slice(r)), r < i && d(e))
					}
					c.push(n)
				}
			return h(c)
		}

		function x(e, n) {
			var i = n.length > 0,
				o = e.length > 0,
				a = function(r, a, s, u, l) {
					var c, f, d, p = 0,
						h = "0",
						g = r && [],
						y = [],
						v = A,
						x = r || o && T.find.TAG("*", l),
						b = W += null == v ? 1 : Math.random() || .1,
						w = x.length;
					for (l && (A = a === H || a || l); h !== w && null != (c = x[h]); h++) {
						if (o && c) {
							for (f = 0, a || c.ownerDocument === H || (L(c), s = !_); d = e[f++];)
								if (d(c, a || H, s)) {
									u.push(c);
									break
								}
							l && (W = b)
						}
						i && ((c = !d && c) && p--, r && g.push(c))
					}
					if (p += h, i && h !== p) {
						for (f = 0; d = n[f++];) d(g, y, a, s);
						if (r) {
							if (p > 0)
								for (; h--;) g[h] || y[h] || (y[h] = G.call(u));
							y = m(y)
						}
						Q.apply(u, y), l && !r && y.length > 0 && p + n.length > 1 && t.uniqueSort(u)
					}
					return l && (W = b, A = v), g
				};
			return i ? r(a) : a
		}
		var b, w, T, C, E, N, k, S, A, D, j, L, H, q, _, F, M, O, R, P = "sizzle" + 1 * new Date,
			B = e.document,
			W = 0,
			I = 0,
			$ = n(),
			z = n(),
			X = n(),
			U = function(e, t) {
				return e === t && (j = !0), 0
			},
			V = 1 << 31,
			Y = {}.hasOwnProperty,
			J = [],
			G = J.pop,
			K = J.push,
			Q = J.push,
			Z = J.slice,
			ee = function(e, t) {
				for (var n = 0, r = e.length; n < r; n++)
					if (e[n] === t) return n;
				return -1
			},
			te = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
			ne = "[\\x20\\t\\r\\n\\f]",
			re = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
			ie = "\\[" + ne + "*(" + re + ")(?:" + ne + "*([*^$|!~]?=)" + ne + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + re + "))|)" + ne + "*\\]",
			oe = ":(" + re + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ie + ")*)|.*)\\)|)",
			ae = new RegExp(ne + "+", "g"),
			se = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$", "g"),
			ue = new RegExp("^" + ne + "*," + ne + "*"),
			le = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"),
			ce = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]", "g"),
			fe = new RegExp(oe),
			de = new RegExp("^" + re + "$"),
			pe = {
				ID: new RegExp("^#(" + re + ")"),
				CLASS: new RegExp("^\\.(" + re + ")"),
				TAG: new RegExp("^(" + re + "|[*])"),
				ATTR: new RegExp("^" + ie),
				PSEUDO: new RegExp("^" + oe),
				CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)", "i"),
				bool: new RegExp("^(?:" + te + ")$", "i"),
				needsContext: new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)", "i")
			},
			he = /^(?:input|select|textarea|button)$/i,
			ge = /^h\d$/i,
			me = /^[^{]+\{\s*\[native \w/,
			ye = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
			ve = /[+~]/,
			xe = /'|\\/g,
			be = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)", "ig"),
			we = function(e, t, n) {
				var r = "0x" + t - 65536;
				return r !== r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
			},
			Te = function() {
				L()
			};
		try {
			Q.apply(J = Z.call(B.childNodes), B.childNodes), J[B.childNodes.length].nodeType
		} catch (Ce) {
			Q = {
				apply: J.length ? function(e, t) {
					K.apply(e, Z.call(t))
				} : function(e, t) {
					for (var n = e.length, r = 0; e[n++] = t[r++];);
					e.length = n - 1
				}
			}
		}
		w = t.support = {}, E = t.isXML = function(e) {
			var t = e && (e.ownerDocument || e).documentElement;
			return !!t && "HTML" !== t.nodeName
		}, L = t.setDocument = function(e) {
			var t, n, r = e ? e.ownerDocument || e : B;
			return r !== H && 9 === r.nodeType && r.documentElement ? (H = r, q = H.documentElement, _ = !E(H), (n = H.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", Te, !1) : n.attachEvent && n.attachEvent("onunload", Te)), w.attributes = i(function(e) {
				return e.className = "i", !e.getAttribute("className")
			}), w.getElementsByTagName = i(function(e) {
				return e.appendChild(H.createComment("")), !e.getElementsByTagName("*").length
			}), w.getElementsByClassName = me.test(H.getElementsByClassName), w.getById = i(function(e) {
				return q.appendChild(e).id = P, !H.getElementsByName || !H.getElementsByName(P).length
			}), w.getById ? (T.find.ID = function(e, t) {
				if ("undefined" != typeof t.getElementById && _) {
					var n = t.getElementById(e);
					return n ? [n] : []
				}
			}, T.filter.ID = function(e) {
				var t = e.replace(be, we);
				return function(e) {
					return e.getAttribute("id") === t
				}
			}) : (delete T.find.ID, T.filter.ID = function(e) {
				var t = e.replace(be, we);
				return function(e) {
					var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
					return n && n.value === t
				}
			}), T.find.TAG = w.getElementsByTagName ? function(e, t) {
				return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : w.qsa ? t.querySelectorAll(e) : void 0
			} : function(e, t) {
				var n, r = [],
					i = 0,
					o = t.getElementsByTagName(e);
				if ("*" === e) {
					for (; n = o[i++];) 1 === n.nodeType && r.push(n);
					return r
				}
				return o
			}, T.find.CLASS = w.getElementsByClassName && function(e, t) {
				if ("undefined" != typeof t.getElementsByClassName && _) return t.getElementsByClassName(e)
			}, M = [], F = [], (w.qsa = me.test(H.querySelectorAll)) && (i(function(e) {
				q.appendChild(e).innerHTML = "<a id='" + P + "'></a><select id='" + P + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && F.push("[*^$]=" + ne + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || F.push("\\[" + ne + "*(?:value|" + te + ")"), e.querySelectorAll("[id~=" + P + "-]").length || F.push("~="), e.querySelectorAll(":checked").length || F.push(":checked"), e.querySelectorAll("a#" + P + "+*").length || F.push(".#.+[+~]")
			}), i(function(e) {
				var t = H.createElement("input");
				t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && F.push("name" + ne + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || F.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), F.push(",.*:")
			})), (w.matchesSelector = me.test(O = q.matches || q.webkitMatchesSelector || q.mozMatchesSelector || q.oMatchesSelector || q.msMatchesSelector)) && i(function(e) {
				w.disconnectedMatch = O.call(e, "div"), O.call(e, "[s!='']:x"), M.push("!=", oe)
			}), F = F.length && new RegExp(F.join("|")), M = M.length && new RegExp(M.join("|")), t = me.test(q.compareDocumentPosition), R = t || me.test(q.contains) ? function(e, t) {
				var n = 9 === e.nodeType ? e.documentElement : e,
					r = t && t.parentNode;
				return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
			} : function(e, t) {
				if (t)
					for (; t = t.parentNode;)
						if (t === e) return !0;
				return !1
			}, U = t ? function(e, t) {
				if (e === t) return j = !0, 0;
				var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
				return n ? n : (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !w.sortDetached && t.compareDocumentPosition(e) === n ? e === H || e.ownerDocument === B && R(B, e) ? -1 : t === H || t.ownerDocument === B && R(B, t) ? 1 : D ? ee(D, e) - ee(D, t) : 0 : 4 & n ? -1 : 1)
			} : function(e, t) {
				if (e === t) return j = !0, 0;
				var n, r = 0,
					i = e.parentNode,
					o = t.parentNode,
					s = [e],
					u = [t];
				if (!i || !o) return e === H ? -1 : t === H ? 1 : i ? -1 : o ? 1 : D ? ee(D, e) - ee(D, t) : 0;
				if (i === o) return a(e, t);
				for (n = e; n = n.parentNode;) s.unshift(n);
				for (n = t; n = n.parentNode;) u.unshift(n);
				for (; s[r] === u[r];) r++;
				return r ? a(s[r], u[r]) : s[r] === B ? -1 : u[r] === B ? 1 : 0
			}, H) : H
		}, t.matches = function(e, n) {
			return t(e, null, null, n)
		}, t.matchesSelector = function(e, n) {
			if ((e.ownerDocument || e) !== H && L(e), n = n.replace(ce, "='$1']"), w.matchesSelector && _ && !X[n + " "] && (!M || !M.test(n)) && (!F || !F.test(n))) try {
				var r = O.call(e, n);
				if (r || w.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r
			} catch (i) {}
			return t(n, H, null, [e]).length > 0
		}, t.contains = function(e, t) {
			return (e.ownerDocument || e) !== H && L(e), R(e, t)
		}, t.attr = function(e, t) {
			(e.ownerDocument || e) !== H && L(e);
			var n = T.attrHandle[t.toLowerCase()],
				r = n && Y.call(T.attrHandle, t.toLowerCase()) ? n(e, t, !_) : void 0;
			return void 0 !== r ? r : w.attributes || !_ ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
		}, t.error = function(e) {
			throw new Error("Syntax error, unrecognized expression: " + e)
		}, t.uniqueSort = function(e) {
			var t, n = [],
				r = 0,
				i = 0;
			if (j = !w.detectDuplicates, D = !w.sortStable && e.slice(0), e.sort(U), j) {
				for (; t = e[i++];) t === e[i] && (r = n.push(i));
				for (; r--;) e.splice(n[r], 1)
			}
			return D = null, e
		}, C = t.getText = function(e) {
			var t, n = "",
				r = 0,
				i = e.nodeType;
			if (i) {
				if (1 === i || 9 === i || 11 === i) {
					if ("string" == typeof e.textContent) return e.textContent;
					for (e = e.firstChild; e; e = e.nextSibling) n += C(e)
				} else if (3 === i || 4 === i) return e.nodeValue
			} else
				for (; t = e[r++];) n += C(t);
			return n
		}, T = t.selectors = {
			cacheLength: 50,
			createPseudo: r,
			match: pe,
			attrHandle: {},
			find: {},
			relative: {
				">": {
					dir: "parentNode",
					first: !0
				},
				" ": {
					dir: "parentNode"
				},
				"+": {
					dir: "previousSibling",
					first: !0
				},
				"~": {
					dir: "previousSibling"
				}
			},
			preFilter: {
				ATTR: function(e) {
					return e[1] = e[1].replace(be, we), e[3] = (e[3] || e[4] || e[5] || "").replace(be, we), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
				},
				CHILD: function(e) {
					return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
				},
				PSEUDO: function(e) {
					var t, n = !e[6] && e[2];
					return pe.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && fe.test(n) && (t = N(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
				}
			},
			filter: {
				TAG: function(e) {
					var t = e.replace(be, we).toLowerCase();
					return "*" === e ? function() {
						return !0
					} : function(e) {
						return e.nodeName && e.nodeName.toLowerCase() === t
					}
				},
				CLASS: function(e) {
					var t = $[e + " "];
					return t || (t = new RegExp("(^|" + ne + ")" + e + "(" + ne + "|$)")) && $(e, function(e) {
						return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
					})
				},
				ATTR: function(e, n, r) {
					return function(i) {
						var o = t.attr(i, e);
						return null == o ? "!=" === n : !n || (o += "", "=" === n ? o === r : "!=" === n ? o !== r : "^=" === n ? r && 0 === o.indexOf(r) : "*=" === n ? r && o.indexOf(r) > -1 : "$=" === n ? r && o.slice(-r.length) === r : "~=" === n ? (" " + o.replace(ae, " ") + " ").indexOf(r) > -1 : "|=" === n && (o === r || o.slice(0, r.length + 1) === r + "-"))
					}
				},
				CHILD: function(e, t, n, r, i) {
					var o = "nth" !== e.slice(0, 3),
						a = "last" !== e.slice(-4),
						s = "of-type" === t;
					return 1 === r && 0 === i ? function(e) {
						return !!e.parentNode
					} : function(t, n, u) {
						var l, c, f, d, p, h, g = o !== a ? "nextSibling" : "previousSibling",
							m = t.parentNode,
							y = s && t.nodeName.toLowerCase(),
							v = !u && !s,
							x = !1;
						if (m) {
							if (o) {
								for (; g;) {
									for (d = t; d = d[g];)
										if (s ? d.nodeName.toLowerCase() === y : 1 === d.nodeType) return !1;
									h = g = "only" === e && !h && "nextSibling"
								}
								return !0
							}
							if (h = [a ? m.firstChild : m.lastChild], a && v) {
								for (d = m, f = d[P] || (d[P] = {}), c = f[d.uniqueID] || (f[d.uniqueID] = {}),
									l = c[e] || [], p = l[0] === W && l[1], x = p && l[2], d = p && m.childNodes[p]; d = ++p && d && d[g] || (x = p = 0) || h.pop();)
									if (1 === d.nodeType && ++x && d === t) {
										c[e] = [W, p, x];
										break
									}
							} else if (v && (d = t, f = d[P] || (d[P] = {}), c = f[d.uniqueID] || (f[d.uniqueID] = {}), l = c[e] || [], p = l[0] === W && l[1], x = p), x === !1)
								for (;
									(d = ++p && d && d[g] || (x = p = 0) || h.pop()) && ((s ? d.nodeName.toLowerCase() !== y : 1 !== d.nodeType) || !++x || (v && (f = d[P] || (d[P] = {}), c = f[d.uniqueID] || (f[d.uniqueID] = {}), c[e] = [W, x]), d !== t)););
							return x -= i, x === r || x % r === 0 && x / r >= 0
						}
					}
				},
				PSEUDO: function(e, n) {
					var i, o = T.pseudos[e] || T.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
					return o[P] ? o(n) : o.length > 1 ? (i = [e, e, "", n], T.setFilters.hasOwnProperty(e.toLowerCase()) ? r(function(e, t) {
						for (var r, i = o(e, n), a = i.length; a--;) r = ee(e, i[a]), e[r] = !(t[r] = i[a])
					}) : function(e) {
						return o(e, 0, i)
					}) : o
				}
			},
			pseudos: {
				not: r(function(e) {
					var t = [],
						n = [],
						i = k(e.replace(se, "$1"));
					return i[P] ? r(function(e, t, n, r) {
						for (var o, a = i(e, null, r, []), s = e.length; s--;)(o = a[s]) && (e[s] = !(t[s] = o))
					}) : function(e, r, o) {
						return t[0] = e, i(t, null, o, n), t[0] = null, !n.pop()
					}
				}),
				has: r(function(e) {
					return function(n) {
						return t(e, n).length > 0
					}
				}),
				contains: r(function(e) {
					return e = e.replace(be, we),
						function(t) {
							return (t.textContent || t.innerText || C(t)).indexOf(e) > -1
						}
				}),
				lang: r(function(e) {
					return de.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(be, we).toLowerCase(),
						function(t) {
							var n;
							do
								if (n = _ ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-");
							while ((t = t.parentNode) && 1 === t.nodeType);
							return !1
						}
				}),
				target: function(t) {
					var n = e.location && e.location.hash;
					return n && n.slice(1) === t.id
				},
				root: function(e) {
					return e === q
				},
				focus: function(e) {
					return e === H.activeElement && (!H.hasFocus || H.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
				},
				enabled: function(e) {
					return e.disabled === !1
				},
				disabled: function(e) {
					return e.disabled === !0
				},
				checked: function(e) {
					var t = e.nodeName.toLowerCase();
					return "input" === t && !!e.checked || "option" === t && !!e.selected
				},
				selected: function(e) {
					return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
				},
				empty: function(e) {
					for (e = e.firstChild; e; e = e.nextSibling)
						if (e.nodeType < 6) return !1;
					return !0
				},
				parent: function(e) {
					return !T.pseudos.empty(e)
				},
				header: function(e) {
					return ge.test(e.nodeName)
				},
				input: function(e) {
					return he.test(e.nodeName)
				},
				button: function(e) {
					var t = e.nodeName.toLowerCase();
					return "input" === t && "button" === e.type || "button" === t
				},
				text: function(e) {
					var t;
					return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
				},
				first: l(function() {
					return [0]
				}),
				last: l(function(e, t) {
					return [t - 1]
				}),
				eq: l(function(e, t, n) {
					return [n < 0 ? n + t : n]
				}),
				even: l(function(e, t) {
					for (var n = 0; n < t; n += 2) e.push(n);
					return e
				}),
				odd: l(function(e, t) {
					for (var n = 1; n < t; n += 2) e.push(n);
					return e
				}),
				lt: l(function(e, t, n) {
					for (var r = n < 0 ? n + t : n; --r >= 0;) e.push(r);
					return e
				}),
				gt: l(function(e, t, n) {
					for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
					return e
				})
			}
		}, T.pseudos.nth = T.pseudos.eq;
		for (b in {
				radio: !0,
				checkbox: !0,
				file: !0,
				password: !0,
				image: !0
			}) T.pseudos[b] = s(b);
		for (b in {
				submit: !0,
				reset: !0
			}) T.pseudos[b] = u(b);
		return f.prototype = T.filters = T.pseudos, T.setFilters = new f, N = t.tokenize = function(e, n) {
			var r, i, o, a, s, u, l, c = z[e + " "];
			if (c) return n ? 0 : c.slice(0);
			for (s = e, u = [], l = T.preFilter; s;) {
				r && !(i = ue.exec(s)) || (i && (s = s.slice(i[0].length) || s), u.push(o = [])), r = !1, (i = le.exec(s)) && (r = i.shift(), o.push({
					value: r,
					type: i[0].replace(se, " ")
				}), s = s.slice(r.length));
				for (a in T.filter) !(i = pe[a].exec(s)) || l[a] && !(i = l[a](i)) || (r = i.shift(), o.push({
					value: r,
					type: a,
					matches: i
				}), s = s.slice(r.length));
				if (!r) break
			}
			return n ? s.length : s ? t.error(e) : z(e, u).slice(0)
		}, k = t.compile = function(e, t) {
			var n, r = [],
				i = [],
				o = X[e + " "];
			if (!o) {
				for (t || (t = N(e)), n = t.length; n--;) o = v(t[n]), o[P] ? r.push(o) : i.push(o);
				o = X(e, x(i, r)), o.selector = e
			}
			return o
		}, S = t.select = function(e, t, n, r) {
			var i, o, a, s, u, l = "function" == typeof e && e,
				f = !r && N(e = l.selector || e);
			if (n = n || [], 1 === f.length) {
				if (o = f[0] = f[0].slice(0), o.length > 2 && "ID" === (a = o[0]).type && w.getById && 9 === t.nodeType && _ && T.relative[o[1].type]) {
					if (t = (T.find.ID(a.matches[0].replace(be, we), t) || [])[0], !t) return n;
					l && (t = t.parentNode), e = e.slice(o.shift().value.length)
				}
				for (i = pe.needsContext.test(e) ? 0 : o.length; i-- && (a = o[i], !T.relative[s = a.type]);)
					if ((u = T.find[s]) && (r = u(a.matches[0].replace(be, we), ve.test(o[0].type) && c(t.parentNode) || t))) {
						if (o.splice(i, 1), e = r.length && d(o), !e) return Q.apply(n, r), n;
						break
					}
			}
			return (l || k(e, f))(r, t, !_, n, !t || ve.test(e) && c(t.parentNode) || t), n
		}, w.sortStable = P.split("").sort(U).join("") === P, w.detectDuplicates = !!j, L(), w.sortDetached = i(function(e) {
			return 1 & e.compareDocumentPosition(H.createElement("div"))
		}), i(function(e) {
			return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
		}) || o("type|href|height|width", function(e, t, n) {
			if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
		}), w.attributes && i(function(e) {
			return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
		}) || o("value", function(e, t, n) {
			if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
		}), i(function(e) {
			return null == e.getAttribute("disabled")
		}) || o(te, function(e, t, n) {
			var r;
			if (!n) return e[t] === !0 ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
		}), t
	}(e);
	pe.find = ve, pe.expr = ve.selectors, pe.expr[":"] = pe.expr.pseudos, pe.uniqueSort = pe.unique = ve.uniqueSort, pe.text = ve.getText, pe.isXMLDoc = ve.isXML, pe.contains = ve.contains;
	var xe = function(e, t, n) {
			for (var r = [], i = void 0 !== n;
				(e = e[t]) && 9 !== e.nodeType;)
				if (1 === e.nodeType) {
					if (i && pe(e).is(n)) break;
					r.push(e)
				}
			return r
		},
		be = function(e, t) {
			for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
			return n
		},
		we = pe.expr.match.needsContext,
		Te = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
		Ce = /^.[^:#\[\.,]*$/;
	pe.filter = function(e, t, n) {
		var r = t[0];
		return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? pe.find.matchesSelector(r, e) ? [r] : [] : pe.find.matches(e, pe.grep(t, function(e) {
			return 1 === e.nodeType
		}))
	}, pe.fn.extend({
		find: function(e) {
			var t, n = [],
				r = this,
				i = r.length;
			if ("string" != typeof e) return this.pushStack(pe(e).filter(function() {
				for (t = 0; t < i; t++)
					if (pe.contains(r[t], this)) return !0
			}));
			for (t = 0; t < i; t++) pe.find(e, r[t], n);
			return n = this.pushStack(i > 1 ? pe.unique(n) : n), n.selector = this.selector ? this.selector + " " + e : e, n
		},
		filter: function(e) {
			return this.pushStack(r(this, e || [], !1))
		},
		not: function(e) {
			return this.pushStack(r(this, e || [], !0))
		},
		is: function(e) {
			return !!r(this, "string" == typeof e && we.test(e) ? pe(e) : e || [], !1).length
		}
	});
	var Ee, Ne = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
		ke = pe.fn.init = function(e, t, n) {
			var r, i;
			if (!e) return this;
			if (n = n || Ee, "string" == typeof e) {
				if (r = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : Ne.exec(e), !r || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
				if (r[1]) {
					if (t = t instanceof pe ? t[0] : t, pe.merge(this, pe.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : re, !0)), Te.test(r[1]) && pe.isPlainObject(t))
						for (r in t) pe.isFunction(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
					return this
				}
				if (i = re.getElementById(r[2]), i && i.parentNode) {
					if (i.id !== r[2]) return Ee.find(e);
					this.length = 1, this[0] = i
				}
				return this.context = re, this.selector = e, this
			}
			return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : pe.isFunction(e) ? "undefined" != typeof n.ready ? n.ready(e) : e(pe) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), pe.makeArray(e, this))
		};
	ke.prototype = pe.fn, Ee = pe(re);
	var Se = /^(?:parents|prev(?:Until|All))/,
		Ae = {
			children: !0,
			contents: !0,
			next: !0,
			prev: !0
		};
	pe.fn.extend({
		has: function(e) {
			var t, n = pe(e, this),
				r = n.length;
			return this.filter(function() {
				for (t = 0; t < r; t++)
					if (pe.contains(this, n[t])) return !0
			})
		},
		closest: function(e, t) {
			for (var n, r = 0, i = this.length, o = [], a = we.test(e) || "string" != typeof e ? pe(e, t || this.context) : 0; r < i; r++)
				for (n = this[r]; n && n !== t; n = n.parentNode)
					if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && pe.find.matchesSelector(n, e))) {
						o.push(n);
						break
					}
			return this.pushStack(o.length > 1 ? pe.uniqueSort(o) : o)
		},
		index: function(e) {
			return e ? "string" == typeof e ? pe.inArray(this[0], pe(e)) : pe.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
		},
		add: function(e, t) {
			return this.pushStack(pe.uniqueSort(pe.merge(this.get(), pe(e, t))))
		},
		addBack: function(e) {
			return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
		}
	}), pe.each({
		parent: function(e) {
			var t = e.parentNode;
			return t && 11 !== t.nodeType ? t : null
		},
		parents: function(e) {
			return xe(e, "parentNode")
		},
		parentsUntil: function(e, t, n) {
			return xe(e, "parentNode", n)
		},
		next: function(e) {
			return i(e, "nextSibling")
		},
		prev: function(e) {
			return i(e, "previousSibling")
		},
		nextAll: function(e) {
			return xe(e, "nextSibling")
		},
		prevAll: function(e) {
			return xe(e, "previousSibling")
		},
		nextUntil: function(e, t, n) {
			return xe(e, "nextSibling", n)
		},
		prevUntil: function(e, t, n) {
			return xe(e, "previousSibling", n)
		},
		siblings: function(e) {
			return be((e.parentNode || {}).firstChild, e)
		},
		children: function(e) {
			return be(e.firstChild)
		},
		contents: function(e) {
			return pe.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : pe.merge([], e.childNodes)
		}
	}, function(e, t) {
		pe.fn[e] = function(n, r) {
			var i = pe.map(this, t, n);
			return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = pe.filter(r, i)), this.length > 1 && (Ae[e] || (i = pe.uniqueSort(i)), Se.test(e) && (i = i.reverse())), this.pushStack(i)
		}
	});
	var De = /\S+/g;
	pe.Callbacks = function(e) {
		e = "string" == typeof e ? o(e) : pe.extend({}, e);
		var t, n, r, i, a = [],
			s = [],
			u = -1,
			l = function() {
				for (i = e.once, r = t = !0; s.length; u = -1)
					for (n = s.shift(); ++u < a.length;) a[u].apply(n[0], n[1]) === !1 && e.stopOnFalse && (u = a.length, n = !1);
				e.memory || (n = !1), t = !1, i && (a = n ? [] : "")
			},
			c = {
				add: function() {
					return a && (n && !t && (u = a.length - 1, s.push(n)), function r(t) {
						pe.each(t, function(t, n) {
							pe.isFunction(n) ? e.unique && c.has(n) || a.push(n) : n && n.length && "string" !== pe.type(n) && r(n)
						})
					}(arguments), n && !t && l()), this
				},
				remove: function() {
					return pe.each(arguments, function(e, t) {
						for (var n;
							(n = pe.inArray(t, a, n)) > -1;) a.splice(n, 1), n <= u && u--
					}), this
				},
				has: function(e) {
					return e ? pe.inArray(e, a) > -1 : a.length > 0
				},
				empty: function() {
					return a && (a = []), this
				},
				disable: function() {
					return i = s = [], a = n = "", this
				},
				disabled: function() {
					return !a
				},
				lock: function() {
					return i = !0, n || c.disable(), this
				},
				locked: function() {
					return !!i
				},
				fireWith: function(e, n) {
					return i || (n = n || [], n = [e, n.slice ? n.slice() : n], s.push(n), t || l()), this
				},
				fire: function() {
					return c.fireWith(this, arguments), this
				},
				fired: function() {
					return !!r
				}
			};
		return c
	}, pe.extend({
		Deferred: function(e) {
			var t = [
					["resolve", "done", pe.Callbacks("once memory"), "resolved"],
					["reject", "fail", pe.Callbacks("once memory"), "rejected"],
					["notify", "progress", pe.Callbacks("memory")]
				],
				n = "pending",
				r = {
					state: function() {
						return n
					},
					always: function() {
						return i.done(arguments).fail(arguments), this
					},
					then: function() {
						var e = arguments;
						return pe.Deferred(function(n) {
							pe.each(t, function(t, o) {
								var a = pe.isFunction(e[t]) && e[t];
								i[o[1]](function() {
									var e = a && a.apply(this, arguments);
									e && pe.isFunction(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[o[0] + "With"](this === r ? n.promise() : this, a ? [e] : arguments)
								})
							}), e = null
						}).promise()
					},
					promise: function(e) {
						return null != e ? pe.extend(e, r) : r
					}
				},
				i = {};
			return r.pipe = r.then, pe.each(t, function(e, o) {
				var a = o[2],
					s = o[3];
				r[o[1]] = a.add, s && a.add(function() {
					n = s
				}, t[1 ^ e][2].disable, t[2][2].lock), i[o[0]] = function() {
					return i[o[0] + "With"](this === i ? r : this, arguments), this
				}, i[o[0] + "With"] = a.fireWith
			}), r.promise(i), e && e.call(i, i), i
		},
		when: function(e) {
			var t, n, r, i = 0,
				o = ie.call(arguments),
				a = o.length,
				s = 1 !== a || e && pe.isFunction(e.promise) ? a : 0,
				u = 1 === s ? e : pe.Deferred(),
				l = function(e, n, r) {
					return function(i) {
						n[e] = this, r[e] = arguments.length > 1 ? ie.call(arguments) : i, r === t ? u.notifyWith(n, r) : --s || u.resolveWith(n, r)
					}
				};
			if (a > 1)
				for (t = new Array(a), n = new Array(a), r = new Array(a); i < a; i++) o[i] && pe.isFunction(o[i].promise) ? o[i].promise().progress(l(i, n, t)).done(l(i, r, o)).fail(u.reject) : --s;
			return s || u.resolveWith(r, o), u.promise()
		}
	});
	var je;
	pe.fn.ready = function(e) {
		return pe.ready.promise().done(e), this
	}, pe.extend({
		isReady: !1,
		readyWait: 1,
		holdReady: function(e) {
			e ? pe.readyWait++ : pe.ready(!0)
		},
		ready: function(e) {
			(e === !0 ? --pe.readyWait : pe.isReady) || (pe.isReady = !0, e !== !0 && --pe.readyWait > 0 || (je.resolveWith(re, [pe]), pe.fn.triggerHandler && (pe(re).triggerHandler("ready"), pe(re).off("ready"))))
		}
	}), pe.ready.promise = function(t) {
		if (!je)
			if (je = pe.Deferred(), "complete" === re.readyState || "loading" !== re.readyState && !re.documentElement.doScroll) e.setTimeout(pe.ready);
			else if (re.addEventListener) re.addEventListener("DOMContentLoaded", s), e.addEventListener("load", s);
		else {
			re.attachEvent("onreadystatechange", s), e.attachEvent("onload", s);
			var n = !1;
			try {
				n = null == e.frameElement && re.documentElement
			} catch (r) {}
			n && n.doScroll && ! function i() {
				if (!pe.isReady) {
					try {
						n.doScroll("left")
					} catch (t) {
						return e.setTimeout(i, 50)
					}
					a(), pe.ready()
				}
			}()
		}
		return je.promise(t)
	}, pe.ready.promise();
	var Le;
	for (Le in pe(fe)) break;
	fe.ownFirst = "0" === Le, fe.inlineBlockNeedsLayout = !1, pe(function() {
			var e, t, n, r;
			n = re.getElementsByTagName("body")[0], n && n.style && (t = re.createElement("div"), r = re.createElement("div"), r.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(r).appendChild(t), "undefined" != typeof t.style.zoom && (t.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", fe.inlineBlockNeedsLayout = e = 3 === t.offsetWidth, e && (n.style.zoom = 1)), n.removeChild(r))
		}),
		function() {
			var e = re.createElement("div");
			fe.deleteExpando = !0;
			try {
				delete e.test
			} catch (t) {
				fe.deleteExpando = !1
			}
			e = null
		}();
	var He = function(e) {
			var t = pe.noData[(e.nodeName + " ").toLowerCase()],
				n = +e.nodeType || 1;
			return (1 === n || 9 === n) && (!t || t !== !0 && e.getAttribute("classid") === t)
		},
		qe = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
		_e = /([A-Z])/g;
	pe.extend({
			cache: {},
			noData: {
				"applet ": !0,
				"embed ": !0,
				"object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
			},
			hasData: function(e) {
				return e = e.nodeType ? pe.cache[e[pe.expando]] : e[pe.expando], !!e && !l(e)
			},
			data: function(e, t, n) {
				return c(e, t, n)
			},
			removeData: function(e, t) {
				return f(e, t)
			},
			_data: function(e, t, n) {
				return c(e, t, n, !0)
			},
			_removeData: function(e, t) {
				return f(e, t, !0)
			}
		}), pe.fn.extend({
			data: function(e, t) {
				var n, r, i, o = this[0],
					a = o && o.attributes;
				if (void 0 === e) {
					if (this.length && (i = pe.data(o), 1 === o.nodeType && !pe._data(o, "parsedAttrs"))) {
						for (n = a.length; n--;) a[n] && (r = a[n].name, 0 === r.indexOf("data-") && (r = pe.camelCase(r.slice(5)), u(o, r, i[r])));
						pe._data(o, "parsedAttrs", !0)
					}
					return i
				}
				return "object" == typeof e ? this.each(function() {
					pe.data(this, e)
				}) : arguments.length > 1 ? this.each(function() {
					pe.data(this, e, t)
				}) : o ? u(o, e, pe.data(o, e)) : void 0
			},
			removeData: function(e) {
				return this.each(function() {
					pe.removeData(this, e)
				})
			}
		}), pe.extend({
			queue: function(e, t, n) {
				var r;
				if (e) return t = (t || "fx") + "queue", r = pe._data(e, t), n && (!r || pe.isArray(n) ? r = pe._data(e, t, pe.makeArray(n)) : r.push(n)), r || []
			},
			dequeue: function(e, t) {
				t = t || "fx";
				var n = pe.queue(e, t),
					r = n.length,
					i = n.shift(),
					o = pe._queueHooks(e, t),
					a = function() {
						pe.dequeue(e, t)
					};
				"inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, a, o)), !r && o && o.empty.fire()
			},
			_queueHooks: function(e, t) {
				var n = t + "queueHooks";
				return pe._data(e, n) || pe._data(e, n, {
					empty: pe.Callbacks("once memory").add(function() {
						pe._removeData(e, t + "queue"), pe._removeData(e, n)
					})
				})
			}
		}), pe.fn.extend({
			queue: function(e, t) {
				var n = 2;
				return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? pe.queue(this[0], e) : void 0 === t ? this : this.each(function() {
					var n = pe.queue(this, e, t);
					pe._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && pe.dequeue(this, e)
				})
			},
			dequeue: function(e) {
				return this.each(function() {
					pe.dequeue(this, e)
				})
			},
			clearQueue: function(e) {
				return this.queue(e || "fx", [])
			},
			promise: function(e, t) {
				var n, r = 1,
					i = pe.Deferred(),
					o = this,
					a = this.length,
					s = function() {
						--r || i.resolveWith(o, [o])
					};
				for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;) n = pe._data(o[a], e + "queueHooks"), n && n.empty && (r++, n.empty.add(s));
				return s(), i.promise(t)
			}
		}),
		function() {
			var e;
			fe.shrinkWrapBlocks = function() {
				if (null != e) return e;
				e = !1;
				var t, n, r;
				return n = re.getElementsByTagName("body")[0], n && n.style ? (t = re.createElement("div"), r = re.createElement("div"), r.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(r).appendChild(t), "undefined" != typeof t.style.zoom && (t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", t.appendChild(re.createElement("div")).style.width = "5px", e = 3 !== t.offsetWidth), n.removeChild(r), e) : void 0
			}
		}();
	var Fe = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
		Me = new RegExp("^(?:([+-])=|)(" + Fe + ")([a-z%]*)$", "i"),
		Oe = ["Top", "Right", "Bottom", "Left"],
		Re = function(e, t) {
			return e = t || e, "none" === pe.css(e, "display") || !pe.contains(e.ownerDocument, e)
		},
		Pe = function(e, t, n, r, i, o, a) {
			var s = 0,
				u = e.length,
				l = null == n;
			if ("object" === pe.type(n)) {
				i = !0;
				for (s in n) Pe(e, t, s, n[s], !0, o, a)
			} else if (void 0 !== r && (i = !0, pe.isFunction(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function(e, t, n) {
					return l.call(pe(e), n)
				})), t))
				for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
			return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
		},
		Be = /^(?:checkbox|radio)$/i,
		We = /<([\w:-]+)/,
		Ie = /^$|\/(?:java|ecma)script/i,
		$e = /^\s+/,
		ze = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";
	! function() {
		var e = re.createElement("div"),
			t = re.createDocumentFragment(),
			n = re.createElement("input");
		e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", fe.leadingWhitespace = 3 === e.firstChild.nodeType, fe.tbody = !e.getElementsByTagName("tbody").length, fe.htmlSerialize = !!e.getElementsByTagName("link").length, fe.html5Clone = "<:nav></:nav>" !== re.createElement("nav").cloneNode(!0).outerHTML, n.type = "checkbox", n.checked = !0, t.appendChild(n), fe.appendChecked = n.checked, e.innerHTML = "<textarea>x</textarea>", fe.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue, t.appendChild(e), n = re.createElement("input"), n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), e.appendChild(n), fe.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, fe.noCloneEvent = !!e.addEventListener, e[pe.expando] = 1, fe.attributes = !e.getAttribute(pe.expando)
	}();
	var Xe = {
		option: [1, "<select multiple='multiple'>", "</select>"],
		legend: [1, "<fieldset>", "</fieldset>"],
		area: [1, "<map>", "</map>"],
		param: [1, "<object>", "</object>"],
		thead: [1, "<table>", "</table>"],
		tr: [2, "<table><tbody>", "</tbody></table>"],
		col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
		td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
		_default: fe.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
	};
	Xe.optgroup = Xe.option, Xe.tbody = Xe.tfoot = Xe.colgroup = Xe.caption = Xe.thead, Xe.th = Xe.td;
	var Ue = /<|&#?\w+;/,
		Ve = /<tbody/i;
	! function() {
		var t, n, r = re.createElement("div");
		for (t in {
				submit: !0,
				change: !0,
				focusin: !0
			}) n = "on" + t, (fe[t] = n in e) || (r.setAttribute(n, "t"), fe[t] = r.attributes[n].expando === !1);
		r = null
	}();
	var Ye = /^(?:input|select|textarea)$/i,
		Je = /^key/,
		Ge = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
		Ke = /^(?:focusinfocus|focusoutblur)$/,
		Qe = /^([^.]*)(?:\.(.+)|)/;
	pe.event = {
		global: {},
		add: function(e, t, n, r, i) {
			var o, a, s, u, l, c, f, d, p, h, g, m = pe._data(e);
			if (m) {
				for (n.handler && (u = n, n = u.handler, i = u.selector), n.guid || (n.guid = pe.guid++), (a = m.events) || (a = m.events = {}), (c = m.handle) || (c = m.handle = function(e) {
						return "undefined" == typeof pe || e && pe.event.triggered === e.type ? void 0 : pe.event.dispatch.apply(c.elem, arguments)
					}, c.elem = e), t = (t || "").match(De) || [""], s = t.length; s--;) o = Qe.exec(t[s]) || [], p = g = o[1], h = (o[2] || "").split(".").sort(), p && (l = pe.event.special[p] || {}, p = (i ? l.delegateType : l.bindType) || p, l = pe.event.special[p] || {}, f = pe.extend({
					type: p,
					origType: g,
					data: r,
					handler: n,
					guid: n.guid,
					selector: i,
					needsContext: i && pe.expr.match.needsContext.test(i),
					namespace: h.join(".")
				}, u), (d = a[p]) || (d = a[p] = [], d.delegateCount = 0, l.setup && l.setup.call(e, r, h, c) !== !1 || (e.addEventListener ? e.addEventListener(p, c, !1) : e.attachEvent && e.attachEvent("on" + p, c))), l.add && (l.add.call(e, f), f.handler.guid || (f.handler.guid = n.guid)), i ? d.splice(d.delegateCount++, 0, f) : d.push(f), pe.event.global[p] = !0);
				e = null
			}
		},
		remove: function(e, t, n, r, i) {
			var o, a, s, u, l, c, f, d, p, h, g, m = pe.hasData(e) && pe._data(e);
			if (m && (c = m.events)) {
				for (t = (t || "").match(De) || [""], l = t.length; l--;)
					if (s = Qe.exec(t[l]) || [], p = g = s[1], h = (s[2] || "").split(".").sort(), p) {
						for (f = pe.event.special[p] || {}, p = (r ? f.delegateType : f.bindType) || p, d = c[p] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), u = o = d.length; o--;) a = d[o], !i && g !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || r && r !== a.selector && ("**" !== r || !a.selector) || (d.splice(o, 1), a.selector && d.delegateCount--, f.remove && f.remove.call(e, a));
						u && !d.length && (f.teardown && f.teardown.call(e, h, m.handle) !== !1 || pe.removeEvent(e, p, m.handle), delete c[p])
					} else
						for (p in c) pe.event.remove(e, p + t[l], n, r, !0);
				pe.isEmptyObject(c) && (delete m.handle, pe._removeData(e, "events"))
			}
		},
		trigger: function(t, n, r, i) {
			var o, a, s, u, l, c, f, d = [r || re],
				p = ce.call(t, "type") ? t.type : t,
				h = ce.call(t, "namespace") ? t.namespace.split(".") : [];
			if (s = c = r = r || re, 3 !== r.nodeType && 8 !== r.nodeType && !Ke.test(p + pe.event.triggered) && (p.indexOf(".") > -1 && (h = p.split("."), p = h.shift(), h.sort()), a = p.indexOf(":") < 0 && "on" + p, t = t[pe.expando] ? t : new pe.Event(p, "object" == typeof t && t), t.isTrigger = i ? 2 : 3, t.namespace = h.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = r), n = null == n ? [t] : pe.makeArray(n, [t]), l = pe.event.special[p] || {}, i || !l.trigger || l.trigger.apply(r, n) !== !1)) {
				if (!i && !l.noBubble && !pe.isWindow(r)) {
					for (u = l.delegateType || p, Ke.test(u + p) || (s = s.parentNode); s; s = s.parentNode) d.push(s), c = s;
					c === (r.ownerDocument || re) && d.push(c.defaultView || c.parentWindow || e)
				}
				for (f = 0;
					(s = d[f++]) && !t.isPropagationStopped();) t.type = f > 1 ? u : l.bindType || p, o = (pe._data(s, "events") || {})[t.type] && pe._data(s, "handle"), o && o.apply(s, n), o = a && s[a], o && o.apply && He(s) && (t.result = o.apply(s, n), t.result === !1 && t.preventDefault());
				if (t.type = p, !i && !t.isDefaultPrevented() && (!l._default || l._default.apply(d.pop(), n) === !1) && He(r) && a && r[p] && !pe.isWindow(r)) {
					c = r[a], c && (r[a] = null), pe.event.triggered = p;
					try {
						r[p]()
					} catch (g) {}
					pe.event.triggered = void 0, c && (r[a] = c)
				}
				return t.result
			}
		},
		dispatch: function(e) {
			e = pe.event.fix(e);
			var t, n, r, i, o, a = [],
				s = ie.call(arguments),
				u = (pe._data(this, "events") || {})[e.type] || [],
				l = pe.event.special[e.type] || {};
			if (s[0] = e, e.delegateTarget = this, !l.preDispatch || l.preDispatch.call(this, e) !== !1) {
				for (a = pe.event.handlers.call(this, e, u), t = 0;
					(i = a[t++]) && !e.isPropagationStopped();)
					for (e.currentTarget = i.elem, n = 0;
						(o = i.handlers[n++]) && !e.isImmediatePropagationStopped();) e.rnamespace && !e.rnamespace.test(o.namespace) || (e.handleObj = o, e.data = o.data, r = ((pe.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, s), void 0 !== r && (e.result = r) === !1 && (e.preventDefault(), e.stopPropagation()));
				return l.postDispatch && l.postDispatch.call(this, e), e.result
			}
		},
		handlers: function(e, t) {
			var n, r, i, o, a = [],
				s = t.delegateCount,
				u = e.target;
			if (s && u.nodeType && ("click" !== e.type || isNaN(e.button) || e.button < 1))
				for (; u != this; u = u.parentNode || this)
					if (1 === u.nodeType && (u.disabled !== !0 || "click" !== e.type)) {
						for (r = [], n = 0; n < s; n++) o = t[n], i = o.selector + " ", void 0 === r[i] && (r[i] = o.needsContext ? pe(i, this).index(u) > -1 : pe.find(i, this, null, [u]).length), r[i] && r.push(o);
						r.length && a.push({
							elem: u,
							handlers: r
						})
					}
			return s < t.length && a.push({
				elem: this,
				handlers: t.slice(s)
			}), a
		},
		fix: function(e) {
			if (e[pe.expando]) return e;
			var t, n, r, i = e.type,
				o = e,
				a = this.fixHooks[i];
			for (a || (this.fixHooks[i] = a = Ge.test(i) ? this.mouseHooks : Je.test(i) ? this.keyHooks : {}), r = a.props ? this.props.concat(a.props) : this.props, e = new pe.Event(o), t = r.length; t--;) n = r[t], e[n] = o[n];
			return e.target || (e.target = o.srcElement || re), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, a.filter ? a.filter(e, o) : e
		},
		props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
		fixHooks: {},
		keyHooks: {
			props: "char charCode key keyCode".split(" "),
			filter: function(e, t) {
				return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
			}
		},
		mouseHooks: {
			props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
			filter: function(e, t) {
				var n, r, i, o = t.button,
					a = t.fromElement;
				return null == e.pageX && null != t.clientX && (r = e.target.ownerDocument || re, i = r.documentElement, n = r.body, e.pageX = t.clientX + (i && i.scrollLeft || n && n.scrollLeft || 0) - (i && i.clientLeft || n && n.clientLeft || 0), e.pageY = t.clientY + (i && i.scrollTop || n && n.scrollTop || 0) - (i && i.clientTop || n && n.clientTop || 0)), !e.relatedTarget && a && (e.relatedTarget = a === e.target ? t.toElement : a), e.which || void 0 === o || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), e
			}
		},
		special: {
			load: {
				noBubble: !0
			},
			focus: {
				trigger: function() {
					if (this !== b() && this.focus) try {
						return this.focus(), !1
					} catch (e) {}
				},
				delegateType: "focusin"
			},
			blur: {
				trigger: function() {
					if (this === b() && this.blur) return this.blur(), !1
				},
				delegateType: "focusout"
			},
			click: {
				trigger: function() {
					if (pe.nodeName(this, "input") && "checkbox" === this.type && this.click) return this.click(), !1
				},
				_default: function(e) {
					return pe.nodeName(e.target, "a")
				}
			},
			beforeunload: {
				postDispatch: function(e) {
					void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
				}
			}
		},
		simulate: function(e, t, n) {
			var r = pe.extend(new pe.Event, n, {
				type: e,
				isSimulated: !0
			});
			pe.event.trigger(r, null, t), r.isDefaultPrevented() && n.preventDefault()
		}
	}, pe.removeEvent = re.removeEventListener ? function(e, t, n) {
		e.removeEventListener && e.removeEventListener(t, n)
	} : function(e, t, n) {
		var r = "on" + t;
		e.detachEvent && ("undefined" == typeof e[r] && (e[r] = null), e.detachEvent(r, n))
	}, pe.Event = function(e, t) {
		return this instanceof pe.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? v : x) : this.type = e, t && pe.extend(this, t), this.timeStamp = e && e.timeStamp || pe.now(), void(this[pe.expando] = !0)) : new pe.Event(e, t)
	}, pe.Event.prototype = {
		constructor: pe.Event,
		isDefaultPrevented: x,
		isPropagationStopped: x,
		isImmediatePropagationStopped: x,
		preventDefault: function() {
			var e = this.originalEvent;
			this.isDefaultPrevented = v, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
		},
		stopPropagation: function() {
			var e = this.originalEvent;
			this.isPropagationStopped = v, e && !this.isSimulated && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
		},
		stopImmediatePropagation: function() {
			var e = this.originalEvent;
			this.isImmediatePropagationStopped = v, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation()
		}
	}, pe.each({
		mouseenter: "mouseover",
		mouseleave: "mouseout",
		pointerenter: "pointerover",
		pointerleave: "pointerout"
	}, function(e, t) {
		pe.event.special[e] = {
			delegateType: t,
			bindType: t,
			handle: function(e) {
				var n, r = this,
					i = e.relatedTarget,
					o = e.handleObj;
				return i && (i === r || pe.contains(r, i)) || (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
			}
		}
	}), fe.submit || (pe.event.special.submit = {
		setup: function() {
			return !pe.nodeName(this, "form") && void pe.event.add(this, "click._submit keypress._submit", function(e) {
				var t = e.target,
					n = pe.nodeName(t, "input") || pe.nodeName(t, "button") ? pe.prop(t, "form") : void 0;
				n && !pe._data(n, "submit") && (pe.event.add(n, "submit._submit", function(e) {
					e._submitBubble = !0
				}), pe._data(n, "submit", !0))
			})
		},
		postDispatch: function(e) {
			e._submitBubble && (delete e._submitBubble, this.parentNode && !e.isTrigger && pe.event.simulate("submit", this.parentNode, e))
		},
		teardown: function() {
			return !pe.nodeName(this, "form") && void pe.event.remove(this, "._submit")
		}
	}), fe.change || (pe.event.special.change = {
		setup: function() {
			return Ye.test(this.nodeName) ? ("checkbox" !== this.type && "radio" !== this.type || (pe.event.add(this, "propertychange._change", function(e) {
				"checked" === e.originalEvent.propertyName && (this._justChanged = !0)
			}), pe.event.add(this, "click._change", function(e) {
				this._justChanged && !e.isTrigger && (this._justChanged = !1), pe.event.simulate("change", this, e)
			})), !1) : void pe.event.add(this, "beforeactivate._change", function(e) {
				var t = e.target;
				Ye.test(t.nodeName) && !pe._data(t, "change") && (pe.event.add(t, "change._change", function(e) {
					!this.parentNode || e.isSimulated || e.isTrigger || pe.event.simulate("change", this.parentNode, e)
				}), pe._data(t, "change", !0))
			})
		},
		handle: function(e) {
			var t = e.target;
			if (this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type) return e.handleObj.handler.apply(this, arguments)
		},
		teardown: function() {
			return pe.event.remove(this, "._change"), !Ye.test(this.nodeName)
		}
	}), fe.focusin || pe.each({
		focus: "focusin",
		blur: "focusout"
	}, function(e, t) {
		var n = function(e) {
			pe.event.simulate(t, e.target, pe.event.fix(e))
		};
		pe.event.special[t] = {
			setup: function() {
				var r = this.ownerDocument || this,
					i = pe._data(r, t);
				i || r.addEventListener(e, n, !0), pe._data(r, t, (i || 0) + 1)
			},
			teardown: function() {
				var r = this.ownerDocument || this,
					i = pe._data(r, t) - 1;
				i ? pe._data(r, t, i) : (r.removeEventListener(e, n, !0), pe._removeData(r, t))
			}
		}
	}), pe.fn.extend({
		on: function(e, t, n, r) {
			return w(this, e, t, n, r)
		},
		one: function(e, t, n, r) {
			return w(this, e, t, n, r, 1)
		},
		off: function(e, t, n) {
			var r, i;
			if (e && e.preventDefault && e.handleObj) return r = e.handleObj, pe(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
			if ("object" == typeof e) {
				for (i in e) this.off(i, t, e[i]);
				return this
			}
			return t !== !1 && "function" != typeof t || (n = t, t = void 0), n === !1 && (n = x), this.each(function() {
				pe.event.remove(this, e, n, t)
			})
		},
		trigger: function(e, t) {
			return this.each(function() {
				pe.event.trigger(e, t, this)
			})
		},
		triggerHandler: function(e, t) {
			var n = this[0];
			if (n) return pe.event.trigger(e, t, n, !0)
		}
	});
	var Ze = / jQuery\d+="(?:null|\d+)"/g,
		et = new RegExp("<(?:" + ze + ")[\\s/>]", "i"),
		tt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
		nt = /<script|<style|<link/i,
		rt = /checked\s*(?:[^=]|=\s*.checked.)/i,
		it = /^true\/(.*)/,
		ot = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
		at = p(re),
		st = at.appendChild(re.createElement("div"));
	pe.extend({
		htmlPrefilter: function(e) {
			return e.replace(tt, "<$1></$2>")
		},
		clone: function(e, t, n) {
			var r, i, o, a, s, u = pe.contains(e.ownerDocument, e);
			if (fe.html5Clone || pe.isXMLDoc(e) || !et.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (st.innerHTML = e.outerHTML, st.removeChild(o = st.firstChild)), !(fe.noCloneEvent && fe.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || pe.isXMLDoc(e)))
				for (r = h(o), s = h(e), a = 0; null != (i = s[a]); ++a) r[a] && k(i, r[a]);
			if (t)
				if (n)
					for (s = s || h(e), r = r || h(o), a = 0; null != (i = s[a]); a++) N(i, r[a]);
				else N(e, o);
			return r = h(o, "script"), r.length > 0 && g(r, !u && h(e, "script")), r = s = i = null, o
		},
		cleanData: function(e, t) {
			for (var n, r, i, o, a = 0, s = pe.expando, u = pe.cache, l = fe.attributes, c = pe.event.special; null != (n = e[a]); a++)
				if ((t || He(n)) && (i = n[s], o = i && u[i])) {
					if (o.events)
						for (r in o.events) c[r] ? pe.event.remove(n, r) : pe.removeEvent(n, r, o.handle);
					u[i] && (delete u[i], l || "undefined" == typeof n.removeAttribute ? n[s] = void 0 : n.removeAttribute(s), ne.push(i))
				}
		}
	}), pe.fn.extend({
		domManip: S,
		detach: function(e) {
			return A(this, e, !0)
		},
		remove: function(e) {
			return A(this, e)
		},
		text: function(e) {
			return Pe(this, function(e) {
				return void 0 === e ? pe.text(this) : this.empty().append((this[0] && this[0].ownerDocument || re).createTextNode(e))
			}, null, e, arguments.length)
		},
		append: function() {
			return S(this, arguments, function(e) {
				if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
					var t = T(this, e);
					t.appendChild(e)
				}
			})
		},
		prepend: function() {
			return S(this, arguments, function(e) {
				if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
					var t = T(this, e);
					t.insertBefore(e, t.firstChild)
				}
			})
		},
		before: function() {
			return S(this, arguments, function(e) {
				this.parentNode && this.parentNode.insertBefore(e, this)
			})
		},
		after: function() {
			return S(this, arguments, function(e) {
				this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
			})
		},
		empty: function() {
			for (var e, t = 0; null != (e = this[t]); t++) {
				for (1 === e.nodeType && pe.cleanData(h(e, !1)); e.firstChild;) e.removeChild(e.firstChild);
				e.options && pe.nodeName(e, "select") && (e.options.length = 0)
			}
			return this
		},
		clone: function(e, t) {
			return e = null != e && e, t = null == t ? e : t, this.map(function() {
				return pe.clone(this, e, t)
			})
		},
		html: function(e) {
			return Pe(this, function(e) {
				var t = this[0] || {},
					n = 0,
					r = this.length;
				if (void 0 === e) return 1 === t.nodeType ? t.innerHTML.replace(Ze, "") : void 0;
				if ("string" == typeof e && !nt.test(e) && (fe.htmlSerialize || !et.test(e)) && (fe.leadingWhitespace || !$e.test(e)) && !Xe[(We.exec(e) || ["", ""])[1].toLowerCase()]) {
					e = pe.htmlPrefilter(e);
					try {
						for (; n < r; n++) t = this[n] || {}, 1 === t.nodeType && (pe.cleanData(h(t, !1)), t.innerHTML = e);
						t = 0
					} catch (i) {}
				}
				t && this.empty().append(e)
			}, null, e, arguments.length)
		},
		replaceWith: function() {
			var e = [];
			return S(this, arguments, function(t) {
				var n = this.parentNode;
				pe.inArray(this, e) < 0 && (pe.cleanData(h(this)),
					n && n.replaceChild(t, this))
			}, e)
		}
	}), pe.each({
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function(e, t) {
		pe.fn[e] = function(e) {
			for (var n, r = 0, i = [], o = pe(e), a = o.length - 1; r <= a; r++) n = r === a ? this : this.clone(!0), pe(o[r])[t](n), ae.apply(i, n.get());
			return this.pushStack(i)
		}
	});
	var ut, lt = {
			HTML: "block",
			BODY: "block"
		},
		ct = /^margin/,
		ft = new RegExp("^(" + Fe + ")(?!px)[a-z%]+$", "i"),
		dt = function(e, t, n, r) {
			var i, o, a = {};
			for (o in t) a[o] = e.style[o], e.style[o] = t[o];
			i = n.apply(e, r || []);
			for (o in t) e.style[o] = a[o];
			return i
		},
		pt = re.documentElement;
	! function() {
		function t() {
			var t, c, f = re.documentElement;
			f.appendChild(u), l.style.cssText = "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", n = i = s = !1, r = a = !0, e.getComputedStyle && (c = e.getComputedStyle(l), n = "1%" !== (c || {}).top, s = "2px" === (c || {}).marginLeft, i = "4px" === (c || {
				width: "4px"
			}).width, l.style.marginRight = "50%", r = "4px" === (c || {
				marginRight: "4px"
			}).marginRight, t = l.appendChild(re.createElement("div")), t.style.cssText = l.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", t.style.marginRight = t.style.width = "0", l.style.width = "1px", a = !parseFloat((e.getComputedStyle(t) || {}).marginRight), l.removeChild(t)), l.style.display = "none", o = 0 === l.getClientRects().length, o && (l.style.display = "", l.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", t = l.getElementsByTagName("td"), t[0].style.cssText = "margin:0;border:0;padding:0;display:none", o = 0 === t[0].offsetHeight, o && (t[0].style.display = "", t[1].style.display = "none", o = 0 === t[0].offsetHeight)), f.removeChild(u)
		}
		var n, r, i, o, a, s, u = re.createElement("div"),
			l = re.createElement("div");
		l.style && (l.style.cssText = "float:left;opacity:.5", fe.opacity = "0.5" === l.style.opacity, fe.cssFloat = !!l.style.cssFloat, l.style.backgroundClip = "content-box", l.cloneNode(!0).style.backgroundClip = "", fe.clearCloneStyle = "content-box" === l.style.backgroundClip, u = re.createElement("div"), u.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", l.innerHTML = "", u.appendChild(l), fe.boxSizing = "" === l.style.boxSizing || "" === l.style.MozBoxSizing || "" === l.style.WebkitBoxSizing, pe.extend(fe, {
			reliableHiddenOffsets: function() {
				return null == n && t(), o
			},
			boxSizingReliable: function() {
				return null == n && t(), i
			},
			pixelMarginRight: function() {
				return null == n && t(), r
			},
			pixelPosition: function() {
				return null == n && t(), n
			},
			reliableMarginRight: function() {
				return null == n && t(), a
			},
			reliableMarginLeft: function() {
				return null == n && t(), s
			}
		}))
	}();
	var ht, gt, mt = /^(top|right|bottom|left)$/;
	e.getComputedStyle ? (ht = function(t) {
		var n = t.ownerDocument.defaultView;
		return n && n.opener || (n = e), n.getComputedStyle(t)
	}, gt = function(e, t, n) {
		var r, i, o, a, s = e.style;
		return n = n || ht(e), a = n ? n.getPropertyValue(t) || n[t] : void 0, "" !== a && void 0 !== a || pe.contains(e.ownerDocument, e) || (a = pe.style(e, t)), n && !fe.pixelMarginRight() && ft.test(a) && ct.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o), void 0 === a ? a : a + ""
	}) : pt.currentStyle && (ht = function(e) {
		return e.currentStyle
	}, gt = function(e, t, n) {
		var r, i, o, a, s = e.style;
		return n = n || ht(e), a = n ? n[t] : void 0, null == a && s && s[t] && (a = s[t]), ft.test(a) && !mt.test(t) && (r = s.left, i = e.runtimeStyle, o = i && i.left, o && (i.left = e.currentStyle.left), s.left = "fontSize" === t ? "1em" : a, a = s.pixelLeft + "px", s.left = r, o && (i.left = o)), void 0 === a ? a : a + "" || "auto"
	});
	var yt = /alpha\([^)]*\)/i,
		vt = /opacity\s*=\s*([^)]*)/i,
		xt = /^(none|table(?!-c[ea]).+)/,
		bt = new RegExp("^(" + Fe + ")(.*)$", "i"),
		wt = {
			position: "absolute",
			visibility: "hidden",
			display: "block"
		},
		Tt = {
			letterSpacing: "0",
			fontWeight: "400"
		},
		Ct = ["Webkit", "O", "Moz", "ms"],
		Et = re.createElement("div").style;
	pe.extend({
		cssHooks: {
			opacity: {
				get: function(e, t) {
					if (t) {
						var n = gt(e, "opacity");
						return "" === n ? "1" : n
					}
				}
			}
		},
		cssNumber: {
			animationIterationCount: !0,
			columnCount: !0,
			fillOpacity: !0,
			flexGrow: !0,
			flexShrink: !0,
			fontWeight: !0,
			lineHeight: !0,
			opacity: !0,
			order: !0,
			orphans: !0,
			widows: !0,
			zIndex: !0,
			zoom: !0
		},
		cssProps: {
			"float": fe.cssFloat ? "cssFloat" : "styleFloat"
		},
		style: function(e, t, n, r) {
			if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
				var i, o, a, s = pe.camelCase(t),
					u = e.style;
				if (t = pe.cssProps[s] || (pe.cssProps[s] = H(s) || s), a = pe.cssHooks[t] || pe.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : u[t];
				if (o = typeof n, "string" === o && (i = Me.exec(n)) && i[1] && (n = d(e, t, i), o = "number"), null != n && n === n && ("number" === o && (n += i && i[3] || (pe.cssNumber[s] ? "" : "px")), fe.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"), !(a && "set" in a && void 0 === (n = a.set(e, n, r))))) try {
					u[t] = n
				} catch (l) {}
			}
		},
		css: function(e, t, n, r) {
			var i, o, a, s = pe.camelCase(t);
			return t = pe.cssProps[s] || (pe.cssProps[s] = H(s) || s), a = pe.cssHooks[t] || pe.cssHooks[s], a && "get" in a && (o = a.get(e, !0, n)), void 0 === o && (o = gt(e, t, r)), "normal" === o && t in Tt && (o = Tt[t]), "" === n || n ? (i = parseFloat(o), n === !0 || isFinite(i) ? i || 0 : o) : o
		}
	}), pe.each(["height", "width"], function(e, t) {
		pe.cssHooks[t] = {
			get: function(e, n, r) {
				if (n) return xt.test(pe.css(e, "display")) && 0 === e.offsetWidth ? dt(e, wt, function() {
					return M(e, t, r)
				}) : M(e, t, r)
			},
			set: function(e, n, r) {
				var i = r && ht(e);
				return _(e, n, r ? F(e, t, r, fe.boxSizing && "border-box" === pe.css(e, "boxSizing", !1, i), i) : 0)
			}
		}
	}), fe.opacity || (pe.cssHooks.opacity = {
		get: function(e, t) {
			return vt.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
		},
		set: function(e, t) {
			var n = e.style,
				r = e.currentStyle,
				i = pe.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
				o = r && r.filter || n.filter || "";
			n.zoom = 1, (t >= 1 || "" === t) && "" === pe.trim(o.replace(yt, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || r && !r.filter) || (n.filter = yt.test(o) ? o.replace(yt, i) : o + " " + i)
		}
	}), pe.cssHooks.marginRight = L(fe.reliableMarginRight, function(e, t) {
		if (t) return dt(e, {
			display: "inline-block"
		}, gt, [e, "marginRight"])
	}), pe.cssHooks.marginLeft = L(fe.reliableMarginLeft, function(e, t) {
		if (t) return (parseFloat(gt(e, "marginLeft")) || (pe.contains(e.ownerDocument, e) ? e.getBoundingClientRect().left - dt(e, {
			marginLeft: 0
		}, function() {
			return e.getBoundingClientRect().left
		}) : 0)) + "px"
	}), pe.each({
		margin: "",
		padding: "",
		border: "Width"
	}, function(e, t) {
		pe.cssHooks[e + t] = {
			expand: function(n) {
				for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++) i[e + Oe[r] + t] = o[r] || o[r - 2] || o[0];
				return i
			}
		}, ct.test(e) || (pe.cssHooks[e + t].set = _)
	}), pe.fn.extend({
		css: function(e, t) {
			return Pe(this, function(e, t, n) {
				var r, i, o = {},
					a = 0;
				if (pe.isArray(t)) {
					for (r = ht(e), i = t.length; a < i; a++) o[t[a]] = pe.css(e, t[a], !1, r);
					return o
				}
				return void 0 !== n ? pe.style(e, t, n) : pe.css(e, t)
			}, e, t, arguments.length > 1)
		},
		show: function() {
			return q(this, !0)
		},
		hide: function() {
			return q(this)
		},
		toggle: function(e) {
			return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
				Re(this) ? pe(this).show() : pe(this).hide()
			})
		}
	}), pe.Tween = O, O.prototype = {
		constructor: O,
		init: function(e, t, n, r, i, o) {
			this.elem = e, this.prop = n, this.easing = i || pe.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (pe.cssNumber[n] ? "" : "px")
		},
		cur: function() {
			var e = O.propHooks[this.prop];
			return e && e.get ? e.get(this) : O.propHooks._default.get(this)
		},
		run: function(e) {
			var t, n = O.propHooks[this.prop];
			return this.options.duration ? this.pos = t = pe.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : O.propHooks._default.set(this), this
		}
	}, O.prototype.init.prototype = O.prototype, O.propHooks = {
		_default: {
			get: function(e) {
				var t;
				return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = pe.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0)
			},
			set: function(e) {
				pe.fx.step[e.prop] ? pe.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[pe.cssProps[e.prop]] && !pe.cssHooks[e.prop] ? e.elem[e.prop] = e.now : pe.style(e.elem, e.prop, e.now + e.unit)
			}
		}
	}, O.propHooks.scrollTop = O.propHooks.scrollLeft = {
		set: function(e) {
			e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
		}
	}, pe.easing = {
		linear: function(e) {
			return e
		},
		swing: function(e) {
			return .5 - Math.cos(e * Math.PI) / 2
		},
		_default: "swing"
	}, pe.fx = O.prototype.init, pe.fx.step = {};
	var Nt, kt, St = /^(?:toggle|show|hide)$/,
		At = /queueHooks$/;
	pe.Animation = pe.extend($, {
			tweeners: {
				"*": [function(e, t) {
					var n = this.createTween(e, t);
					return d(n.elem, e, Me.exec(t), n), n
				}]
			},
			tweener: function(e, t) {
				pe.isFunction(e) ? (t = e, e = ["*"]) : e = e.match(De);
				for (var n, r = 0, i = e.length; r < i; r++) n = e[r], $.tweeners[n] = $.tweeners[n] || [], $.tweeners[n].unshift(t)
			},
			prefilters: [W],
			prefilter: function(e, t) {
				t ? $.prefilters.unshift(e) : $.prefilters.push(e)
			}
		}), pe.speed = function(e, t, n) {
			var r = e && "object" == typeof e ? pe.extend({}, e) : {
				complete: n || !n && t || pe.isFunction(e) && e,
				duration: e,
				easing: n && t || t && !pe.isFunction(t) && t
			};
			return r.duration = pe.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in pe.fx.speeds ? pe.fx.speeds[r.duration] : pe.fx.speeds._default, null != r.queue && r.queue !== !0 || (r.queue = "fx"), r.old = r.complete, r.complete = function() {
				pe.isFunction(r.old) && r.old.call(this), r.queue && pe.dequeue(this, r.queue)
			}, r
		}, pe.fn.extend({
			fadeTo: function(e, t, n, r) {
				return this.filter(Re).css("opacity", 0).show().end().animate({
					opacity: t
				}, e, n, r)
			},
			animate: function(e, t, n, r) {
				var i = pe.isEmptyObject(e),
					o = pe.speed(t, n, r),
					a = function() {
						var t = $(this, pe.extend({}, e), o);
						(i || pe._data(this, "finish")) && t.stop(!0)
					};
				return a.finish = a, i || o.queue === !1 ? this.each(a) : this.queue(o.queue, a)
			},
			stop: function(e, t, n) {
				var r = function(e) {
					var t = e.stop;
					delete e.stop, t(n)
				};
				return "string" != typeof e && (n = t, t = e, e = void 0), t && e !== !1 && this.queue(e || "fx", []), this.each(function() {
					var t = !0,
						i = null != e && e + "queueHooks",
						o = pe.timers,
						a = pe._data(this);
					if (i) a[i] && a[i].stop && r(a[i]);
					else
						for (i in a) a[i] && a[i].stop && At.test(i) && r(a[i]);
					for (i = o.length; i--;) o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), t = !1, o.splice(i, 1));
					!t && n || pe.dequeue(this, e)
				})
			},
			finish: function(e) {
				return e !== !1 && (e = e || "fx"), this.each(function() {
					var t, n = pe._data(this),
						r = n[e + "queue"],
						i = n[e + "queueHooks"],
						o = pe.timers,
						a = r ? r.length : 0;
					for (n.finish = !0, pe.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
					for (t = 0; t < a; t++) r[t] && r[t].finish && r[t].finish.call(this);
					delete n.finish
				})
			}
		}), pe.each(["toggle", "show", "hide"], function(e, t) {
			var n = pe.fn[t];
			pe.fn[t] = function(e, r, i) {
				return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(P(t, !0), e, r, i)
			}
		}), pe.each({
			slideDown: P("show"),
			slideUp: P("hide"),
			slideToggle: P("toggle"),
			fadeIn: {
				opacity: "show"
			},
			fadeOut: {
				opacity: "hide"
			},
			fadeToggle: {
				opacity: "toggle"
			}
		}, function(e, t) {
			pe.fn[e] = function(e, n, r) {
				return this.animate(t, e, n, r)
			}
		}), pe.timers = [], pe.fx.tick = function() {
			var e, t = pe.timers,
				n = 0;
			for (Nt = pe.now(); n < t.length; n++) e = t[n], e() || t[n] !== e || t.splice(n--, 1);
			t.length || pe.fx.stop(), Nt = void 0
		}, pe.fx.timer = function(e) {
			pe.timers.push(e), e() ? pe.fx.start() : pe.timers.pop()
		}, pe.fx.interval = 13, pe.fx.start = function() {
			kt || (kt = e.setInterval(pe.fx.tick, pe.fx.interval))
		}, pe.fx.stop = function() {
			e.clearInterval(kt), kt = null
		}, pe.fx.speeds = {
			slow: 600,
			fast: 200,
			_default: 400
		}, pe.fn.delay = function(t, n) {
			return t = pe.fx ? pe.fx.speeds[t] || t : t, n = n || "fx", this.queue(n, function(n, r) {
				var i = e.setTimeout(n, t);
				r.stop = function() {
					e.clearTimeout(i)
				}
			})
		},
		function() {
			var e, t = re.createElement("input"),
				n = re.createElement("div"),
				r = re.createElement("select"),
				i = r.appendChild(re.createElement("option"));
			n = re.createElement("div"), n.setAttribute("className", "t"), n.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", e = n.getElementsByTagName("a")[0], t.setAttribute("type", "checkbox"), n.appendChild(t), e = n.getElementsByTagName("a")[0], e.style.cssText = "top:1px", fe.getSetAttribute = "t" !== n.className, fe.style = /top/.test(e.getAttribute("style")), fe.hrefNormalized = "/a" === e.getAttribute("href"), fe.checkOn = !!t.value, fe.optSelected = i.selected, fe.enctype = !!re.createElement("form").enctype, r.disabled = !0, fe.optDisabled = !i.disabled, t = re.createElement("input"), t.setAttribute("value", ""), fe.input = "" === t.getAttribute("value"), t.value = "t", t.setAttribute("type", "radio"), fe.radioValue = "t" === t.value
		}();
	var Dt = /\r/g,
		jt = /[\x20\t\r\n\f]+/g;
	pe.fn.extend({
		val: function(e) {
			var t, n, r, i = this[0]; {
				if (arguments.length) return r = pe.isFunction(e), this.each(function(n) {
					var i;
					1 === this.nodeType && (i = r ? e.call(this, n, pe(this).val()) : e, null == i ? i = "" : "number" == typeof i ? i += "" : pe.isArray(i) && (i = pe.map(i, function(e) {
						return null == e ? "" : e + ""
					})), t = pe.valHooks[this.type] || pe.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i))
				});
				if (i) return t = pe.valHooks[i.type] || pe.valHooks[i.nodeName.toLowerCase()], t && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : (n = i.value, "string" == typeof n ? n.replace(Dt, "") : null == n ? "" : n)
			}
		}
	}), pe.extend({
		valHooks: {
			option: {
				get: function(e) {
					var t = pe.find.attr(e, "value");
					return null != t ? t : pe.trim(pe.text(e)).replace(jt, " ")
				}
			},
			select: {
				get: function(e) {
					for (var t, n, r = e.options, i = e.selectedIndex, o = "select-one" === e.type || i < 0, a = o ? null : [], s = o ? i + 1 : r.length, u = i < 0 ? s : o ? i : 0; u < s; u++)
						if (n = r[u], (n.selected || u === i) && (fe.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !pe.nodeName(n.parentNode, "optgroup"))) {
							if (t = pe(n).val(), o) return t;
							a.push(t)
						}
					return a
				},
				set: function(e, t) {
					for (var n, r, i = e.options, o = pe.makeArray(t), a = i.length; a--;)
						if (r = i[a], pe.inArray(pe.valHooks.option.get(r), o) > -1) try {
							r.selected = n = !0
						} catch (s) {
							r.scrollHeight
						} else r.selected = !1;
					return n || (e.selectedIndex = -1), i
				}
			}
		}
	}), pe.each(["radio", "checkbox"], function() {
		pe.valHooks[this] = {
			set: function(e, t) {
				if (pe.isArray(t)) return e.checked = pe.inArray(pe(e).val(), t) > -1
			}
		}, fe.checkOn || (pe.valHooks[this].get = function(e) {
			return null === e.getAttribute("value") ? "on" : e.value
		})
	});
	var Lt, Ht, qt = pe.expr.attrHandle,
		_t = /^(?:checked|selected)$/i,
		Ft = fe.getSetAttribute,
		Mt = fe.input;
	pe.fn.extend({
		attr: function(e, t) {
			return Pe(this, pe.attr, e, t, arguments.length > 1)
		},
		removeAttr: function(e) {
			return this.each(function() {
				pe.removeAttr(this, e)
			})
		}
	}), pe.extend({
		attr: function(e, t, n) {
			var r, i, o = e.nodeType;
			if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof e.getAttribute ? pe.prop(e, t, n) : (1 === o && pe.isXMLDoc(e) || (t = t.toLowerCase(), i = pe.attrHooks[t] || (pe.expr.match.bool.test(t) ? Ht : Lt)), void 0 !== n ? null === n ? void pe.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : (r = pe.find.attr(e, t), null == r ? void 0 : r))
		},
		attrHooks: {
			type: {
				set: function(e, t) {
					if (!fe.radioValue && "radio" === t && pe.nodeName(e, "input")) {
						var n = e.value;
						return e.setAttribute("type", t), n && (e.value = n), t
					}
				}
			}
		},
		removeAttr: function(e, t) {
			var n, r, i = 0,
				o = t && t.match(De);
			if (o && 1 === e.nodeType)
				for (; n = o[i++];) r = pe.propFix[n] || n, pe.expr.match.bool.test(n) ? Mt && Ft || !_t.test(n) ? e[r] = !1 : e[pe.camelCase("default-" + n)] = e[r] = !1 : pe.attr(e, n, ""), e.removeAttribute(Ft ? n : r)
		}
	}), Ht = {
		set: function(e, t, n) {
			return t === !1 ? pe.removeAttr(e, n) : Mt && Ft || !_t.test(n) ? e.setAttribute(!Ft && pe.propFix[n] || n, n) : e[pe.camelCase("default-" + n)] = e[n] = !0, n
		}
	}, pe.each(pe.expr.match.bool.source.match(/\w+/g), function(e, t) {
		var n = qt[t] || pe.find.attr;
		Mt && Ft || !_t.test(t) ? qt[t] = function(e, t, r) {
			var i, o;
			return r || (o = qt[t], qt[t] = i, i = null != n(e, t, r) ? t.toLowerCase() : null, qt[t] = o), i
		} : qt[t] = function(e, t, n) {
			if (!n) return e[pe.camelCase("default-" + t)] ? t.toLowerCase() : null
		}
	}), Mt && Ft || (pe.attrHooks.value = {
		set: function(e, t, n) {
			return pe.nodeName(e, "input") ? void(e.defaultValue = t) : Lt && Lt.set(e, t, n)
		}
	}), Ft || (Lt = {
		set: function(e, t, n) {
			var r = e.getAttributeNode(n);
			if (r || e.setAttributeNode(r = e.ownerDocument.createAttribute(n)), r.value = t += "", "value" === n || t === e.getAttribute(n)) return t
		}
	}, qt.id = qt.name = qt.coords = function(e, t, n) {
		var r;
		if (!n) return (r = e.getAttributeNode(t)) && "" !== r.value ? r.value : null
	}, pe.valHooks.button = {
		get: function(e, t) {
			var n = e.getAttributeNode(t);
			if (n && n.specified) return n.value
		},
		set: Lt.set
	}, pe.attrHooks.contenteditable = {
		set: function(e, t, n) {
			Lt.set(e, "" !== t && t, n)
		}
	}, pe.each(["width", "height"], function(e, t) {
		pe.attrHooks[t] = {
			set: function(e, n) {
				if ("" === n) return e.setAttribute(t, "auto"), n
			}
		}
	})), fe.style || (pe.attrHooks.style = {
		get: function(e) {
			return e.style.cssText || void 0
		},
		set: function(e, t) {
			return e.style.cssText = t + ""
		}
	});
	var Ot = /^(?:input|select|textarea|button|object)$/i,
		Rt = /^(?:a|area)$/i;
	pe.fn.extend({
		prop: function(e, t) {
			return Pe(this, pe.prop, e, t, arguments.length > 1)
		},
		removeProp: function(e) {
			return e = pe.propFix[e] || e, this.each(function() {
				try {
					this[e] = void 0, delete this[e]
				} catch (t) {}
			})
		}
	}), pe.extend({
		prop: function(e, t, n) {
			var r, i, o = e.nodeType;
			if (3 !== o && 8 !== o && 2 !== o) return 1 === o && pe.isXMLDoc(e) || (t = pe.propFix[t] || t, i = pe.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
		},
		propHooks: {
			tabIndex: {
				get: function(e) {
					var t = pe.find.attr(e, "tabindex");
					return t ? parseInt(t, 10) : Ot.test(e.nodeName) || Rt.test(e.nodeName) && e.href ? 0 : -1
				}
			}
		},
		propFix: {
			"for": "htmlFor",
			"class": "className"
		}
	}), fe.hrefNormalized || pe.each(["href", "src"], function(e, t) {
		pe.propHooks[t] = {
			get: function(e) {
				return e.getAttribute(t, 4)
			}
		}
	}), fe.optSelected || (pe.propHooks.selected = {
		get: function(e) {
			var t = e.parentNode;
			return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
		},
		set: function(e) {
			var t = e.parentNode;
			t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
		}
	}), pe.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
		pe.propFix[this.toLowerCase()] = this
	}), fe.enctype || (pe.propFix.enctype = "encoding");
	var Pt = /[\t\r\n\f]/g;
	pe.fn.extend({
		addClass: function(e) {
			var t, n, r, i, o, a, s, u = 0;
			if (pe.isFunction(e)) return this.each(function(t) {
				pe(this).addClass(e.call(this, t, z(this)))
			});
			if ("string" == typeof e && e)
				for (t = e.match(De) || []; n = this[u++];)
					if (i = z(n), r = 1 === n.nodeType && (" " + i + " ").replace(Pt, " ")) {
						for (a = 0; o = t[a++];) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
						s = pe.trim(r), i !== s && pe.attr(n, "class", s)
					}
			return this
		},
		removeClass: function(e) {
			var t, n, r, i, o, a, s, u = 0;
			if (pe.isFunction(e)) return this.each(function(t) {
				pe(this).removeClass(e.call(this, t, z(this)))
			});
			if (!arguments.length) return this.attr("class", "");
			if ("string" == typeof e && e)
				for (t = e.match(De) || []; n = this[u++];)
					if (i = z(n), r = 1 === n.nodeType && (" " + i + " ").replace(Pt, " ")) {
						for (a = 0; o = t[a++];)
							for (; r.indexOf(" " + o + " ") > -1;) r = r.replace(" " + o + " ", " ");
						s = pe.trim(r), i !== s && pe.attr(n, "class", s)
					}
			return this
		},
		toggleClass: function(e, t) {
			var n = typeof e;
			return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : pe.isFunction(e) ? this.each(function(n) {
				pe(this).toggleClass(e.call(this, n, z(this), t), t)
			}) : this.each(function() {
				var t, r, i, o;
				if ("string" === n)
					for (r = 0, i = pe(this), o = e.match(De) || []; t = o[r++];) i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
				else void 0 !== e && "boolean" !== n || (t = z(this), t && pe._data(this, "__className__", t), pe.attr(this, "class", t || e === !1 ? "" : pe._data(this, "__className__") || ""))
			})
		},
		hasClass: function(e) {
			var t, n, r = 0;
			for (t = " " + e + " "; n = this[r++];)
				if (1 === n.nodeType && (" " + z(n) + " ").replace(Pt, " ").indexOf(t) > -1) return !0;
			return !1
		}
	}), pe.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
		pe.fn[t] = function(e, n) {
			return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
		}
	}), pe.fn.extend({
		hover: function(e, t) {
			return this.mouseenter(e).mouseleave(t || e)
		}
	});
	var Bt = e.location,
		Wt = pe.now(),
		It = /\?/,
		$t = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
	pe.parseJSON = function(t) {
		if (e.JSON && e.JSON.parse) return e.JSON.parse(t + "");
		var n, r = null,
			i = pe.trim(t + "");
		return i && !pe.trim(i.replace($t, function(e, t, i, o) {
			return n && t && (r = 0), 0 === r ? e : (n = i || t, r += !o - !i, "")
		})) ? Function("return " + i)() : pe.error("Invalid JSON: " + t)
	}, pe.parseXML = function(t) {
		var n, r;
		if (!t || "string" != typeof t) return null;
		try {
			e.DOMParser ? (r = new e.DOMParser, n = r.parseFromString(t, "text/xml")) : (n = new e.ActiveXObject("Microsoft.XMLDOM"), n.async = "false", n.loadXML(t))
		} catch (i) {
			n = void 0
		}
		return n && n.documentElement && !n.getElementsByTagName("parsererror").length || pe.error("Invalid XML: " + t), n
	};
	var zt = /#.*$/,
		Xt = /([?&])_=[^&]*/,
		Ut = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
		Vt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
		Yt = /^(?:GET|HEAD)$/,
		Jt = /^\/\//,
		Gt = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
		Kt = {},
		Qt = {},
		Zt = "*/".concat("*"),
		en = Bt.href,
		tn = Gt.exec(en.toLowerCase()) || [];
	pe.extend({
		active: 0,
		lastModified: {},
		etag: {},
		ajaxSettings: {
			url: en,
			type: "GET",
			isLocal: Vt.test(tn[1]),
			global: !0,
			processData: !0,
			async: !0,
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			accepts: {
				"*": Zt,
				text: "text/plain",
				html: "text/html",
				xml: "application/xml, text/xml",
				json: "application/json, text/javascript"
			},
			contents: {
				xml: /\bxml\b/,
				html: /\bhtml/,
				json: /\bjson\b/
			},
			responseFields: {
				xml: "responseXML",
				text: "responseText",
				json: "responseJSON"
			},
			converters: {
				"* text": String,
				"text html": !0,
				"text json": pe.parseJSON,
				"text xml": pe.parseXML
			},
			flatOptions: {
				url: !0,
				context: !0
			}
		},
		ajaxSetup: function(e, t) {
			return t ? V(V(e, pe.ajaxSettings), t) : V(pe.ajaxSettings, e)
		},
		ajaxPrefilter: X(Kt),
		ajaxTransport: X(Qt),
		ajax: function(t, n) {
			function r(t, n, r, i) {
				var o, f, v, x, w, C = n;
				2 !== b && (b = 2, u && e.clearTimeout(u), c = void 0, s = i || "", T.readyState = t > 0 ? 4 : 0, o = t >= 200 && t < 300 || 304 === t, r && (x = Y(d, T, r)), x = J(d, x, T, o), o ? (d.ifModified && (w = T.getResponseHeader("Last-Modified"), w && (pe.lastModified[a] = w), w = T.getResponseHeader("etag"), w && (pe.etag[a] = w)), 204 === t || "HEAD" === d.type ? C = "nocontent" : 304 === t ? C = "notmodified" : (C = x.state, f = x.data, v = x.error, o = !v)) : (v = C, !t && C || (C = "error", t < 0 && (t = 0))), T.status = t, T.statusText = (n || C) + "", o ? g.resolveWith(p, [f, C, T]) : g.rejectWith(p, [T, C, v]), T.statusCode(y), y = void 0, l && h.trigger(o ? "ajaxSuccess" : "ajaxError", [T, d, o ? f : v]), m.fireWith(p, [T, C]), l && (h.trigger("ajaxComplete", [T, d]), --pe.active || pe.event.trigger("ajaxStop")))
			}
			"object" == typeof t && (n = t, t = void 0), n = n || {};
			var i, o, a, s, u, l, c, f, d = pe.ajaxSetup({}, n),
				p = d.context || d,
				h = d.context && (p.nodeType || p.jquery) ? pe(p) : pe.event,
				g = pe.Deferred(),
				m = pe.Callbacks("once memory"),
				y = d.statusCode || {},
				v = {},
				x = {},
				b = 0,
				w = "canceled",
				T = {
					readyState: 0,
					getResponseHeader: function(e) {
						var t;
						if (2 === b) {
							if (!f)
								for (f = {}; t = Ut.exec(s);) f[t[1].toLowerCase()] = t[2];
							t = f[e.toLowerCase()]
						}
						return null == t ? null : t
					},
					getAllResponseHeaders: function() {
						return 2 === b ? s : null
					},
					setRequestHeader: function(e, t) {
						var n = e.toLowerCase();
						return b || (e = x[n] = x[n] || e, v[e] = t), this
					},
					overrideMimeType: function(e) {
						return b || (d.mimeType = e), this
					},
					statusCode: function(e) {
						var t;
						if (e)
							if (b < 2)
								for (t in e) y[t] = [y[t], e[t]];
							else T.always(e[T.status]);
						return this
					},
					abort: function(e) {
						var t = e || w;
						return c && c.abort(t), r(0, t), this
					}
				};
			if (g.promise(T).complete = m.add, T.success = T.done, T.error = T.fail, d.url = ((t || d.url || en) + "").replace(zt, "").replace(Jt, tn[1] + "//"), d.type = n.method || n.type || d.method || d.type, d.dataTypes = pe.trim(d.dataType || "*").toLowerCase().match(De) || [""], null == d.crossDomain && (i = Gt.exec(d.url.toLowerCase()), d.crossDomain = !(!i || i[1] === tn[1] && i[2] === tn[2] && (i[3] || ("http:" === i[1] ? "80" : "443")) === (tn[3] || ("http:" === tn[1] ? "80" : "443")))), d.data && d.processData && "string" != typeof d.data && (d.data = pe.param(d.data, d.traditional)), U(Kt, d, n, T), 2 === b) return T;
			l = pe.event && d.global, l && 0 === pe.active++ && pe.event.trigger("ajaxStart"), d.type = d.type.toUpperCase(), d.hasContent = !Yt.test(d.type), a = d.url, d.hasContent || (d.data && (a = d.url += (It.test(a) ? "&" : "?") + d.data, delete d.data), d.cache === !1 && (d.url = Xt.test(a) ? a.replace(Xt, "$1_=" + Wt++) : a + (It.test(a) ? "&" : "?") + "_=" + Wt++)), d.ifModified && (pe.lastModified[a] && T.setRequestHeader("If-Modified-Since", pe.lastModified[a]), pe.etag[a] && T.setRequestHeader("If-None-Match", pe.etag[a])), (d.data && d.hasContent && d.contentType !== !1 || n.contentType) && T.setRequestHeader("Content-Type", d.contentType), T.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + Zt + "; q=0.01" : "") : d.accepts["*"]);
			for (o in d.headers) T.setRequestHeader(o, d.headers[o]);
			if (d.beforeSend && (d.beforeSend.call(p, T, d) === !1 || 2 === b)) return T.abort();
			w = "abort";
			for (o in {
					success: 1,
					error: 1,
					complete: 1
				}) T[o](d[o]);
			if (c = U(Qt, d, n, T)) {
				if (T.readyState = 1, l && h.trigger("ajaxSend", [T, d]), 2 === b) return T;
				d.async && d.timeout > 0 && (u = e.setTimeout(function() {
					T.abort("timeout")
				}, d.timeout));
				try {
					b = 1, c.send(v, r)
				} catch (C) {
					if (!(b < 2)) throw C;
					r(-1, C)
				}
			} else r(-1, "No Transport");
			return T
		},
		getJSON: function(e, t, n) {
			return pe.get(e, t, n, "json")
		},
		getScript: function(e, t) {
			return pe.get(e, void 0, t, "script")
		}
	}), pe.each(["get", "post"], function(e, t) {
		pe[t] = function(e, n, r, i) {
			return pe.isFunction(n) && (i = i || r, r = n, n = void 0), pe.ajax(pe.extend({
				url: e,
				type: t,
				dataType: i,
				data: n,
				success: r
			}, pe.isPlainObject(e) && e))
		}
	}), pe._evalUrl = function(e) {
		return pe.ajax({
			url: e,
			type: "GET",
			dataType: "script",
			cache: !0,
			async: !1,
			global: !1,
			"throws": !0
		})
	}, pe.fn.extend({
		wrapAll: function(e) {
			if (pe.isFunction(e)) return this.each(function(t) {
				pe(this).wrapAll(e.call(this, t))
			});
			if (this[0]) {
				var t = pe(e, this[0].ownerDocument).eq(0).clone(!0);
				this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
					for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;) e = e.firstChild;
					return e
				}).append(this)
			}
			return this
		},
		wrapInner: function(e) {
			return pe.isFunction(e) ? this.each(function(t) {
				pe(this).wrapInner(e.call(this, t))
			}) : this.each(function() {
				var t = pe(this),
					n = t.contents();
				n.length ? n.wrapAll(e) : t.append(e)
			})
		},
		wrap: function(e) {
			var t = pe.isFunction(e);
			return this.each(function(n) {
				pe(this).wrapAll(t ? e.call(this, n) : e)
			})
		},
		unwrap: function() {
			return this.parent().each(function() {
				pe.nodeName(this, "body") || pe(this).replaceWith(this.childNodes)
			}).end()
		}
	}), pe.expr.filters.hidden = function(e) {
		return fe.reliableHiddenOffsets() ? e.offsetWidth <= 0 && e.offsetHeight <= 0 && !e.getClientRects().length : K(e)
	}, pe.expr.filters.visible = function(e) {
		return !pe.expr.filters.hidden(e)
	};
	var nn = /%20/g,
		rn = /\[\]$/,
		on = /\r?\n/g,
		an = /^(?:submit|button|image|reset|file)$/i,
		sn = /^(?:input|select|textarea|keygen)/i;
	pe.param = function(e, t) {
		var n, r = [],
			i = function(e, t) {
				t = pe.isFunction(t) ? t() : null == t ? "" : t, r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
			};
		if (void 0 === t && (t = pe.ajaxSettings && pe.ajaxSettings.traditional), pe.isArray(e) || e.jquery && !pe.isPlainObject(e)) pe.each(e, function() {
			i(this.name, this.value)
		});
		else
			for (n in e) Q(n, e[n], t, i);
		return r.join("&").replace(nn, "+")
	}, pe.fn.extend({
		serialize: function() {
			return pe.param(this.serializeArray())
		},
		serializeArray: function() {
			return this.map(function() {
				var e = pe.prop(this, "elements");
				return e ? pe.makeArray(e) : this
			}).filter(function() {
				var e = this.type;
				return this.name && !pe(this).is(":disabled") && sn.test(this.nodeName) && !an.test(e) && (this.checked || !Be.test(e))
			}).map(function(e, t) {
				var n = pe(this).val();
				return null == n ? null : pe.isArray(n) ? pe.map(n, function(e) {
					return {
						name: t.name,
						value: e.replace(on, "\r\n")
					}
				}) : {
					name: t.name,
					value: n.replace(on, "\r\n")
				}
			}).get()
		}
	}), pe.ajaxSettings.xhr = void 0 !== e.ActiveXObject ? function() {
		return this.isLocal ? ee() : re.documentMode > 8 ? Z() : /^(get|post|head|put|delete|options)$/i.test(this.type) && Z() || ee()
	} : Z;
	var un = 0,
		ln = {},
		cn = pe.ajaxSettings.xhr();
	e.attachEvent && e.attachEvent("onunload", function() {
		for (var e in ln) ln[e](void 0, !0)
	}), fe.cors = !!cn && "withCredentials" in cn, cn = fe.ajax = !!cn, cn && pe.ajaxTransport(function(t) {
		if (!t.crossDomain || fe.cors) {
			var n;
			return {
				send: function(r, i) {
					var o, a = t.xhr(),
						s = ++un;
					if (a.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
						for (o in t.xhrFields) a[o] = t.xhrFields[o];
					t.mimeType && a.overrideMimeType && a.overrideMimeType(t.mimeType), t.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest");
					for (o in r) void 0 !== r[o] && a.setRequestHeader(o, r[o] + "");
					a.send(t.hasContent && t.data || null), n = function(e, r) {
						var o, u, l;
						if (n && (r || 4 === a.readyState))
							if (delete ln[s], n = void 0, a.onreadystatechange = pe.noop, r) 4 !== a.readyState && a.abort();
							else {
								l = {}, o = a.status, "string" == typeof a.responseText && (l.text = a.responseText);
								try {
									u = a.statusText
								} catch (c) {
									u = ""
								}
								o || !t.isLocal || t.crossDomain ? 1223 === o && (o = 204) : o = l.text ? 200 : 404
							}
						l && i(o, u, l, a.getAllResponseHeaders())
					}, t.async ? 4 === a.readyState ? e.setTimeout(n) : a.onreadystatechange = ln[s] = n : n()
				},
				abort: function() {
					n && n(void 0, !0)
				}
			}
		}
	}), pe.ajaxSetup({
		accepts: {
			script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
		},
		contents: {
			script: /\b(?:java|ecma)script\b/
		},
		converters: {
			"text script": function(e) {
				return pe.globalEval(e), e
			}
		}
	}), pe.ajaxPrefilter("script", function(e) {
		void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
	}), pe.ajaxTransport("script", function(e) {
		if (e.crossDomain) {
			var t, n = re.head || pe("head")[0] || re.documentElement;
			return {
				send: function(r, i) {
					t = re.createElement("script"), t.async = !0, e.scriptCharset && (t.charset = e.scriptCharset), t.src = e.url, t.onload = t.onreadystatechange = function(e, n) {
						(n || !t.readyState || /loaded|complete/.test(t.readyState)) && (t.onload = t.onreadystatechange = null, t.parentNode && t.parentNode.removeChild(t), t = null, n || i(200, "success"))
					}, n.insertBefore(t, n.firstChild)
				},
				abort: function() {
					t && t.onload(void 0, !0)
				}
			}
		}
	});
	var fn = [],
		dn = /(=)\?(?=&|$)|\?\?/;
	pe.ajaxSetup({
		jsonp: "callback",
		jsonpCallback: function() {
			var e = fn.pop() || pe.expando + "_" + Wt++;
			return this[e] = !0, e
		}
	}), pe.ajaxPrefilter("json jsonp", function(t, n, r) {
		var i, o, a, s = t.jsonp !== !1 && (dn.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && dn.test(t.data) && "data");
		if (s || "jsonp" === t.dataTypes[0]) return i = t.jsonpCallback = pe.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(dn, "$1" + i) : t.jsonp !== !1 && (t.url += (It.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), t.converters["script json"] = function() {
			return a || pe.error(i + " was not called"), a[0]
		}, t.dataTypes[0] = "json", o = e[i], e[i] = function() {
			a = arguments
		}, r.always(function() {
			void 0 === o ? pe(e).removeProp(i) : e[i] = o, t[i] && (t.jsonpCallback = n.jsonpCallback, fn.push(i)), a && pe.isFunction(o) && o(a[0]), a = o = void 0
		}), "script"
	}), pe.parseHTML = function(e, t, n) {
		if (!e || "string" != typeof e) return null;
		"boolean" == typeof t && (n = t, t = !1), t = t || re;
		var r = Te.exec(e),
			i = !n && [];
		return r ? [t.createElement(r[1])] : (r = y([e], t, i), i && i.length && pe(i).remove(), pe.merge([], r.childNodes))
	};
	var pn = pe.fn.load;
	return pe.fn.load = function(e, t, n) {
		if ("string" != typeof e && pn) return pn.apply(this, arguments);
		var r, i, o, a = this,
			s = e.indexOf(" ");
		return s > -1 && (r = pe.trim(e.slice(s, e.length)), e = e.slice(0, s)), pe.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), a.length > 0 && pe.ajax({
			url: e,
			type: i || "GET",
			dataType: "html",
			data: t
		}).done(function(e) {
			o = arguments, a.html(r ? pe("<div>").append(pe.parseHTML(e)).find(r) : e)
		}).always(n && function(e, t) {
			a.each(function() {
				n.apply(this, o || [e.responseText, t, e])
			})
		}), this
	}, pe.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
		pe.fn[t] = function(e) {
			return this.on(t, e)
		}
	}), pe.expr.filters.animated = function(e) {
		return pe.grep(pe.timers, function(t) {
			return e === t.elem
		}).length
	}, pe.offset = {
		setOffset: function(e, t, n) {
			var r, i, o, a, s, u, l, c = pe.css(e, "position"),
				f = pe(e),
				d = {};
			"static" === c && (e.style.position = "relative"), s = f.offset(), o = pe.css(e, "top"), u = pe.css(e, "left"), l = ("absolute" === c || "fixed" === c) && pe.inArray("auto", [o, u]) > -1, l ? (r = f.position(), a = r.top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), pe.isFunction(t) && (t = t.call(e, n, pe.extend({}, s))), null != t.top && (d.top = t.top - s.top + a), null != t.left && (d.left = t.left - s.left + i), "using" in t ? t.using.call(e, d) : f.css(d)
		}
	}, pe.fn.extend({
		offset: function(e) {
			if (arguments.length) return void 0 === e ? this : this.each(function(t) {
				pe.offset.setOffset(this, e, t)
			});
			var t, n, r = {
					top: 0,
					left: 0
				},
				i = this[0],
				o = i && i.ownerDocument;
			if (o) return t = o.documentElement, pe.contains(t, i) ? ("undefined" != typeof i.getBoundingClientRect && (r = i.getBoundingClientRect()), n = te(o), {
				top: r.top + (n.pageYOffset || t.scrollTop) - (t.clientTop || 0),
				left: r.left + (n.pageXOffset || t.scrollLeft) - (t.clientLeft || 0)
			}) : r
		},
		position: function() {
			if (this[0]) {
				var e, t, n = {
						top: 0,
						left: 0
					},
					r = this[0];
				return "fixed" === pe.css(r, "position") ? t = r.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), pe.nodeName(e[0], "html") || (n = e.offset()), n.top += pe.css(e[0], "borderTopWidth", !0), n.left += pe.css(e[0], "borderLeftWidth", !0)), {
					top: t.top - n.top - pe.css(r, "marginTop", !0),
					left: t.left - n.left - pe.css(r, "marginLeft", !0)
				}
			}
		},
		offsetParent: function() {
			return this.map(function() {
				for (var e = this.offsetParent; e && !pe.nodeName(e, "html") && "static" === pe.css(e, "position");) e = e.offsetParent;
				return e || pt
			})
		}
	}), pe.each({
		scrollLeft: "pageXOffset",
		scrollTop: "pageYOffset"
	}, function(e, t) {
		var n = /Y/.test(t);
		pe.fn[e] = function(r) {
			return Pe(this, function(e, r, i) {
				var o = te(e);
				return void 0 === i ? o ? t in o ? o[t] : o.document.documentElement[r] : e[r] : void(o ? o.scrollTo(n ? pe(o).scrollLeft() : i, n ? i : pe(o).scrollTop()) : e[r] = i)
			}, e, r, arguments.length, null)
		}
	}), pe.each(["top", "left"], function(e, t) {
		pe.cssHooks[t] = L(fe.pixelPosition, function(e, n) {
			if (n) return n = gt(e, t), ft.test(n) ? pe(e).position()[t] + "px" : n
		})
	}), pe.each({
		Height: "height",
		Width: "width"
	}, function(e, t) {
		pe.each({
			padding: "inner" + e,
			content: t,
			"": "outer" + e
		}, function(n, r) {
			pe.fn[r] = function(r, i) {
				var o = arguments.length && (n || "boolean" != typeof r),
					a = n || (r === !0 || i === !0 ? "margin" : "border");
				return Pe(this, function(t, n, r) {
					var i;
					return pe.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (i = t.documentElement, Math.max(t.body["scroll" + e], i["scroll" + e], t.body["offset" + e], i["offset" + e], i["client" + e])) : void 0 === r ? pe.css(t, n, a) : pe.style(t, n, r, a)
				}, t, o ? r : void 0, o, null)
			}
		})
	}), pe.fn.extend({
		bind: function(e, t, n) {
			return this.on(e, null, t, n)
		},
		unbind: function(e, t) {
			return this.off(e, null, t)
		},
		delegate: function(e, t, n, r) {
			return this.on(t, e, n, r)
		},
		undelegate: function(e, t, n) {
			return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
		}
	}), pe.fn.size = function() {
		return this.length
	}, pe.fn.andSelf = pe.fn.addBack, layui.define(function(e) {
		e("jquery", pe)
	}), pe
});
! function(e, t) {
	"use strict";
	var i, n, a = e.layui && layui.define,
		o = {
			getPath: function() {
				var e = document.scripts,
					t = e[e.length - 1],
					i = t.src;
				if (!t.getAttribute("merge")) return i.substring(0, i.lastIndexOf("/") + 1)
			}(),
			config: {},
			end: {},
			minIndex: 0,
			minLeft: [],
			btn: ["&#x786E;&#x5B9A;", "&#x53D6;&#x6D88;"],
			type: ["dialog", "page", "iframe", "loading", "tips"]
		},
		r = {
			v: "3.0.1",
			ie: function() {
				var t = navigator.userAgent.toLowerCase();
				return !!(e.ActiveXObject || "ActiveXObject" in e) && ((t.match(/msie\s(\d+)/) || [])[1] || "11")
			}(),
			index: e.layer && e.layer.v ? 1e5 : 0,
			path: o.getPath,
			config: function(e, t) {
				return e = e || {}, r.cache = o.config = i.extend({}, o.config, e), r.path = o.config.path || r.path, "string" == typeof e.extend && (e.extend = [e.extend]), o.config.path && r.ready(), e.extend ? (a ? layui.addcss("modules/layer/" + e.extend) : r.link("skin/" + e.extend), this) : this
			},
			link: function(t, n, a) {
				if (r.path) {
					var o = i("head")[0],
						l = document.createElement("link");
					"string" == typeof n && (a = n);
					var s = (a || t).replace(/\.|\//g, ""),
						f = "layuicss-" + s,
						c = 0;
					l.rel = "stylesheet", l.href = r.path + t, l.id = f, i("#" + f)[0] || o.appendChild(l), "function" == typeof n && ! function d() {
						return ++c > 80 ? e.console && console.error("layer.css: Invalid") : void(1989 === parseInt(i("#" + f).css("width")) ? n() : setTimeout(d, 100))
					}()
				}
			},
			ready: function(e) {
				var t = "skinlayercss",
					i = "1110";
				return a ? layui.addcss("modules/layer/default/layer.css?v=" + r.v + i, e, t) : r.link("skin/default/layer.css?v=" + r.v + i, e, t), this
			},
			alert: function(e, t, n) {
				var a = "function" == typeof t;
				return a && (n = t), r.open(i.extend({
					content: e,
					yes: n
				}, a ? {} : t))
			},
			confirm: function(e, t, n, a) {
				var l = "function" == typeof t;
				return l && (a = n, n = t), r.open(i.extend({
					content: e,
					btn: o.btn,
					yes: n,
					btn2: a
				}, l ? {} : t))
			},
			msg: function(e, n, a) {
				var l = "function" == typeof n,
					f = o.config.skin,
					c = (f ? f + " " + f + "-msg" : "") || "layui-layer-msg",
					d = s.anim.length - 1;
				return l && (a = n), r.open(i.extend({
					content: e,
					time: 3e3,
					shade: !1,
					skin: c,
					title: !1,
					closeBtn: !1,
					btn: !1,
					resize: !1,
					end: a
				}, l && !o.config.skin ? {
					skin: c + " layui-layer-hui",
					anim: d
				} : function() {
					return n = n || {}, (n.icon === -1 || n.icon === t && !o.config.skin) && (n.skin = c + " " + (n.skin || "layui-layer-hui")), n
				}()))
			},
			load: function(e, t) {
				return r.open(i.extend({
					type: 3,
					icon: e || 0,
					resize: !1,
					shade: .01
				}, t))
			},
			tips: function(e, t, n) {
				return r.open(i.extend({
					type: 4,
					content: [e, t],
					closeBtn: !1,
					time: 3e3,
					shade: !1,
					resize: !1,
					fixed: !1,
					maxWidth: 210
				}, n))
			}
		},
		l = function(e) {
			var t = this;
			t.index = ++r.index, t.config = i.extend({}, t.config, o.config, e), document.body ? t.creat() : setTimeout(function() {
				t.creat()
			}, 50)
		};
	l.pt = l.prototype;
	var s = ["layui-layer", ".layui-layer-title", ".layui-layer-main", ".layui-layer-dialog", "layui-layer-iframe", "layui-layer-content", "layui-layer-btn", "layui-layer-close"];
	s.anim = ["layer-anim", "layer-anim-01", "layer-anim-02", "layer-anim-03", "layer-anim-04", "layer-anim-05", "layer-anim-06"], l.pt.config = {
		type: 0,
		shade: .3,
		fixed: !0,
		move: s[1],
		title: "&#x4FE1;&#x606F;",
		offset: "auto",
		area: "auto",
		closeBtn: 1,
		time: 0,
		zIndex: 19891014,
		maxWidth: 360,
		anim: 0,
		icon: -1,
		moveType: 1,
		resize: !0,
		scrollbar: !0,
		tips: 2
	}, l.pt.vessel = function(e, t) {
		var n = this,
			a = n.index,
			r = n.config,
			l = r.zIndex + a,
			f = "object" == typeof r.title,
			c = r.maxmin && (1 === r.type || 2 === r.type),
			d = r.title ? '<div class="layui-layer-title" style="' + (f ? r.title[1] : "") + '">' + (f ? r.title[0] : r.title) + "</div>" : "";
		return r.zIndex = l, t([r.shade ? '<div class="layui-layer-shade" id="layui-layer-shade' + a + '" times="' + a + '" style="' + ("z-index:" + (l - 1) + "; background-color:" + (r.shade[1] || "#000") + "; opacity:" + (r.shade[0] || r.shade) + "; filter:alpha(opacity=" + (100 * r.shade[0] || 100 * r.shade) + ");") + '"></div>' : "", '<div class="' + s[0] + (" layui-layer-" + o.type[r.type]) + (0 != r.type && 2 != r.type || r.shade ? "" : " layui-layer-border") + " " + (r.skin || "") + '" id="' + s[0] + a + '" type="' + o.type[r.type] + '" times="' + a + '" showtime="' + r.time + '" conType="' + (e ? "object" : "string") + '" style="z-index: ' + l + "; width:" + r.area[0] + ";height:" + r.area[1] + (r.fixed ? "" : ";position:absolute;") + '">' + (e && 2 != r.type ? "" : d) + '<div id="' + (r.id || "") + '" class="layui-layer-content' + (0 == r.type && r.icon !== -1 ? " layui-layer-padding" : "") + (3 == r.type ? " layui-layer-loading" + r.icon : "") + '">' + (0 == r.type && r.icon !== -1 ? '<i class="layui-layer-ico layui-layer-ico' + r.icon + '"></i>' : "") + (1 == r.type && e ? "" : r.content || "") + '</div><span class="layui-layer-setwin">' + function() {
			var e = c ? '<a class="layui-layer-min" href="javascript:;"><cite></cite></a><a class="layui-layer-ico layui-layer-max" href="javascript:;"></a>' : "";
			return r.closeBtn && (e += '<a class="layui-layer-ico ' + s[7] + " " + s[7] + (r.title ? r.closeBtn : 4 == r.type ? "1" : "2") + '" href="javascript:;"></a>'), e
		}() + "</span>" + (r.btn ? function() {
			var e = "";
			"string" == typeof r.btn && (r.btn = [r.btn]);
			for (var t = 0, i = r.btn.length; t < i; t++) e += '<a class="' + s[6] + t + '">' + r.btn[t] + "</a>";
			return '<div class="' + s[6] + " layui-layer-btn-" + (r.btnAlign || "") + '">' + e + "</div>"
		}() : "") + (r.resize ? '<span class="layui-layer-resize"></span>' : "") + "</div>"], d, i('<div class="layui-layer-move"></div>')), n
	}, l.pt.creat = function() {
		var e = this,
			t = e.config,
			a = e.index,
			l = t.content,
			f = "object" == typeof l,
			c = i("body");
		if (!t.id || !i("#" + t.id)[0]) {
			switch ("string" == typeof t.area && (t.area = "auto" === t.area ? ["", ""] : [t.area, ""]), t.shift && (t.anim = t.shift), 6 == r.ie && (t.fixed = !1), t.type) {
				case 0:
					t.btn = "btn" in t ? t.btn : o.btn[0], r.closeAll("dialog");
					break;
				case 2:
					var l = t.content = f ? t.content : [t.content || "http://layer.layui.com", "auto"];
					t.content = '<iframe scrolling="' + (t.content[1] || "auto") + '" allowtransparency="true" id="' + s[4] + a + '" name="' + s[4] + a + '" onload="this.className=\'\';" class="layui-layer-load" frameborder="0" src="' + t.content[0] + '"></iframe>';
					break;
				case 3:
					delete t.title, delete t.closeBtn, t.icon === -1 && 0 === t.icon, r.closeAll("loading");
					break;
				case 4:
					f || (t.content = [t.content, "body"]), t.follow = t.content[1], t.content = t.content[0] + '<i class="layui-layer-TipsG"></i>', delete t.title, t.tips = "object" == typeof t.tips ? t.tips : [t.tips, !0], t.tipsMore || r.closeAll("tips")
			}
			e.vessel(f, function(n, r, d) {
				c.append(n[0]), f ? function() {
					2 == t.type || 4 == t.type ? function() {
						i("body").append(n[1])
					}() : function() {
						l.parents("." + s[0])[0] || (l.data("display", l.css("display")).show().addClass("layui-layer-wrap").wrap(n[1]), i("#" + s[0] + a).find("." + s[5]).before(r))
					}()
				}() : c.append(n[1]), i(".layui-layer-move")[0] || c.append(o.moveElem = d), e.layero = i("#" + s[0] + a), t.scrollbar || s.html.css("overflow", "hidden").attr("layer-full", a)
			}).auto(a), 2 == t.type && 6 == r.ie && e.layero.find("iframe").attr("src", l[0]), 4 == t.type ? e.tips() : e.offset(), t.fixed && n.on("resize", function() {
				e.offset(), (/^\d+%$/.test(t.area[0]) || /^\d+%$/.test(t.area[1])) && e.auto(a), 4 == t.type && e.tips()
			}), t.time <= 0 || setTimeout(function() {
				r.close(e.index)
			}, t.time), e.move().callback(), s.anim[t.anim] && e.layero.addClass(s.anim[t.anim]).data("anim", !0)
		}
	}, l.pt.auto = function(e) {
		function t(e) {
			e = l.find(e), e.height(f[1] - c - d - 2 * (0 | parseFloat(e.css("padding"))))
		}
		var a = this,
			o = a.config,
			l = i("#" + s[0] + e);
		"" === o.area[0] && o.maxWidth > 0 && (r.ie && r.ie < 8 && o.btn && l.width(l.innerWidth()), l.outerWidth() > o.maxWidth && l.width(o.maxWidth));
		var f = [l.innerWidth(), l.innerHeight()],
			c = l.find(s[1]).outerHeight() || 0,
			d = l.find("." + s[6]).outerHeight() || 0;
		switch (o.type) {
			case 2:
				t("iframe");
				break;
			default:
				"" === o.area[1] ? o.fixed && f[1] >= n.height() && (f[1] = n.height(), t("." + s[5])) : t("." + s[5])
		}
		return a
	}, l.pt.offset = function() {
		var e = this,
			t = e.config,
			i = e.layero,
			a = [i.outerWidth(), i.outerHeight()],
			o = "object" == typeof t.offset;
		e.offsetTop = (n.height() - a[1]) / 2, e.offsetLeft = (n.width() - a[0]) / 2, o ? (e.offsetTop = t.offset[0], e.offsetLeft = t.offset[1] || e.offsetLeft) : "auto" !== t.offset && ("t" === t.offset ? e.offsetTop = 0 : "r" === t.offset ? e.offsetLeft = n.width() - a[0] : "b" === t.offset ? e.offsetTop = n.height() - a[1] : "l" === t.offset ? e.offsetLeft = 0 : "lt" === t.offset ? (e.offsetTop = 0, e.offsetLeft = 0) : "lb" === t.offset ? (e.offsetTop = n.height() - a[1], e.offsetLeft = 0) : "rt" === t.offset ? (e.offsetTop = 0, e.offsetLeft = n.width() - a[0]) : "rb" === t.offset ? (e.offsetTop = n.height() - a[1], e.offsetLeft = n.width() - a[0]) : e.offsetTop = t.offset), t.fixed || (e.offsetTop = /%$/.test(e.offsetTop) ? n.height() * parseFloat(e.offsetTop) / 100 : parseFloat(e.offsetTop), e.offsetLeft = /%$/.test(e.offsetLeft) ? n.width() * parseFloat(e.offsetLeft) / 100 : parseFloat(e.offsetLeft), e.offsetTop += n.scrollTop(), e.offsetLeft += n.scrollLeft()), i.attr("minLeft") && (e.offsetTop = n.height() - (i.find(s[1]).outerHeight() || 0), e.offsetLeft = i.css("left")), i.css({
			top: e.offsetTop,
			left: e.offsetLeft
		})
	}, l.pt.tips = function() {
		var e = this,
			t = e.config,
			a = e.layero,
			o = [a.outerWidth(), a.outerHeight()],
			r = i(t.follow);
		r[0] || (r = i("body"));
		var l = {
				width: r.outerWidth(),
				height: r.outerHeight(),
				top: r.offset().top,
				left: r.offset().left
			},
			f = a.find(".layui-layer-TipsG"),
			c = t.tips[0];
		t.tips[1] || f.remove(), l.autoLeft = function() {
			l.left + o[0] - n.width() > 0 ? (l.tipLeft = l.left + l.width - o[0], f.css({
				right: 12,
				left: "auto"
			})) : l.tipLeft = l.left
		}, l.where = [function() {
			l.autoLeft(), l.tipTop = l.top - o[1] - 10, f.removeClass("layui-layer-TipsB").addClass("layui-layer-TipsT").css("border-right-color", t.tips[1])
		}, function() {
			l.tipLeft = l.left + l.width + 10, l.tipTop = l.top, f.removeClass("layui-layer-TipsL").addClass("layui-layer-TipsR").css("border-bottom-color", t.tips[1])
		}, function() {
			l.autoLeft(), l.tipTop = l.top + l.height + 10, f.removeClass("layui-layer-TipsT").addClass("layui-layer-TipsB").css("border-right-color", t.tips[1])
		}, function() {
			l.tipLeft = l.left - o[0] - 10, l.tipTop = l.top, f.removeClass("layui-layer-TipsR").addClass("layui-layer-TipsL").css("border-bottom-color", t.tips[1])
		}], l.where[c - 1](), 1 === c ? l.top - (n.scrollTop() + o[1] + 16) < 0 && l.where[2]() : 2 === c ? n.width() - (l.left + l.width + o[0] + 16) > 0 || l.where[3]() : 3 === c ? l.top - n.scrollTop() + l.height + o[1] + 16 - n.height() > 0 && l.where[0]() : 4 === c && o[0] + 16 - l.left > 0 && l.where[1](), a.find("." + s[5]).css({
			"background-color": t.tips[1],
			"padding-right": t.closeBtn ? "30px" : ""
		}), a.css({
			left: l.tipLeft - (t.fixed ? n.scrollLeft() : 0),
			top: l.tipTop - (t.fixed ? n.scrollTop() : 0)
		})
	}, l.pt.move = function() {
		var e = this,
			t = e.config,
			a = i(document),
			l = e.layero,
			s = l.find(t.move),
			f = l.find(".layui-layer-resize"),
			c = {};
		return t.move && s.css("cursor", "move"), s.on("mousedown", function(e) {
			e.preventDefault(), t.move && (c.moveStart = !0, c.offset = [e.clientX - parseFloat(l.css("left")), e.clientY - parseFloat(l.css("top"))], o.moveElem.css("cursor", "move").show())
		}), f.on("mousedown", function(e) {
			e.preventDefault(), c.resizeStart = !0, c.offset = [e.clientX, e.clientY], c.area = [l.outerWidth(), l.outerHeight()], o.moveElem.css("cursor", "se-resize").show()
		}), a.on("mousemove", function(i) {
			if (c.moveStart) {
				var a = i.clientX - c.offset[0],
					o = i.clientY - c.offset[1],
					s = "fixed" === l.css("position");
				if (i.preventDefault(), c.stX = s ? 0 : n.scrollLeft(), c.stY = s ? 0 : n.scrollTop(), !t.moveOut) {
					var f = n.width() - l.outerWidth() + c.stX,
						d = n.height() - l.outerHeight() + c.stY;
					a < c.stX && (a = c.stX), a > f && (a = f), o < c.stY && (o = c.stY), o > d && (o = d)
				}
				l.css({
					left: a,
					top: o
				})
			}
			if (t.resize && c.resizeStart) {
				var a = i.clientX - c.offset[0],
					o = i.clientY - c.offset[1];
				i.preventDefault(), r.style(e.index, {
					width: c.area[0] + a,
					height: c.area[1] + o
				}), c.isResize = !0, t.resizing && t.resizing(l)
			}
		}).on("mouseup", function(e) {
			c.moveStart && (delete c.moveStart, o.moveElem.hide(), t.moveEnd && t.moveEnd(l)), c.resizeStart && (delete c.resizeStart, o.moveElem.hide())
		}), e
	}, l.pt.callback = function() {
		function e() {
			var e = a.cancel && a.cancel(t.index, n);
			e === !1 || r.close(t.index)
		}
		var t = this,
			n = t.layero,
			a = t.config;
		t.openLayer(), a.success && (2 == a.type ? n.find("iframe").on("load", function() {
			a.success(n, t.index)
		}) : a.success(n, t.index)), 6 == r.ie && t.IE6(n), n.find("." + s[6]).children("a").on("click", function() {
			var e = i(this).index();
			if (0 === e) a.yes ? a.yes(t.index, n) : a.btn1 ? a.btn1(t.index, n) : r.close(t.index);
			else {
				var o = a["btn" + (e + 1)] && a["btn" + (e + 1)](t.index, n);
				o === !1 || r.close(t.index)
			}
		}), n.find("." + s[7]).on("click", e), a.shadeClose && i("#layui-layer-shade" + t.index).on("click", function() {
			r.close(t.index)
		}), n.find(".layui-layer-min").on("click", function() {
			var e = a.min && a.min(n);
			e === !1 || r.min(t.index, a)
		}), n.find(".layui-layer-max").on("click", function() {
			i(this).hasClass("layui-layer-maxmin") ? (r.restore(t.index), a.restore && a.restore(n)) : (r.full(t.index, a), setTimeout(function() {
				a.full && a.full(n)
			}, 100))
		}), a.end && (o.end[t.index] = a.end)
	}, o.reselect = function() {
		i.each(i("select"), function(e, t) {
			var n = i(this);
			n.parents("." + s[0])[0] || 1 == n.attr("layer") && i("." + s[0]).length < 1 && n.removeAttr("layer").show(), n = null
		})
	}, l.pt.IE6 = function(e) {
		i("select").each(function(e, t) {
			var n = i(this);
			n.parents("." + s[0])[0] || "none" === n.css("display") || n.attr({
				layer: "1"
			}).hide(), n = null
		})
	}, l.pt.openLayer = function() {
		var e = this;
		r.zIndex = e.config.zIndex, r.setTop = function(e) {
			var t = function() {
				r.zIndex++, e.css("z-index", r.zIndex + 1)
			};
			return r.zIndex = parseInt(e[0].style.zIndex), e.on("mousedown", t), r.zIndex
		}
	}, o.record = function(e) {
		var t = [e.width(), e.height(), e.position().top, e.position().left + parseFloat(e.css("margin-left"))];
		e.find(".layui-layer-max").addClass("layui-layer-maxmin"), e.attr({
			area: t
		})
	}, o.rescollbar = function(e) {
		s.html.attr("layer-full") == e && (s.html[0].style.removeProperty ? s.html[0].style.removeProperty("overflow") : s.html[0].style.removeAttribute("overflow"), s.html.removeAttr("layer-full"))
	}, e.layer = r, r.getChildFrame = function(e, t) {
		return t = t || i("." + s[4]).attr("times"), i("#" + s[0] + t).find("iframe").contents().find(e)
	}, r.getFrameIndex = function(e) {
		return i("#" + e).parents("." + s[4]).attr("times")
	}, r.iframeAuto = function(e) {
		if (e) {
			var t = r.getChildFrame("html", e).outerHeight(),
				n = i("#" + s[0] + e),
				a = n.find(s[1]).outerHeight() || 0,
				o = n.find("." + s[6]).outerHeight() || 0;
			n.css({
				height: t + a + o
			}), n.find("iframe").css({
				height: t
			})
		}
	}, r.iframeSrc = function(e, t) {
		i("#" + s[0] + e).find("iframe").attr("src", t)
	}, r.style = function(e, t, n) {
		var a = i("#" + s[0] + e),
			r = a.find(".layui-layer-content"),
			l = a.attr("type"),
			f = a.find(s[1]).outerHeight() || 0,
			c = a.find("." + s[6]).outerHeight() || 0;
		a.attr("minLeft");
		l !== o.type[3] && l !== o.type[4] && (n || (parseFloat(t.width) <= 260 && (t.width = 260), parseFloat(t.height) - f - c <= 64 && (t.height = 64 + f + c)), a.css(t), c = a.find("." + s[6]).outerHeight(), l === o.type[2] ? a.find("iframe").css({
			height: parseFloat(t.height) - f - c
		}) : r.css({
			height: parseFloat(t.height) - f - c - parseFloat(r.css("padding-top")) - parseFloat(r.css("padding-bottom"))
		}))
	}, r.min = function(e, t) {
		var a = i("#" + s[0] + e),
			l = a.find(s[1]).outerHeight() || 0,
			f = a.attr("minLeft") || 181 * o.minIndex + "px",
			c = a.css("position");
		o.record(a), o.minLeft[0] && (f = o.minLeft[0], o.minLeft.shift()), a.attr("position", c), r.style(e, {
			width: 180,
			height: l,
			left: f,
			top: n.height() - l,
			position: "fixed",
			overflow: "hidden"
		}, !0), a.find(".layui-layer-min").hide(), "page" === a.attr("type") && a.find(s[4]).hide(), o.rescollbar(e), a.attr("minLeft") || o.minIndex++, a.attr("minLeft", f)
	}, r.restore = function(e) {
		var t = i("#" + s[0] + e),
			n = t.attr("area").split(",");
		t.attr("type");
		r.style(e, {
			width: parseFloat(n[0]),
			height: parseFloat(n[1]),
			top: parseFloat(n[2]),
			left: parseFloat(n[3]),
			position: t.attr("position"),
			overflow: "visible"
		}, !0), t.find(".layui-layer-max").removeClass("layui-layer-maxmin"), t.find(".layui-layer-min").show(), "page" === t.attr("type") && t.find(s[4]).show(), o.rescollbar(e)
	}, r.full = function(e) {
		var t, a = i("#" + s[0] + e);
		o.record(a), s.html.attr("layer-full") || s.html.css("overflow", "hidden").attr("layer-full", e), clearTimeout(t), t = setTimeout(function() {
			var t = "fixed" === a.css("position");
			r.style(e, {
				top: t ? 0 : n.scrollTop(),
				left: t ? 0 : n.scrollLeft(),
				width: n.width(),
				height: n.height()
			}, !0), a.find(".layui-layer-min").hide()
		}, 100)
	}, r.title = function(e, t) {
		var n = i("#" + s[0] + (t || r.index)).find(s[1]);
		n.html(e)
	}, r.close = function(e) {
		var t = i("#" + s[0] + e),
			n = t.attr("type"),
			a = "layer-anim-close";
		if (t[0]) {
			var l = "layui-layer-wrap",
				f = function() {
					if (n === o.type[1] && "object" === t.attr("conType")) {
						t.children(":not(." + s[5] + ")").remove();
						for (var a = t.find("." + l), r = 0; r < 2; r++) a.unwrap();
						a.css("display", a.data("display")).removeClass(l)
					} else {
						if (n === o.type[2]) try {
							var f = i("#" + s[4] + e)[0];
							f.contentWindow.document.write(""), f.contentWindow.close(), t.find("." + s[5])[0].removeChild(f)
						} catch (c) {}
						t[0].innerHTML = "", t.remove()
					}
					"function" == typeof o.end[e] && o.end[e](), delete o.end[e]
				};
			t.data("anim") && t.addClass(a), i("#layui-layer-moves, #layui-layer-shade" + e).remove(), 6 == r.ie && o.reselect(), o.rescollbar(e), t.attr("minLeft") && (o.minIndex--, o.minLeft.push(t.attr("minLeft"))), setTimeout(function() {
				f()
			}, r.ie && r.ie < 10 || !t.data("anim") ? 0 : 200)
		}
	}, r.closeAll = function(e) {
		i.each(i("." + s[0]), function() {
			var t = i(this),
				n = e ? t.attr("type") === e : 1;
			n && r.close(t.attr("times")), n = null
		})
	};
	var f = r.cache || {},
		c = function(e) {
			return f.skin ? " " + f.skin + " " + f.skin + "-" + e : ""
		};
	r.prompt = function(e, t) {
		var a = "";
		if (e = e || {}, "function" == typeof e && (t = e), e.area) {
			var o = e.area;
			a = 'style="width: ' + o[0] + "; height: " + o[1] + ';"', delete e.area
		}
		var l, s = 2 == e.formType ? '<textarea class="layui-layer-input"' + a + ">" + (e.value || "") + "</textarea>" : function() {
			return '<input type="' + (1 == e.formType ? "password" : "text") + '" class="layui-layer-input" value="' + (e.value || "") + '">'
		}();
		return r.open(i.extend({
			type: 1,
			btn: ["&#x786E;&#x5B9A;", "&#x53D6;&#x6D88;"],
			content: s,
			skin: "layui-layer-prompt" + c("prompt"),
			maxWidth: n.width(),
			success: function(e) {
				l = e.find(".layui-layer-input"), l.focus()
			},
			resize: !1,
			yes: function(i) {
				var n = l.val();
				"" === n ? l.focus() : n.length > (e.maxlength || 500) ? r.tips("&#x6700;&#x591A;&#x8F93;&#x5165;" + (e.maxlength || 500) + "&#x4E2A;&#x5B57;&#x6570;", l, {
					tips: 1
				}) : t && t(n, i, l)
			}
		}, e))
	}, r.tab = function(e) {
		e = e || {};
		var t = e.tab || {};
		return r.open(i.extend({
			type: 1,
			skin: "layui-layer-tab" + c("tab"),
			resize: !1,
			title: function() {
				var e = t.length,
					i = 1,
					n = "";
				if (e > 0)
					for (n = '<span class="layui-layer-tabnow">' + t[0].title + "</span>"; i < e; i++) n += "<span>" + t[i].title + "</span>";
				return n
			}(),
			content: '<ul class="layui-layer-tabmain">' + function() {
				var e = t.length,
					i = 1,
					n = "";
				if (e > 0)
					for (n = '<li class="layui-layer-tabli xubox_tab_layer">' + (t[0].content || "no content") + "</li>"; i < e; i++) n += '<li class="layui-layer-tabli">' + (t[i].content || "no  content") + "</li>";
				return n
			}() + "</ul>",
			success: function(t) {
				var n = t.find(".layui-layer-title").children(),
					a = t.find(".layui-layer-tabmain").children();
				n.on("mousedown", function(t) {
					t.stopPropagation ? t.stopPropagation() : t.cancelBubble = !0;
					var n = i(this),
						o = n.index();
					n.addClass("layui-layer-tabnow").siblings().removeClass("layui-layer-tabnow"), a.eq(o).show().siblings().hide(), "function" == typeof e.change && e.change(o)
				})
			}
		}, e))
	}, r.photos = function(t, n, a) {
		function o(e, t, i) {
			var n = new Image;
			return n.src = e, n.complete ? t(n) : (n.onload = function() {
				n.onload = null, t(n)
			}, void(n.onerror = function(e) {
				n.onerror = null, i(e)
			}))
		}
		var l = {};
		if (t = t || {}, t.photos) {
			var s = t.photos.constructor === Object,
				f = s ? t.photos : {},
				d = f.data || [],
				u = f.start || 0;
			if (l.imgIndex = (0 | u) + 1, t.img = t.img || "img", s) {
				if (0 === d.length) return r.msg("&#x6CA1;&#x6709;&#x56FE;&#x7247;")
			} else {
				var y = i(t.photos),
					p = function() {
						d = [], y.find(t.img).each(function(e) {
							var t = i(this);
							t.attr("layer-index", e), d.push({
								alt: t.attr("alt"),
								pid: t.attr("layer-pid"),
								src: t.attr("layer-src") || t.attr("src"),
								thumb: t.attr("src")
							})
						})
					};
				if (p(), 0 === d.length) return;
				if (n || y.on("click", t.img, function() {
						var e = i(this),
							n = e.attr("layer-index");
						r.photos(i.extend(t, {
							photos: {
								start: n,
								data: d,
								tab: t.tab
							},
							full: t.full
						}), !0), p()
					}), !n) return
			}
			l.imgprev = function(e) {
				l.imgIndex--, l.imgIndex < 1 && (l.imgIndex = d.length), l.tabimg(e)
			}, l.imgnext = function(e, t) {
				l.imgIndex++, l.imgIndex > d.length && (l.imgIndex = 1, t) || l.tabimg(e)
			}, l.keyup = function(e) {
				if (!l.end) {
					var t = e.keyCode;
					e.preventDefault(), 37 === t ? l.imgprev(!0) : 39 === t ? l.imgnext(!0) : 27 === t && r.close(l.index)
				}
			}, l.tabimg = function(e) {
				d.length <= 1 || (f.start = l.imgIndex - 1, r.close(l.index), r.photos(t, !0, e))
			}, l.event = function() {
				l.bigimg.hover(function() {
					l.imgsee.show()
				}, function() {
					l.imgsee.hide()
				}), l.bigimg.find(".layui-layer-imgprev").on("click", function(e) {
					e.preventDefault(), l.imgprev()
				}), l.bigimg.find(".layui-layer-imgnext").on("click", function(e) {
					e.preventDefault(), l.imgnext()
				}), i(document).on("keyup", l.keyup)
			}, l.loadi = r.load(1, {
				shade: !("shade" in t) && .9,
				scrollbar: !1
			}), o(d[u].src, function(n) {
				r.close(l.loadi), l.index = r.open(i.extend({
					type: 1,
					area: function() {
						var a = [n.width, n.height],
							o = [i(e).width() - 100, i(e).height() - 100];
						if (!t.full && (a[0] > o[0] || a[1] > o[1])) {
							var r = [a[0] / o[0], a[1] / o[1]];
							r[0] > r[1] ? (a[0] = a[0] / r[0], a[1] = a[1] / r[0]) : r[0] < r[1] && (a[0] = a[0] / r[1], a[1] = a[1] / r[1])
						}
						return [a[0] + "px", a[1] + "px"]
					}(),
					title: !1,
					shade: .9,
					shadeClose: !0,
					closeBtn: !1,
					move: ".layui-layer-phimg img",
					moveType: 1,
					scrollbar: !1,
					moveOut: !0,
					anim: 5 * Math.random() | 0,
					skin: "layui-layer-photos" + c("photos"),
					content: '<div class="layui-layer-phimg"><img src="' + d[u].src + '" alt="' + (d[u].alt || "") + '" layer-pid="' + d[u].pid + '"><div class="layui-layer-imgsee">' + (d.length > 1 ? '<span class="layui-layer-imguide"><a href="javascript:;" class="layui-layer-iconext layui-layer-imgprev"></a><a href="javascript:;" class="layui-layer-iconext layui-layer-imgnext"></a></span>' : "") + '<div class="layui-layer-imgbar" style="display:' + (a ? "block" : "") + '"><span class="layui-layer-imgtit"><a href="javascript:;">' + (d[u].alt || "") + "</a><em>" + l.imgIndex + "/" + d.length + "</em></span></div></div></div>",
					success: function(e, i) {
						l.bigimg = e.find(".layui-layer-phimg"), l.imgsee = e.find(".layui-layer-imguide,.layui-layer-imgbar"), l.event(e), t.tab && t.tab(d[u], e)
					},
					end: function() {
						l.end = !0, i(document).off("keyup", l.keyup)
					}
				}, t))
			}, function() {
				r.close(l.loadi), r.msg("&#x5F53;&#x524D;&#x56FE;&#x7247;&#x5730;&#x5740;&#x5F02;&#x5E38;<br>&#x662F;&#x5426;&#x7EE7;&#x7EED;&#x67E5;&#x770B;&#x4E0B;&#x4E00;&#x5F20;&#xFF1F;", {
					time: 3e4,
					btn: ["&#x4E0B;&#x4E00;&#x5F20;", "&#x4E0D;&#x770B;&#x4E86;"],
					yes: function() {
						d.length > 1 && l.imgnext(!0, !0)
					}
				})
			})
		}
	}, o.run = function(t) {
		i = t, n = i(e), s.html = i("html"), r.open = function(e) {
			var t = new l(e);
			return t.index
		}
	}, e.layui && layui.define ? (r.ready(), layui.define("jquery", function(t) {
		r.path = layui.cache.dir, o.run(layui.jquery), e.layer = r, t("layer", r)
	})) : "function" == typeof define ? define(["jquery"], function() {
		return o.run(e.jQuery), r
	}) : function() {
		o.run(e.jQuery), r.ready()
	}()
}(window);
layui.define("jquery", function(i) {
	"use strict";
	var t = layui.jquery,
		a = (layui.hint(), layui.device()),
		e = "element",
		n = "layui-this",
		l = "layui-show",
		s = function() {
			this.config = {}
		};
	s.prototype.set = function(i) {
		var a = this;
		return t.extend(!0, a.config, i), a
	}, s.prototype.on = function(i, t) {
		return layui.onevent(e, i, t)
	}, s.prototype.tabAdd = function(i, a) {
		var e = t(".layui-tab[lay-filter=" + i + "]"),
			n = e.children(".layui-tab-title"),
			l = e.children(".layui-tab-content");
		return n.append("<li>" + (a.title || "unnaming") + "</li>"), l.append('<div class="layui-tab-item">' + (a.content || "") + "</div>"), y.tabAuto(), this
	}, s.prototype.tabDelete = function(i, a) {
		var e = t(".layui-tab[lay-filter=" + i + "]"),
			n = e.children(".layui-tab-title").find(">li").eq(a);
		return y.tabDelete(null, n), this
	}, s.prototype.tabChange = function(i, a) {
		var e = t(".layui-tab[lay-filter=" + i + "]"),
			n = e.children(".layui-tab-title").find(">li").eq(a);
		return y.tabClick(null, a, n), this
	}, s.prototype.progress = function(i, a) {
		var e = "layui-progress",
			n = t("." + e + "[lay-filter=" + i + "]"),
			l = n.find("." + e + "-bar"),
			s = l.find("." + e + "-text");
		return l.css("width", a), s.text(a), this
	};
	var o = ".layui-nav",
		r = "layui-nav-item",
		c = "layui-nav-bar",
		u = "layui-nav-tree",
		d = "layui-nav-child",
		h = "layui-nav-more",
		f = "layui-anim layui-anim-upbit",
		y = {
			tabClick: function(i, a, s) {
				var o = s || t(this),
					a = a || o.index(),
					r = o.parents(".layui-tab"),
					c = r.children(".layui-tab-content").children(".layui-tab-item"),
					u = r.attr("lay-filter");
				o.addClass(n).siblings().removeClass(n), c.eq(a).addClass(l).siblings().removeClass(l), layui.event.call(this, e, "tab(" + u + ")", {
					elem: r,
					index: a
				})
			},
			tabDelete: function(i, a) {
				var e = a || t(this).parent(),
					l = e.index(),
					s = e.parents(".layui-tab"),
					o = s.children(".layui-tab-content").children(".layui-tab-item");
				e.hasClass(n) && (e.next()[0] ? y.tabClick.call(e.next()[0], null, l + 1) : e.prev()[0] && y.tabClick.call(e.prev()[0], null, l - 1)), e.remove(), o.eq(l).remove()
			},
			tabAuto: function() {
				var i = "layui-tab-more",
					e = "layui-tab-bar",
					n = "layui-tab-close",
					l = this;
				t(".layui-tab").each(function() {
					var s = t(this),
						o = s.children(".layui-tab-title"),
						r = (s.children(".layui-tab-content").children(".layui-tab-item"), 'lay-stope="tabmore"'),
						c = t('<span class="layui-unselect layui-tab-bar" ' + r + "><i " + r + ' class="layui-icon">&#xe61a;</i></span>');
					if (l === window && 8 != a.ie && y.hideTabMore(!0), s.attr("lay-allowClose") && o.find("li").each(function() {
							var i = t(this);
							if (!i.find("." + n)[0]) {
								var a = t('<i class="layui-icon layui-unselect ' + n + '">&#x1006;</i>');
								a.on("click", y.tabDelete), i.append(a)
							}
						}), o.prop("scrollWidth") > o.outerWidth() + 1) {
						if (o.find("." + e)[0]) return;
						o.append(c), c.on("click", function(t) {
							o[this.title ? "removeClass" : "addClass"](i), this.title = this.title ? "" : "收缩"
						})
					} else o.find("." + e).remove()
				})
			},
			hideTabMore: function(i) {
				var a = t(".layui-tab-title");
				i !== !0 && "tabmore" === t(i.target).attr("lay-stope") || (a.removeClass("layui-tab-more"), a.find(".layui-tab-bar").attr("title", ""))
			},
			clickThis: function() {
				var i = t(this),
					a = i.parents(o),
					l = a.attr("lay-filter");
				i.find("." + d)[0] || (a.find("." + n).removeClass(n), i.addClass(n), layui.event.call(this, e, "nav(" + l + ")", i))
			},
			clickChild: function() {
				var i = t(this),
					a = i.parents(o),
					l = a.attr("lay-filter");
				a.find("." + n).removeClass(n), i.addClass(n), layui.event.call(this, e, "nav(" + l + ")", i)
			},
			showChild: function() {
				var i = t(this),
					a = i.parents(o),
					e = i.parent(),
					n = i.siblings("." + d);
				a.hasClass(u) && (n.removeClass(f), e["none" === n.css("display") ? "addClass" : "removeClass"](r + "ed"))
			}
		};
	s.prototype.init = function(i) {
		var e = {
			tab: function() {
				y.tabAuto.call({})
			},
			nav: function() {
				var i, e, n, s = 200,
					p = function(o, r) {
						var c = t(this),
							y = c.find("." + d);
						r.hasClass(u) ? o.css({
							top: c.position().top,
							height: c.children("a").height(),
							opacity: 1
						}) : (y.addClass(f), o.css({
							left: c.position().left + parseFloat(c.css("marginLeft")),
							top: c.position().top + c.height() - 5
						}), i = setTimeout(function() {
							o.css({
								width: c.width(),
								opacity: 1
							})
						}, a.ie && a.ie < 10 ? 0 : s), clearTimeout(n), "block" === y.css("display") && clearTimeout(e), e = setTimeout(function() {
							y.addClass(l), c.find("." + h).addClass(h + "d")
						}, 300))
					};
				t(o).each(function() {
					var a = t(this),
						o = t('<span class="' + c + '"></span>'),
						f = a.find("." + r);
					a.find("." + c)[0] || (a.append(o), f.on("mouseenter", function() {
						p.call(this, o, a)
					}).on("mouseleave", function() {
						a.hasClass(u) || (clearTimeout(e), e = setTimeout(function() {
							a.find("." + d).removeClass(l), a.find("." + h).removeClass(h + "d")
						}, 300))
					}), a.on("mouseleave", function() {
						clearTimeout(i), n = setTimeout(function() {
							a.hasClass(u) ? o.css({
								height: 0,
								top: o.position().top + o.height() / 2,
								opacity: 0
							}) : o.css({
								width: 0,
								left: o.position().left + o.width() / 2,
								opacity: 0
							})
						}, s)
					})), f.each(function() {
						var i = t(this),
							a = i.find("." + d);
						if (a[0] && !i.find("." + h)[0]) {
							var e = i.children("a");
							e.append('<span class="' + h + '"></span>')
						}
						i.off("click", y.clickThis).on("click", y.clickThis), i.children("a").off("click", y.showChild).on("click", y.showChild), a.children("dd").off("click", y.clickChild).on("click", y.clickChild)
					})
				})
			},
			breadcrumb: function() {
				var i = ".layui-breadcrumb";
				t(i).each(function() {
					var i = t(this),
						a = i.attr("lay-separator") || ">",
						e = i.find("a");
					e.find(".layui-box")[0] || (e.each(function(i) {
						i !== e.length - 1 && t(this).append('<span class="layui-box">' + a + "</span>")
					}), i.css("visibility", "visible"))
				})
			},
			progress: function() {
				var i = "layui-progress";
				t("." + i).each(function() {
					var a = t(this),
						e = a.find(".layui-progress-bar"),
						n = e.attr("lay-percent");
					e.css("width", n), a.attr("lay-showPercent") && setTimeout(function() {
						e.html('<span class="' + i + '-text">' + Math.round(e.width() / a.width() * 100) + "%</span>")
					}, 350)
				})
			}
		};
		return layui.each(e, function(i, t) {
			t()
		})
	};
	var p = new s,
		b = t(document);
	p.init();
	var v = ".layui-tab-title li";
	b.on("click", v, y.tabClick), b.on("click", y.hideTabMore), t(window).on("resize", y.tabAuto), i(e, function(i) {
		return p.set(i)
	})
});
layui.define("layer", function(e) {
	"use strict";
	var a = layui.jquery,
		t = layui.layer,
		i = (layui.device(), "layui-upload-enter"),
		n = "layui-upload-iframe",
		r = {
			icon: 2,
			shift: 6
		},
		o = {
			file: "文件",
			video: "视频",
			audio: "音频"
		},
		s = function(e) {
			this.options = e
		};
	s.prototype.init = function() {
		var e = this,
			t = e.options,
			r = a("body"),
			s = a(t.elem || ".layui-upload-file"),
			u = a('<iframe id="' + n + '" class="' + n + '" name="' + n + '"></iframe>');
		return a("#" + n)[0] || r.append(u), s.each(function(r, s) {
			s = a(s);
			var u = '<form target="' + n + '" method="' + (t.method || "post") + '" key="set-mine" enctype="multipart/form-data" action="' + (t.url || "") + '"></form>',
				l = s.attr("lay-type") || t.type;
			t.unwrap || (u = '<div class="layui-box layui-upload-button">' + u + '<span class="layui-upload-icon"><i class="layui-icon">&#xe608;</i>' + (s.attr("lay-title") || t.title || "上传" + (o[l] || "图片")) + "</span></div>"), u = a(u), t.unwrap || u.on("dragover", function(e) {
				e.preventDefault(), a(this).addClass(i)
			}).on("dragleave", function() {
				a(this).removeClass(i)
			}).on("drop", function() {
				a(this).removeClass(i)
			}), s.parent("form").attr("target") === n && (t.unwrap ? s.unwrap() : (s.parent().next().remove(), s.unwrap().unwrap())), s.wrap(u), s.off("change").on("change", function() {
				e.action(this, l)
			})
		})
	}, s.prototype.action = function(e, i) {
		var o = this,
			s = o.options,
			u = e.value,
			l = a(e),
			p = l.attr("lay-ext") || s.ext || "";
		if (u) {
			switch (i) {
				case "file":
					if (p && !RegExp("\\w\\.(" + p + ")$", "i").test(escape(u))) return t.msg("不支持该文件格式", r), e.value = "";
					break;
				case "video":
					if (!RegExp("\\w\\.(" + (p || "avi|mp4|wma|rmvb|rm|flash|3gp|flv") + ")$", "i").test(escape(u))) return t.msg("不支持该视频格式", r), e.value = "";
					break;
				case "audio":
					if (!RegExp("\\w\\.(" + (p || "mp3|wav|mid") + ")$", "i").test(escape(u))) return t.msg("不支持该音频格式", r), e.value = "";
					break;
				default:
					if (!RegExp("\\w\\.(" + (p || "jpg|png|gif|bmp|jpeg") + ")$", "i").test(escape(u))) return t.msg("不支持该图片格式", r), e.value = ""
			}
			s.before && s.before(e), l.parent().submit();
			var c = a("#" + n),
				f = setInterval(function() {
					var a;
					try {
						a = c.contents().find("body").text()
					} catch (i) {
						t.msg("上传接口存在跨域", r), clearInterval(f)
					}
					if (a) {
						clearInterval(f), c.contents().find("body").html("");
						try {
							a = JSON.parse(a)
						} catch (i) {
							return a = {}, t.msg("请对上传接口返回JSON字符", r)
						}
						"function" == typeof s.success && s.success(a, e)
					}
				}, 30);
			e.value = ""
		}
	}, e("upload", function(e) {
		var a = new s(e = e || {});
		a.init()
	})
});
layui.define("layer", function(e) {
	"use strict";
	var i = layui.jquery,
		a = layui.layer,
		t = layui.hint(),
		n = layui.device(),
		l = "form",
		s = ".layui-form",
		c = "layui-this",
		r = "layui-disabled",
		u = function() {
			this.config = {
				verify: {
					required: [/[\S]+/, "必填项不能为空"],
					phone: [/^1\d{10}$/, "请输入正确的手机号"],
					email: [/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/, "邮箱格式不正确"],
					url: [/(^#)|(^http(s*):\/\/[^\s]+\.[^\s]+)/, "链接格式不正确"],
					number: [/^\d+$/, "只能填写数字"],
					date: [/^(\d{4})[-\/](\d{1}|0\d{1}|1[0-2])([-\/](\d{1}|0\d{1}|[1-2][0-9]|3[0-1]))*$/, "日期格式不正确"],
					identity: [/(^\d{15}$)|(^\d{17}(x|X|\d)$)/, "请输入正确的身份证号"]
				}
			}
		};
	u.prototype.set = function(e) {
		var a = this;
		return i.extend(!0, a.config, e), a
	}, u.prototype.verify = function(e) {
		var a = this;
		return i.extend(!0, a.config.verify, e), a
	}, u.prototype.on = function(e, i) {
		return layui.onevent(l, e, i)
	}, u.prototype.render = function(e) {
		var a = this,
			n = {
				select: function() {
					var e = "请选择",
						a = "layui-form-select",
						t = "layui-select-title",
						n = i(s).find("select"),
						u = function(e, n) {
							i(e.target).parent().hasClass(t) && !n || i("." + a).removeClass(a + "ed")
						},
						o = function(e, n) {
							var s = i(this),
								o = e.find("." + t);
							n || (o.on("click", function(i) {
								e.hasClass(a + "ed") ? e.removeClass(a + "ed") : (u(i, !0), e.addClass(a + "ed"))
							}), e.find("dl>dd").on("click", function() {
								var e = i(this),
									a = e.attr("lay-value"),
									t = s.attr("lay-filter");
								return !e.hasClass(r) && (s.val(a).removeClass("layui-form-danger"), o.find("input").val(e.text()), e.addClass(c).siblings().removeClass(c), void layui.event(l, "select(" + t + ")", {
									elem: s[0],
									value: a
								}))
							}), e.find("dl>dt").on("click", function(e) {
								return !1
							}), i(document).off("click", u).on("click", u))
						};
					n.each(function(n, l) {
						var s = i(this),
							u = s.next("." + a),
							d = this.disabled,
							f = l.value,
							y = i(l.options[l.selectedIndex]),
							v = i(['<div class="layui-unselect ' + a + (d ? " layui-select-disabled" : "") + '">', '<div class="' + t + '"><input type="text" placeholder="' + (l.options[0].innerHTML ? l.options[0].innerHTML : e) + '" value="' + (f ? y.html() : "") + '" readonly class="layui-input layui-unselect' + (d ? " " + r : "") + '">', '<i class="layui-edge"></i></div>', '<dl class="layui-anim layui-anim-upbit' + (s.find("optgroup")[0] ? " layui-select-group" : "") + '">' + function(e) {
								var i = [];
								return layui.each(e, function(e, a) {
									(0 !== e || a.value) && ("optgroup" === a.tagName.toLowerCase() ? i.push("<dt>" + a.label + "</dt>") : i.push('<dd lay-value="' + a.value + '" class="' + (f === a.value ? c : "") + (a.disabled ? " " + r : "") + '">' + a.innerHTML + "</dd>"))
								}), i.join("")
							}(s.find("*")) + "</dl>", "</div>"].join(""));
						u[0] && u.remove(), s.after(v), o.call(this, v, d)
					})
				},
				checkbox: function() {
					var e = {
							checkbox: ["layui-form-checkbox", "layui-form-checked", "checkbox"],
							_switch: ["layui-form-switch", "layui-form-onswitch", "switch"]
						},
						a = i(s).find("input[type=checkbox]"),
						t = function(e, a) {
							var t = i(this);
							e.on("click", function() {
								var i = t.attr("lay-filter");
								t[0].disabled || (t[0].checked ? (t[0].checked = !1, e.removeClass(a[1])) : (t[0].checked = !0, e.addClass(a[1])), layui.event(l, a[2] + "(" + i + ")", {
									elem: t[0],
									value: t[0].value
								}))
							})
						};
					a.each(function(a, n) {
						var l = i(this),
							s = l.attr("lay-skin"),
							c = this.disabled;
						"switch" === s && (s = "_" + s);
						var u = e[s] || e.checkbox,
							o = l.next("." + u[0]),
							d = i(['<div class="layui-unselect ' + u[0] + (n.checked ? " " + u[1] : "") + (c ? " layui-checkbox-disbaled " + r : "") + '">', {
								_switch: "<i></i>"
							}[s] || "<span>" + (n.title || "勾选") + '</span><i class="layui-icon">&#xe618;</i>', "</div>"].join(""));
						o[0] && o.remove(), l.after(d), t.call(this, d, u)
					})
				},
				radio: function() {
					var e = "layui-form-radio",
						a = ["&#xe643;", "&#xe63f;"],
						t = i(s).find("input[type=radio]"),
						n = function(t) {
							var n = i(this),
								c = "layui-anim-scaleSpring";
							t.on("click", function() {
								var r = n[0].name,
									u = n.parents(s),
									o = n.attr("lay-filter"),
									d = u.find("input[name=" + r.replace(/(\.|#|\[|\])/g, "\\$1") + "]");
								n[0].disabled || (layui.each(d, function() {
									var t = i(this).next("." + e);
									this.checked = !1, t.removeClass(e + "ed"), t.find(".layui-icon").removeClass(c).html(a[1])
								}), n[0].checked = !0, t.addClass(e + "ed"), t.find(".layui-icon").addClass(c).html(a[0]), layui.event(l, "radio(" + o + ")", {
									elem: n[0],
									value: n[0].value
								}))
							})
						};
					t.each(function(t, l) {
						var s = i(this),
							c = s.next("." + e),
							u = this.disabled,
							o = i(['<div class="layui-unselect ' + e + (l.checked ? " " + e + "ed" : "") + (u ? " layui-radio-disbaled " + r : "") + '">', '<i class="layui-anim layui-icon">' + a[l.checked ? 0 : 1] + "</i>", "<span>" + (l.title || "未命名") + "</span>", "</div>"].join(""));
						c[0] && c.remove(), s.after(o), n.call(this, o)
					})
				}
			};
		return e ? n[e] ? n[e]() : t.error("不支持的" + e + "表单渲染") : layui.each(n, function(e, i) {
			i()
		}), a
	};
	var o = function() {
			var e = i(this),
				t = d.config.verify,
				c = null,
				r = "layui-form-danger",
				u = {},
				o = e.parents(s),
				f = o.find("*[lay-verify]"),
				y = e.parents("form")[0],
				v = o.find("input,select,textarea"),
				h = e.attr("lay-filter");
			return layui.each(f, function(e, l) {
				var s = i(this),
					u = s.attr("lay-verify").split("|"),
					o = "",
					d = s.val();
				if (s.removeClass(r), layui.each(u, function(e, i) {
						var u = "function" == typeof t[i];
						if (t[i] && (u ? o = t[i](d, l) : !t[i][0].test(d))) return a.msg(o || t[i][1], {
							icon: 5,
							shift: 6
						}), n.android || n.ios || l.focus(), s.addClass(r), c = !0
					}), c) return c
			}), !c && (layui.each(v, function(e, i) {
				i.name && (/^checkbox|radio$/.test(i.type) && !i.checked || (u[i.name] = i.value))
			}), layui.event.call(this, l, "submit(" + h + ")", {
				elem: this,
				form: y,
				field: u
			}))
		},
		d = new u,
		f = i(document);
	d.render(), f.on("reset", s, function() {
		setTimeout(function() {
			d.render()
		}, 50)
	}), f.on("submit", s, o).on("click", "*[lay-submit]", o), e(l, function(e) {
		return d.set(e)
	})
});
layui.define("jquery", function(e) {
	"use strict";
	var o = layui.jquery,
		a = layui.hint(),
		r = "layui-tree-enter",
		i = function(e) {
			this.options = e
		},
		t = {
			arrow: ["&#xe623;", "&#xe625;"],
			checkbox: ["&#xe626;", "&#xe627;"],
			radio: ["&#xe62b;", "&#xe62a;"],
			branch: ["&#xe622;", "&#xe624;"],
			leaf: "&#xe621;"
		};
	i.prototype.init = function(e) {
		var o = this;
		e.addClass("layui-box layui-tree"), o.options.skin && e.addClass("layui-tree-skin-" + o.options.skin), o.tree(e), o.on(e)
	}, i.prototype.tree = function(e, a) {
		var r = this,
			i = r.options,
			n = a || i.nodes;
		layui.each(n, function(a, n) {
			var l = n.children && n.children.length > 0,
				c = o('<ul class="' + (n.spread ? "layui-show" : "") + '"></ul>'),
				s = o(["<li " + (n.spread ? 'data-spread="' + n.spread + '"' : "") + ">", function() {
					return l ? '<i class="layui-icon layui-tree-spread">' + (n.spread ? t.arrow[1] : t.arrow[0]) + "</i>" : ""
				}(), function() {
					return i.check ? '<i class="layui-icon layui-tree-check">' + ("checkbox" === i.check ? t.checkbox[0] : "radio" === i.check ? t.radio[0] : "") + "</i>" : ""
				}(), function() {
					return '<a href="' + (n.href || "javascript:;") + '" ' + (i.target && n.href ? 'target="' + i.target + '"' : "") + ">" + ('<i class="layui-icon layui-tree-' + (l ? "branch" : "leaf") + '">' + (l ? n.spread ? t.branch[1] : t.branch[0] : t.leaf) + "</i>") + ("<cite>" + (n.name || "未命名") + "</cite></a>")
				}(), "</li>"].join(""));
			l && (s.append(c), r.tree(c, n.children)), e.append(s), "function" == typeof i.click && r.click(s, n), r.spread(s, n), i.drag && r.drag(s, n)
		})
	}, i.prototype.click = function(e, o) {
		var a = this,
			r = a.options;
		e.children("a").on("click", function(e) {
			layui.stope(e), r.click(o)
		})
	}, i.prototype.spread = function(e, o) {
		var a = this,
			r = (a.options, e.children(".layui-tree-spread")),
			i = e.children("ul"),
			n = e.children("a"),
			l = function() {
				e.data("spread") ? (e.data("spread", null), i.removeClass("layui-show"), r.html(t.arrow[0]), n.find(".layui-icon").html(t.branch[0])) : (e.data("spread", !0), i.addClass("layui-show"), r.html(t.arrow[1]), n.find(".layui-icon").html(t.branch[1]))
			};
		i[0] && (r.on("click", l), n.on("dblclick", l))
	}, i.prototype.on = function(e) {
		var a = this,
			i = a.options,
			t = "layui-tree-drag";
		e.find("i").on("selectstart", function(e) {
			return !1
		}), i.drag && o(document).on("mousemove", function(e) {
			var r = a.move;
			if (r.from) {
				var i = (r.to, o('<div class="layui-box ' + t + '"></div>'));
				e.preventDefault(), o("." + t)[0] || o("body").append(i);
				var n = o("." + t)[0] ? o("." + t) : i;
				n.addClass("layui-show").html(r.from.elem.children("a").html()), n.css({
					left: e.pageX + 10,
					top: e.pageY + 10
				})
			}
		}).on("mouseup", function() {
			var e = a.move;
			e.from && (e.from.elem.children("a").removeClass(r), e.to && e.to.elem.children("a").removeClass(r), a.move = {}, o("." + t).remove())
		})
	}, i.prototype.move = {}, i.prototype.drag = function(e, a) {
		var i = this,
			t = (i.options, e.children("a")),
			n = function() {
				var t = o(this),
					n = i.move;
				n.from && (n.to = {
					item: a,
					elem: e
				}, t.addClass(r))
			};
		t.on("mousedown", function() {
			var o = i.move;
			o.from = {
				item: a,
				elem: e
			}
		}), t.on("mouseenter", n).on("mousemove", n).on("mouseleave", function() {
			var e = o(this),
				a = i.move;
			a.from && (delete a.to, e.removeClass(r))
		})
	}, e("tree", function(e) {
		var r = new i(e = e || {}),
			t = o(e.elem);
		return t[0] ? void r.init(t) : a.error("layui.tree 没有找到" + e.elem + "元素")
	})
});
layui.define("jquery", function(l) {
	"use strict";
	var o = layui.jquery,
		i = {
			fixbar: function(l) {
				l = l || {}, l.bgcolor = l.bgcolor ? "background-color:" + l.bgcolor : "";
				var i, a, c = "layui-fixbar-top",
					t = [l.bar1 === !0 ? "&#xe606;" : l.bar1, l.bar2 === !0 ? "&#xe607;" : l.bar2, "&#xe604;"],
					r = o(['<ul class="layui-fixbar">', l.bar1 ? '<li class="layui-icon" lay-type="bar1" style="' + l.bgcolor + '">' + t[0] + "</li>" : "", l.bar2 ? '<li class="layui-icon" lay-type="bar2" style="' + l.bgcolor + '">' + t[1] + "</li>" : "", '<li class="layui-icon ' + c + '" lay-type="top" style="' + l.bgcolor + '">' + t[2] + "</li>", "</ul>"].join("")),
					e = r.find("." + c),
					s = function() {
						var i = o(document).scrollTop();
						i >= (l.showHeight || 200) ? a || (e.show(), a = 1) : a && (e.hide(), a = 0)
					};
				o(".layui-fixbar")[0] || ("object" == typeof l.css && r.css(l.css), o("body").append(r), s(), r.find("li").on("click", function() {
					var i = o(this),
						a = i.attr("lay-type");
					"top" === a && o("html,body").animate({
						scrollTop: 0
					}, 200), l.click && l.click.call(this, a)
				}), o(document).on("scroll", function() {
					i && clearTimeout(i), i = setTimeout(function() {
						s()
					}, 100)
				}))
			}
		};
	l("util", i)
});
layui.define("jquery", function(e) {
	"use strict";
	var l = layui.jquery,
		o = function(e) {},
		t = '<i class="layui-anim layui-anim-rotate layui-anim-loop layui-icon ">&#xe63e;</i>';
	o.prototype.load = function(e) {
		var o, i, n, r, a = this,
			c = 0;
		e = e || {};
		var u = l(e.elem);
		if (u[0]) {
			var f = l(e.scrollElem || document),
				m = e.mb || 50,
				s = !("isAuto" in e) || e.isAuto,
				y = e.end || "没有更多了",
				v = e.scrollElem && e.scrollElem !== document,
				d = "<cite>加载更多</cite>",
				h = l('<div class="layui-flow-more"><a href="javascript:;">' + d + "</a></div>");
			u.find(".layui-flow-more")[0] || u.append(h);
			var p = function(e, t) {
					e = l(e), h.before(e), t = 0 == t || null, t ? h.html(y) : h.find("a").html(d), i = t, o = null, n && n()
				},
				g = function() {
					o = !0, h.find("a").html(t), "function" == typeof e.done && e.done(++c, p)
				};
			if (g(), h.find("a").on("click", function() {
					l(this);
					i || o || g()
				}), e.isLazyimg) var n = a.lazyimg({
				elem: e.elem + " img",
				scrollElem: e.scrollElem
			});
			return s ? (f.on("scroll", function() {
				var e = l(this),
					t = e.scrollTop();
				r && clearTimeout(r), i || (r = setTimeout(function() {
					var i = v ? e.height() : l(window).height(),
						n = v ? e.prop("scrollHeight") : document.documentElement.scrollHeight;
					n - t - i <= m && (o || g())
				}, 100))
			}), a) : a
		}
	}, o.prototype.lazyimg = function(e) {
		var o, t = this,
			i = 0;
		e = e || {};
		var n = l(e.scrollElem || document),
			r = e.elem || "img",
			a = e.scrollElem && e.scrollElem !== document,
			c = function(e, l) {
				var o = n.scrollTop(),
					r = o + l,
					c = a ? function() {
						return e.offset().top - n.offset().top + o
					}() : e.offset().top;
				if (c >= o && c <= r && !e.attr("src")) {
					var f = e.attr("lay-src");
					layui.img(f, function() {
						var l = t.lazyimg.elem.eq(i);
						e.attr("src", f).removeAttr("lay-src"), l[0] && u(l), i++
					})
				}
			},
			u = function(e, o) {
				var u = a ? (o || n).height() : l(window).height(),
					f = n.scrollTop(),
					m = f + u;
				if (t.lazyimg.elem = l(r), e) c(e, u);
				else
					for (var s = 0; s < t.lazyimg.elem.length; s++) {
						var y = t.lazyimg.elem.eq(s),
							v = a ? function() {
								return y.offset().top - n.offset().top + f
							}() : y.offset().top;
						if (c(y, u), i = s, v > m) break
					}
			};
		if (u(), !o) {
			var f;
			n.on("scroll", function() {
				var e = l(this);
				f && clearTimeout(f), f = setTimeout(function() {
					u(null, e)
				}, 50)
			}), o = !0
		}
		return u
	}, e("flow", new o)
});
layui.define(["layer", "form"], function(t) {
	"use strict";
	var e = layui.jquery,
		i = layui.layer,
		a = layui.form(),
		l = (layui.hint(), layui.device()),
		n = "layedit",
		o = "layui-show",
		r = "layui-disabled",
		s = function() {
			var t = this;
			t.index = 0, t.config = {
				tool: ["strong", "italic", "underline", "del", "|", "left", "center", "right", "|", "link", "unlink", "face", "image"],
				hideTool: [],
				height: 280
			}
		};
	s.prototype.set = function(t) {
		var i = this;
		return e.extend(!0, i.config, t), i
	}, s.prototype.on = function(t, e) {
		return layui.onevent(n, t, e)
	}, s.prototype.build = function(t, i) {
		i = i || {};
		var a = this,
			n = a.config,
			r = "layui-layedit",
			s = e("#" + t),
			u = "LAY_layedit_" + ++a.index,
			d = s.next("." + r),
			y = e.extend({}, n, i),
			f = function() {
				var t = [],
					e = {};
				return layui.each(y.hideTool, function(t, i) {
					e[i] = !0
				}), layui.each(y.tool, function(i, a) {
					C[a] && !e[a] && t.push(C[a])
				}), t.join("")
			}(),
			m = e(['<div class="' + r + '">', '<div class="layui-unselect layui-layedit-tool">' + f + "</div>", '<div class="layui-layedit-iframe">', '<iframe id="' + u + '" name="' + u + '" textarea="' + t + '" frameborder="0"></iframe>', "</div>", "</div>"].join(""));
		return l.ie && l.ie < 8 ? s.removeClass("layui-hide").addClass(o) : (d[0] && d.remove(), c.call(a, m, s[0], y), s.addClass("layui-hide").after(m), a.index)
	}, s.prototype.getContent = function(t) {
		var e = u(t);
		if (e[0]) return d(e[0].document.body.innerHTML)
	}, s.prototype.getText = function(t) {
		var i = u(t);
		if (i[0]) return e(i[0].document.body).text()
	}, s.prototype.sync = function(t) {
		var i = u(t);
		if (i[0]) {
			var a = e("#" + i[1].attr("textarea"));
			a.val(d(i[0].document.body.innerHTML))
		}
	}, s.prototype.getSelection = function(t) {
		var e = u(t);
		if (e[0]) {
			var i = m(e[0].document);
			return document.selection ? i.text : i.toString()
		}
	};
	var c = function(t, i, a) {
			var l = this,
				n = t.find("iframe");
			n.css({
				height: a.height
			}).on("load", function() {
				var o = n.contents(),
					r = n.prop("contentWindow"),
					s = o.find("head"),
					c = e(["<style>", "*{margin: 0; padding: 0;}", "body{padding: 10px; line-height: 20px; overflow-x: hidden; word-wrap: break-word; font: 14px Helvetica Neue,Helvetica,PingFang SC,Microsoft YaHei,Tahoma,Arial,sans-serif; -webkit-box-sizing: border-box !important; -moz-box-sizing: border-box !important; box-sizing: border-box !important;}", "a{color:#01AAED; text-decoration:none;}a:hover{color:#c00}", "p{margin-bottom: 10px;}", "img{display: inline-block; border: none; vertical-align: middle;}", "pre{margin: 10px 0; padding: 10px; line-height: 20px; border: 1px solid #ddd; border-left-width: 6px; background-color: #F2F2F2; color: #333; font-family: Courier New; font-size: 12px;}", "</style>"].join("")),
					u = o.find("body");
				s.append(c), u.attr("contenteditable", "true").css({
					"min-height": a.height
				}).html(i.value || ""), y.apply(l, [r, n, i, a]), g.call(l, r, t, a)
			})
		},
		u = function(t) {
			var i = e("#LAY_layedit_" + t),
				a = i.prop("contentWindow");
			return [a, i]
		},
		d = function(t) {
			return 8 == l.ie && (t = t.replace(/<.+>/g, function(t) {
				return t.toLowerCase()
			})), t
		},
		y = function(t, a, n, o) {
			var r = t.document,
				s = e(r.body);
			s.on("keydown", function(t) {
				var e = t.keyCode;
				if (13 === e) {
					var a = m(r),
						l = p(a),
						n = l.parentNode;
					if ("pre" === n.tagName.toLowerCase()) {
						if (t.shiftKey) return;
						return i.msg("请暂时用shift+enter"), !1
					}
					r.execCommand("formatBlock", !1, "<p>")
				}
			}), e(n).parents("form").on("submit", function() {
				var t = s.html();
				8 == l.ie && (t = t.replace(/<.+>/g, function(t) {
					return t.toLowerCase()
				})), n.value = t
			}), s.on("paste", function(e) {
				r.execCommand("formatBlock", !1, "<p>"), setTimeout(function() {
					f.call(t, s), n.value = s.html()
				}, 100)
			})
		},
		f = function(t) {
			var i = this;
			i.document;
			t.find("*[style]").each(function() {
				var t = this.style.textAlign;
				this.removeAttribute("style"), e(this).css({
					"text-align": t || ""
				})
			}), t.find("table").addClass("layui-table"), t.find("script,link").remove()
		},
		m = function(t) {
			return t.selection ? t.selection.createRange() : t.getSelection().getRangeAt(0)
		},
		p = function(t) {
			return t.endContainer || t.parentElement().childNodes[0]
		},
		v = function(t, i, a) {
			var l = this.document,
				n = document.createElement(t);
			for (var o in i) n.setAttribute(o, i[o]);
			if (n.removeAttribute("text"), l.selection) {
				var r = a.text || i.text;
				if ("a" === t && !r) return;
				r && (n.innerHTML = r), a.pasteHTML(e(n).prop("outerHTML")), a.select()
			} else {
				var r = a.toString() || i.text;
				if ("a" === t && !r) return;
				r && (n.innerHTML = r), a.deleteContents(), a.insertNode(n)
			}
		},
		h = function(t, i) {
			var a = this.document,
				l = "layedit-tool-active",
				n = p(m(a)),
				o = function(e) {
					return t.find(".layedit-tool-" + e)
				};
			i && i[i.hasClass(l) ? "removeClass" : "addClass"](l), t.find(">i").removeClass(l), o("unlink").addClass(r), e(n).parents().each(function() {
				var t = this.tagName.toLowerCase(),
					e = this.style.textAlign;
				"b" !== t && "strong" !== t || o("b").addClass(l), "i" !== t && "em" !== t || o("i").addClass(l), "u" === t && o("u").addClass(l), "strike" === t && o("d").addClass(l), "p" === t && ("center" === e ? o("center").addClass(l) : "right" === e ? o("right").addClass(l) : o("left").addClass(l)), "a" === t && (o("link").addClass(l), o("unlink").removeClass(r))
			})
		},
		g = function(t, a, l) {
			var n = t.document,
				o = e(n.body),
				s = {
					link: function(i) {
						var a = p(i),
							l = e(a).parent();
						b.call(o, {
							href: l.attr("href"),
							target: l.attr("target")
						}, function(e) {
							var a = l[0];
							"A" === a.tagName ? a.href = e.url : v.call(t, "a", {
								target: e.target,
								href: e.url,
								text: e.url
							}, i)
						})
					},
					unlink: function(t) {
						n.execCommand("unlink")
					},
					face: function(e) {
						x.call(this, function(i) {
							v.call(t, "img", {
								src: i.src,
								alt: i.alt
							}, e)
						})
					},
					image: function(a) {
						var n = this;
						layui.use("upload", function(o) {
							var r = l.uploadImage || {};
							o({
								url: r.url,
								method: r.type,
								elem: e(n).find("input")[0],
								unwrap: !0,
								success: function(e) {
									0 == e.code ? (e.data = e.data || {}, v.call(t, "img", {
										src: e.data.src,
										alt: e.data.title
									}, a)) : i.msg(e.msg || "上传失败")
								}
							})
						})
					},
					code: function(e) {
						k.call(o, function(i) {
							v.call(t, "pre", {
								text: i.code,
								"lay-lang": i.lang
							}, e)
						})
					},
					help: function() {
						i.open({
							type: 2,
							title: "帮助",
							area: ["600px", "380px"],
							shadeClose: !0,
							shade: .1,
							skin: "layui-layer-msg",
							content: ["http://www.layui.com/about/layedit/help.html", "no"]
						})
					}
				},
				c = a.find(".layui-layedit-tool"),
				u = function() {
					var i = e(this),
						a = i.attr("layedit-event"),
						l = i.attr("lay-command");
					if (!i.hasClass(r)) {
						o.focus();
						var u = m(n);
						u.commonAncestorContainer;
						l ? (n.execCommand(l), /justifyLeft|justifyCenter|justifyRight/.test(l) && n.execCommand("formatBlock", !1, "<p>"), setTimeout(function() {
							o.focus()
						}, 10)) : s[a] && s[a].call(this, u), h.call(t, c, i)
					}
				},
				d = /image/;
			c.find(">i").on("mousedown", function() {
				var t = e(this),
					i = t.attr("layedit-event");
				d.test(i) || u.call(this)
			}).on("click", function() {
				var t = e(this),
					i = t.attr("layedit-event");
				d.test(i) && u.call(this)
			}), o.on("click", function() {
				h.call(t, c), i.close(x.index)
			})
		},
		b = function(t, e) {
			var l = this,
				n = i.open({
					type: 1,
					id: "LAY_layedit_link",
					area: "350px",
					shade: .05,
					shadeClose: !0,
					moveType: 1,
					title: "超链接",
					skin: "layui-layer-msg",
					content: ['<ul class="layui-form" style="margin: 15px;">', '<li class="layui-form-item">', '<label class="layui-form-label" style="width: 60px;">URL</label>', '<div class="layui-input-block" style="margin-left: 90px">', '<input name="url" lay-verify="url" value="' + (t.href || "") + '" autofocus="true" autocomplete="off" class="layui-input">', "</div>", "</li>", '<li class="layui-form-item">', '<label class="layui-form-label" style="width: 60px;">打开方式</label>', '<div class="layui-input-block" style="margin-left: 90px">', '<input type="radio" name="target" value="_self" class="layui-input" title="当前窗口"' + ("_self" !== t.target && t.target ? "" : "checked") + ">", '<input type="radio" name="target" value="_blank" class="layui-input" title="新窗口" ' + ("_blank" === t.target ? "checked" : "") + ">", "</div>", "</li>", '<li class="layui-form-item" style="text-align: center;">', '<button type="button" lay-submit lay-filter="layedit-link-yes" class="layui-btn"> 确定 </button>', '<button style="margin-left: 20px;" type="button" class="layui-btn layui-btn-primary"> 取消 </button>', "</li>", "</ul>"].join(""),
					success: function(t, n) {
						var o = "submit(layedit-link-yes)";
						a.render("radio"), t.find(".layui-btn-primary").on("click", function() {
							i.close(n), l.focus()
						}), a.on(o, function(t) {
							i.close(b.index), e && e(t.field)
						})
					}
				});
			b.index = n
		},
		x = function(t) {
			var a = function() {
				var t = ["[微笑]", "[嘻嘻]", "[哈哈]", "[可爱]", "[可怜]", "[挖鼻]", "[吃惊]", "[害羞]", "[挤眼]", "[闭嘴]", "[鄙视]", "[爱你]", "[泪]", "[偷笑]", "[亲亲]", "[生病]", "[太开心]", "[白眼]", "[右哼哼]", "[左哼哼]", "[嘘]", "[衰]", "[委屈]", "[吐]", "[哈欠]", "[抱抱]", "[怒]", "[疑问]", "[馋嘴]", "[拜拜]", "[思考]", "[汗]", "[困]", "[睡]", "[钱]", "[失望]", "[酷]", "[色]", "[哼]", "[鼓掌]", "[晕]", "[悲伤]", "[抓狂]", "[黑线]", "[阴险]", "[怒骂]", "[互粉]", "[心]", "[伤心]", "[猪头]", "[熊猫]", "[兔子]", "[ok]", "[耶]", "[good]", "[NO]", "[赞]", "[来]", "[弱]", "[草泥马]", "[神马]", "[囧]", "[浮云]", "[给力]", "[围观]", "[威武]", "[奥特曼]", "[礼物]", "[钟]", "[话筒]", "[蜡烛]", "[蛋糕]"],
					e = {};
				return layui.each(t, function(t, i) {
					e[i] = layui.cache.dir + "images/face/" + t + ".gif"
				}), e
			}();
			return x.hide = x.hide || function(t) {
				"face" !== e(t.target).attr("layedit-event") && i.close(x.index)
			}, x.index = i.tips(function() {
				var t = [];
				return layui.each(a, function(e, i) {
					t.push('<li title="' + e + '"><img src="' + i + '" alt="' + e + '"></li>')
				}), '<ul class="layui-clear">' + t.join("") + "</ul>"
			}(), this, {
				tips: 1,
				time: 0,
				skin: "layui-box layui-util-face",
				maxWidth: 500,
				success: function(l, n) {
					l.css({
						marginTop: -4,
						marginLeft: -10
					}).find(".layui-clear>li").on("click", function() {
						t && t({
							src: a[this.title],
							alt: this.title
						}), i.close(n)
					}), e(document).off("click", x.hide).on("click", x.hide)
				}
			})
		},
		k = function(t) {
			var e = this,
				l = i.open({
					type: 1,
					id: "LAY_layedit_code",
					area: "550px",
					shade: .05,
					shadeClose: !0,
					moveType: 1,
					title: "插入代码",
					skin: "layui-layer-msg",
					content: ['<ul class="layui-form layui-form-pane" style="margin: 15px;">', '<li class="layui-form-item">', '<label class="layui-form-label">请选择语言</label>', '<div class="layui-input-block">', '<select name="lang">', '<option value="JavaScript">JavaScript</option>', '<option value="HTML">HTML</option>', '<option value="CSS">CSS</option>', '<option value="Java">Java</option>', '<option value="PHP">PHP</option>', '<option value="C#">C#</option>', '<option value="Python">Python</option>', '<option value="Ruby">Ruby</option>', '<option value="Go">Go</option>', "</select>", "</div>", "</li>", '<li class="layui-form-item layui-form-text">', '<label class="layui-form-label">代码</label>', '<div class="layui-input-block">', '<textarea name="code" lay-verify="required" autofocus="true" class="layui-textarea" style="height: 200px;"></textarea>', "</div>", "</li>", '<li class="layui-form-item" style="text-align: center;">', '<button type="button" lay-submit lay-filter="layedit-code-yes" class="layui-btn"> 确定 </button>', '<button style="margin-left: 20px;" type="button" class="layui-btn layui-btn-primary"> 取消 </button>', "</li>", "</ul>"].join(""),
					success: function(l, n) {
						var o = "submit(layedit-code-yes)";
						a.render("select"), l.find(".layui-btn-primary").on("click", function() {
							i.close(n), e.focus()
						}), a.on(o, function(e) {
							i.close(k.index), t && t(e.field)
						})
					}
				});
			k.index = l
		},
		C = {
			html: '<i class="layui-icon layedit-tool-html" title="HTML源代码" lay-command="html" layedit-event="html"">&#xe64b;</i><span class="layedit-tool-mid"></span>',
			strong: '<i class="layui-icon layedit-tool-b" title="加粗" lay-command="Bold" layedit-event="b"">&#xe62b;</i>',
			italic: '<i class="layui-icon layedit-tool-i" title="斜体" lay-command="italic" layedit-event="i"">&#xe644;</i>',
			underline: '<i class="layui-icon layedit-tool-u" title="下划线" lay-command="underline" layedit-event="u"">&#xe646;</i>',
			del: '<i class="layui-icon layedit-tool-d" title="删除线" lay-command="strikeThrough" layedit-event="d"">&#xe64f;</i>',
			"|": '<span class="layedit-tool-mid"></span>',
			left: '<i class="layui-icon layedit-tool-left" title="左对齐" lay-command="justifyLeft" layedit-event="left"">&#xe649;</i>',
			center: '<i class="layui-icon layedit-tool-center" title="居中对齐" lay-command="justifyCenter" layedit-event="center"">&#xe647;</i>',
			right: '<i class="layui-icon layedit-tool-right" title="右对齐" lay-command="justifyRight" layedit-event="right"">&#xe648;</i>',
			link: '<i class="layui-icon layedit-tool-link" title="插入链接" layedit-event="link"">&#xe64c;</i>',
			unlink: '<i class="layui-icon layedit-tool-unlink layui-disabled" title="清除链接" lay-command="unlink" layedit-event="unlink"">&#xe64d;</i>',
			face: '<i class="layui-icon layedit-tool-face" title="表情" layedit-event="face"">&#xe650;</i>',
			image: '<i class="layui-icon layedit-tool-image" title="图片" layedit-event="image">&#xe64a;<input type="file" name="file"></i>',
			code: '<i class="layui-icon layedit-tool-code" title="插入代码" layedit-event="code">&#xe64e;</i>',
			help: '<i class="layui-icon layedit-tool-help" title="帮助" layedit-event="help">&#xe607;</i>'
		},
		w = new s;
	t(n, w)
});
layui.define("jquery", function(e) {
	"use strict";
	var a = layui.jquery,
		l = "http://www.layui.com/doc/modules/code.html";
	e("code", function(e) {
		var t = [];
		e = e || {}, e.elem = a(e.elem || ".layui-code"), e.about = !("about" in e) || e.about, e.elem.each(function() {
			t.push(this)
		}), layui.each(t.reverse(), function(t, i) {
			var c = a(i),
				o = c.html();
			(c.attr("lay-encode") || e.encode) && (o = o.replace(/&(?!#?[a-zA-Z0-9]+;)/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/'/g, "&#39;").replace(/"/g, "&quot;")), c.html('<ol class="layui-code-ol"><li>' + o.replace(/[\r\t\n]+/g, "</li><li>") + "</li></ol>"), c.find(">.layui-code-h3")[0] || c.prepend('<h3 class="layui-code-h3">' + (c.attr("lay-title") || e.title || "code") + (e.about ? '<a href="' + l + '" target="_blank">layui.code</a>' : "") + "</h3>");
			var d = c.find(">.layui-code-ol");
			c.addClass("layui-box layui-code-view"), (c.attr("lay-skin") || e.skin) && c.addClass("layui-code-" + (c.attr("lay-skin") || e.skin)), (d.find("li").length / 100 | 0) > 0 && d.css("margin-left", (d.find("li").length / 100 | 0) + "px"), (c.attr("lay-height") || e.height) && d.css("max-height", c.attr("lay-height") || e.height)
		})
	})
}).addcss("modules/code.css", "skincodecss");