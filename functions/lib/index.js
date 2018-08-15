"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions = require("firebase-functions");
const admin = require("firebase-admin");
const express = require("express");
// const expess = require('express');
const engines = require("consolidate");
const expressLayout = require("express-ejs-layouts");
const session = require("express-session");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
admin.initializeApp(functions.config().firebase);
const app = express();
app.set('ejs', engines.ejs);
app.set('views', './views');
app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(expressLayout);
app.set('layout', 'layouts/defaultLayout');
app.use(session({
    secret: 'secret',
    saveUninitialized: true,
    resave: true
}));
// app.use(i18n({
//     translationsPath: path.join(__dirname, '../dictionary'), // <--- use here. Specify translations files path.
//     siteLangs: ["fr","en"],
//     textsVarName: 'translation'
// }));
app.get('/', (request, response) => {
    response.set('Cache-Control', 'public, max-age=300, s-maxage=600');
    response.render('index', { page_title: `Ny fampianaran'i Baha'u'llah`, Context: { lang: 'mg' } });
});
exports.website = functions.https.onRequest(app);
//# sourceMappingURL=index.js.map