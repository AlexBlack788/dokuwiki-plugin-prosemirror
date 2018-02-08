// production rules
const prod = {
    indent: ['error', 4],
    'no-magic-numbers': ['warn', { ignore: [0, 1, -1] }],
    'max-len': ['error', { code: 120, ignoreComments: true }],
};

// dev rules extend production rules
const dev = Object.assign(
    {
        'no-console': 0,
    },
    prod,
);

// decide which rules to use -- default to dev
let rules = dev;
if (process.env.NODE_ENV === 'production') {
    rules = prod;
}

module.exports = {
    root: true,
    extends: 'airbnb-base',
    plugins: [
        'import',
    ],
    env: {
        browser: true,
        jquery: true,
    },
    rules,
};
