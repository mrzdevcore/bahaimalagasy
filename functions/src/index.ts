import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import * as express from 'express';
// const expess = require('express');
import * as engines from 'consolidate';
import * as expressLayout from 'express-ejs-layouts';
import * as session from 'express-session';
import * as bodyParser from 'body-parser';
import * as i18n from 'i18n-express';
import * as cookieParser from 'cookie-parser';
import * as path from 'path';


admin.initializeApp(
  functions.config().firebase
);

const app = express();
app.set('ejs', engines.ejs);
app.set('views', './views');
app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
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

app.get('/', (request:functions.Request, response:functions.Response) => {
    response.set('Cache-Control', 'public, max-age=300, s-maxage=600');
    response.render('index', {page_title: `Ny fampianaran'i Baha'u'llah`, Context: {lang: 'mg'}});
});

export const website = functions.https.onRequest(app);

