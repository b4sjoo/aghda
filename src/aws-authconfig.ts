const awsmobile = {
    "aws_project_region": "us-west-2",
    "aws_cognito_region": "us-west-2",
    "aws_user_pools_id": "us-west-2_zs3kXHjja",
    "aws_user_pools_web_client_id": "4e85upjjv08mrd3s14bng9qd7d",
    "oauth": {
        "domain": "auth.aghda.net",
        "scope": [
            "email",
            "https://api.aghda.net/read:table",
            "https://api.aghda.net/write:table",
            "openid",
            "profile"
        ],
        "redirectSignIn": "https://aghda.net/signup",
        "redirectSignOut": "https://aghda.net/About",
        "responseType": "code"
    },
    "federationTarget": "COGNITO_USER_POOLS",
    "aws_cognito_username_attributes": [
        "EMAIL"
    ],
    "aws_cognito_social_providers": [
        "GOOGLE"
    ],
    "aws_cognito_signup_attributes": [
        "EMAIL"
    ],
    "aws_cognito_mfa_configuration": "OFF",
    "aws_cognito_mfa_types": [],
    "aws_cognito_password_protection_settings": {
        "passwordPolicyMinLength": 8,
        "passwordPolicyCharacters": [
            "REQUIRES_LOWERCASE",
            "REQUIRES_UPPERCASE",
            "REQUIRES_NUMBERS",
            "REQUIRES_SYMBOLS"
        ]
    },
    "aws_cognito_verification_mechanisms": [
        "EMAIL"
    ]
};


export default awsmobile;
