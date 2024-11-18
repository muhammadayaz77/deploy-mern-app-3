import express from 'express'
import { deleteItem, getItem, getOneItem, postItem, updateItem } from '../Controllers/userControllers.mjs';
let router = express.Router();

router.post('/post',postItem);
router.get('/read',getItem);
router.get('/readOne/:id',getOneItem);
router.delete('/delete/:id',deleteItem);
router.put('/update/:id',updateItem);
export default router;