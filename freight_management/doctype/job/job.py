import frappe
from frappe.model.document import Document

class Job(Document):
    def validate(self):
        total_cost = 0
        total_sales = 0
        for d in self.get('costing', []):
            # compute totals using FC fields
            qty = d.qty or 1
            cost = (d.cost_rate or 0) * qty
            sales = (d.sales_rate or 0) * qty
            total_cost += cost
            total_sales += sales

        self.total_cost = total_cost
        self.total_sales = total_sales
        self.provisional_profit = (total_sales or 0) - (total_cost or 0)
        self.gross_profit = self.provisional_profit