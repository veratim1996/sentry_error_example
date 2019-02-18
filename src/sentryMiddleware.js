import * as Sentry from "@sentry/browser";

const sentryMiddleware = (store) => (next) => (action) => {
    const { type, payload } = action;

    const breadcrumb = {
        message: type,
        category: "redux-action",
        data: {
            payload
        },
        level: Sentry.Severity.info
    };

    Sentry.addBreadcrumb(breadcrumb);

    return next(action);
};

export default sentryMiddleware;
