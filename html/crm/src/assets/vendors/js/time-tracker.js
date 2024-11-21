!(function (e) {
	var n,
		s = { format: "H:i:s", countdown: !1, passed: 0, passedStop: -1, timestart: 0, timestop: 0, delayInterval: 1e3, stop: null },
		a = null,
		i = null,
		p = {
			init: function (t) {
				(i = this), (n = e.extend({}, s, t)).timestop && (n.passedStop = 1e3 * n.timestop), n.countdown && 0 === n.passedStop && (n.countdown = !1), 0 !== n.passed && (n.passed = 1e3 * n.passed), p.display.apply(), p.stop.apply();
			},
			start: function () {
				(n.timestart = Date.now()), (a = setTimeout(p.make, n.delayInterval));
			},
			stop: function () {
				a && clearTimeout(a);
			},
			make: function () {
				var t = Date.now();
				(n.passed += t - n.timestart), (n.timestart = t), p.display.apply(), n.passed <= n.passedStop || n.passedStop < 0 ? (a = setTimeout(p.make, n.delayInterval)) : ((n.passed = n.passedStop), n.stop && n.stop.apply());
			},
			display: function () {
				var t = 0,
					e = 0,
					s = 0,
					a = n.format,
					p = n.passed,
					o = Math.floor;
				n.countdown && ((p = n.passedStop - p), (o = Math.ceil)), (s = o(p / 1e3) % 60), (e = (e = Math.floor(p / 6e4) % 60) < 10 ? "0" + e : e), (s = s < 10 ? "0" + s : s), (t = (t = Math.floor(p / 36e5)) < 10 ? "0" + t : t), (a = a.replace("H", t).replace("i", e).replace("s", s)), i.text(a);
			},
			reset: function () {
				(n.passed = 0), n.timestop && (n.passedStop = 1e3 * n.timestop), n.countdown && 0 === n.passedStop && (n.countdown = !1), p.display.apply();
			},
		};
	e.fn.timetracker = function (t) {
		return p[t] ? p[t].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof t && t ? void e.error(t + " don't exists") : p.init.apply(this, arguments);
	};
})(jQuery);
