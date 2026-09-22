import Section from '@/components/Section';
import CodeBlock from '@/components/CodeBlock';
import Callout from '@/components/Callout';
import DataTable from '@/components/DataTable';
import type { NavItem } from '@/components/Sidebar';

export const navItems: NavItem[] = [
  { id: 'sec-1', label: 'What Are We Learning?', group: 'Introduction' },
  { id: 'sec-2', label: 'Why Connect Python with MySQL?', group: 'Introduction' },
  { id: 'sec-3', label: 'What Do We Need?', group: 'Introduction' },
  { id: 'sec-4', label: 'What Is MySQL Connector?', group: 'Introduction' },
  { id: 'sec-5', label: 'Connecting Python to MySQL', group: 'Connecting' },
  { id: 'sec-6', label: 'Understanding connect()', group: 'Connecting' },
  { id: 'sec-7', label: 'Why Do We Need connect()?', group: 'Connecting' },
  { id: 'sec-8', label: 'What Is a Connection Object?', group: 'Connecting' },
  { id: 'sec-9', label: 'What Is a Cursor?', group: 'Cursor' },
  { id: 'sec-10', label: 'Why Do We Need a Cursor?', group: 'Cursor' },
  { id: 'sec-11', label: 'Connection vs Cursor', group: 'Cursor' },
  { id: 'sec-12', label: 'Creating a Database', group: 'Database Operations' },
  { id: 'sec-13', label: 'Connecting to a Specific Database', group: 'Database Operations' },
  { id: 'sec-14', label: 'Creating a Table', group: 'Database Operations' },
  { id: 'sec-15', label: 'INSERT Operation', group: 'Database Operations' },
  { id: 'sec-16', label: 'Why Do We Use %s?', group: 'Database Operations' },
  { id: 'sec-17', label: 'Why Do We Use commit()?', group: 'Database Operations' },
  { id: 'sec-18', label: 'INSERT Multiple Records', group: 'Database Operations' },
  { id: 'sec-19', label: 'What Is executemany()?', group: 'Database Operations' },
  { id: 'sec-20', label: 'Retrieving Data from MySQL', group: 'Retrieving Data' },
  { id: 'sec-21', label: 'What Is fetchall()?', group: 'Retrieving Data' },
  { id: 'sec-22', label: 'fetchone()', group: 'Retrieving Data' },
  { id: 'sec-23', label: 'Retrieving Specific Data', group: 'Retrieving Data' },
  { id: 'sec-24', label: 'Using Parameters with SELECT', group: 'Retrieving Data' },
  { id: 'sec-25', label: 'Sakila Database', group: 'Sakila Database' },
  { id: 'sec-26', label: 'Connecting Python to Sakila', group: 'Sakila Database' },
  { id: 'sec-27', label: 'Retrieve All Customers', group: 'Sakila Database' },
  { id: 'sec-28', label: 'Retrieve Selected Columns', group: 'Sakila Database' },
  { id: 'sec-29', label: 'Retrieve Customers Using WHERE', group: 'Sakila Database' },
  { id: 'sec-30', label: 'Retrieve Films', group: 'Sakila Database' },
  { id: 'sec-31', label: 'Retrieve Films with a Condition', group: 'Sakila Database' },
  { id: 'sec-32', label: 'Using ORDER BY', group: 'Sakila Database' },
  { id: 'sec-33', label: 'Using LIMIT', group: 'Sakila Database' },
  { id: 'sec-34', label: 'Retrieving One Customer', group: 'Sakila Database' },
  { id: 'sec-35', label: 'UPDATE Operation', group: 'CRUD Operations' },
  { id: 'sec-36', label: 'DELETE Operation', group: 'CRUD Operations' },
  { id: 'sec-37', label: 'commit() and SELECT', group: 'CRUD Operations' },
  { id: 'sec-38', label: 'Closing the Connection', group: 'CRUD Operations' },
  { id: 'sec-39', label: 'Complete SELECT Example', group: 'CRUD Operations' },
  { id: 'sec-40', label: 'Complete CRUD Flow', group: 'CRUD Operations' },
  { id: 'sec-41', label: 'Quick Reference', group: 'Reference' },
  { id: 'sec-42', label: 'Simple Mental Model', group: 'Reference' },
  { id: 'sec-43', label: 'Practice Tasks', group: 'Practice' },
];

export default function LessonContent() {
  return (
    <div className="lesson-content">
      {/* 1 */}
      <Section id="sec-1" number={1} title="What Are We Learning?">
        <p>In this lesson, we will learn how to connect a <strong>Python program with a MySQL database</strong> and perform database operations.</p>
        <p>By the end of this lesson, students will be able to:</p>
        <ul className="lesson-list">
          <li>Connect Python to MySQL</li>
          <li>Create a database and table</li>
          <li>Insert records</li>
          <li>Retrieve records using <code>SELECT</code></li>
          <li>Retrieve specific records using <code>WHERE</code></li>
          <li>Update records</li>
          <li>Delete records</li>
          <li>Use <code>cursor</code></li>
          <li>Use <code>commit()</code></li>
          <li>Fetch data using <code>fetchone()</code> and <code>fetchall()</code></li>
          <li>Work with an existing database such as <strong>Sakila</strong></li>
        </ul>
      </Section>

      {/* 2 */}
      <Section id="sec-2" number={2} title="Why Connect Python with MySQL?">
        <p>Python is commonly used to build applications, but application data usually needs to be stored somewhere.</p>
        <p>For example, consider a student management application.</p>
        <p>Python can handle:</p>
        <CodeBlock language="text" code={`User Input
    ↓
Python Program
    ↓
MySQL Database
    ↓
Stored Data`} />
        <p>Python can send SQL commands to MySQL such as:</p>
        <CodeBlock language="sql" code={`SELECT
INSERT
UPDATE
DELETE`} />
        <p>and MySQL sends the results back to Python.</p>
        <h3 className="sub-heading">Real-world example</h3>
        <p>Suppose a student enters:</p>
        <CodeBlock language="text" code={`Name: Arun
Age: 21
Course: Python`} />
        <p>Python can send this information to MySQL and store it.</p>
        <p>Later, Python can retrieve the student's information from MySQL and display it.</p>
      </Section>

      {/* 3 */}
      <Section id="sec-3" number={3} title="What Do We Need?">
        <p>For this lesson, we need:</p>
        <h3 className="sub-heading">1. Python</h3>
        <p>Python should be installed on your computer.</p>
        <p>Check using:</p>
        <CodeBlock language="bash" code={`python --version`} />
        <h3 className="sub-heading">2. MySQL Server</h3>
        <p>MySQL stores our database and data.</p>
        <h3 className="sub-heading">3. MySQL Connector for Python</h3>
        <p>Python needs a connector/driver to communicate with MySQL.</p>
        <p>Install it using:</p>
        <CodeBlock language="bash" code={`pip install mysql-connector-python`} />
      </Section>

      {/* 4 */}
      <Section id="sec-4" number={4} title="What Is MySQL Connector?">
        <p><code>mysql-connector-python</code> is a Python package that allows Python programs to communicate with MySQL databases.</p>
        <p>We import it using:</p>
        <CodeBlock language="python" code={`import mysql.connector`} />
        <p>Think of it as a <strong>bridge between Python and MySQL</strong>.</p>
        <CodeBlock language="text" code={`Python
   ↓
mysql.connector
   ↓
MySQL`} />
        <Callout type="important">
          Without a suitable database connector, Python cannot directly communicate with MySQL using this approach.
        </Callout>
      </Section>

      {/* 5 */}
      <Section id="sec-5" number={5} title="Connecting Python to MySQL">
        <p>The first thing we need to do is establish a connection.</p>
        <CodeBlock language="python" code={`import mysql.connector

conn = mysql.connector.connect(
    host="localhost",
    user="root",
    password="your_password"
)

print("Connected successfully")`} />
      </Section>

      {/* 6 */}
      <Section id="sec-6" number={6} title="Understanding connect()">
        <p>The <code>connect()</code> function establishes a connection between Python and the MySQL server.</p>
        <CodeBlock language="python" code={`mysql.connector.connect()`} />
        <p>We provide information such as:</p>
        <CodeBlock language="python" code={`host="localhost"
user="root"
password="your_password"`} />
        <h3 className="sub-heading">host</h3>
        <p>Specifies where MySQL is running.</p>
        <p>For a MySQL server running on our own computer:</p>
        <CodeBlock language="python" code={`host="localhost"`} />
        <h3 className="sub-heading">user</h3>
        <p>Specifies the MySQL username.</p>
        <p>For example:</p>
        <CodeBlock language="python" code={`user="root"`} />
        <h3 className="sub-heading">password</h3>
        <p>Specifies the password of the MySQL user.</p>
        <CodeBlock language="python" code={`password="your_password"`} />
      </Section>

      {/* 7 */}
      <Section id="sec-7" number={7} title="Why Do We Need connect()?">
        <p>Think about MySQL as a separate application.</p>
        <p>Python and MySQL are two different programs.</p>
        <CodeBlock language="text" code={`Python Program       MySQL Server
      |                    |
      |                    |
      └──── Connection ────┘`} />
        <Callout type="why">
          <p><code>connect()</code> creates this communication channel.</p>
          <p>Without a connection, Python cannot send SQL commands to MySQL.</p>
        </Callout>
      </Section>

      {/* 8 */}
      <Section id="sec-8" number={8} title="What Is a Connection Object?">
        <p>When we write:</p>
        <CodeBlock language="python" code={`conn = mysql.connector.connect(...)`} />
        <p>the connection created by MySQL Connector is stored inside:</p>
        <CodeBlock language="python" code={`conn`} />
        <p>So:</p>
        <CodeBlock language="python" code={`conn`} />
        <p>represents our connection to the MySQL server/database.</p>
        <p>We can use this connection to create a cursor and perform database operations.</p>
      </Section>

      {/* 9 */}
      <Section id="sec-9" number={9} title="What Is a Cursor?">
        <Callout type="important">
          A <strong>cursor is an object used to execute SQL statements and retrieve results from the database.</strong>
        </Callout>
        <p>We create a cursor using:</p>
        <CodeBlock language="python" code={`cursor = conn.cursor()`} />
        <p>The relationship is:</p>
        <CodeBlock language="text" code={`Connection
     ↓
   Cursor
     ↓
Execute SQL
     ↓
MySQL`} />
      </Section>

      {/* 10 */}
      <Section id="sec-10" number={10} title="Why Do We Need a Cursor?">
        <p>Suppose Python wants to send this SQL query to MySQL:</p>
        <CodeBlock language="sql" code={`SELECT * FROM customer;`} />
        <p>Python needs something through which it can send the SQL command and receive the result.</p>
        <p>That is the job of the <strong>cursor</strong>.</p>
        <p>For example:</p>
        <CodeBlock language="python" code={`cursor.execute("SELECT * FROM customer")`} />
        <p>Here:</p>
        <CodeBlock language="python" code={`cursor`} />
        <p>is responsible for executing the SQL statement.</p>
      </Section>

      {/* 11 */}
      <Section id="sec-11" number={11} title="Connection vs Cursor">
        <p>This is an important difference for students.</p>
        <DataTable
          headers={['Connection', 'Cursor']}
          rows={[
            ['Establishes communication with MySQL', 'Executes SQL commands'],
            ['Connects Python and MySQL', 'Works with queries/results'],
            ['Created using connect()', 'Created using conn.cursor()'],
            ['Represents database connection', 'Represents query execution interface'],
          ]}
        />
        <Callout type="remember">
          <p><strong>Connection = Communication</strong></p>
          <p><strong>Cursor = Query execution</strong></p>
        </Callout>
      </Section>

      {/* 12 */}
      <Section id="sec-12" number={12} title="Creating a Database">
        <p>Let's first connect to MySQL without specifying a database.</p>
        <CodeBlock language="python" code={`import mysql.connector

conn = mysql.connector.connect(
    host="localhost",
    user="root",
    password="your_password"
)

cursor = conn.cursor()

cursor.execute("CREATE DATABASE student_db")

print("Database created")`} />
        <p>Here:</p>
        <CodeBlock language="python" code={`cursor.execute()`} />
        <p>sends the SQL command to MySQL.</p>
        <p>The SQL command is:</p>
        <CodeBlock language="sql" code={`CREATE DATABASE student_db;`} />
      </Section>

      {/* 13 */}
      <Section id="sec-13" number={13} title="Connecting to a Specific Database">
        <p>After creating the database, we can connect to it.</p>
        <CodeBlock language="python" code={`import mysql.connector

conn = mysql.connector.connect(
    host="localhost",
    user="root",
    password="your_password",
    database="student_db"
)

cursor = conn.cursor()

print("Connected to student_db")`} />
        <p>Now the connection is specifically associated with:</p>
        <CodeBlock language="text" code={`student_db`} />
      </Section>

      {/* 14 */}
      <Section id="sec-14" number={14} title="Creating a Table">
        <p>Let's create a <code>students</code> table.</p>
        <CodeBlock language="python" code={`cursor.execute("""
CREATE TABLE students (
    id INT PRIMARY KEY,
    name VARCHAR(50),
    age INT,
    course VARCHAR(50)
)
""")

print("Table created")`} />
        <p>The corresponding SQL is:</p>
        <CodeBlock language="sql" code={`CREATE TABLE students (
    id INT PRIMARY KEY,
    name VARCHAR(50),
    age INT,
    course VARCHAR(50)
);`} />
      </Section>

      {/* 15 */}
      <Section id="sec-15" number={15} title="INSERT Operation">
        <p>Now let's insert a record.</p>
        <CodeBlock language="python" code={`query = """
INSERT INTO students
VALUES (%s, %s, %s, %s)
"""

values = (1, "Arun", 21, "Python")

cursor.execute(query, values)

conn.commit()

print("Record inserted")`} />
      </Section>

      {/* 16 */}
      <Section id="sec-16" number={16} title="Why Do We Use %s?">
        <p>Notice:</p>
        <CodeBlock language="python" code={`VALUES (%s, %s, %s, %s)`} />
        <p>These are placeholders.</p>
        <p>The actual values are provided separately:</p>
        <CodeBlock language="python" code={`values = (1, "Arun", 21, "Python")`} />
        <Callout type="important">
          <p>This is preferable to directly building SQL strings with user input.</p>
        </Callout>
        <p>For example:</p>
        <CodeBlock language="python" code={`cursor.execute(query, values)`} />
        <p>The connector handles the values when executing the query.</p>
      </Section>

      {/* 17 */}
      <Section id="sec-17" number={17} title="Why Do We Use commit()?">
        <p>This is another important concept.</p>
        <p>For operations that modify data, such as:</p>
        <CodeBlock language="text" code={`INSERT
UPDATE
DELETE`} />
        <p>we generally use:</p>
        <CodeBlock language="python" code={`conn.commit()`} />
        <p>Example:</p>
        <CodeBlock language="python" code={`cursor.execute(query, values)
conn.commit()`} />
        <h3 className="sub-heading">Simple explanation</h3>
        <Callout type="why">
          <p><code>commit()</code> tells MySQL:</p>
          <p>"Save this change permanently."</p>
        </Callout>
        <Callout type="important">
          Without committing a transaction, changes may not be persisted depending on the transaction state and configuration.
        </Callout>
      </Section>

      {/* 18 */}
      <Section id="sec-18" number={18} title="INSERT Multiple Records">
        <p>We can insert multiple records using <code>executemany()</code>.</p>
        <CodeBlock language="python" code={`query = """
INSERT INTO students
VALUES (%s, %s, %s, %s)
"""

values = [
    (2, "Rahul", 22, "Java"),
    (3, "Priya", 20, "Python"),
    (4, "Kiran", 23, "SQL")
]

cursor.executemany(query, values)

conn.commit()

print("Records inserted")`} />
      </Section>

      {/* 19 */}
      <Section id="sec-19" number={19} title="What Is executemany()?">
        <p><code>executemany()</code> executes the same SQL statement for multiple sets of values.</p>
        <p>Instead of:</p>
        <CodeBlock language="python" code={`cursor.execute(...)
cursor.execute(...)
cursor.execute(...)`} />
        <p>we can use:</p>
        <CodeBlock language="python" code={`cursor.executemany(query, values)`} />
      </Section>

      {/* 20 */}
      <Section id="sec-20" number={20} title="Retrieving Data from MySQL">
        <p>Now we come to one of the most important operations:</p>
        <CodeBlock language="sql" code={`SELECT`} />
        <p>Suppose our table contains:</p>
        <DataTable
          headers={['id', 'name', 'age', 'course']}
          rows={[
            ['1', 'Arun', '21', 'Python'],
            ['2', 'Rahul', '22', 'Java'],
            ['3', 'Priya', '20', 'Python'],
            ['4', 'Kiran', '23', 'SQL'],
          ]}
        />
        <p>We can retrieve all records using:</p>
        <CodeBlock language="python" code={`cursor.execute("SELECT * FROM students")

records = cursor.fetchall()

for row in records:
    print(row)`} />
        <p>Output:</p>
        <CodeBlock language="text" code={`(1, 'Arun', 21, 'Python')
(2, 'Rahul', 22, 'Java')
(3, 'Priya', 20, 'Python')
(4, 'Kiran', 23, 'SQL')`} />
      </Section>

      {/* 21 */}
      <Section id="sec-21" number={21} title="What Is fetchall()?">
        <p>After executing:</p>
        <CodeBlock language="python" code={`cursor.execute("SELECT * FROM students")`} />
        <p>MySQL sends the result back through the cursor.</p>
        <p>We can retrieve all returned rows using:</p>
        <CodeBlock language="python" code={`cursor.fetchall()`} />
        <p>Example:</p>
        <CodeBlock language="python" code={`records = cursor.fetchall()`} />
        <p><code>records</code> will contain all the rows returned by the query.</p>
      </Section>

      {/* 22 */}
      <Section id="sec-22" number={22} title="fetchone()">
        <p>If we only want one row:</p>
        <CodeBlock language="python" code={`cursor.execute("SELECT * FROM students")

row = cursor.fetchone()

print(row)`} />
        <p>Output:</p>
        <CodeBlock language="text" code={`(1, 'Arun', 21, 'Python')`} />
        <h3 className="sub-heading">Difference</h3>
        <CodeBlock language="python" code={`fetchone()`} />
        <p>→ retrieves one row.</p>
        <CodeBlock language="python" code={`fetchall()`} />
        <p>→ retrieves all remaining rows.</p>
      </Section>

      {/* 23 */}
      <Section id="sec-23" number={23} title="Retrieving Specific Data">
        <p>We can use normal SQL conditions.</p>
        <p>For example:</p>
        <CodeBlock language="python" code={`cursor.execute(
    "SELECT * FROM students WHERE course = 'Python'"
)

records = cursor.fetchall()

for row in records:
    print(row)`} />
        <p>Output:</p>
        <CodeBlock language="text" code={`(1, 'Arun', 21, 'Python')
(3, 'Priya', 20, 'Python')`} />
        <Callout type="important">
          <p>Python is not replacing SQL.</p>
          <p>Python is sending SQL commands to MySQL.</p>
        </Callout>
      </Section>

      {/* 24 */}
      <Section id="sec-24" number={24} title="Using Parameters with SELECT">
        <p>Instead of directly writing:</p>
        <CodeBlock language="python" code={`cursor.execute(
    "SELECT * FROM students WHERE course = 'Python'"
)`} />
        <p>we can use a parameter.</p>
        <CodeBlock language="python" code={`query = "SELECT * FROM students WHERE course = %s"

value = ("Python",)

cursor.execute(query, value)

records = cursor.fetchall()

for row in records:
    print(row)`} />
        <Callout type="why">
          This approach is especially useful when values come from users or program variables.
        </Callout>
      </Section>

      {/* 25 */}
      <Section id="sec-25" number={25} title="Sakila Database">
        <p>Now let's work with an existing MySQL database.</p>
        <p><strong>Sakila</strong> is a sample MySQL database containing data for a fictional DVD rental business.</p>
        <p>It contains tables such as:</p>
        <CodeBlock language="text" code={`customer
film
actor
category
rental
payment
staff
store
inventory`} />
        <Callout type="remember">
          This makes Sakila useful for teaching database queries.
        </Callout>
      </Section>

      {/* 26 */}
      <Section id="sec-26" number={26} title="Connecting Python to Sakila">
        <p>First make sure the Sakila database is installed in MySQL.</p>
        <p>Then:</p>
        <CodeBlock language="python" code={`import mysql.connector

conn = mysql.connector.connect(
    host="localhost",
    user="root",
    password="your_password",
    database="sakila"
)

cursor = conn.cursor()

print("Connected to Sakila")`} />
      </Section>

      {/* 27 */}
      <Section id="sec-27" number={27} title="Retrieve All Customers">
        <p>Let's retrieve data from the <code>customer</code> table.</p>
        <p>SQL:</p>
        <CodeBlock language="sql" code={`SELECT * FROM customer;`} />
        <p>Python:</p>
        <CodeBlock language="python" code={`cursor.execute("SELECT * FROM customer")

records = cursor.fetchall()

for row in records:
    print(row)`} />
        <p>The result will contain customer records from Sakila.</p>
      </Section>

      {/* 28 */}
      <Section id="sec-28" number={28} title="Retrieve Selected Columns">
        <p>We don't always need every column.</p>
        <p>SQL:</p>
        <CodeBlock language="sql" code={`SELECT first_name, last_name
FROM customer;`} />
        <p>Python:</p>
        <CodeBlock language="python" code={`cursor.execute("""
SELECT first_name, last_name
FROM customer
""")

records = cursor.fetchall()

for row in records:
    print(row)`} />
        <p>Example output:</p>
        <CodeBlock language="text" code={`(MARY, SMITH)
(PATRICIA, JOHNSON)
(LINDA, WILLIAMS)
...`} />
      </Section>

      {/* 29 */}
      <Section id="sec-29" number={29} title="Retrieve Customers Using WHERE">
        <p>Suppose we want customers whose first name is <code>MARY</code>.</p>
        <CodeBlock language="python" code={`query = """
SELECT customer_id, first_name, last_name
FROM customer
WHERE first_name = %s
"""

value = ("MARY",)

cursor.execute(query, value)

records = cursor.fetchall()

for row in records:
    print(row)`} />
      </Section>

      {/* 30 */}
      <Section id="sec-30" number={30} title="Retrieve Films">
        <p>Now let's use the <code>film</code> table.</p>
        <CodeBlock language="python" code={`cursor.execute("""
SELECT film_id, title, rental_rate
FROM film
""")

records = cursor.fetchall()

for row in records:
    print(row)`} />
        <p>Example output:</p>
        <CodeBlock language="text" code={`(1, 'ACADEMY DINOSAUR', 0.99)
(2, 'ACE GOLDFINGER', 4.99)
(3, 'ADAPTATION HOLES', 2.99)`} />
      </Section>

      {/* 31 */}
      <Section id="sec-31" number={31} title="Retrieve Films with a Condition">
        <p>Let's find films where the rental rate is greater than <code>3</code>.</p>
        <CodeBlock language="python" code={`query = """
SELECT title, rental_rate
FROM film
WHERE rental_rate > %s
"""

value = (3,)

cursor.execute(query, value)

records = cursor.fetchall()

for row in records:
    print(row)`} />
      </Section>

      {/* 32 */}
      <Section id="sec-32" number={32} title="Using ORDER BY">
        <p>SQL:</p>
        <CodeBlock language="sql" code={`SELECT title, rental_rate
FROM film
ORDER BY rental_rate DESC;`} />
        <p>Python:</p>
        <CodeBlock language="python" code={`cursor.execute("""
SELECT title, rental_rate
FROM film
ORDER BY rental_rate DESC
""")

records = cursor.fetchall()

for row in records:
    print(row)`} />
        <Callout type="remember">
          This demonstrates that normal SQL concepts can be used through Python.
        </Callout>
      </Section>

      {/* 33 */}
      <Section id="sec-33" number={33} title="Using LIMIT">
        <p>Suppose we only want the first 10 films.</p>
        <CodeBlock language="python" code={`cursor.execute("""
SELECT film_id, title, rental_rate
FROM film
LIMIT 10
""")

records = cursor.fetchall()

for row in records:
    print(row)`} />
      </Section>

      {/* 34 */}
      <Section id="sec-34" number={34} title="Retrieving One Customer">
        <p>Suppose we know the customer ID.</p>
        <CodeBlock language="python" code={`query = """
SELECT customer_id, first_name, last_name
FROM customer
WHERE customer_id = %s
"""

value = (5,)

cursor.execute(query, value)

row = cursor.fetchone()

print(row)`} />
        <p>Example:</p>
        <CodeBlock language="text" code={`(5, 'JENNIFER', 'DAVIS')`} />
      </Section>

      {/* 35 */}
      <Section id="sec-35" number={35} title="UPDATE Operation">
        <p>Let's update a student's course.</p>
        <CodeBlock language="python" code={`query = """
UPDATE students
SET course = %s
WHERE id = %s
"""

values = ("Java", 1)

cursor.execute(query, values)

conn.commit()

print("Record updated")`} />
        <p>SQL equivalent:</p>
        <CodeBlock language="sql" code={`UPDATE students
SET course = 'Java'
WHERE id = 1;`} />
      </Section>

      {/* 36 */}
      <Section id="sec-36" number={36} title="DELETE Operation">
        <p>To delete a record:</p>
        <CodeBlock language="python" code={`query = """
DELETE FROM students
WHERE id = %s
"""

value = (4,)

cursor.execute(query, value)

conn.commit()

print("Record deleted")`} />
        <p>SQL equivalent:</p>
        <CodeBlock language="sql" code={`DELETE FROM students
WHERE id = 4;`} />
      </Section>

      {/* 37 */}
      <Section id="sec-37" number={37} title="Important: commit() and SELECT">
        <p>For a <code>SELECT</code> query:</p>
        <CodeBlock language="python" code={`cursor.execute("SELECT * FROM students")`} />
        <p>we normally don't need:</p>
        <CodeBlock language="python" code={`conn.commit()`} />
        <p>because we are only reading data.</p>
        <p>For:</p>
        <CodeBlock language="text" code={`INSERT
UPDATE
DELETE`} />
        <p>we use:</p>
        <CodeBlock language="python" code={`conn.commit()`} />
        <p>because these operations modify data.</p>
      </Section>

      {/* 38 */}
      <Section id="sec-38" number={38} title="Closing the Connection">
        <p>After completing database operations:</p>
        <CodeBlock language="python" code={`cursor.close()
conn.close()`} />
        <h3 className="sub-heading">Why?</h3>
        <Callout type="why">
          <p>We should release resources that are no longer needed.</p>
        </Callout>
        <p>Think of it as:</p>
        <CodeBlock language="text" code={`Open Connection
      ↓
Perform Operations
      ↓
Close Cursor
      ↓
Close Connection`} />
      </Section>

      {/* 39 */}
      <Section id="sec-39" number={39} title="Complete SELECT Example Using Sakila">
        <p>This is a good example to demonstrate live in class.</p>
        <CodeBlock language="python" code={`import mysql.connector

conn = mysql.connector.connect(
    host="localhost",
    user="root",
    password="your_password",
    database="sakila"
)

cursor = conn.cursor()

query = """
SELECT customer_id, first_name, last_name
FROM customer
"""

cursor.execute(query)

records = cursor.fetchall()

for row in records:
    print(row)

cursor.close()
conn.close()`} />
        <h3 className="sub-heading">Explain the flow</h3>
        <CodeBlock language="text" code={`1. Import connector
       ↓
2. Connect to MySQL
       ↓
3. Create cursor
       ↓
4. Write SQL query
       ↓
5. Execute query
       ↓
6. Fetch results
       ↓
7. Display results
       ↓
8. Close cursor
       ↓
9. Close connection`} />
      </Section>

      {/* 40 */}
      <Section id="sec-40" number={40} title="Complete CRUD Flow">
        <p>Students should remember the basic pattern:</p>
        <h3 className="sub-heading">CREATE / INSERT</h3>
        <CodeBlock language="python" code={`cursor.execute(query, values)
conn.commit()`} />
        <h3 className="sub-heading">READ / SELECT</h3>
        <CodeBlock language="python" code={`cursor.execute(query)
records = cursor.fetchall()`} />
        <h3 className="sub-heading">UPDATE</h3>
        <CodeBlock language="python" code={`cursor.execute(query, values)
conn.commit()`} />
        <h3 className="sub-heading">DELETE</h3>
        <CodeBlock language="python" code={`cursor.execute(query, values)
conn.commit()`} />
      </Section>

      {/* 41 */}
      <Section id="sec-41" number={41} title="Quick Reference">
        <DataTable
          headers={['Operation', 'Python']}
          rows={[
            ['Import connector', <code key="1">import mysql.connector</code>],
            ['Connect', <code key="2">mysql.connector.connect()</code>],
            ['Create cursor', <code key="3">conn.cursor()</code>],
            ['Execute query', <code key="4">cursor.execute()</code>],
            ['Multiple execution', <code key="5">cursor.executemany()</code>],
            ['Get one row', <code key="6">cursor.fetchone()</code>],
            ['Get all rows', <code key="7">cursor.fetchall()</code>],
            ['Save changes', <code key="8">conn.commit()</code>],
            ['Close cursor', <code key="9">cursor.close()</code>],
            ['Close connection', <code key="10">conn.close()</code>],
          ]}
        />
      </Section>

      {/* 42 */}
      <Section id="sec-42" number={42} title="Simple Mental Model">
        <Callout type="remember">
          <p>Tell students to remember this:</p>
        </Callout>
        <CodeBlock language="text" code={`          PYTHON
             |
             | mysql.connector
             ↓
       CONNECTION
             |
             ↓
          CURSOR
             |
             ↓
        SQL QUERY
             |
             ↓
          MYSQL
             |
             ↓
          RESULT
             |
             ↓
      fetchone/fetchall
             |
             ↓
          PYTHON`} />
        <h3 className="sub-heading">One-line definitions</h3>
        <div className="definition-cards">
          <div className="definition-card">
            <p className="definition-card__term">Connection</p>
            <p className="definition-card__def">Creates communication between Python and MySQL.</p>
          </div>
          <div className="definition-card">
            <p className="definition-card__term">Cursor</p>
            <p className="definition-card__def">Allows Python to execute SQL queries and work with their results.</p>
          </div>
          <div className="definition-card">
            <p className="definition-card__term">Execute</p>
            <p className="definition-card__def">Sends a SQL statement for execution.</p>
          </div>
          <div className="definition-card">
            <p className="definition-card__term">Fetch</p>
            <p className="definition-card__def">Retrieves data returned by a <code>SELECT</code> query.</p>
          </div>
          <div className="definition-card">
            <p className="definition-card__term">Commit</p>
            <p className="definition-card__def">Saves database changes.</p>
          </div>
          <div className="definition-card">
            <p className="definition-card__term">Close</p>
            <p className="definition-card__def">Releases the cursor and database connection.</p>
          </div>
        </div>
      </Section>

      {/* 43 */}
      <Section id="sec-43" number={43} title="Practice Tasks for Students">
        <p>After teaching the examples, you can give them these tasks.</p>
        <h3 className="sub-heading">Using the sakila database:</h3>
        <ol className="lesson-list lesson-list--ordered">
          <li>Display all customers.</li>
          <li>Display only <code>first_name</code> and <code>last_name</code> from the customer table.</li>
          <li>Display customers whose first name is <code>MARY</code>.</li>
          <li>Display all films.</li>
          <li>Display film title and rental rate.</li>
          <li>Display films with a rental rate greater than <code>2</code>.</li>
          <li>Display films ordered by rental rate in descending order.</li>
          <li>Display the first 10 customers.</li>
          <li>Retrieve the customer whose <code>customer_id</code> is <code>10</code>.</li>
          <li>Display films whose rental duration is greater than <code>5</code>.</li>
        </ol>
        <h3 className="sub-heading">CRUD practice using your own student_db:</h3>
        <ol className="lesson-list lesson-list--ordered">
          <li>Create a <code>students</code> table.</li>
          <li>Insert 5 students.</li>
          <li>Display all students.</li>
          <li>Display students from the Python course.</li>
          <li>Update one student's course.</li>
          <li>Update one student's age.</li>
          <li>Delete one student.</li>
          <li>Display the remaining students.</li>
        </ol>
        <Callout type="remember">
          <p>This gives you a complete <strong>Python + MySQL connectivity lesson</strong>, while Sakila provides realistic data for demonstrating <strong>SELECT and data retrieval</strong>.</p>
        </Callout>
      </Section>

      {/* Final Summary */}
      <section className="lesson-summary">
        <h2 className="lesson-summary__title">Lesson Summary</h2>
        <p className="lesson-summary__text">
          In this lesson, you learned how to connect Python to MySQL using <code>mysql-connector-python</code>,
          create databases and tables, insert/update/delete records, retrieve data using <code>fetchone()</code> and
          <code>fetchall()</code>, and work with the Sakila sample database. The key pattern to remember is:
          connect → create cursor → execute query → fetch results → commit changes → close connection.
        </p>
      </section>
    </div>
  );
}
