"use strict";
exports.id = 851;
exports.ids = [851];
exports.modules = {

/***/ 7851:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Y": () => (/* binding */ getFederalPractices),
/* harmony export */   "m": () => (/* binding */ submitUserEnquiry)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9648);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);
axios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

async function getFederalPractices() {
    const practices = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].get(`https://wpbackend.navisa.af/wp-json/wp/v2/federal-practices/?per_page=100`).then((res)=>res.data).catch((err)=>{
        console.log(err);
    });
    return practices;
}
async function submitUserEnquiry(userInfo, setUserInfo, setIsLoading, enqueueSnackbar) {
    const res = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].post("https://wpbackend.navisa.af/wp-json/jwt-auth/v1/token", {
        username: "admin",
        password: "I6FR%0^hD@Z[@"
    }).then(async (res)=>{
        await axios__WEBPACK_IMPORTED_MODULE_0__["default"].post("https://wpbackend.navisa.af/wp-json/wp/v2/federal-usr-enquires", {
            title: "User Enquiry - Federal Law Firm",
            status: "publish",
            fields: {
                name: userInfo.name,
                email: userInfo.email,
                subject: userInfo.subject,
                Message: userInfo.message
            }
        }, {
            headers: {
                Authorization: `Bearer ${res.data.token}`
            }
        }).then((res)=>{
            setIsLoading(false);
            if (res.status === 201) {
                enqueueSnackbar("Your message has been submitted successfully.");
                setIsLoading(false);
            } else {
                enqueueSnackbar("There was an error trying to send your message, Please try again.");
                setIsLoading(false);
            }
            return res.data;
        }).catch((err)=>{
            console.log(err);
            setIsLoading(false);
            enqueueSnackbar("There was an error trying to send your message, Please check your network connection and try again.");
        });
    }).catch((err)=>{
        console.log(err);
    });
    setUserInfo({
        name: "",
        email: "",
        caseSubject: "",
        message: ""
    });
    return res;
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;