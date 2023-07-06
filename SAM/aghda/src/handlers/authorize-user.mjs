import { CognitoJwtVerifier } from "aws-jwt-verify";
import { JwtExpiredError, JwtInvalidClaimError } from "aws-jwt-verify/error";

// A simple token-based authorizer example to demonstrate how to use an authorization token 
// to allow or deny a request. In this example, the caller named 'user' is allowed to invoke 
// a request if the client-supplied token value is 'allow'. The caller is not allowed to invoke 
// the request if the token value is 'deny'. If the token value is 'unauthorized' or an empty
// string, the authorizer function returns an HTTP 401 status code. For any other token value, 
// the authorizer returns an HTTP 500 status code. 
// Note that token values are case-sensitive.

export const authorizerHandler =  async(event, context, callback) => {
    
    const verifier = CognitoJwtVerifier.create({
        userPoolId: "us-west-2_zs3kXHjja",
        tokenUse: "access",
        clientId: "4e85upjjv08mrd3s14bng9qd7d",
        scope: ["https://api.aghda.net/read:table", "https://api.aghda.net/write:table"]
    });
try{
    const match = event.authorizationToken.match(/^Bearer (.*)$/);
    let token = match[1]
    const payload = await verifier.verify(token);
    return payload
      ? callback(null, generatePolicy("user", "Allow", event.methodArn))
      : callback(null, generatePolicy("user", "Deny", event.methodArn));
  } catch (error) {
    switch (true) {
      case error instanceof JwtExpiredError:
        callback("JWT expired!")
        break;
      case error instanceof JwtInvalidClaimError:
        callback("Unauthorized");
        break;
      default:
        callback(error.message);
        break;
    }
  }
};

// Help function to generate an IAM policy
var generatePolicy = function(principalId, effect, resource) {
    var authResponse = {};
    authResponse.principalId = principalId;
    if (effect && resource) {
        var policyDocument = {};
        policyDocument.Version = '2012-10-17'; 
        policyDocument.Statement = [];
        var statementOne = {};
        statementOne.Action = 'execute-api:Invoke'; 
        statementOne.Effect = effect;
        statementOne.Resource = resource;
        policyDocument.Statement[0] = statementOne;
        authResponse.policyDocument = policyDocument;
    }
    return authResponse;
}
