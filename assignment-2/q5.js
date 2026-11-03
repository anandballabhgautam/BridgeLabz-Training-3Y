/**
 * Q5. Boolean Logic Access System
 * Requirements:
 * - Variables: isDoorLocked, isWindowClosed, isAlarmOn, isOwnerInside.
 * - Access/Security is granted only if:
 *   - Alarm is on
 *   - Door and window are closed (isDoorLocked && isWindowClosed)
 *   - Owner is inside
 * - Use Boolean logic (&&, ||, !) to print "Secure" or "Unsafe".
 * - Change values and test multiple outcomes.
 */

function evaluateSecuritySystem(isDoorLocked, isWindowClosed, isAlarmOn, isOwnerInside) {
    // Condition: Alarm must be ON, Door locked, Window closed, and Owner inside
    const isSystemSecure = isAlarmOn && isDoorLocked && isWindowClosed && isOwnerInside;
    
    const status = isSystemSecure ? "Secure" : "Unsafe";
    
    console.log(`State -> Alarm: ${isAlarmOn}, Door Locked: ${isDoorLocked}, Window Closed: ${isWindowClosed}, Owner Inside: ${isOwnerInside}`);
    console.log(`System Status: [ ${status} ]
`);
    return status;
}

console.log("--- Q5: Boolean Logic Access System ---");

console.log("Test Case 1: All conditions met");
evaluateSecuritySystem(true, true, true, true);

console.log("Test Case 2: Door unlocked");
evaluateSecuritySystem(false, true, true, true);

console.log("Test Case 3: Alarm turned off");
evaluateSecuritySystem(true, true, false, true);

console.log("Test Case 4: Owner outside");
evaluateSecuritySystem(true, true, true, false);
