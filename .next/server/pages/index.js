"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 2066:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: external "cookie"
const external_cookie_namespaceObject = require("cookie");
var external_cookie_default = /*#__PURE__*/__webpack_require__.n(external_cookie_namespaceObject);
;// CONCATENATED MODULE: external "cookies-next"
const external_cookies_next_namespaceObject = require("cookies-next");
;// CONCATENATED MODULE: ./src/assets/images/photo.webp
/* harmony default export */ const photo = ({"src":"/_next/static/media/photo.ba6eba88.webp","height":359,"width":612,"blurDataURL":"data:image/webp;base64,UklGRkQAAABXRUJQVlA4IDgAAACwAQCdASoIAAUAAkA4JZgCdADx+HEAAP66fI6ZSLwtsFLu0xYaPai9rLPavx8iuSXc+MPwR8AAAA==","blurWidth":8,"blurHeight":5});
;// CONCATENATED MODULE: ./src/pages/index.js








const getServerSideProps = async ({ req , query  })=>{
    const cookies = external_cookie_default().parse(req.headers.cookie || "");
    return {
        props: {
            cookies: cookies
        }
    };
};
const Votation = ({ cookies  })=>{
    const { 0: forms , 1: setForms  } = (0,external_react_.useState)({
        "grupo-divertido": cookies["grupo-divertido"],
        "mejor-puesta": cookies["mejor-puesta"],
        "mejor-disfraz": cookies["mejor-disfraz"]
    });
    const { 0: isSuccess , 1: setIsSuccess  } = (0,external_react_.useState)(cookies["grupo-divertido"] && cookies["mejor-puesta"] && cookies["mejor-disfraz"]);
    const { 0: isLoading , 1: setIsLoading  } = (0,external_react_.useState)(false);
    (0,external_react_.useEffect)(()=>{
        if (forms["grupo-divertido"] && forms["mejor-puesta"] && forms["mejor-disfraz"]) setIsSuccess(true);
        else setIsSuccess(false);
    }, [
        forms
    ]);
    const getExpire = (days)=>{
        var date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        return date;
    };
    const onSuccess = (category)=>{
        setIsLoading(false);
        (0,external_cookies_next_namespaceObject.setCookie)(category, true, {
            path: "/",
            expires: getExpire(30)
        });
        setForms((prev)=>({
                ...prev,
                [category]: true
            }));
    };
    const onError = ()=>{
        setIsLoading(false);
        alert("Ha ocurrido un error, vuelva a intentarlo.");
    };
    const handleSubmit = async (category, data)=>{
        try {
            const response = await fetch(`https://send.pageclip.co/DQiU5q6UbkJI6OwuIVbChwXB4lmKYJ2p/${category}`, {
                method: "POST",
                mode: "cors",
                body: JSON.stringify({
                    participante: data
                })
            });
            setIsLoading(true);
            if (response.ok) onSuccess(category);
            if (!response.ok) onError();
        } catch (error) {
            console.log(error);
            onError();
        }
    };
    const cards = (0,external_react_.useMemo)(()=>[
            {
                title: "La granja de Chencho"
            },
            {
                title: "Las Rati Playa"
            },
            {
                title: "Yip Yip"
            },
            {
                title: "Aliens en acci\xf3n y grillos"
            },
            {
                title: "La familia feliz lleg\xf3  para divertir"
            },
            {
                title: "The Crazy zombies"
            },
            {
                title: "Las Comadreja turrakas"
            },
            {
                title: "El Rejunte"
            },
            {
                title: "Selecci\xf3n Palomera"
            },
            {
                title: "Soldaditos Problem\xe1ticos"
            }, 
        ]);
    console.log(isSuccess, "succes");
    if (isSuccess) return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((head_default()), {
                children: /*#__PURE__*/ jsx_runtime_.jsx("title", {
                    children: "Votaci\xf3n - Corsos de la Villa 2023"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("header", {
                className: "header",
                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: "/",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "logo"
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("section", {
                className: "headline",
                style: {
                    padding: "1em",
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)"
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                    children: "Gracias por votar"
                })
            })
        ]
    });
    else if (isSuccess === false) return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((head_default()), {
                children: /*#__PURE__*/ jsx_runtime_.jsx("title", {
                    children: "Votaci\xf3n - Corsos de la Villa 2023"
                })
            }),
            isLoading && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "modal",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "lds-ring",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {}),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {}),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {}),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {})
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("header", {
                className: "header",
                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: "/",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "logo"
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("section", {
                className: "headline",
                children: /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                    children: "Elige a tu participante favorito en cada categor\xeda:"
                })
            }),
            !forms["grupo-divertido"] && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                            className: "form_header",
                            children: "Grupo divertido"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("form", {
                            onSubmit: (e)=>e.preventDefault(),
                            className: "content",
                            action: "https://send.pageclip.co/DQiU5q6UbkJI6OwuIVbChwXB4lmKYJ2p/votation",
                            id: "form",
                            method: "post",
                            children: cards && cards.map((card, i)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "card",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "card__image",
                                            style: {
                                                overflow: "hidden"
                                            },
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                layout: "fill",
                                                className: "",
                                                src: photo,
                                                alt: ""
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "card__detail",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                    children: card.title
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                    className: "button",
                                                    id: "card",
                                                    onClick: (e)=>handleSubmit("grupo-divertido", card.title),
                                                    children: "Votar"
                                                })
                                            ]
                                        })
                                    ]
                                }, i))
                        })
                    ]
                })
            }),
            !forms["mejor-puesta"] && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                        className: "form_header",
                        children: "Mejor puesta en escena"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("form", {
                        onSubmit: (e)=>e.preventDefault(),
                        className: "content",
                        action: "https://send.pageclip.co/DQiU5q6UbkJI6OwuIVbChwXB4lmKYJ2p/votation",
                        id: "form",
                        method: "post",
                        children: cards && cards.map((card, i)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "card",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "card__image",
                                        style: {
                                            overflow: "hidden"
                                        },
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                            layout: "fill",
                                            className: "",
                                            src: photo,
                                            alt: ""
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "card__detail",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                children: card.title
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                className: "button",
                                                id: "card",
                                                onClick: (e)=>{
                                                    e.preventDefault();
                                                    handleSubmit("mejor-puesta", card.title);
                                                },
                                                children: "Votar"
                                            })
                                        ]
                                    })
                                ]
                            }, i))
                    })
                ]
            }),
            !forms["mejor-disfraz"] && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                        className: "form_header",
                        children: "Mejor disfraz"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("form", {
                        onSubmit: (e)=>e.preventDefault(),
                        className: "content",
                        action: "https://send.pageclip.co/DQiU5q6UbkJI6OwuIVbChwXB4lmKYJ2p/votation",
                        id: "form",
                        method: "post",
                        children: cards && cards.map((card, i)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "card",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "card__image",
                                        style: {
                                            overflow: "hidden"
                                        },
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                            layout: "fill",
                                            className: "",
                                            src: photo,
                                            alt: ""
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "card__detail",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                children: card.title
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                className: "button",
                                                id: "card",
                                                onClick: (e)=>{
                                                    e.preventDefault();
                                                    handleSubmit("mejor-disfraz", card.title);
                                                },
                                                children: "Votar"
                                            })
                                        ]
                                    })
                                ]
                            }, i))
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("footer", {
                className: "footer",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "sponsors"
                })
            })
        ]
    });
};
/* harmony default export */ const pages = (Votation);


/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,61], () => (__webpack_exec__(2066)));
module.exports = __webpack_exports__;

})();