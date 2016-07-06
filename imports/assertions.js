import { parts } from 'meteor/svein:astro-checkpoints-assert-roles';
import { DefaultAssertor } from 'meteor/svein:astro-checkpoints';
import { roles } from './security';
//noinspection JSCheckFunctionSignatures
console.info( 'LOAAAAAAAAAAAAAAD loggedUserIsAdmin' );
/**
 *
 * @return {boolean} true if logged user is verified, or verify email policy is disabled
 */
export function checkAgainstVerifiedEmailPolicy(){
    return !Meteor.settings.public.enableVerifyEmailSecurityPolicy ||
        getp(Meteor.user(),'emails[0].verified') === true;
}

/**
 * Assert the logged user is admin
 */
const loggedUserIsAdmin = DefaultAssertor.partialFrom( 'loggedUserInRole' , {
    name:'loggedUserIsAdmin',
    reason:'Must be admin.'
}, roles.ADMIN );

