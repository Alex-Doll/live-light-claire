// @flow
import { STATIC_PATH, WDS_PORT } from './config';

export const isProd = process.env.NODE_ENV === 'production';
export const scriptSource = (isProd ? STATIC_PATH : `http://localhost:${WDS_PORT}/dist`) + '/js/bundle.js';
