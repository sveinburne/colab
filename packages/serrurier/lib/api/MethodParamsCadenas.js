import MethodParamsAssertion from './MethodParamsAssertion';
import { Cadenas } from './Cadenas';
/**
 * @extends {Cadenas}
 */
class MethodParamsCadenas extends Cadenas {
    /**
     * @param {!object} config - An object holding the instantiation params
     * @param {!string} config.name
     * @param {!Function_predicate} config.doesAssertionFails - A function that takes the astro class instance method arguments to check them.
     * 'this' is bound to the {@link Assertion} it is being run in. To get the astro class instance, you need to use 'this.astroInstance' property.
     * @param {!string} config.reason
     * @param {!string} config.errorId
     * @param {Array.<meteor_match_pattern>=} config.matchPatterns - An array of match patterns to validate the doesAssertionFails method
     * @param {Object<string, Array.<*>>=} config.dependingCadenas - Cadenas this cadenas depends on : a dictionary which keys are cadenas names, and values are an array of arguments
     * to pass to the cadenas {@link Function_predicate}
     */
    constructor(config){
        config.AssertionClass = MethodParamsAssertion;
        super(config);
    }
}

export default MethodParamsCadenas;