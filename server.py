from http.server import HTTPServer, BaseHTTPRequestHandler

class BPServer(BaseHTTPRequestHandler) : 
    def do_GET(self) : 
        
        # Path : http://localhost:8080/
        if self.path == '/' : 
            self.path = "/index.html"