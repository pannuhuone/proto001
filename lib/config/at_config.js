// Options
AccountsTemplates.configure({
    // defaultLayout: 'emptyLayout',
    showForgotPasswordLink: true,
    overrideLoginErrors: false,
    enablePasswordChange: true,

  // sendVerificationEmail: true,
  // enforceEmailVerification: true,
  //confirmPassword: true,
  //continuousValidation: false,
  //displayFormLabels: true,
  //forbidClientAccountCreation: true,
  //formValidationFeedback: true,
  //homeRoutePath: '/',
  //showAddRemoveServices: false,
  //showPlaceholders: true,

  negativeValidation: true,
  positiveValidation: true,
  negativeFeedback: false,
  positiveFeedback: true,

  // Privacy Policy and Terms of Use
  //privacyUrl: 'privacy',
  //termsUrl: 'terms-of-use',

    texts: {
        title: {
            //changePwd: "Password Title",
            //enrollAccount: "Enroll Title",
            //forgotPwd: "Forgot Pwd Title",
            //resetPwd: "Reset Pwd Title",
            signIn: "Log In",
            signUp: "Register",
            //verifyEmail: "Verify Email Title",
        },
        button: {
            //changePwd: "Password Text",
            //enrollAccount: "Enroll Text",
            //forgotPwd: "Forgot Pwd Text",
            //resetPwd: "Reset Pwd Text",
            signIn: "Log In",
            //signUp: "Sign Up Text",
        }
    }
});
