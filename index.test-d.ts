import {expectType} from 'tsd';
import isScoped from './index.js';

expectType<boolean>(isScoped('is-scoped'));
