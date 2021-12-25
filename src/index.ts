import { expressAppAdapter, firebaseAdminAddpater } from './drivers/adapters';
import app from './drivers/config/app';
import environnment from './drivers/config/environnment.dev';
import { routes } from './drivers/routes';

firebaseAdminAddpater()
// rest of the code remains same
expressAppAdapter(app, routes)

app.listen(environnment.PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${environnment.PORT}`);
});