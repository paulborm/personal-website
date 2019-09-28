/**
 * Returns string by combining component-name and props
 * @param {Object} args
 * @param {string} args.name
 * @param {string[]} args.modifiers
 * @param {object} args.options
 * @returns {string}
 * @example
 * // returns "component--modifier1 component--modifier2"
 * returnModifiersFor({ name: 'component', modifiers: ['modifier1', 'modifier2'] });
 */

export default function returnModifiersFor(args) {
    const { name, modifiers, options } = args;

    if (
        (!name || !name.length) ||
        (!modifiers || !modifiers.length)
    ) {
        return;
    }

    const string = modifiers.split(' ').map(modifier => {
        let newModifier = modifier.trim();

        if (options && options.format === 'kebab') {
            newModifier = modifier.trim().replace(/[A-Z]/g, m => "-" + m.toLowerCase());
        }

        return (
            `${name}--${newModifier}`
        )
    }).join(' ');

    return string;
}
