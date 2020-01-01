const log = (message: string) => console.log(message);

export const app = (message: string) => log(`express-app: ${message}`);

export const router = (route: string) => log(`router-${route}: acessed`);
