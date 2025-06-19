import express from 'express';
import { configCatService } from '../services/configcat-service.js';
const router = express.Router();

router.get('/', async function(req, res, next) {
  const isAppAvailable = await configCatService.getFlagValue('calculateUserAge');
  res.render('index', { isAppAvailable: isAppAvailable });
});

export default router;
