import express from 'express';
import { register, login } from '../controller/user.js';

const app = express();

app.post("/register", register);

app.post("/login", login);


export default app