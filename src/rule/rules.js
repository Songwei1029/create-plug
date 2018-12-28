// qq邮箱
export const email = /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/;

// 手机号码
export const phone = /^(?=\d{11}$)^1(?:3\d|4[57]|5[^4\D]|66|7[^249\D]|8\d|9[89])\d{8}$/;

// 账户名,字母开头,最少4为最多16位
export const userName = /^[a-zA-Z][a-zA-Z0-9_]{3,15}$/;

// 密码规则,至少1个大写1个小写 最少6位最多12位
export const passWord = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,12}$/;

export function checkPhone(value) {
  if (value && !phone.test(value)) {
    return(new Error("手机号码不正确"));
  } else {
    return null;
  }
}

export function checkEmail(value) {
  if (value && !email.test(value)) {
    return(new Error("邮箱地址不正确"));
  } else {
    return null;
  }
}

export function checkPwd(value) {
  if (value && !passWord.test(value)) {
    return(new Error("至少1个大写1个小写 最少6位最多12位"));
  } else {
    return null;
  }
}

export function checkName(value) {
  if (value && !userName.test(value)) {
    return(new Error("字母开头,最少4为最多16位"));
  } else {
    return null;
  }
}
