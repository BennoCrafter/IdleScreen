import webview

web_link = "index.html"
width, height = 320, 480


# note: 
# our width becomes the height and the height becomes the width, cause of rotating the
webview.create_window(title='GoFlow', url=web_link, width=width, height=height, fullscreen=True)
webview.start()
