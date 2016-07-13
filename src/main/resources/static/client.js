import rest from "rest";
import defaultRequest from "rest/interceptor/defaultRequest";
import mime from "rest/interceptor/mime";
import uriTemplateInterceptor from "./api/uriTemplateInterceptor";
import errorCode from "rest/interceptor/errorCode";
import baseRegistry from "rest/mime/registry";

var registry = baseRegistry.child();

registry.register('text/uri-list', require('./api/uriListConverter'));
registry.register('application/hal+json', require('rest/mime/type/application/hal'));

module.exports = rest
    .wrap(mime, { registry: registry })
    .wrap(uriTemplateInterceptor)
    .wrap(errorCode)
    .wrap(defaultRequest, { headers: { 'Accept': 'application/hal+json' }});
