/**
 * JS Class
 */
var JSClass = new (function () {
    // _ Configuration
    const _config = {
        app: 'JSClass',
        dev:
            typeof document == 'undefined'
                ? true
                : ['local', 'test'].map((search) => {
                    return document.location.hostname.search(`-${search}`) >
                    -1;
                }).includes(true),
        logging: false,
        api: 'IntersectionObserver',
        ajax_url: '/ajax/load/data/progressive/',
    };

    // _ Variables
    const _vars = {
        
    };

    // _ Private methods
    const _private = {
        // initialize
        init() {
            _private.log('start');

            _config.logging = _config.dev;
        },

        // logging
        log() {
            if (_config.logging)
                console.log(`${_config.app}:\n\n\t`, ...arguments, `\n\n`);
        },

        // if the required object is not available yet
        // it will wait before executing callback
        require(object, callback) {
            const timeout = 5; // in ms

            if (typeof window[object] !== 'undefined') {
                callback();
            } else {
                _private.log('Waiting for object', object);

                setTimeout(() => {
                    _private.require(object, callback);
                }, timeout);
            }
        },

        // IntersectionObserver API
        observer() {
            /**
             * _ Usage: _private.observer().observe(element);
             */
            return new window[_config.api]((entries, self) => {
                entries.forEach((entry) => {
                    // this will check if element is visible in screen
                    if (entry.isIntersecting) {
                        const target = entry.target;

                        // stop observing element
                        self.unobserve(target);

                        // log
                        _private.log('isIntersecting', target);
                    }
                });
            });
        },

        helloWorld() {
            _private.log('Hello, World!')
        },
    };

    // _ Public methods
    const _public = {
        // exposing vars and private methods for debugging
        debug: _config.dev
            ? {
                _vars: _vars,
                _private: _private,
            }
            : false,
    };

    // _ Call stack
    return (() => {
        _private.init();

        _private.helloWorld();

        return _public;
    })();
})();
