"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const albums_json_1 = __importDefault(require("./assets/albums.json"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const cors = require('cors');
app.use(cors());
const port = process.env.PORT;
app.use('/photos', express_1.default.static('assets/photos'));
app.get('/', (req, res) => {
    res.send('Express + TypeScript Server');
});
app.get('/albums', (req, res) => {
    res.send(albums_json_1.default);
});
app.get('/albums/:albumId', (req, res) => {
    try {
        const album = require('./assets/albums/' +
            req.params.albumId +
            '/album.json');
        res.send(album);
    }
    catch (error) {
        res.send('There is no such album');
    }
});
app.get('/photo/:photoName', (req, res) => {
    res.send('List of albums' + ': ' + req.params.photoName);
});
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
