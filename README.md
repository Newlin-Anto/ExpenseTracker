# 💰 Expense Tracker

A simple and user-friendly web application built with **Python (Flask)** and **MySQL** to track your daily expenses.  
You can add, view, and manage expenses easily with a clean and responsive interface.


## 🚀 Features

- Add, edit, and delete expenses  
- Categorize expenses (e.g., Food, Travel, Bills, etc.)  
- View total and categorized expense summaries  
- Uses **Flask** for the backend  
- Stores data in **MySQL** database  
- Lightweight and beginner-friendly project  

## 🛠️ Tech Stack

| Component | Technology |
|------------|-------------|
| Backend | Flask (Python) |
| Database | MySQL |
| Frontend | HTML, CSS, Bootstrap |
| Environment | Virtualenv (venv) |


## ⚙️ Installation & Setup

Follow these steps to set up the project locally:

```bash
# 1️⃣ Clone the repository
git clone https://github.com/Newlin-Anto/ExpenseTracker.git
cd ExpenseTracker

# 2️⃣ Create and activate a virtual environment
python -m venv venv
venv\Scripts\activate      # On Windows
# source venv/bin/activate  # On Mac/Linux

# 3️⃣ Install dependencies
pip install -r requirements.txt

# 4️⃣ Set up MySQL Database
# Open MySQL and run:
CREATE DATABASE expense_tracker;

# 5️⃣ Run the app
python app.py
