import {expectType} from 'tsd-check';
import isScoped from '.';

expectType<boolean>(isScoped('is-scoped'));
