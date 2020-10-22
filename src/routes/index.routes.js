// Just:
// 	1. import the router from express
// 	2.  execute it
// 	3. send a response 
// 	4. export by default the router 

import { Router } from  'express';
const router = Router();

router.get('/', (req, res) => res.send("Welcome to my API"));

export default router;