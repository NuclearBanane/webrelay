
import tornado.ioloop   #Basic imports for the tornado library
import tornado.web      #
from db import *

class BaseHandler(tornado.web.RequestHandler):
    def get_current_user(self):
        return self.get_secure_cookie("user")


class MainHandler(BaseHandler):
    def get(self):
        self.render("assets/frontpage.html")


class GetHandler(BaseHandler):
    def get(self):
        self.write(json)
####
# Tornado uses 'handlers' to take care of requests to certain URLs
# This makes certain API requests from a web page or such an easy to handle
# Unfortunatly it means we need to be very granular with our handlers
####

application = tornado.web.Application(
	[
	(r'/',              MainHandler),
	(r'/get', GetHandler),
	(r'/favicon.ico',   tornado.web.StaticFileHandler, {'path': 'assets/'        }),
	(r'/images/(.*)',   tornado.web.StaticFileHandler, {'path': 'assets/images/' }),
	(r'/fonts/(.*)',    tornado.web.StaticFileHandler, {'path': 'assets/fonts/'  }),	(r'/css/(.*)',      tornado.web.StaticFileHandler, {'path': 'assets/css/'    }),
	(r'/js/(.*)',       tornado.web.StaticFileHandler, {'path': 'assets/js/'     })
	],cookie_secret="__TODO:_GENERATE_YOUR_OWN_RANDOM_VALUE_HERE__")

####
# When you run python backend.py, this runs and starts the tornado listner
####
if __name__ == "__main__":
    application.listen(8888)
    tornado.ioloop.IOLoop.instance().start()
