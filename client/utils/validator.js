import is from 'is_js'


const phoneReg = /^1[34578]\d{9}$/
const verifiCodeReg = /^[0-9]{6}$/

export function SignUpValidator(data) {
    let errors = {}
    if (is.empty(data.phone)) {
        errors.phone = '手机号不能为空'
    } 

    if (!is.empty(data.phone) && !phoneReg.test(data.phone)) {
        errors.phone = '手机号格式不正确'
    }

    if (is.empty(data.verificationCode)) {
        errors.verificationCode = '验证码不能为空'
    }

    if (!is.empty(data.verificationCode) && !verifiCodeReg.test(data.verificationCode)) {
        errors.verificationCode = '验证码输入不正确'
    }

    return {
        errors : errors,
        isValid : is.empty(errors)
    }
}