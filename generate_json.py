import openpyxl
import json

# Load the Excel file
excel_file = "StockLists20230830_122750_100.xlsx"  
workbook = openpyxl.load_workbook(excel_file)
worksheet = workbook.active

# Define a list to store the extracted data
data = []

# Define column names in the Excel sheet
column_names = [
    "CODE", "DESCRIPT", "BARCODE", "REGULAR_SU", "SUPPLIERCO",
    "DEPARTMENT", "BINL", "PACKSIZE", "ORD_LVL", "ORD_QUAN",
    "PURCHASEOR", "AVRGCOST", "GP_1", "SELLPRICE1", "SELLPINC1", "ONHAND"
]

# Iterate through rows in the Excel sheet and extract data
for row in worksheet.iter_rows(values_only=True):
    stock_data = {}
    for col_idx, col_name in enumerate(column_names):
        if col_idx < len(row):
            stock_data[col_name] = row[col_idx]
        else:
            stock_data[col_name] = None
    data.append(stock_data)

# Define the path to the JSON file where you want to write the data
json_file = "stock_data.json"

# Write the extracted data to the JSON file
with open(json_file, "w") as json_file:
    json.dump(data, json_file, indent=4)

print(f"Data has been extracted and saved to {json_file}")
