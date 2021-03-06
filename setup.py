from distutils.core import setup
from setuptools import find_packages
try:
    import pypandoc
    long_description = pypandoc.convert('README.md', 'rst')
except(IOError, ImportError):
    long_description = open('README.md').read()
setup(
  name = 'cartoview_dashboard_2',
  packages = find_packages(),
  version = '1.5.5',
  description = 'Create awesome dashboards using maps and other charts',
  long_description=long_description,
  author = 'Cartologic',
  author_email = 'info@cartologic.com',
  url = 'https://github.com/cartologic/cartoview_dashboard_2',
  include_package_data=True,
  keywords = ['cartoview', 'gis', 'geonode', "django", "web mapping", "applications", "apps", "dashboard"],
  classifiers = [
    "Development Status :: 3 - Alpha",
    "Framework :: Django :: 1.8",
    "Topic :: Scientific/Engineering :: GIS"
  ],
  license="BSD",
  install_requires= ['cartoview']
)
