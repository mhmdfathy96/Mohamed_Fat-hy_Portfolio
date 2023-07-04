(function () {
  "use strict";
  var t = {
      6599: function (t, A, s) {
        var a = s(6369),
          e = function () {
            var t = this,
              A = t._self._c;
            return A("div", { attrs: { id: "app" } }, [A("router-view")], 1);
          },
          i = [],
          n = { name: "app" },
          o = n,
          l = s(1001),
          r = (0, l.Z)(o, e, i, !1, null, null, null),
          c = r.exports,
          v = s(2631),
          d = function () {
            var t = this,
              A = t._self._c;
            return A(
              "div",
              { staticClass: "home" },
              [A("nav-bar"), A("header-content"), A("footer-content")],
              1
            );
          },
          u = [],
          C = function () {
            var t = this,
              A = t._self._c;
            return A(
              "div",
              { staticClass: "header", attrs: { id: "header" } },
              [
                A("div", { staticClass: "overlay" }),
                A("div", { staticClass: "container" }, [
                  A("div", { staticClass: "header-content" }, [
                    A("div", { staticClass: "container" }, [
                      A("div", { staticClass: "row" }, [
                        A("div", { staticClass: "col-12" }, [
                          A(
                            "div",
                            { staticClass: "head-content" },
                            [
                              A("h3", [t._v("WELCOME TO MY WORLD")]),
                              A("vue-typer", {
                                staticClass: "txt-rotate",
                                attrs: {
                                  text: [
                                    "I am Mohamed Fat-hy .",
                                    "I am a Flutter Developer .",
                                    "I am Creative .",
                                  ],
                                  repeat: 1 / 0,
                                  shuffle: !1,
                                  "initial-action": "typing",
                                  "pre-type-delay": 70,
                                  "type-delay": 70,
                                  "pre-erase-delay": 2e3,
                                  "erase-delay": 250,
                                  "erase-style": "clear",
                                  "erase-on-complete": !1,
                                  "caret-animation": "smooth",
                                },
                              }),
                              A("p", [t._v("based in Cairo, Egypt.")]),
                              t._m(0),
                            ],
                            1
                          ),
                        ]),
                      ]),
                    ]),
                  ]),
                ]),
              ]
            );
          },
          g = [
            function () {
              var t = this,
                A = t._self._c;
              return A(
                "a",
                {
                  attrs: {
                    href: "https://drive.google.com/file/d/13Xn1x8biFuNnQnIPybM-kno_OMv7yUpV/view",
                    target: "_blank",
                  },
                },
                [A("button", { staticClass: "cv-btn" }, [t._v("Download CV")])]
              );
            },
          ],
          p = { name: "HeaderContent" },
          f = p,
          h = (0, l.Z)(f, C, g, !1, null, "63092505", null),
          m = h.exports,
          w = function () {
            var t = this,
              A = t._self._c;
            return A(
              "nav",
              {
                staticClass:
                  "navbar navbar-expand-lg navbar-dark bg-dark fixed-top sticky",
              },
              [
                A("div", { staticClass: "container" }, [
                  t._m(0),
                  t._m(1),
                  A(
                    "div",
                    {
                      staticClass: "collapse navbar-collapse",
                      attrs: { id: "navbarNavAltMarkup" },
                    },
                    [
                      A(
                        "div",
                        { staticClass: "navbar-nav ms-auto" },
                        [
                          A("router-link", { attrs: { tag: "li", to: "/" } }, [
                            A("a", { staticClass: "nav-link" }, [t._v("Home")]),
                          ]),
                          A(
                            "router-link",
                            { attrs: { tag: "li", to: "/about" } },
                            [
                              A("a", { staticClass: "nav-link" }, [
                                t._v("About"),
                              ]),
                            ]
                          ),
                          A(
                            "router-link",
                            { attrs: { tag: "li", to: "/services" } },
                            [
                              A("a", { staticClass: "nav-link" }, [
                                t._v("Services"),
                              ]),
                            ]
                          ),
                          A(
                            "router-link",
                            { attrs: { tag: "li", to: "/why" } },
                            [
                              A("a", { staticClass: "nav-link" }, [
                                t._v("Why Choose"),
                              ]),
                            ]
                          ),
                          A(
                            "router-link",
                            { attrs: { tag: "li", to: "/work" } },
                            [
                              A("a", { staticClass: "nav-link" }, [
                                t._v("Portfolio"),
                              ]),
                            ]
                          ),
                          A(
                            "router-link",
                            { attrs: { tag: "li", to: "/process" } },
                            [
                              A("a", { staticClass: "nav-link" }, [
                                t._v("Process"),
                              ]),
                            ]
                          ),
                          A(
                            "router-link",
                            { attrs: { tag: "li", to: "/clients" } },
                            [
                              A("a", { staticClass: "nav-link" }, [
                                t._v("Clients"),
                              ]),
                            ]
                          ),
                          A(
                            "router-link",
                            { attrs: { tag: "li", to: "/contact" } },
                            [
                              A("a", { staticClass: "nav-link" }, [
                                t._v("Contact"),
                              ]),
                            ]
                          ),
                        ],
                        1
                      ),
                    ]
                  ),
                ]),
              ]
            );
          },
          E = [
            function () {
              var t = this,
                A = t._self._c;
              return A(
                "a",
                { staticClass: "navbar-brand", attrs: { href: "#header" } },
                [A("h3", [A("span", [t._v("K")]), t._v("ariim")])]
              );
            },
            function () {
              var t = this,
                A = t._self._c;
              return A(
                "button",
                {
                  staticClass: "navbar-toggler",
                  attrs: {
                    type: "button",
                    "data-bs-toggle": "collapse",
                    "data-bs-target": "#navbarNavAltMarkup",
                    "aria-controls": "navbarNavAltMarkup",
                    "aria-expanded": "false",
                    "aria-label": "Toggle navigation",
                  },
                },
                [A("span", { staticClass: "navbar-toggler-icon" })]
              );
            },
          ],
          b = {
            name: "NavBar",
            methods: {
              NavBar() {
                let t = document.querySelector("html , body"),
                  A = document.querySelector("nav");
                window.addEventListener("scroll", function () {
                  t.scrollTop > 50
                    ? (A.style.backgroundColor = "#0B0B0B")
                    : (A.style.backgroundColor = "transparent");
                });
              },
            },
            beforeMount() {
              window.addEventListener("scroll", this.NavBar);
            },
          },
          y = b,
          k = (0, l.Z)(y, w, E, !1, null, "55afeaad", null),
          B = k.exports,
          x = function () {
            var t = this;
            t._self._c;
            return t._m(0);
          },
          I = [
            function () {
              var t = this,
                A = t._self._c;
              return A("div", { staticClass: "footer" }, [
                A("div", { staticClass: "container" }, [
                  A("div", { staticClass: "row" }, [
                    A("div", { staticClass: "footer-content" }, [
                      A("div", { staticClass: "col-12" }, [
                        A("div", { staticClass: "footer-links" }, [
                          A(
                            "a",
                            {
                              attrs: {
                                href: "https://twitter.com/Kariim_Gamal",
                                target: "_blank",
                              },
                            },
                            [A("i", { staticClass: "fab fa-twitter twitter" })]
                          ),
                          A(
                            "a",
                            {
                              attrs: {
                                href: "https://www.facebook.com/karim.elagawany/",
                                target: "_blank",
                              },
                            },
                            [
                              A("i", {
                                staticClass: "fab fa-facebook-f facebook",
                              }),
                            ]
                          ),
                          A(
                            "a",
                            {
                              attrs: {
                                href: "https://www.linkedin.com/in/karem-gamal-415b45126/",
                                target: "_blank",
                              },
                            },
                            [
                              A("i", {
                                staticClass: "fab fa-linkedin-in linkedin",
                              }),
                            ]
                          ),
                          A(
                            "a",
                            {
                              attrs: {
                                href: "https://wa.me/+201094123678",
                                target: "_blank",
                              },
                            },
                            [A("i", { staticClass: "fab fa-whatsapp whats" })]
                          ),
                          A(
                            "a",
                            {
                              attrs: {
                                href: "https://github.com/KarimGamal97",
                                target: "_blank",
                              },
                            },
                            [A("i", { staticClass: "fab fa-github github" })]
                          ),
                        ]),
                      ]),
                      A("div", { staticClass: "col-12" }, [
                        A("div", { staticClass: "footer-copyright" }, [
                          A("p", [
                            t._v(" Copyright © 2022 "),
                            A("span", [t._v("Mohamed")]),
                            t._v(" All Rights Reserved. "),
                          ]),
                        ]),
                      ]),
                      A("div", { staticClass: "col-12" }, [
                        A("div", { staticClass: "footer-terms" }, [
                          A("a", { attrs: { href: "#" } }, [
                            t._v("Terms & Policy"),
                          ]),
                          A("a", { attrs: { href: "#" } }, [
                            t._v(" Disclaimer"),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                ]),
              ]);
            },
          ],
          W = { name: "FooterContent" },
          S = W,
          Q = (0, l.Z)(S, x, I, !1, null, "50dffdb6", null),
          Z = Q.exports,
          J = {
            name: "HomeView",
            components: { NavBar: B, HeaderContent: m, FooterContent: Z },
          },
          R = J,
          q = (0, l.Z)(R, d, u, !1, null, "1ca91b90", null),
          F = q.exports,
          j = function () {
            var t = this,
              A = t._self._c;
            return A(
              "div",
              { staticClass: "about" },
              [A("nav-bar"), A("about-content"), A("footer-content")],
              1
            );
          },
          M = [],
          T = function () {
            var t = this;
            t._self._c;
            return t._m(0);
          },
          N = [
            function () {
              var t = this,
                A = t._self._c;
              return A(
                "div",
                { staticClass: "about", attrs: { id: "about" } },
                [
                  A("div", { staticClass: "container" }, [
                    A("div", { staticClass: "row" }, [
                      A("div", { staticClass: "col-lg-5 col-xs-12" }, [
                        A(
                          "div",
                          {
                            staticClass: "about-img",
                            attrs: {
                              "data-aos": "fade-right",
                              "data-aos-delay": "500",
                              "data-aos-duration": "2000",
                            },
                          },
                          [
                            A("img", {
                              attrs: {
                                src: s(1043),
                                alt: "About-image",
                                title: "I'm Mohamed Fat-hy",
                              },
                            }),
                          ]
                        ),
                      ]),
                      A("div", { staticClass: "col-lg-7 col-xs-12" }, [
                        A(
                          "div",
                          {
                            staticClass: "about-content",
                            attrs: {
                              "data-aos": "fade-left",
                              "data-aos-delay": "500",
                              "data-aos-duration": "2000",
                            },
                          },
                          [
                            A("h2", [t._v("About Me")]),
                            A("h3", [
                              t._v("Hello!"),
                              A("span", [t._v(" I'm Mohamed Fat-hy")]),
                            ]),
                            A("p", [
                              t._v(
                                " I combine our passion for design focused in people with advanced development technologies. "
                              ),
                              A("strong", [t._v("10+ clients")]),
                              t._v(
                                " have procured exceptional results and happiness while working with me. "
                              ),
                            ]),
                            A("p", [
                              t._v(" Delivering work within "),
                              A("strong", [t._v("time and budget")]),
                              t._v(
                                " which meets client’s requirements is our moto. when an unknown printer took a galley of type and scrambled it to make a type specimen book lorem Ipsum has been the industry's standard. Lorem Ipsum has been the industry's standard dummy text ever since. "
                              ),
                            ]),
                          ]
                        ),
                        A("div", { staticClass: "about-features" }, [
                          A("div", { staticClass: "feat" }, [
                            A("h3", [t._v("2+")]),
                            A("p", [t._v("Years Experience")]),
                          ]),
                          A("div", { staticClass: "feat" }, [
                            A("h3", [t._v("10+")]),
                            A("p", [t._v("Happy Clients")]),
                          ]),
                          A("div", { staticClass: "feat last" }, [
                            A("h3", [t._v("3+")]),
                            A("p", [t._v("Projects Done")]),
                          ]),
                        ]),
                        A("div", { staticClass: "about-buttons" }, [
                          A("button", { staticClass: "about-btn" }, [
                            t._v("About more"),
                          ]),
                          A("a", { attrs: { href: "#best" } }, [
                            A("button", { staticClass: "discover-btn" }, [
                              t._v(" Discover My Work "),
                              A("i", {
                                staticClass: "fas fa-long-arrow-alt-right",
                              }),
                            ]),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                ]
              );
            },
          ],
          V = { name: "AboutContent" },
          Y = V,
          L = (0, l.Z)(Y, T, N, !1, null, "00cef02e", null),
          D = L.exports,
          X = {
            name: "AboutView",
            components: { AboutContent: D, NavBar: B, FooterContent: Z },
          },
          z = X,
          P = (0, l.Z)(z, j, M, !1, null, "3f6ee388", null),
          G = P.exports,
          K = function () {
            var t = this,
              A = t._self._c;
            return A(
              "div",
              { staticClass: "services" },
              [A("nav-bar"), A("services-content"), A("footer-content")],
              1
            );
          },
          O = [],
          H = function () {
            var t = this,
              A = t._self._c;
            return A(
              "div",
              { staticClass: "service", attrs: { id: "service" } },
              [
                A("div", { staticClass: "container" }, [
                  A("div", { staticClass: "row" }, [
                    t._m(0),
                    A("div", { staticClass: "col-lg-4 col-sm-6 col-xs-12" }, [
                      A(
                        "div",
                        {
                          staticClass: "service-box",
                          attrs: {
                            "data-aos": "fade-right",
                            "data-aos-delay": "200",
                            "data-aos-duration": "2000",
                          },
                        },
                        [
                          A("font-awesome-icon", {
                            staticClass: "font-icon",
                            attrs: { icon: ["fas", "palette"] },
                          }),
                          A("h4", [t._v("UI/UX Design")]),
                          A("p", [
                            t._v(
                              "Owesome Designs the best out of your imagination."
                            ),
                          ]),
                        ],
                        1
                      ),
                    ]),
                    A("div", { staticClass: "col-lg-4 col-sm-6 col-xs-12" }, [
                      A(
                        "div",
                        {
                          staticClass: "service-box",
                          attrs: {
                            "data-aos": "zoom-in",
                            "data-aos-delay": "200",
                            "data-aos-duration": "2000",
                          },
                        },
                        [
                          A("font-awesome-icon", {
                            staticClass: "font-icon",
                            attrs: { icon: ["fas", "desktop"] },
                          }),
                          A("h4", [t._v("Mobile App")]),
                          A("p", [
                            t._v(
                              "Android and IOS ready to launch."
                            ),
                          ]),
                        ],
                        1
                      ),
                    ]),
                    A("div", { staticClass: "col-lg-4 col-sm-6 col-xs-12" }, [
                      A(
                        "div",
                        {
                          staticClass: "service-box",
                          attrs: {
                            "data-aos": "fade-left",
                            "data-aos-delay": "200",
                            "data-aos-duration": "2000",
                          },
                        },
                        [
                          A("font-awesome-icon", {
                            staticClass: "font-icon",
                            attrs: { icon: ["fas", "pencil-ruler"] },
                          }),
                          A("h4", [t._v("Web Development")]),
                          A("p", [
                            t._v(
                              "Awesome designs that matches mobile application."
                            ),
                          ]),
                        ],
                        1
                      ),
                    ]),
                    A("div", { staticClass: "col-lg-4 col-sm-6 col-xs-12" }, [
                      A(
                        "div",
                        {
                          staticClass: "service-box",
                          attrs: {
                            "data-aos": "fade-right",
                            "data-aos-delay": "200",
                            "data-aos-duration": "2000",
                          },
                        },
                        [
                          A("font-awesome-icon", {
                            staticClass: "font-icon",
                            attrs: { icon: ["fas", "fingerprint"] },
                          }),
                          A("h4", [t._v("Back End")]),
                          A("p", [
                            t._v(
                              "Make sure all your products are technically similar with our backend."
                            ),
                          ]),
                        ],
                        1
                      ),
                    ]),
                    // A("div", { staticClass: "col-lg-4 col-sm-6 col-xs-12" }, [
                    //   A(
                    //     "div",
                    //     {
                    //       staticClass: "service-box",
                    //       attrs: {
                    //         "data-aos": "zoom-in",
                    //         "data-aos-delay": "200",
                    //         "data-aos-duration": "2000",
                    //       },
                    //     },
                    //     [
                    //       A("font-awesome-icon", {
                    //         staticClass: "font-icon",
                    //         attrs: { icon: ["fas", "chart-simple"] },
                    //       }),
                    //       A("h4", [t._v("Business Analysis")]),
                    //       A("p", [
                    //         t._v(
                    //           " We're smart, we're hard working, we're easy to talk to, and we love a challenge. "
                    //         ),
                    //       ]),
                    //     ],
                    //     1
                    //   ),
                    // ]),
                    // A("div", { staticClass: "col-lg-4 col-sm-6 col-xs-12" }, [
                    //   A(
                    //     "div",
                    //     {
                    //       staticClass: "service-box",
                    //       attrs: {
                    //         "data-aos": "fade-left",
                    //         "data-aos-delay": "200",
                    //         "data-aos-duration": "2000",
                    //       },
                    //     },
                    //     [
                    //       A("font-awesome-icon", {
                    //         staticClass: "font-icon",
                    //         attrs: { icon: ["fas", "tachograph-digital"] },
                    //       }),
                    //       A("h4", [t._v("Digital Marketing")]),
                    //       A("p", [
                    //         t._v(
                    //           " We're smart, we're hard working, we're easy to talk to, and we love a challenge. "
                    //         ),
                    //       ]),
                    //     ],
                    //     1
                    //   ),
                    // ]),
                  ]),
                ]),
              ]
            );
          },
          U = [
            function () {
              var t = this,
                A = t._self._c;
              return A("div", { staticClass: "col-12" }, [
                A("div", { staticClass: "service-title" }, [
                  A("h3", [t._v("Our Services")]),
                  A("p", [
                    t._v(
                      " How I can help take your next project to new heights! Thousands of clients have procured exceptional results while working with Me. "
                    ),
                  ]),
                ]),
              ]);
            },
          ],
          _ = { name: "ServicesConent" },
          $ = _,
          tt = (0, l.Z)($, H, U, !1, null, "3f71b0c6", null),
          At = tt.exports,
          st = {
            name: "AboutView",
            components: { ServicesContent: At, NavBar: B, FooterContent: Z },
          },
          at = st,
          et = (0, l.Z)(at, K, O, !1, null, "178a7adf", null),
          it = et.exports,
          nt = function () {
            var t = this,
              A = t._self._c;
            return A(
              "div",
              { staticClass: "why" },
              [
                A("nav-bar"),
                A("why-content"),
                A("skills-content"),
                A("hire-content"),
                A("footer-content"),
              ],
              1
            );
          },
          ot = [],
          lt = function () {
            var t = this,
              A = t._self._c;
            return A("div", { staticClass: "why", attrs: { id: "why" } }, [
              A("div", { staticClass: "container" }, [
                A("div", { staticClass: "row" }, [
                  t._m(0),
                  A("div", { staticClass: "why-box" }, [
                    A(
                      "div",
                      { staticClass: "why-feat-icon" },
                      [
                        A("font-awesome-icon", {
                          staticClass: "font-icon",
                          attrs: { icon: ["fas", "fingerprint"] },
                        }),
                      ],
                      1
                    ),
                    A(
                      "div",
                      { staticClass: "why-feat-text" },
                      [
                        A("h3", [t._v("Unique Design")]),
                        A("P", [
                          t._v(
                            "Always providing a unique design for the product's benefit."
                          ),
                        ]),
                      ],
                      1
                    ),
                  ]),
                  A("div", { staticClass: "why-box" }, [
                    A(
                      "div",
                      { staticClass: "why-feat-icon" },
                      [
                        A("font-awesome-icon", {
                          staticClass: "font-icon",
                          attrs: { icon: ["fas", "cog"] },
                        }),
                      ],
                      1
                    ),
                    A(
                      "div",
                      { staticClass: "why-feat-text" },
                      [
                        A("h3", [t._v("Fully Customisable")]),
                        A("P", [
                          t._v(
                            "Always trying to make them all dynamic for easy customization."
                          ),
                        ]),
                      ],
                      1
                    ),
                  ]),
                  A("div", { staticClass: "why-box" }, [
                    A(
                      "div",
                      { staticClass: "why-feat-icon" },
                      [
                        A("font-awesome-icon", {
                          staticClass: "font-icon",
                          attrs: { icon: ["fas", "layer-group"] },
                        }),
                      ],
                      1
                    ),
                    A(
                      "div",
                      { staticClass: "why-feat-text" },
                      [
                        A("h3", [t._v("Different Layout")]),
                        A("P", [
                          t._v(
                            "Make sure your products should have its own layouts."
                          ),
                        ]),
                      ],
                      1
                    ),
                  ]),
                  A("div", { staticClass: "why-box" }, [
                    A(
                      "div",
                      { staticClass: "why-feat-icon" },
                      [
                        A("font-awesome-icon", {
                          staticClass: "font-icon",
                          attrs: { icon: ["fas", "mobile-alt"] },
                        }),
                      ],
                      1
                    ),
                    A(
                      "div",
                      { staticClass: "why-feat-text" },
                      [
                        A("h3", [t._v("Responsive Layout")]),
                        A("P", [
                          t._v(
                            "Make sure that the beautiful layouts for your products are always Responsive."
                          ),
                        ]),
                      ],
                      1
                    ),
                  ]),
                  A("div", { staticClass: "why-box" }, [
                    A(
                      "div",
                      { staticClass: "why-feat-icon" },
                      [
                        A("font-awesome-icon", {
                          staticClass: "font-icon",
                          attrs: { icon: ["fas", "expand-alt"] },
                        }),
                      ],
                      1
                    ),
                    A(
                      "div",
                      { staticClass: "why-feat-text" },
                      [
                        A("h3", [t._v("Boxed & Wide Layouts")]),
                        A("P", [
                          t._v(
                            "Ofcourse all kind of layouts are available for your product."
                          ),
                        ]),
                      ],
                      1
                    ),
                  ]),
                  A("div", { staticClass: "why-box" }, [
                    A(
                      "div",
                      { staticClass: "why-feat-icon" },
                      [
                        A("font-awesome-icon", {
                          staticClass: "font-icon",
                          attrs: { icon: ["fas", "life-ring"] },
                        }),
                      ],
                      1
                    ),
                    A(
                      "div",
                      { staticClass: "why-feat-text" },
                      [
                        A("h3", [t._v("Extensive Documentation")]),
                        A("P", [
                          t._v(
                            "Make sure that our work are documented and original."
                          ),
                        ]),
                      ],
                      1
                    ),
                  ]),
                ]),
              ]),
            ]);
          },
          rt = [
            function () {
              var t = this,
                A = t._self._c;
              return A("div", { staticClass: "col-12" }, [
                A("div", { staticClass: "why-title" }, [
                  A("h3", [t._v("Why I'm Different?")]),
                  A("p", [
                    t._v(
                      " We're smart, hard working, easy to talk to, We love challenges and always eager to learn more. "
                    ),
                  ]),
                ]),
              ]);
            },
          ],
          ct = { name: "WhyComponent" },
          vt = ct,
          dt = (0, l.Z)(vt, lt, rt, !1, null, "7ad3dd74", null),
          ut = dt.exports,
          Ct = function () {
            var t = this;
            t._self._c;
            return t._m(0);
          },
          gt = [
            function () {
              var t = this,
                A = t._self._c;
              return A(
                "div",
                { staticClass: "our-skills", attrs: { id: "our-skills" } },
                [
                  A("div", { staticClass: "skills-title" }, [
                    A("h3", [t._v("My Skills")]),
                  ]),
                  A("div", { staticClass: "container" }, [
                    A("div", { staticClass: "skills" }, [
                      A("div", { staticClass: "skill" }, [
                        A("h3", [
                          t._v(
                            "UI Framework: Flutter (State Management: Provider, BLoC)."
                          ),
                        //   A("span", [t._v("90%")]),
                        ]),
                        A("div", { staticClass: "the-progress" }, [
                          A("span", {
                            staticStyle: { width: "0" },
                            attrs: { "data-width": "90%" },
                          }),
                        ]),
                      ]),
                      A("br"),
                      A("div", { staticClass: "skill" }, [
                        A("h3", [
                          t._v(
                            "Programing languages: Java, Kotlin, C#, Dart, PHP (Basics)."
                          ),
                        //   A("span", [t._v("90%")]),
                        ]),
                        A("div", { staticClass: "the-progress" }, [
                          A("span", {
                            staticStyle: { width: "0" },
                            attrs: { "data-width": "90%" },
                          }),
                        ]),
                      ]),
                      A("br"),
                      A("div", { staticClass: "skill" }, [
                        A("h3", [
                          t._v("Database: MySQL, SQLite, Firebase."),
                        //   A("span", [t._v("80%")]),
                        ]),
                        A("div", { staticClass: "the-progress" }, [
                          A("span", {
                            staticStyle: { width: "0" },
                            attrs: { "data-width": "80%" },
                          }),
                        ]),
                      ]),
                      A("br"),
                      A("div", { staticClass: "skill" }, [
                        A("h3", [
                          t._v("Software Design Pattern: MVC, MVVM."),
                        //   A("span", [t._v("85%")]),
                        ]),
                        A("div", { staticClass: "the-progress" }, [
                          A("span", {
                            staticStyle: { width: "0" },
                            attrs: { "data-width": "85%" },
                          }),
                        ]),
                      ]),
                      A("br"),
                      A("div", { staticClass: "skill" }, [
                        A("h3", [
                          t._v("Application Programing Interface: Restful API."),
                        //   A("span", [t._v("90%")]),
                        ]),
                        A("div", { staticClass: "the-progress" }, [
                          A("span", {
                            staticStyle: { width: "0" },
                            attrs: { "data-width": "90%" },
                          }),
                        ]),
                      ]),
                      A("br"),
                      A("div", { staticClass: "skill" }, [
                        A("h3", [
                          t._v("Clean Architecture Code."),
                        //   A("span", [t._v("90%")]),
                        ]),
                        A("div", { staticClass: "the-progress" }, [
                          A("span", {
                            staticStyle: { width: "0" },
                            attrs: { "data-width": "90%" },
                          }),
                        ]),
                      ]),
                      A("br"),
                      A("div", { staticClass: "skill" }, [
                        A("h3", [
                          t._v("Versions Control Systems (Git ,GitHub) "),
                        //   A("span", [t._v("85%")]),
                        ]),
                        A("div", { staticClass: "the-progress" }, [
                          A("span", {
                            staticStyle: { width: "0" },
                            attrs: { "data-width": "85%" },
                          }),
                        ]),
                      ]),
                      A("br"),
                    ]),
                  ]),
                ]
              );
            },
          ],
          pt = {
            name: "SkillsContent",
            methos: {
              Skills() {
                let t,
                  A = document.querySelectorAll(".the-progress span"),
                  s = document.querySelector(".our-skills"),
                  a = document.querySelectorAll(".stats .number"),
                  e = document.querySelector(".stats"),
                  i = !1;
                window.onscroll = function () {
                  window.scrollY >= s.offsetTop - 20 &&
                    A.forEach((t) => {
                      t.style.width = t.dataset.width;
                    }),
                    window.scrollY >= e.offsetTop &&
                      (i || a.forEach((A) => t(A)), (i = !0));
                };
              },
            },
            beforeMount() {
              window.addEventListener("scroll", this.Skills);
            },
          },
          ft = pt,
          ht = (0, l.Z)(ft, Ct, gt, !1, null, "3c559569", null),
          mt = ht.exports,
          wt = function () {
            var t = this;
            t._self._c;
            return t._m(0);
          },
          Et = [
            function () {
              var t = this,
                A = t._self._c;
              return A("div", { staticClass: "hire" }, [
                A("div", { staticClass: "container" }, [
                  A("div", { staticClass: "row" }, [
                    A("div", { staticClass: "col-12" }, [
                      A("div", { staticClass: "hire-content" }, [
                        A("p", [t._v("I am Available for Freelancer.")]),
                        A("h2", [t._v("Start a project with Me today!")]),
                        A("button", { staticClass: "hire-btn" }, [
                          A("a", { attrs: { href: "#contact" } }, [
                            t._v("Hire Me"),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                ]),
              ]);
            },
          ],
          bt = { name: "HireContent" },
          yt = bt,
          kt = (0, l.Z)(yt, wt, Et, !1, null, "04a47f0a", null),
          Bt = kt.exports,
          xt = {
            name: "AboutView",
            components: {
              WhyContent: ut,
              NavBar: B,
              FooterContent: Z,
              SkillsContent: mt,
              HireContent: Bt,
            },
          },
          It = xt,
          Wt = (0, l.Z)(It, nt, ot, !1, null, "70d230bb", null),
          St = Wt.exports,
          Qt = function () {
            var t = this,
              A = t._self._c;
            return A(
              "div",
              { staticClass: "work" },
              [A("nav-bar"), A("work-content"), A("footer-content")],
              1
            );
          },
          Zt = [],
          Jt = function () {
            var t = this,
              A = t._self._c;
            return A("div", { staticClass: "best", attrs: { id: "best" } }, [
              A("div", { staticClass: "container" }, [
                A("div", { staticClass: "row" }, [
                  t._m(0),
                  t._m(1),
                  A(
                    "section",
                    {
                      staticClass:
                        "transitions-enabled fluid masonry js-masonry grid",
                      attrs: { id: "grid-container" },
                    },
                    [
                      A("article", { staticClass: "webdesign all" }, [
                        A("img", {
                          staticClass: "img-responsive",
                          attrs: { src: s(8364) },
                        }),
                        A("div", { staticClass: "hidden-info" }, [
                          A(
                            "a",
                            {
                              attrs: {
                                href: "https://karimgamal97.github.io/Axit/",
                                target: "_blank",
                              },
                            },
                            [
                              A("font-awesome-icon", {
                                staticClass: "font-icon",
                                attrs: { icon: ["fas", "link"] },
                              }),
                            ],
                            1
                          ),
                          t._m(2),
                        ]),
                      ]),
                      A("article", { staticClass: "lastwork all" }, [
                        A("img", {
                          staticClass: "img-responsive",
                          attrs: { src: s(8032) },
                        }),
                        A("div", { staticClass: "hidden-info" }, [
                          A(
                            "a",
                            {
                              attrs: {
                                href: "https://karimgamal97.github.io/Covid-19/",
                                target: "_blank",
                              },
                            },
                            [
                              A("font-awesome-icon", {
                                staticClass: "font-icon",
                                attrs: { icon: ["fas", "link"] },
                              }),
                            ],
                            1
                          ),
                          t._m(3),
                        ]),
                      ]),
                      A("article", { staticClass: "webdesign all" }, [
                        A("img", {
                          staticClass: "img-responsive",
                          attrs: { src: s(1931) },
                        }),
                        A("div", { staticClass: "hidden-info" }, [
                          A(
                            "a",
                            {
                              attrs: {
                                href: "https://karimgamal97.github.io/Zocker/",
                                target: "_blank",
                              },
                            },
                            [
                              A("font-awesome-icon", {
                                staticClass: "font-icon",
                                attrs: { icon: ["fas", "link"] },
                              }),
                            ],
                            1
                          ),
                          t._m(4),
                        ]),
                      ]),
                      A("article", { staticClass: "lastwork all" }, [
                        A("img", {
                          staticClass: "img-responsive",
                          attrs: { src: s(6436) },
                        }),
                        A("div", { staticClass: "hidden-info" }, [
                          A(
                            "a",
                            {
                              attrs: {
                                href: "https://karimgamal97.github.io/Leon/",
                                target: "_blank",
                              },
                            },
                            [
                              A("font-awesome-icon", {
                                staticClass: "font-icon",
                                attrs: { icon: ["fas", "link"] },
                              }),
                            ],
                            1
                          ),
                          t._m(5),
                        ]),
                      ]),
                      A("article", { staticClass: "lastwork all" }, [
                        A("img", {
                          staticClass: "img-responsive",
                          attrs: { src: s(4668) },
                        }),
                        A("div", { staticClass: "hidden-info" }, [
                          A(
                            "a",
                            {
                              attrs: {
                                href: "https://karimgamal97.github.io/Special_Design/",
                                target: "_blank",
                              },
                            },
                            [
                              A("font-awesome-icon", {
                                staticClass: "font-icon",
                                attrs: { icon: ["fas", "link"] },
                              }),
                            ],
                            1
                          ),
                          t._m(6),
                        ]),
                      ]),
                      A("article", { staticClass: "all webdesign" }, [
                        A("img", {
                          staticClass: "img-responsive",
                          attrs: { src: s(6451) },
                        }),
                        A("div", { staticClass: "hidden-info" }, [
                          A(
                            "a",
                            {
                              attrs: {
                                href: "https://karimgamal97.github.io/Coozy-House/",
                                target: "_blank",
                              },
                            },
                            [
                              A("font-awesome-icon", {
                                staticClass: "font-icon",
                                attrs: { icon: ["fas", "link"] },
                              }),
                            ],
                            1
                          ),
                          t._m(7),
                        ]),
                      ]),
                    ]
                  ),
                ]),
              ]),
            ]);
          },
          Rt = [
            function () {
              var t = this,
                A = t._self._c;
              return A("div", { staticClass: "best-title" }, [
                A("h3", [t._v("Our Best Works")]),
                A("p", [
                  t._v(
                    " I help you build brand for your business at an affordable price. Thousands of clients have procured exceptional results while working with Me. "
                  ),
                ]),
              ]);
            },
            function () {
              var t = this,
                A = t._self._c;
              return A(
                "div",
                { staticClass: "button-group filters-button-group" },
                [
                  A(
                    "button",
                    {
                      staticClass: "button is-checked",
                      attrs: { "data-filter": "*" },
                    },
                    [t._v("All")]
                  ),
                  A(
                    "button",
                    {
                      staticClass: "button",
                      attrs: { "data-filter": ".webdesign" },
                    },
                    [t._v("Mobile App")]
                  ),
                  A(
                    "button",
                    {
                      staticClass: "button",
                      attrs: { "data-filter": ".lastwork" },
                    },
                    [t._v("Last Work")]
                  ),
                ]
              );
            },
            function () {
              var t = this,
                A = t._self._c;
              return A("p", [
                A("span", [t._v("“Axit”")]),
                t._v(
                  " is a fully responsive Mobile App Based on Materialize. "
                ),
              ]);
            },
            function () {
              var t = this,
                A = t._self._c;
              return A("p", [
                A("span", [t._v("“Covid-19”")]),
                t._v(
                  " describes how Corona disease has been spread and how to protect yourself. "
                ),
              ]);
            },
            function () {
              var t = this,
                A = t._self._c;
              return A("p", [
                A("span", [t._v("“Zocker”")]),
                t._v(" The Best Gamimg Website For All."),
              ]);
            },
            function () {
              var t = this,
                A = t._self._c;
              return A("p", [
                A("span", [t._v("“Leon”")]),
                t._v(
                  " is a Portfolio made with latest Technologies in web designing. "
                ),
              ]);
            },
            function () {
              var t = this,
                A = t._self._c;
              return A("p", [
                A("span", [t._v("“Special Design”")]),
                t._v(" is a Landing page for a Company. "),
              ]);
            },
            function () {
              var t = this,
                A = t._self._c;
              return A("p", [
                A("span", [t._v("“Coozy House”")]),
                t._v(" is a site to search a shelter for dogs. "),
              ]);
            },
          ],
          qt = { name: "WorkContent" },
          Ft = qt,
          jt = (0, l.Z)(Ft, Jt, Rt, !1, null, "0dc51a1d", null),
          Mt = jt.exports,
          Tt = {
            name: "AboutView",
            components: { NavBar: B, FooterContent: Z, WorkContent: Mt },
          },
          Nt = Tt,
          Vt = (0, l.Z)(Nt, Qt, Zt, !1, null, "59129748", null),
          Yt = Vt.exports,
          Lt = function () {
            var t = this,
              A = t._self._c;
            return A(
              "div",
              { staticClass: "process" },
              [A("nav-bar"), A("process-component"), A("footer-content")],
              1
            );
          },
          Dt = [],
          Xt = function () {
            var t = this;
            t._self._c;
            return t._m(0);
          },
          zt = [
            function () {
              var t = this,
                A = t._self._c;
              return A(
                "div",
                { staticClass: "process", attrs: { id: "process" } },
                [
                  A("div", { staticClass: "container" }, [
                    A("div", { staticClass: "row" }, [
                      A("div", { staticClass: "process-title" }, [
                        A("h3", [t._v("Work Process")]),
                        A("p", [
                          t._v(
                            " Simple work process of build your design. Delivering work within time and budget which meets client’s requirements is our moto. "
                          ),
                        ]),
                      ]),
                      A("div", { staticClass: "process-components" }, [
                        A("div", { staticClass: "row" }, [
                          A("div", { staticClass: "col-md-6 col-xs-12" }, [
                            A("div", { staticClass: "process-feat" }, [
                              A("div", { staticClass: "num" }, [
                                A("p", [t._v("1")]),
                              ]),
                              A(
                                "div",
                                { staticClass: "process-feat-content" },
                                [
                                  A("h3", [t._v("Planning & Consulting")]),
                                  A("p", [
                                    t._v(
                                      "Always work after planning the whole logic and discuss with the owner the whole idea to fit its purpose."
                                    ),
                                  ]),
                                ]
                              ),
                            ]),
                          ]),
                          A("div", { staticClass: "col-md-6 col-xs-12" }, [
                            A("div", { staticClass: "process-feat" }, [
                              A("div", { staticClass: "num" }, [
                                A("p", [t._v("2")]),
                              ]),
                              A(
                                "div",
                                { staticClass: "process-feat-content" },
                                [
                                  A("h3", [t._v("Content")]),
                                  A("p", [
                                    t._v(
                                      "Trying my best to make the content more useful and easy to deal with, not only to finish the task that I have."
                                    ),
                                  ]),
                                ]
                              ),
                            ]),
                          ]),
                          A("div", { staticClass: "col-md-6 col-xs-12" }, [
                            A("div", { staticClass: "process-feat" }, [
                              A("div", { staticClass: "num" }, [
                                A("p", [t._v("3")]),
                              ]),
                              A(
                                "div",
                                { staticClass: "process-feat-content" },
                                [
                                  A("h3", [t._v("Conception")]),
                                  A("p", [
                                    t._v(
                                      "This knowledge allows early identification and mitigation of development pain points, influencing design decisions to avoid issues and create opportunities for improvement."
                                    ),
                                  ]),
                                ]
                              ),
                            ]),
                          ]),
                          A("div", { staticClass: "col-md-6 col-xs-12" }, [
                            A("div", { staticClass: "process-feat" }, [
                              A("div", { staticClass: "num" }, [
                                A("p", [t._v("4")]),
                              ]),
                              A(
                                "div",
                                { staticClass: "process-feat-content" },
                                [
                                  A("h3", [t._v("Design & Development")]),
                                  A("p", [
                                    t._v(
                                      "I am a highly skilled and experienced Flutter developer with a passion for creating elegant and functional mobile applications."
                                    ),
                                  ]),
                                ]
                              ),
                            ]),
                          ]),
                          A("div", { staticClass: "col-md-6 col-xs-12" }, [
                            A("div", { staticClass: "process-feat" }, [
                              A("div", { staticClass: "num" }, [
                                A("p", [t._v("5")]),
                              ]),
                              A(
                                "div",
                                { staticClass: "process-feat-content" },
                                [
                                  A("h3", [t._v("Final discussion")]),
                                  A("p", [
                                    t._v(
                                      " About final submit where you put life to your product so we always to make sure that everything is working probably."
                                    ),
                                  ]),
                                ]
                              ),
                            ]),
                          ]),
                          A("div", { staticClass: "col-md-6 col-xs-12" }, [
                            A("div", { staticClass: "process-feat" }, [
                              A("div", { staticClass: "num" }, [
                                A("p", [t._v("6")]),
                              ]),
                              A(
                                "div",
                                { staticClass: "process-feat-content" },
                                [
                                  A("h3", [t._v("Delivery & Launch")]),
                                  A("p", [
                                    t._v(
                                      "Final stage when we can finally finish your product and looking forward for any updates comes next."
                                    ),
                                  ]),
                                ]
                              ),
                            ]),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                ]
              );
            },
          ],
          Pt = { name: "ProcessComponent" },
          Gt = Pt,
          Kt = (0, l.Z)(Gt, Xt, zt, !1, null, "0d1ef26b", null),
          Ot = Kt.exports,
          Ht = {
            name: "ProcessView",
            components: { NavBar: B, ProcessComponent: Ot, FooterContent: Z },
          },
          Ut = Ht,
          _t = (0, l.Z)(Ut, Lt, Dt, !1, null, null, null),
          $t = _t.exports,
          tA = function () {
            var t = this,
              A = t._self._c;
            return A(
              "div",
              { staticClass: "client" },
              [
                A("nav-bar"),
                A("clients-content"),
                A("logos-content"),
                A("footer-content"),
              ],
              1
            );
          },
          AA = [],
          sA = function () {
            var t = this;
            t._self._c;
            return t._m(0);
          },
          aA = [
            function () {
              var t = this,
                A = t._self._c;
              return A(
                "div",
                { staticClass: "client", attrs: { id: "client" } },
                [
                  A("div", { staticClass: "container" }, [
                    A("div", { staticClass: "row" }, [
                      A("div", { staticClass: "client-title" }, [
                        A("h3", [t._v("Our Clients")]),
                        A("p", [
                          t._v(
                            " See what my happy clients say about me. I'm proud to have my clients. "
                          ),
                        ]),
                      ]),
                      A("div", { staticClass: "container" }, [
                        A("div", { staticClass: "row" }, [
                          A(
                            "div",
                            { staticClass: "col-md-8 col-center m-auto" },
                            [
                              A(
                                "div",
                                {
                                  staticClass: "carousel slide",
                                  attrs: {
                                    id: "myCarousel",
                                    "data-ride": "carousel",
                                  },
                                },
                                [
                                  A("div", { staticClass: "carousel-inner" }, [
                                    A(
                                      "div",
                                      {
                                        staticClass:
                                          "item carousel-item active",
                                      },
                                      [
                                        A("div", { staticClass: "img-box" }, [
                                          A("img", {
                                            attrs: {
                                              src: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
                                              alt: "",
                                            },
                                          }),
                                        ]),
                                        A("p", { staticClass: "testimonial" }, [
                                          t._v(
                                            " “Extremely skilled Flutter Developer, solved all our app bugs, developed an amazing interface and quite good with communication and ontime delivery /n Will surely recommend to anyone looking for quality mobile App Development/n Thanks again Mohammed for your extra help on our project.” "
                                          ),
                                        ]),
                                        A("p", { staticClass: "overview" }, [
                                          A("b", [t._v("Bolarinwa Oladayo")]),
                                          t._v(" ,"),
                                          A("span", [t._v(" Business Owner")]),
                                        ]),
                                      ]
                                    ),
                                    A(
                                      "div",
                                      { staticClass: "item carousel-item" },
                                      [
                                        A("div", { staticClass: "img-box" }, [
                                          A("img", {
                                            attrs: {
                                              src: "https://i.ibb.co/5FF1vqz/img2.jpg",
                                              alt: "",
                                            },
                                          }),
                                        ]),
                                        A("p", { staticClass: "testimonial" }, [
                                          t._v(
                                            " “Extremely skilled Flutter Developer, solved all our app bugs, developed an amazing interface and quite good with communication and ontime delivery /n Will surely recommend to anyone looking for quality mobile App Development/n Thanks again Mohammed for your extra help on our project.” "
                                          ),
                                        ]),
                                        A("p", { staticClass: "overview" }, [
                                          A("b", [t._v("Bolarinwa Oladayo")]),
                                          t._v(" , "),
                                          A("span", [t._v(" Business Owner")]),
                                        ]),
                                      ]
                                    ),
                                    A(
                                      "div",
                                      { staticClass: "item carousel-item" },
                                      [
                                        A("div", { staticClass: "img-box" }, [
                                          A("img", {
                                            attrs: {
                                              src: "https://i.ibb.co/87KGZNQ/Team-8.jpg",
                                              alt: "",
                                            },
                                          }),
                                        ]),
                                        A("p", { staticClass: "testimonial" }, [
                                          t._v(
                                            " “Extremely skilled Flutter Developer, solved all our app bugs, developed an amazing interface and quite good with communication and ontime delivery /n Will surely recommend to anyone looking for quality mobile App Development/n Thanks again Mohammed for your extra help on our project.” "
                                          ),
                                        ]),
                                        A("p", { staticClass: "overview" }, [
                                          A("b", [t._v("Bolarinwa Oladayo")]),
                                          t._v(" , "),
                                          A("span", [t._v(" Business Owner")]),
                                        ]),
                                      ]
                                    ),
                                  ]),
                                  A(
                                    "a",
                                    {
                                      staticClass:
                                        "carousel-control left carousel-control-prev",
                                      attrs: {
                                        href: "#myCarousel",
                                        "data-slide": "prev",
                                      },
                                    },
                                    [
                                      A("i", {
                                        staticClass: "fa fa-angle-left",
                                      }),
                                    ]
                                  ),
                                  A(
                                    "a",
                                    {
                                      staticClass:
                                        "carousel-control right carousel-control-next",
                                      attrs: {
                                        href: "#myCarousel",
                                        "data-slide": "next",
                                      },
                                    },
                                    [
                                      A("i", {
                                        staticClass: "fa fa-angle-right",
                                      }),
                                    ]
                                  ),
                                ]
                              ),
                            ]
                          ),
                        ]),
                      ]),
                    ]),
                  ]),
                ]
              );
            },
          ],
          eA = { name: "ClientsCotent" },
          iA = eA,
          nA = (0, l.Z)(iA, sA, aA, !1, null, "6b984b7a", null),
          oA = nA.exports,
          lA = function () {
            var t = this;
            t._self._c;
            return t._m(0);
          },
          rA = [
            function () {
              var t = this,
                A = t._self._c;
              return A("div", { staticClass: "logo" }, [
                A("div", { staticClass: "container" }, [
                  A("div", { staticClass: "row" }, [
                    A("div", { staticClass: "col-md-3 col-xs-12" }, [
                      A("div", { staticClass: "logo-box" }, [
                        A("img", { attrs: { src: s(49), title: "Envato" } }),
                      ]),
                    ]),
                    A("div", { staticClass: "col-md-3 col-xs-12" }, [
                      A("div", { staticClass: "logo-box" }, [
                        A("img", { attrs: { src: s(6617), title: "dribble" } }),
                      ]),
                    ]),
                    A("div", { staticClass: "col-md-3 col-xs-12" }, [
                      A("div", { staticClass: "logo-box" }, [
                        A("img", { attrs: { src: s(49), title: "Envato" } }),
                      ]),
                    ]),
                    A("div", { staticClass: "col-md-3 col-xs-12" }, [
                      A("div", { staticClass: "logo-box" }, [
                        A("img", { attrs: { src: s(2715), title: "behance" } }),
                      ]),
                    ]),
                  ]),
                ]),
              ]);
            },
          ],
          cA = { name: "LogosContent" },
          vA = cA,
          dA = (0, l.Z)(vA, lA, rA, !1, null, "7f9c2688", null),
          uA = dA.exports,
          CA = {
            name: "ClientsView",
            components: {
              NavBar: B,
              ClientsContent: oA,
              FooterContent: Z,
              LogosContent: uA,
            },
          },
          gA = CA,
          pA = (0, l.Z)(gA, tA, AA, !1, null, null, null),
          fA = pA.exports,
          hA = function () {
            var t = this,
              A = t._self._c;
            return A(
              "div",
              { staticClass: "contact" },
              [A("nav-bar"), A("contact-content"), A("footer-content")],
              1
            );
          },
          mA = [],
          wA = function () {
            var t = this,
              A = t._self._c;
            return A(
              "div",
              { staticClass: "contact", attrs: { id: "contact" } },
              [
                A("div", { staticClass: "container" }, [
                  A("div", { staticClass: "row" }, [
                    t._m(0),
                    t._m(1),
                    A("div", { staticClass: "contact-info" }, [
                      A("div", { staticClass: "container" }, [
                        A("div", { staticClass: "row" }, [
                          A("div", { staticClass: "col-md-4 col-xs-12" }, [
                            A(
                              "div",
                              { staticClass: "info-box" },
                              [
                                A("font-awesome-icon", {
                                  staticClass: "contact-icon",
                                  attrs: { icon: ["fas", "map-marker-alt"] },
                                }),
                                A("h3", [t._v("VISIT US")]),
                                A("p", [t._v("Nasr City, Cairo")]),
                              ],
                              1
                            ),
                          ]),
                          A("div", { staticClass: "col-md-4 col-xs-12" }, [
                            A(
                              "div",
                              { staticClass: "info-box" },
                              [
                                A("font-awesome-icon", {
                                  staticClass: "contact-icon",
                                  attrs: { icon: ["fas", "phone-alt"] },
                                }),
                                A("h3", [t._v("CALL US NOW")]),
                                A("p", [t._v("Phone: (+020) 1010784146")]),
                              ],
                              1
                            ),
                          ]),
                          A("div", { staticClass: "col-md-4 col-xs-12" }, [
                            A(
                              "div",
                              { staticClass: "info-box last" },
                              [
                                A("font-awesome-icon", {
                                  staticClass: "contact-icon",
                                  attrs: { icon: ["fas", "envelope"] },
                                }),
                                A("h3", [t._v("INQUIRIES")]),
                                A("p", { staticClass: "info-box-email" }, [
                                  t._v("mhmdfathy96@gmail.com"),
                                ]),
                                A("p", [t._v("Mon to Fri")]),
                              ],
                              1
                            ),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                ]),
              ]
            );
          },
          EA = [
            function () {
              var t = this,
                A = t._self._c;
              return A("div", { staticClass: "contact-title" }, [
                A("h3", [t._v("Contact Us")]),
                A("p", [
                  t._v(
                    "Send me a note, and let’s get started on your project today!"
                  ),
                ]),
              ]);
            },
            function () {
              var t = this,
                A = t._self._c;
              return A("div", { staticClass: "contact-form" }, [
                A("div", { staticClass: "col-12" }, [
                  A("div", { staticClass: "form-input" }, [
                    A("input", {
                      attrs: {
                        type: "text",
                        id: "fullName",
                        name: "fullName",
                        placeholder: "Your Name",
                      },
                    }),
                    A("input", {
                      attrs: {
                        type: "email",
                        id: "email",
                        name: "email",
                        placeholder: "Your Email",
                      },
                    }),
                  ]),
                ]),
                A("div", { staticClass: "col-12" }, [
                  A("div", { staticClass: "textarea-form" }, [
                    A("textarea", {
                      attrs: {
                        name: "overview",
                        placeholder: " Tell us about your needs .....",
                      },
                    }),
                  ]),
                ]),
                A("div", { staticClass: "col-12" }, [
                  A("div", { staticClass: "button-form" }, [
                    A("button", { staticClass: "contact-btn" }, [
                      t._v("Send Message"),
                    ]),
                  ]),
                ]),
              ]);
            },
          ],
          bA = { name: "ContactContent" },
          yA = bA,
          kA = (0, l.Z)(yA, wA, EA, !1, null, "be050b7a", null),
          BA = kA.exports,
          xA = {
            name: "ContactView",
            components: { NavBar: B, ContactContent: BA, FooterContent: Z },
          },
          IA = xA,
          WA = (0, l.Z)(IA, hA, mA, !1, null, null, null),
          SA = WA.exports;
        a.ZP.use(v.ZP);
        const QA = [
            { path: "/", name: "home", component: F },
            { path: "/about", name: "about", component: G },
            { path: "/services", name: "ServicesConent", component: it },
            { path: "/why", name: "WhyContent", component: St },
            { path: "/work", name: "WorkContent", component: Yt },
            { path: "/process", name: "ProcessContent", component: $t },
            { path: "/clients", name: "ClientsContent", component: fA },
            { path: "/contact", name: "ContactContent", component: SA },
          ],
          ZA = new v.ZP({ mode: "hash", base: "/my_Portfolio/", routes: QA });
        var JA = ZA,
          RA = s(7749),
          qA = s(3494),
          FA = s(8429),
          jA = s(8539),
          MA = s(3839),
          TA = s.n(MA),
          NA = s(3822);
        a.ZP.use(NA.ZP);
        var VA = new NA.ZP.Store({
            state: {},
            getters: {},
            mutations: {},
            actions: {},
            modules: {},
          }),
          YA = (s(2166), s(6905)),
          LA = s.n(YA);
        a.ZP.use(TA()),
          qA.vI.add(jA.mRB, FA.NCV),
          a.ZP.component("font-awesome-icon", RA.GN),
          (a.ZP.config.productionTip = !1),
          new a.ZP({
            router: JA,
            store: VA,
            render: (t) => t(c),
            mounted() {
              LA().init();
            },
          }).$mount("#app");
      },
      49: function (t) {
        t.exports =
          "data:image/png;base64,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";
      },
      1043: function (t) {
        t.exports =
          "data:image/jpeg;base64,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";
      },
      8364: function (t, A, s) {
        t.exports = s.p + "img/axit-site.b6fb1a93.jpg";
      },
      2715: function (t) {
        t.exports =
          "data:image/png;base64,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";
      },
      6451: function (t, A, s) {
        t.exports = s.p + "img/cat-06.cc294e63.jpg";
      },
      8032: function (t, A, s) {
        t.exports = s.p + "img/covid-site.f072f2b3.jpg";
      },
      1931: function (t, A, s) {
        t.exports = s.p + "img/dog-site.3145bb0c.jpg";
      },
      6617: function (t) {
        t.exports =
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAACWCAYAAACb3McZAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAEUxJREFUeNrsnflzVtUZx58kJCSEQJCyRVZZZIkFhYqAVtxpFdCxLh0cO53aTqf9oTPtTH/o32DbaaebXbXWtWNdW9eWWkBEooILooiRfRGBsGQjS+9jnjuePO9zzl3eAEG/n5kz8r7e97z3Pfd8n+2ce1PS3d1NAACbUgwBABAIABAIABAIABAIABAIABAIABAIABAIABAIAAACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQBAIABAIABAIABAIABAIABAIABAIABAIABAIAAACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQAAIEAAIEAAIEAAIEAAIEAAIEAAIEAAIEAAIEAACAQACAQACAQACAQAE45A/qik3nz5hXz8dqozY/aOVGrjtrhqK2J2jtn2FhWRe2qqM2IWnnUDkRtfdRe7YO+z4vaoqiNiFpr1D6I2sqoHSyy34FRWyhjXxa1XVF7JWofFdkvj8GCqI2R13yem6L2UtROnOoL09DQcHoFUgTTo3Zz1IY4742W95+I2v/OEHEMitodURuvhD8laqOi9q8i+r40akud10OlT56Ef4javpz98ph/M2rjnPemibG6P2qbc/Z7ZdSWqPeGRW1y1GZG7Z6oNSPESoaFcJsSh8uyqJ17hozjUiUOl8tFKHmYGLXrAp73hpzXkD9zqxKHK/ZbolaTo9/zDXG4TJbrihwkBXzhKxOOWdYPvFwSPMmSYswLc/RbErWvyn99sPDOztF3vXgLHzUpfpMlrGUpRfQFCCRMneEduo1wIQ4l+jMXqknMv6NDHTMmYaJbjJfcwKXdOG5MDuFdmuK4CRn7na+8TqeElhxStTjvc64zCwIJM8eYVA9F7WeSzPWqAfTj8SuXfMmdFJwX/F0dVyETI2ti7sI5wZ1R224k2llDWzccZDH/TQojuuiQJZedr957Kmr/idqbUXvZED8EEkBbxne52CATrMGIw6v66fiNlQQ0hifDe1Hba3jHrNfFDYG6ovY09VSD9hfZ91RlnLjStkHOu5hxcMOmPUpwm438CQLxUGnEoK87/96uQgku/Y7op+M30fM7yozQqDNDvyy6kWrC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";
      },
      6436: function (t, A, s) {
        t.exports = s.p + "img/leon-site.3c92d5aa.jpg";
      },
      4668: function (t, A, s) {
        t.exports = s.p + "img/special_design.ad88029d.jpg";
      },
    },
    A = {};
  function s(a) {
    var e = A[a];
    if (void 0 !== e) return e.exports;
    var i = (A[a] = { exports: {} });
    return t[a].call(i.exports, i, i.exports, s), i.exports;
  }
  (s.m = t),
    (function () {
      var t = [];
      s.O = function (A, a, e, i) {
        if (!a) {
          var n = 1 / 0;
          for (c = 0; c < t.length; c++) {
            (a = t[c][0]), (e = t[c][1]), (i = t[c][2]);
            for (var o = !0, l = 0; l < a.length; l++)
              (!1 & i || n >= i) &&
              Object.keys(s.O).every(function (t) {
                return s.O[t](a[l]);
              })
                ? a.splice(l--, 1)
                : ((o = !1), i < n && (n = i));
            if (o) {
              t.splice(c--, 1);
              var r = e();
              void 0 !== r && (A = r);
            }
          }
          return A;
        }
        i = i || 0;
        for (var c = t.length; c > 0 && t[c - 1][2] > i; c--) t[c] = t[c - 1];
        t[c] = [a, e, i];
      };
    })(),
    (function () {
      s.n = function (t) {
        var A =
          t && t.__esModule
            ? function () {
                return t["default"];
              }
            : function () {
                return t;
              };
        return s.d(A, { a: A }), A;
      };
    })(),
    (function () {
      s.d = function (t, A) {
        for (var a in A)
          s.o(A, a) &&
            !s.o(t, a) &&
            Object.defineProperty(t, a, { enumerable: !0, get: A[a] });
      };
    })(),
    (function () {
      s.g = (function () {
        if ("object" === typeof globalThis) return globalThis;
        try {
          return this || new Function("return this")();
        } catch (t) {
          if ("object" === typeof window) return window;
        }
      })();
    })(),
    (function () {
      s.o = function (t, A) {
        return Object.prototype.hasOwnProperty.call(t, A);
      };
    })(),
    (function () {
      s.r = function (t) {
        "undefined" !== typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(t, "__esModule", { value: !0 });
      };
    })(),
    (function () {
      s.p = "/my_Portfolio/";
    })(),
    (function () {
      var t = { 143: 0 };
      s.O.j = function (A) {
        return 0 === t[A];
      };
      var A = function (A, a) {
          var e,
            i,
            n = a[0],
            o = a[1],
            l = a[2],
            r = 0;
          if (
            n.some(function (A) {
              return 0 !== t[A];
            })
          ) {
            for (e in o) s.o(o, e) && (s.m[e] = o[e]);
            if (l) var c = l(s);
          }
          for (A && A(a); r < n.length; r++)
            (i = n[r]), s.o(t, i) && t[i] && t[i][0](), (t[i] = 0);
          return s.O(c);
        },
        a = (self["webpackChunkportfolio"] =
          self["webpackChunkportfolio"] || []);
      a.forEach(A.bind(null, 0)), (a.push = A.bind(null, a.push.bind(a)));
    })();
  var a = s.O(void 0, [998], function () {
    return s(6599);
  });
  a = s.O(a);
})();
//# sourceMappingURL=app.c97bfe0b.js.map
