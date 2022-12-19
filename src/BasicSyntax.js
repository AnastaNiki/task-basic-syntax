export function romanToInteger(str) {
    let result = 0;
    /*
    Напишите код, преобразующий число из римской записи в арабскую.
    На вход вы получите строку, ответом должно быть число.
     */
    let i = str.length;
    while (i >= 0) {
        i -= 1;
        switch (str[i]) {
            case 'I':
                result += 1;
                break;

            case 'V':
                if (i > 0 && str[i - 1] == 'I') {
                    result += 4;
                    i -= 1;
                } else result += 5;
                break;

            case 'X':
                if (i > 0 && str[i - 1] == 'I') {
                    result += 9;
                    i -= 1;
                } else result += 10;
                break;

            case 'L':
                if (i > 0 && str[i - 1] == 'X') {
                    result += 40;
                    i -= 1;
                } else result += 50;
                break;

            case 'C':
                if (i > 0 && str[i - 1] == 'X') {
                    result += 90;
                    i -= 1;
                } else result += 100;
                break;

            case 'D':
                if (i > 0 && str[i - 1] == 'C') {
                    result += 400;
                    i -= 1;
                } else result += 500;
                break;

            case 'M':
                if (i > 0 && str[i - 1] == 'C') {
                    result += 900;
                    i -= 1;
                } else result += 1000;
                break;
        }
    }
    return result;
}
