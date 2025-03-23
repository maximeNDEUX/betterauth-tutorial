const fr = {
    auth: {
        signIn: {
            form: {
                title: "Connectez-vous",
                description:
                    "Bienvenue ! Veuillez vous connecter pour continuer",
                noAccountYet: "Vous n'avez pas de compte ?",
                accountCreationLink: "Inscrivez-vous ici",
            },
            status: {
                pending: "Connexion...",
                successTitle: "Connecté !",
                successRedirection: "Redirection vers le tableau de bord...",
                errorTitle: "Erreur !",
                errorDescription: "Identifiants incorrects",
            },
            button: "Connexion",
        },
        signUp: {
            form: {
                title: "Enregistrez-vous",
                description: "Créez un compte afin d'accéder à l'application",
                alreadySignedIn: "Vous avez un compte ?",
                signInLink: "Connectez-vous ici",
            },
            status: {
                pending: "Enregistrement...",
                successTitle: "Enregistré !",
                successRedirection: "Redirection vers le tableau de bord...",
                errorTitle: "Erreur !",
                errorDescription: "Identifiants incorrects",
            },
            button: "Inscription",
        },
        formItem: {
            userName: {
                title: "Nom d'utilisateur",
                placeholder: "Votre nom d'utilisateur",
                description: "Ceci est votre nom affiché",
            },
            email: {
                title: "Email",
                placeholder: "email@exemple.com",
            },
            password: {
                title: "Mot de passe",
                placeholder: "Votre mot de passe",
            },
            passwordConfirmation: {
                title: "Confirmation du mot de passe",
                placeholder: "Confirmez le mot de passe",
            },
        },
        zod: {
            userNameMinLength: "Nom d'utilisateur trop court",
            userNameMaxLength: "Nom d'utilisateur trop long",
            emailInvalid: "Email n'est pas valide",
            passwordRequired: "Mot de passe est requis",
            passwordMinLength:
                "Le mot de passe doit contenir au moins 9 caractères",
            passwordMaxLength: "Mot de passe trop long",
            passwordConfirmationRequired:
                "Confirmation du mot de passe requise",
            passwordConfirmationMatch: "Les mots de passe ne correspondent pas",
        },
        signOut: {
            status: {
                pending: "Déconnexion...",
                successTitle: "Déconnecté !",
                successDescription: "Votre session a été terminée.",
                errorTitle: "Erreur !",
                errorDescription: "Réessayez plus tard.",
            },
            button: "Déconnexion",
            page: {
                title: "Vous êtes déconnecté",
                description:
                    "Afin d'utiliser l'application, vous devez vous connecter.",
            },
        },
        registerBouton: "S'inscrire",
    },
    dashboard: {
        welcome: "Bienvenue, {name} !",
        upload: "Téléverser une image",
    },
    layout: {
        toggleButton: {
            light: "Clair",
            dark: "Sombre",
            system: "Système",
        },
    },
    branding: {
        appNamePart1: "Eternal",
        appNamePart2: "Snap",
    },
    ui: {
        homeButton: "Retour à l'accueil",
    },
};

export default fr;
