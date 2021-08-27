import express from 'express';
import directories from './directories';
import subfolders from './subfolders';
import files from './files';

const prefix = '/api';

export const Router = (app: express.Application) => {
    app.use(`${prefix}/status`, (req, res) => res.send({ status: 'healthy' }));
    app.use(`${prefix}/directories`, directories);
    app.use(`${prefix}/subfolders`, subfolders);
    app.use(`${prefix}/files`, files);
};
