# encoding=utf8

# 抓取天猫的评论数据
import urllib3 import *
import os
import sqlite3
import re
import json
from bs4 import BeautifulSoup