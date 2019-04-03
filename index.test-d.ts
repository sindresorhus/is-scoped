import {expectType} from 'tsd';
import isScoped = require('.');

expectType<boolean>(isScoped('is-scoped'));
