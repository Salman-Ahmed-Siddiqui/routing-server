import express from 'express';

import apiv1Router from './apiv1/main.mjs'
import apiv2Router from './apiv2/main.mjs'

const app = express();
app.use(express.json());

app.use("/api/v1", apiv1Router)
app.use("/api/v2", apiv2Router)

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Example server listening on port ${PORT}`)
})