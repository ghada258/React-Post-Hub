// server.js
import jsonServer from 'json-server';
import auth from 'json-server-auth';

const app = jsonServer.create();
const router = jsonServer.router('Data.json'); // ملف الداتا
const middlewares = jsonServer.defaults();

app.db = router.db;

app.use(middlewares);
app.use(auth);  // تفعيل json-server-auth
app.use(router);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`JSON Server Auth running on http://localhost:${PORT}`);
});
