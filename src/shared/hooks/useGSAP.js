import { useLayoutEffect } from 'react';
import { gsap } from 'gsap';

function useGSAP(func, { scope, deps = [] } = {}) {

    useLayoutEffect(() => {
        const ctx = gsap.context(func, scope);
        return () => ctx.revert();
    }, deps);

    return null
}

export default useGSAP;
