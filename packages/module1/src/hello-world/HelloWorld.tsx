import { useViewport } from '@stenafh/core';

export function HelloWorld() {
    const viewport = useViewport();

    if (viewport === 'web-desktop') {
        return <h1>Hello World! - desktop</h1>;
    }

    return <h1>Hello World! - mobile</h1>;
}

export default HelloWorld;
