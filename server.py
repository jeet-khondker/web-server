from http.server import HTTPServer, BaseHTTPRequestHandler

class BPServer(BaseHTTPRequestHandler) : 
    def do_GET(self) : 
        
        # Path : http://localhost:8080/
        if self.path == '/' : 
            self.path = "/index.html"

        # Path : http://localhost:8080/<other-files>
        try : 
            file_to_open = open(self.path[1:]).read() # Read the other-files excluding the front slash
            self.send_response(200) # HTTP 200 OK Response : Successful Response
        
        # Exception Error : If other-files are not found
        except : 
            file_to_open = "Requested File Not Found"
            self.send_response(404) # HTTP 404 Not Found Response : Failure Response

        self.end_headers()

        self.wfile.write(bytes(file_to_open, "utf-8"))

http_daemon = HTTPServer(("localhost", 8080), BPServer)
http_daemon.serve_forever()