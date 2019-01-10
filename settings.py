# this file is excuted from cartoview.app_manager.settings using exec_file
import os, sys
import cartoview_dashboard_2

app_folder = os.path.dirname(cartoview_dashboard_2.__file__)

REACT_APP_DIR = os.path.join(app_folder, 'templates/cartoview_dashboard_2')
STATICFILES_DIRS = [os.path.join(REACT_APP_DIR, 'build', 'static'),]


INSTALLED_APPS = (
    'rest_framework',
    'corsheaders',
)

MIDDLEWARE_CLASSES = (
    'corsheaders.middleware.CorsMiddleware',
)

CORS_ORIGIN_ALLOW_ALL = True
