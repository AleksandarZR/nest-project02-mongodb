export const configuration = () => ({
    NODE_ENV: process.env.NODE_ENV,
    port: parseInt(process.env.PORT, 10) || 3002,
    jwt: {
        secret: process.env.JWT_SECRET,
        expiresIn: process.env.JWT_EXPIRES_IN,
    },
    database: {
        user: process.env.DATABASE_USER,
        password: process.env.DATABASE_PASSWORD,
        connectionString: process.env.DATABASE_CONNECTION_STRING,
    }
});