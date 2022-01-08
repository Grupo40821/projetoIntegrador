function signInFunction (parmBody, parmReq, parmRes) {
    let {emailSignIn,passwordSignIn} = parmBody;
    parmRes.render('usuarios', {})
}
module.exports = signInFunction;