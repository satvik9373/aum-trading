document.addEventListener('DOMContentLoaded', function() {
    let errorLogged = false;
    checking(errorLogged);
    window.globalSLHandler = globalSLHandler;
});

function checking(errorLogged) {
    window.onerror = function(message, source, lineno, colno, error) {
        let priorityDetails = determinePriority(message);

        if (!priorityDetails) {
            logErrorToConsole(message, source, lineno, colno, error);
            return true;
        }

        const {
            function_id,
            priority,
            category,
            title
        } = priorityDetails;

        logErrorToConsole(message, source, lineno, colno, error);

        if (shouldSendError() && shouldTrackError(priority)) {
            const errorMessage = {
                title: title,
                message: message,
                source: source,
                lineno: lineno,
                colno: colno,
                error: error ? error.stack : 'No stack trace available',
                priority: priority,
                category: category,
                function_id: function_id,
                timestamp: new Date().toISOString()
            };

            sendErrorData(errorMessage);

            errorLogged = true;

            setTimeout(() => (errorLogged = false), 5000);
        }

        return true;
    };
}

function determinePriority(message) {
    const priorities = [{
            function_id: 'networkError',
            keyword: 'NetworkError',
            priority: 'high',
            category: '',
            title: 'Network Issue Detected'
        },
        {
            function_id: 'referenceError',
            keyword: 'ReferenceError',
            priority: 'low',
            category: '',
            title: 'Invalid Reference Found'
        },
        {
            function_id: 'syntaxError',
            keyword: 'SyntaxError',
            priority: 'high',
            category: '',
            title: 'Syntax Problem in Code'
        },
        {
            function_id: 'failedToLoad',
            keyword: 'Failed to load',
            priority: 'medium',
            category: '',
            title: 'Failed to Load Resource'
        },
        {
            function_id: 'notFound',
            keyword: 'Not Found',
            priority: 'low',
            category: '',
            title: 'Resource Not Found'
        },
        {
            function_id: '404',
            keyword: '404',
            priority: 'low',
            category: '',
            title: 'Page Not Found'
        },
        {
            function_id: 'securityError',
            keyword: 'SecurityError',
            priority: 'high',
            category: '',
            title: 'Security Restriction Detected'
        },
        {
            function_id: 'rangeError',
            keyword: 'RangeError',
            priority: 'medium',
            category: '',
            title: 'Value Out of Acceptable Range'
        },
        {
            function_id: 'abortError',
            keyword: 'AbortError',
            priority: 'medium',
            category: '',
            title: 'Operation Aborted'
        },
        {
            function_id: 'notSupportedError',
            keyword: 'NotSupportedError',
            priority: 'medium',
            category: '',
            title: 'Feature Not Supported'
        },
        {
            function_id: 'quotaExceededError',
            keyword: 'QuotaExceededError',
            priority: 'medium',
            category: '',
            title: 'Storage Limit Exceeded'
        },
        {
            function_id: 'timeoutError',
            keyword: 'TimeoutError',
            priority: 'medium',
            category: '',
            title: 'Operation Timed Out'
        },
        {
            function_id: 'dOMException',
            keyword: 'DOMException',
            priority: 'medium',
            category: '',
            title: 'Unexpected Error in Page Structure'
        },
        {
            function_id: 'fileNotFoundError',
            keyword: 'FileNotFoundError',
            priority: 'medium',
            category: '',
            title: 'File Could Not Be Found'
        },
        {
            function_id: 'overflowError',
            keyword: 'OverflowError',
            priority: 'medium',
            category: '',
            title: 'Value Too Large to Process'
        },
        {
            function_id: 'memoryError',
            keyword: 'MemoryError',
            priority: 'high',
            category: '',
            title: 'Insufficient Memory Available'
        },
    ];

    return priorities.find(p => message.includes(p.keyword));
}

function shouldSendError() {
    return (
        sl_ajax.statusLog == 2 ||
        sl_ajax.statusTelegram == 2 ||
        sl_ajax.statusAsana == 2
    );
}

function shouldTrackError(priority) {
    return (
        sl_ajax.logTypes.map(type => type.toLowerCase()).includes(priority.toLowerCase()) ||
        sl_ajax.telegramTypes.map(type => type.toLowerCase()).includes(priority.toLowerCase()) ||
        sl_ajax.asanaTypes.map(type => type.toLowerCase()).includes(priority.toLowerCase())
    );
}

function logErrorToConsole(message, source, lineno, colno, error) {
    console.error(
        `%cError: %c${message}\n%cSource: %c${source}\n%cLine: %c${lineno} | Column: %c${colno}\n%cStack: %c${error ? error.stack : 'No stack trace available'}`,
        'color: red; font-weight: bold;',
        'color: orange;',
        'color: red; font-weight: bold;',
        'color: yellow;',
        'color: red; font-weight: bold;',
        'color: yellow;',
        'color: yellow;',
        'color: red; font-weight: bold;',
        'color: green;'
    );
}

function sendErrorData(errorMessage) {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', sl_ajax.ajaxurl, true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

    xhr.onload = function() {
        if (xhr.status >= 200 && xhr.status < 300) {} else {
            console.error('Failed to send error:', xhr.statusText);
        }
    };

    xhr.onerror = function() {
        console.error('Network Error while sending error');
    };

    const data = new URLSearchParams({
        action: 'handle_js_error',
        error_data: JSON.stringify(errorMessage),
        security: sl_ajax.security
    }).toString();

    xhr.send(data);
}

function globalSLHandler(function_id, event_name, description, priority, category) {
    return new Promise(function(resolve, reject) {
        const xhr = new XMLHttpRequest();
        xhr.open('POST', sl_ajax.ajaxurl, true);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

        xhr.onload = function() {
            if (xhr.status >= 200 && xhr.status < 300) {
                resolve(xhr.responseText);
            } else {
                reject(xhr.statusText);
            }
        };

        xhr.onerror = function() {
            reject('Network Error');
        };

        const data = new URLSearchParams({
            action: 'global_error_js_handler',
            function_id,
            event_name,
            description,
            priority,
            category,
            security: sl_ajax.security
        }).toString();

        xhr.send(data);
    });
}