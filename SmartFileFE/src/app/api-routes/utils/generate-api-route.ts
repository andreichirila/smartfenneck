import reduce from 'lodash-es/reduce';
import {ApiRoute} from '../enums/api-route';
import {Params} from '@angular/router';
import {environment} from '../../../environments/environment';

export function generateApiRoute(apiCall: ApiRoute, routeParams: Params = {}) {
    return reduce({...environment.application, ...routeParams}, (result, value, key) => result.replace(`{${key}}`, value), apiCall);
}
