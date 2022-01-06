!function(e1) {
    var t1, n, o, i, c, d = '<svg><symbol id="icon-tianjia" viewBox="0 0 1024 1024"><path d="M801.171 483.589H544V226.418c0-17.673-14.327-32-32-32s-32 14.327-32 32v257.171H222.83c-17.673 0-32 14.327-32 32s14.327 32 32 32H480v257.17c0 17.673 14.327 32 32 32s32-14.327 32-32v-257.17h257.171c17.673 0 32-14.327 32-32s-14.327-32-32-32z" fill="" ></path></symbol></svg>', s = (s = document.getElementsByTagName("script"))[s.length - 1].getAttribute("data-injectcss"), a = function(e, t) {
        t.parentNode.insertBefore(e, t);
    };
    if (s && !e1.__iconfont__svg__cssinject__) {
        e1.__iconfont__svg__cssinject__ = !0;
        try {
            document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
        } catch (e) {
            console && console.log(e);
        }
    }
    function l() {
        c || (c = !0, o());
    }
    function r() {
        try {
            i.documentElement.doScroll("left");
        } catch (e) {
            return void setTimeout(r, 50);
        }
        l();
    }
    t1 = function() {
        var e, t;
        (t = document.createElement("div")).innerHTML = d, d = null, (e = t.getElementsByTagName("svg")[0]) && (e.setAttribute("aria-hidden", "true"), e.style.position = "absolute", e.style.width = 0, e.style.height = 0, e.style.overflow = "hidden", t = e, (e = document.body).firstChild ? a(t, e.firstChild) : e.appendChild(t));
    }, document.addEventListener ? ~[
        "complete",
        "loaded",
        "interactive"
    ].indexOf(document.readyState) ? setTimeout(t1, 0) : (n = function() {
        document.removeEventListener("DOMContentLoaded", n, !1), t1();
    }, document.addEventListener("DOMContentLoaded", n, !1)) : document.attachEvent && (o = t1, i = e1.document, c = !1, r(), i.onreadystatechange = function() {
        "complete" == i.readyState && (i.onreadystatechange = null, l());
    });
}(window);

//# sourceMappingURL=index.9804f12e.js.map
