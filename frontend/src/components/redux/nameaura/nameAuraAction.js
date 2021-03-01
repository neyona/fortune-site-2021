// fortune_docker/frontend/src/components/redux/nameaura/fortuneAction.js
import { NAME_AURA } from './types';

export function getNameAura(nameAura) {
    return {
        type: NAME_AURA,
        payload: [nameAura]
    };
};
