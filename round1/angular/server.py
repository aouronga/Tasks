import SimpleHTTPServer
import SocketServer
HOST = "127.0.0.1"
PORT = 8001

Handler = SimpleHTTPServer.SimpleHTTPRequestHandler

httpd = SocketServer.TCPServer((HOST, PORT), Handler)

print "Serving at http://{}:{}".format(HOST,PORT)
httpd.serve_forever()