# this file is excuted from cartoview.app_manager.settings using exec_file
import os, sys
import cartoview_dashboard_2

app_folder = os.path.dirname(cartoview_dashboard_2.__file__)

REACT_APP_DIR = os.path.join(app_folder, 'templates/cartoview_dashboard_2')
print(REACT_APP_DIR)
STATICFILES_DIRS = [os.path.join(REACT_APP_DIR, 'build', 'static'),]
import pprint
pprint.pprint(STATICFILES_DIRS)