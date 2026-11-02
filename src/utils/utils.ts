export const cloneElement = <T extends HTMLTemplateElement>(element: T): T => {
    if (!element) {
        throw new TypeError(`Element not found`);
    }
    const clone = element.content.cloneNode(true);
    return <T>clone;
};

export const getDocumentElement = <T extends HTMLElement>(selector: string): T => {
    const element = document.querySelector<T>(selector);
    if (!element) {
        throw new TypeError(`Element ${selector} not found`);
    }
    return element as T;
};

export const getElement = <T extends HTMLElement>(root: HTMLElement, selector: string): T => {
    const element = root.querySelector<T>(selector);
    if (!element) {
        throw new TypeError(`Element ${selector} not found`);
    }
    return element as T;
};

export function getEnvVariable(envValue: string | undefined, envKey: string): string {
    if (!envValue) {
        throw new Error(`${envKey} is missed`);
    }
    return envValue;
}

export function checkEventTarget(value: EventTarget | null): HTMLElement {
    if (value instanceof HTMLElement) {
        return value;
    }
    throw new Error(`Not expected value`);
}
