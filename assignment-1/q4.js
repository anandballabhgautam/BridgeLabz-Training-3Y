/**
 * Q4. Academic Performance Evaluator
 * Requirements:
 * - Input marks of 5 subjects (use an array).
 * - Calculate average and overall percentage.
 * - Use logical operators to print:
 *   - "Promoted with Distinction" if ≥ 85%
 *   - "Promoted" if between 50%–84%
 *   - "Detained" if < 50%
 * - Validation: if any subject < 35 -> automatically "Detained".
 */

const marks = [78, 82, 90, 88, 85];
const maxMarksPerSubject = 100;
const totalMaxMarks = marks.length * maxMarksPerSubject;

let totalMarks = 0;
let hasFailedSubject = false;

for (let i = 0; i < marks.length; i++) {
    totalMarks += marks[i];
    if (marks[i] < 35) {
        hasFailedSubject = true;
    }
}

const percentage = (totalMarks / totalMaxMarks) * 100;
const averageMarks = totalMarks / marks.length;

let status = "";

if (hasFailedSubject) {
    status = "Detained (Failed in one or more subjects with < 35 marks)";
} else if (percentage >= 85) {
    status = "Promoted with Distinction";
} else if (percentage >= 50 && percentage < 85) {
    status = "Promoted";
} else {
    status = "Detained";
}

console.log("--- Academic Performance Report ---");
console.log(`Marks in 5 Subjects: ${marks.join(", ")}`);
console.log(`Total Marks: ${totalMarks}/${totalMaxMarks}`);
console.log(`Average Marks: ${averageMarks.toFixed(2)}`);
console.log(`Overall Percentage: ${percentage.toFixed(2)}%`);
console.log(`Final Result: ${status}`);
