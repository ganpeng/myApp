import is from 'is_js'


export function SignUpValidator(data) {
    let errors = {}

    if (is.empty(data.phone)) {
        errors.phone = '手机号不能为空'
    } 

    if (!is.number(parseInt(data.phone))) {
        errors.phone = '手机号格式不正确'
    }

    if (is.empty(data.verificationCode)) {
        errors.verificationCode = '验证码不能为空'
    }

    if (!is.number(parseInt(data.verificationCode))) {
        errors.verificationCode = '验证码只能是数字'
    }

    return {
        errors : errors,
        isValid : is.empty(errors)
    }
}