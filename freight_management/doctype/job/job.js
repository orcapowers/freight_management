frappe.ui.form.on("Job", {
  refresh(frm) {
    frm.add_custom_button("Default Elements", () => {
      frappe.msgprint("You can pre-load standard cost elements here.");
    });
    frm.add_custom_button("Apply W/M", () => {
      frappe.msgprint("Apply Weight/Measurement charge logic here.");
    });
    frm.add_custom_button("Payment Req.", () => {
      frappe.msgprint("Create Payment Request draft...");
    });
    frm.add_custom_button("Invoice", () => {
      frappe.msgprint("Map to Sales Invoice here.");
    });
    frm.add_custom_button("Cr Note", () => {
      frappe.msgprint("Create Credit Note...");
    });
    frm.add_custom_button("Dr Note", () => {
      frappe.msgprint("Create Debit Note...");
    });
  }
});