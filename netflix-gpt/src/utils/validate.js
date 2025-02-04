export const validateEmail = (email, password) =>{

    const isEmailValid  = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,}$/.test(email)

    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)

    if(!isEmailValid) return "Please enter a valid email"

    if(!isPasswordValid) return "Please enter a valid password"

    return null;
}