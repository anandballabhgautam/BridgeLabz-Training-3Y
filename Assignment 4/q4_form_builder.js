"use strict";
// Q4 - Custom Form Builder (Classes + innerHTML)

class FormBuilder {
  // containerId: id of the element where the form will be rendered
  // fields: array like [{ type: "text", label: "Username" }]
  constructor(containerId, fields) {
    this.container = document.getElementById(containerId);
    this.fields = fields;
    this.render();
  }

  // Makes "Full Name" -> "full_name" for use as input name/id
  static toFieldKey(label) {
    return label.trim().toLowerCase().replace(/[^a-z0-9]+/g, "_");
  }

  // Escape text so labels cannot inject HTML
  static escapeHtml(text) {
    return String(text).replace(/[&<>"']/g, (ch) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[ch]));
  }

  buildFieldHtml(field) {
    const key = FormBuilder.toFieldKey(field.label);
    const label = FormBuilder.escapeHtml(field.label);
    let control;
    if (field.type === "textarea") {
      control = `<textarea id="${key}" name="${key}" rows="3"></textarea>`;
    } else if (field.type === "select") {
      const options = (field.options || []).map((o) => `<option value="${FormBuilder.escapeHtml(o)}">${FormBuilder.escapeHtml(o)}</option>`).join("");
      control = `<select id="${key}" name="${key}">${options}</select>`;
    } else {
      control = `<input type="${field.type}" id="${key}" name="${key}">`;
    }
    return `<label for="${key}">${label}</label>${control}`;
  }

  render() {
    // Whole form generated as one HTML string and injected with innerHTML
    this.container.innerHTML = `
      <form id="dynamicForm">
        ${this.fields.map((field) => this.buildFieldHtml(field)).join("\n")}
        <button type="submit">Submit</button>
      </form>`;
    this.form = this.container.querySelector("form");
    this.form.addEventListener("submit", (event) => {
      event.preventDefault();
      this.onSubmit(this.getFormData());
    });
  }

  // Collects every entered value as { fieldKey: value }
  getFormData() {
    const data = {};
    this.fields.forEach((field) => {
      const key = FormBuilder.toFieldKey(field.label);
      const element = this.form.elements[key];
      data[key] = element.value;
    });
    return data;
  }

  // Default submit handler, can be replaced by the user of the class
  onSubmit(data) {
    console.log("Form data:", data);
  }
}

if (typeof document !== "undefined") {
  const fields = [
    { type: "text", label: "Username" },
    { type: "email", label: "Email" },
    { type: "password", label: "Password" },
    { type: "number", label: "Age" },
    { type: "select", label: "Country", options: ["India", "USA", "UK"] },
    { type: "textarea", label: "Bio" }
  ];
  const builder = new FormBuilder("formContainer", fields);
  const output = document.getElementById("output");
  builder.onSubmit = (data) => {
    console.log("Form data:", data);
    output.textContent = JSON.stringify(data, null, 2);
  };
}
