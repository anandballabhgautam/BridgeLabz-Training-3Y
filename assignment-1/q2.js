/**
 * Q2. Multi-Type Data Summary
 * Requirements:
 * - Declare variables of different data types: string, number, boolean, array, object, null, undefined.
 * - Use typeof operator and Array.isArray() to identify each type.
 * - Print a formatted report (label + value + type) using one console.table() statement.
 */

const dataEntries = [
    { label: "Username", value: "Priya123", type: typeof "Priya123" },
    { label: "Age", value: 25, type: typeof 25 },
    { label: "Is Active", value: true, type: typeof true },
    { label: "Skills", value: ["JavaScript", "HTML", "CSS"], type: Array.isArray(["JavaScript", "HTML", "CSS"]) ? "array" : typeof [] },
    { label: "Address", value: { city: "Delhi", pin: 110001 }, type: typeof { city: "Delhi", pin: 110001 } },
    { label: "Middle Name", value: null, type: typeof null },
    { label: "Phone Number", value: undefined, type: typeof undefined }
];

console.table(dataEntries);
