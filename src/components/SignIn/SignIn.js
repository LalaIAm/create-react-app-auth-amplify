import { Auth } from 'aws-amplify';

async function SignIn() {
    try {
        const user = await Auth.signIn(username, password);
        if (user.challengeName === 'SMS_FMA' || user.challengeName === 'SOFTWARE_TOKEN_MFA') {
            const code = getCodeFromUserInput();

            const loggedUser = await Auth.confirmSignIn(
                user,
                code,
                mfaType
            );
        } else if (user.challengeName === 'NEW_PASSWORD_REQUIRED') {
            const { requiredAttributes } = user.challengeParam;

            const { username, email } = getInfoFromUserInput();
            const loggedUser = await Auth.completeNewPassword(
                user,
                newPassword,
                {
                    email,
                    username
                }
            );
        } else if (user.challengeName === 'MFA_SETUP') {
            Auth.setupTOTP(user);
        } else {
            console.log(user);
        }
    } catch (err) {
        if (err.code === 'NotAuthorizedException') {
            console.log('Incorrect password');
        } else if (err.code === 'UserNotFoundException') {
            console.log('User does not exist');
        } else {
            console.log(error);
        }
    }
}

Auth.signIn({
    username,
    password,
    validationData,
}).then(user => console.log(user))
    .catch(err => console.log(err));