import is from 'is_js'

export function signUpValidator(data) {
    let errors = {}

    if (is.empty(data.username)) {
        errors.username = '用户名不能为空'
    }

    if (is.empty(data.email)) {
        errors.email = '用户邮箱不能为空'
    }

    if (!is.empty(data.email) && !is.email(data.email)) {
        errors.email = '用户邮箱格式不正确'
    }


    if (is.empty(data.password)) {
        errors.password = '用户密码不能为空'
    }

    if (is.empty(data.confirmPassword)) {
        errors.confirmPassword = '用户确认密码不能为空'
    }

    if (!is.equal(data.password, data.confirmPassword)) {
        errors.confirmPassword = '确认密码和密码不一致'
    }


    return {
        errors,
        isValid : is.empty(errors)
    }
}


export function loginValidator(userData) {
    let errors = {}

    if (is.empty(userData.identify)) {
        errors.identify = '用户名/邮箱不能为空'
    }

    if (is.empty(userData.password)) {
        errors.password = '用户密码不能为空'
    }

    return {
        errors,
        isValid : is.empty(errors)
    }
}

export function movieValidator(movieData) {
    let errors = {}

    if (is.empty(movieData.name)) {
        errors.name = '电影名不能为空'
    }

    if (is.empty(movieData.desc)) {
        errors.desc = '电影描述不能为空'
    }

    return {
        errors,
        isValid : is.empty(errors)
    }
}