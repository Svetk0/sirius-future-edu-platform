export default class ValidateInputs {
    validateName(value, valueName) {
        if (value.length < 2 || value.length > 20) {
            const name = valueName === 'firstName' ? 'Имя' : 'Фамилия';
            const must = valueName === 'firstName' ? 'Имя должно' : 'Фамилия должна';
            const errorMessage = !value
                ? `${name} не может быть пустым`
                : `${must} содержать от 2 до 20 символов`;
            return errorMessage;
        } else {
            return '';
        }
    }

    validateEmail(value) {
        const re =
            /[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
        if (!re.test(String(value).toLowerCase()) || !value) {
            const errorMessage = !value
                ? 'E-mail не может быть пустым'
                : 'Некорректный E-mail';
            return errorMessage;
        } else {
            return '';
        }
    }

    validatePassword(value) {
        if (value.length < 6 || value.length > 15) {
            const errorMessage = !value
                ? 'Пароль не может быть пустым'
                : 'Пароль должен содержать от 6 до 15 символов';
            return errorMessage;
        } else {
            return '';
        }
    }
}