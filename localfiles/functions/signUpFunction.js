function signUpFunction (parmBody, parmReq, parmRes) {
    let {name,emailSignUp,passwordSignUp,phone,cpf,rg,state,city,civilState} = parmBody;
    parmRes.send(parmBody)
}

module.exports = signUpFunction;