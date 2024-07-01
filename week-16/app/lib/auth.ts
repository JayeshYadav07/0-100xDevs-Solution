import CredentialsProvider from "next-auth/providers/credentials";
export const NEXT_AUTH_CONFIG = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: {
                    label: "Username",
                    type: "text",
                    placeholder: "Email",
                },
                password: {
                    label: "Password",
                    type: "password",
                    placeholder: "password",
                },
            },
            async authorize(credentials: any) {
                // Add logic here to look up the user from the credentials supplied
                const user = {
                    id: "1",
                    email: credentials.username,
                };

                if (user) {
                    return user;
                } else {
                    return null;
                }
            },
        }),
    ],
    secret: "jwtSecretKey",
    callbacks: {
        async session({ session, user, token }: any) {
            session.user.id = token.sub;
            return session;
        },
    },
};
