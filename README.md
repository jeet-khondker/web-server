# BP Web Server
BP Web Server built on top of Python 🐍. 

The following is the workflow of how the BP Web Server interacts with Index HTML FIle and display the data from JSON File.

1. BP Server reads the HTML Index File
2. Fetch JSON Data from `db.json` File
3. Display JSON Data in a tabular format in Index HTML File

## System Architecture

![System Architecture](/assets/system-architecture.png)

## Homepage

![Homepage](/assets/HP.png)

### When you move your mouse over the rows

![Mouse Hover Effect](/assets/mouse-hovered.png)

## Execution Manual

1. Clone the project

```sh
git clone https://github.com/jeet-khondker/web-server.git
```

2. Make sure you have Python 3 Installed and Python `HTTP` Library Package Installed

3. Run the file `server.py` in the terminal

```sh
python3 server.py
```

4. Go to http://localhost:8080/