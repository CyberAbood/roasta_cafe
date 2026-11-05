(function () {
  "use strict";

  var DATA = window.MENU_DATA;
  var STORAGE_KEY = "menu-lang";
  var TEXT = {
    ar: {
      title: "قائمة المشروبات", search: "ابحث عن مشروب", switchTo: "English", switchLang: "en",
      clear: "مسح", m: "M", l: "L", mFull: "وسط", lFull: "كبير", item: "الصنف", nav: "أقسام القائمة",
      currency: "الأسعار بالدينار الأردني",
      empty: function (q) { return "لا يوجد صنف باسم «" + q + "». جرّب اسمًا آخر."; },
      demo: "نسخة تجريبية من تصميم", pageTitle: "روستا كوفي | القائمة"
    },
    en: {
      title: "Drinks menu", search: "Search for a drink", switchTo: "العربية", switchLang: "ar",
      clear: "Clear", m: "M", l: "L", mFull: "Medium", lFull: "Large", item: "Item", nav: "Menu sections",
      currency: "Prices in Jordanian dinars",
      empty: function (q) { return "No drink matches “" + q + "”. Try another name."; },
      demo: "Demo version designed by", pageTitle: "ROASTA Coffee | Menu"
    }
  };

  var $ = function (id) { return document.getElementById(id); };
  var els = {
    menu: $("menu"), chips: $("chips"), bar: $("bar"), input: $("search"), clear: $("clear"),
    empty: $("empty"), emptyText: $("empty-text"), lang: $("lang"), title: $("title"),
    currency: $("currency"), demo: $("demo"), label: $("search-label")
  };

  var lang = initialLang();
  var observer = null;
  var chipById = {};

  function storageGet() { try { return localStorage.getItem(STORAGE_KEY); } catch (e) { return null; } }
  function storageSet(v) { try { localStorage.setItem(STORAGE_KEY, v); } catch (e) { /* optional */ } }

  function initialLang() {
    var q = null;
    try { q = new URLSearchParams(location.search).get("lang"); } catch (e) { /* older browser */ }
    if (q === "ar" || q === "en") return q;
    var s = storageGet();
    return s === "en" || s === "ar" ? s : "ar";
  }

  function normalize(s) {
    return String(s).toLowerCase()
      .replace(/[ً-ْـ]/g, "")
      .replace(/[أإآ]/g, "ا").replace(/ة/g, "ه").replace(/ى/g, "ي")
      .replace(/\s+/g, " ").trim();
  }

  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text !== undefined) n.textContent = text;
    return n;
  }

  function buildRow(item, withSizes) {
    var tr = el("tr", "row");
    var name = el("th", "row-name");
    name.scope = "row";
    name.appendChild(el("span", "row-title", item[lang]));
    if (item.note) {
      var note = el("span", "row-note", item.note);
      note.dir = "ltr";
      name.appendChild(note);
    }
    tr.appendChild(name);
    tr.appendChild(el("td", "price", item.price[0]));
    if (withSizes) tr.appendChild(el("td", "price", item.price[1] || ""));
    tr.dataset.search = normalize(item.ar + " " + item.en + " " + (item.note || ""));
    return tr;
  }

  function buildSection(sec) {
    var t = TEXT[lang];
    var box = el("section", "sec");
    box.id = sec.id;
    box.setAttribute("aria-labelledby", sec.id + "-h");
    var h = el("h2", "sec-title", sec[lang]);
    h.id = sec.id + "-h";
    box.appendChild(h);

    var table = el("table", "tbl" + (sec.sizes ? " has-sizes" : ""));
    var thead = el("thead");
    var hr = el("tr");
    var c = el("th", "vh", t.item);
    c.scope = "col";
    hr.appendChild(c);
    if (sec.sizes) {
      [["m", "mFull"], ["l", "lFull"]].forEach(function (k) {
        var th = el("th", "size", t[k[0]]);
        th.scope = "col";
        th.setAttribute("aria-label", t[k[1]]);
        hr.appendChild(th);
      });
    } else {
      var p = el("th", "vh", t.currency);
      p.scope = "col";
      hr.appendChild(p);
    }
    thead.appendChild(hr);
    table.appendChild(thead);

    var tb = el("tbody");
    sec.items.forEach(function (it) { tb.appendChild(buildRow(it, !!sec.sizes)); });
    table.appendChild(tb);
    box.appendChild(table);
    return box;
  }

  function render() {
    var t = TEXT[lang];
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    document.title = t.pageTitle;
    els.title.textContent = t.title;
    els.currency.textContent = t.currency;
    els.demo.textContent = t.demo;
    els.label.textContent = t.search;
    els.input.placeholder = t.search;
    els.clear.textContent = t.clear;
    els.lang.textContent = t.switchTo;
    els.lang.lang = t.switchLang;
    els.chips.setAttribute("aria-label", t.nav);

    els.menu.textContent = "";
    els.chips.textContent = "";
    chipById = {};
    DATA.sections.forEach(function (sec) {
      els.menu.appendChild(buildSection(sec));
      var a = el("a", "chip", sec[lang]);
      a.href = "#" + sec.id;
      a.addEventListener("click", onChip);
      chipById[sec.id] = a;
      els.chips.appendChild(a);
    });
    applySearch();
    setActive(DATA.sections[0].id);
    watchSections();
  }

  function onChip(e) {
    var target = document.querySelector(e.currentTarget.getAttribute("href"));
    if (!target) return;
    e.preventDefault();
    var calm = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    target.scrollIntoView({ behavior: calm ? "auto" : "smooth", block: "start" });
    setActive(target.id);
  }

  function setActive(id) {
    Object.keys(chipById).forEach(function (k) {
      var on = k === id;
      chipById[k].classList.toggle("is-on", on);
      if (on) {
        chipById[k].setAttribute("aria-current", "true");
        var c = chipById[k].getBoundingClientRect();
        var n = els.chips.getBoundingClientRect();
        els.chips.scrollBy({ left: (c.left + c.width / 2) - (n.left + n.width / 2) });
      } else {
        chipById[k].removeAttribute("aria-current");
      }
    });
  }

  function watchSections() {
    if (observer) observer.disconnect();
    if (!("IntersectionObserver" in window)) return;
    observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) setActive(en.target.id); });
    }, { rootMargin: "-20% 0px -70% 0px" });
    els.menu.querySelectorAll(".sec").forEach(function (s) { observer.observe(s); });
  }

  function applySearch() {
    var raw = els.input.value.trim();
    var q = normalize(raw);
    var any = false;
    els.menu.querySelectorAll(".sec").forEach(function (sec) {
      var shown = 0;
      sec.querySelectorAll(".row").forEach(function (r) {
        var ok = !q || (" " + r.dataset.search).indexOf(" " + q) !== -1;
        r.hidden = !ok;
        if (ok) shown++;
      });
      sec.hidden = shown === 0;
      if (shown) any = true;
    });
    els.bar.hidden = !!q;
    els.clear.hidden = !raw;
    els.empty.hidden = any;
    if (!any) els.emptyText.textContent = TEXT[lang].empty(raw);
  }

  els.input.addEventListener("input", applySearch);
  els.clear.addEventListener("click", function () {
    els.input.value = "";
    applySearch();
    els.input.focus();
  });
  els.lang.addEventListener("click", function () {
    lang = TEXT[lang].switchLang;
    storageSet(lang);
    render();
  });

  render();
})();
