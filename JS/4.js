/**Check for Non-Identical String Rotation
Given two strings s1 and s2, return 1 if s2 is a rotation of s1 but not identical to s1, otherwise return 0.

Example

Input:

s1 = abcde
s2 = cdeab
Output:

True
Explanation:

- s2 ('cdeab') is a non-trivial rotation of s1 ('abcde'). 
- If you rotate 'abcde' left by 2 positions, you get 'cdeab'. 
- Since s2 is not equal to s1 and is a rotation, the output is true. */

function isNonTrivialRotation(s1, s2) {
    // Write your code here
    if (s1.length !== s2.length) return 0;
    if (s1 === s2) return 0;
    return (s1 + s1).includes(s2) ? 1 : 0;

}