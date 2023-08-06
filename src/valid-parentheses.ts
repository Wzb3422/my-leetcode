export function isValid(s: string): boolean {
    function isPair(left: string, right: string) {
        const parenthesePair: Record<string, string> = {
            '(': ')',
            '[': ']',
            '{': '}',
        }
        return parenthesePair[left] === right;
    }

    const splittedStr = s.split('');
    const stack: string[] = []; // temp list to work as a stack

    while (splittedStr.length) {
        const top = splittedStr.shift()!;

        if (isPair(stack[stack.length - 1], top)) {
            stack.pop();
        } else {
            stack.push(top);
        }
    }

    return stack.length === 0;
};
